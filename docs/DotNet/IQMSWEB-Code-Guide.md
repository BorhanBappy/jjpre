# IQMSWEB Code Guide: C#/.NET from Basics to Advanced

This guide explains the whole IQMSWEB solution, from C# basics up to the advanced runtime details.
Read it top to bottom once. After that, use it as a reference.

Every code sample comes from this repository. Paths are relative to the repository root.

---

## Table of contents

1. [What the system does](#1-what-the-system-does)
2. [C# basics used in this project](#2-c-basics-used-in-this-project)
3. [Solution map: projects and layers](#3-solution-map-projects-and-layers)
4. [Startup: Program.cs, Startup.cs and dependency injection](#4-startup-programcs-startupcs-and-dependency-injection)
5. [Entities and EF Core](#5-entities-and-ef-core)
6. [Repository and Unit of Work](#6-repository-and-unit-of-work)
7. [Services layer](#7-services-layer)
8. [Blazor Server](#8-blazor-server)
9. [Authentication, roles and permissions](#9-authentication-roles-and-permissions)
10. [Machine data: SyncForm, SignalR and DeviceHub](#10-machine-data-syncform-signalr-and-devicehub)
11. [Station mapping](#11-station-mapping)
12. [Walkthrough: the PMD Moisture page, end to end](#12-walkthrough-the-pmd-moisture-page-end-to-end)
13. [Other modules](#13-other-modules)
14. [Advanced topics and pitfalls](#14-advanced-topics-and-pitfalls)
15. [How to add a new feature](#15-how-to-add-a-new-feature)
16. [Glossary](#16-glossary)

---

## 1. What the system does

IQMS (Integrated Quality Management System) is a quality-control web application for a tobacco factory.
The application version is `2.1.11` (`IQMSV2.Web/Program.cs`).

Lab operators record quality measurements per **shift** and **relay** (work team), in these departments:

| Department | Pages (data entry) |
|---|---|
| PMD (Primary Manufacturing) | PMD Moisture, SMD Moisture, Fill Value, PSD-PMD, PSD-SMD |
| SMD (Secondary Manufacturing) | EFO (End Fall Out), Firmness, Pack Seal |
| FMD (Filter Manufacturing) | FMD Data (FRD), Filter Visual Check |

Many values come straight from lab machines: weight balances and dial readers connected by serial (COM) ports.
A small Windows program called **SyncForm** reads the COM ports.
It sends each reading to the web server over **SignalR**.
The web server pushes the reading into the open browser page, into the cell the operator focused.

Main building blocks:

```
 Lab machine ──COM port──► SyncForm (WinForms, on the lab PC)
                               │  SignalR  (/device?station=PC1)
                               ▼
                      IQMSV2.Web (Blazor Server, ASP.NET Core)
                        ├─ DeviceHub (SignalR hub)
                        ├─ Razor pages (UI)  ──► Services ──► Repositories ──► SQL Server
                        └─ Identity / SSO (login, permissions)

 External system ──HTTP + JWT──► IQMSV2.API (reads changed rows for sync)
```

---

## 2. C# basics used in this project

This section explains only the C# features that this code uses. Each one has a real example from the repo.

### 2.1 Namespaces and `using`

A namespace groups types, like a folder. `using` imports a namespace so you can write short names.

```csharp
using IQMSV2.Entities.Core;          // import

namespace IQMSV2.Entities;           // file-scoped namespace (C# 10): applies to the whole file
public class PageStationMapping : AuditableEntity { ... }
```

The older block style `namespace X { ... }` is also used. Both mean the same thing.

In `.razor` files, `@using` does the same job. Shared imports live in `IQMSV2.Web/_Imports.razor`, so every page gets them.

### 2.2 Classes, properties and constructors

```csharp
public class Entity
{
    public Guid Id { get; set; }          // auto-property: get and set
    public bool IsDeleted { get; set; }
    public bool IsActive { get; set; }

    public Entity()                        // constructor: runs on "new Entity()"
    {
        Id = Guid.NewGuid();
        IsDeleted = false;
        IsActive = true;
    }
}
```

Property variations you will see:

| Syntax | Meaning | Example |
|---|---|---|
| `{ get; set; }` | read and write | most entity fields |
| `{ get; private set; }` | only this class can change it | `StationState.Station` |
| `=> expression` | computed, read-only | `public bool HasSelection => !string.IsNullOrWhiteSpace(Station);` |
| `= new();` | default value | `private List<string> _allStations = new();` |

### 2.3 Inheritance

`class B : A` means B inherits every member of A.

```
Entity              (Id, IsDeleted, IsActive)
  └─ AuditableEntity (CreatedBy, Created, LastModifiedBy, LastModified)
        └─ PMDMoistureDataEntry, PageStationMapping, ShiftRelayCalendar, ...
```

So every table row has an `Id` (a `Guid`), soft-delete flags and audit fields.

`base(...)` calls the parent constructor:

```csharp
public PageStationMappingRepository(ApplicationDbContext dbContext) : base(dbContext)
```

`virtual` lets a child class override a method. `override` replaces it.
For example, `Repository<T>.UpdateAsync` is `virtual`, and `StationState`'s parent methods are not.

### 2.4 Interfaces

An interface is a contract: it lists methods and holds no code.
A class that implements it must provide every method.

```csharp
public interface IPageStationMappingService
{
    Task<PageStationMapping?> GetByPageAsync(EmailNotificationPage page);
    ...
}
public class PageStationMappingService : IPageStationMappingService { ... }
```

Pages depend on the interface (`IPageStationMappingService`), not on the class.
The DI container (section 4) chooses the class. This is why every service has an `I...` partner.

By convention, interfaces live in a `Contracts` folder.

### 2.5 Generics

`<T>` is a type parameter. One class then works for many types.

```csharp
public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity
```

- `Repository<Brand>` works with brands, and `Repository<Blend>` works with blends. The code is written once.
- `where TEntity : Entity` is a **constraint**: T must inherit `Entity`. That is why the code can use `x.Id` and `x.IsDeleted`.
- Other generic types used here: `List<T>`, `IList<T>`, `Dictionary<TKey,TValue>`, `Task<T>` and `QueryResult<T>`.

### 2.6 Nullable types

| Type | Can be null? |
|---|---|
| `Guid`, `int`, `decimal`, `DateTime`, `bool` | No (value types) |
| `Guid?`, `decimal?`, `DateTime?` | Yes (`Nullable<T>`) |
| `string` | Yes (reference type) |
| `string?` | Yes, and marks the intent as "nullable" |

Operators you will see often:

```csharp
x.BlendId ?? Guid.Empty            // ??   : use right side if left is null
_hubConnection?.DisposeAsync()     // ?.   : call only if not null, else result is null
queryObj ??= new SearchQuery();    // ??=  : assign if null
x.BlendId.GetValueOrDefault()      // Guid? -> Guid (null becomes Guid.Empty)
item.ExecuationDate ?? x.ExecuationDate   // keep old DB value when new is null
```

### 2.7 Enums

An enum is a set of named integer constants.

```csharp
public enum EnumDeviceType { PMD_Moisture_Balance = 1, SMD_Moisture_Balance = 2, ... }
public enum EmailNotificationPage { PMDMoisture = 1, SMDMoisture = 2, ... SMDEFO = 6, ... FRD = 9 }
```

The database stores the number (`Page int`). The code uses the name.
`Enum.GetValues<EmailNotificationPage>()` lists all values. The Page Station Mapping screen uses it to show one row per page.

### 2.8 `static`

A `static` member belongs to the type, not to an object, and there is only one copy in the whole process.

```csharp
public static class StaticValue
{
    public static List<DeviceConfig> DeviceList = new List<DeviceConfig>();
}
```

`StaticValue.DeviceList` is shared by every user and every request. That is how the hub remembers which devices are connected.
Because of this, it needs care with threads (section 14).

`const` is a compile-time constant, for example `Permissions.PMD.MoisturePMD = "Permissions.1A1"`.

### 2.9 Lambdas and delegates

A lambda is an inline function: `x => x.Id == id`.

- `Func<T, bool>`: takes T and returns bool.
- `Action`: takes nothing and returns nothing (used for events).
- `Expression<Func<T,bool>>`: a lambda kept as a **data tree**, not compiled code. EF Core reads the tree and turns it into SQL. That is why repository filters use `Expression<...>`.

```csharp
Expression<Func<PageStationMapping, bool>> filter = x =>
    !x.IsDeleted &&
    (string.IsNullOrWhiteSpace(queryObj.SearchTerm) || x.Station.Contains(queryObj.SearchTerm));
```

### 2.10 LINQ

LINQ gives you query methods on collections and databases.

| Method | Meaning |
|---|---|
| `Where(x => ...)` | filter |
| `Select(x => new ...)` | transform / project |
| `First / FirstOrDefault` | first item (or null/default) |
| `Any(...)` | does any match? |
| `OrderBy / OrderByDescending` | sort |
| `Skip(n).Take(m)` | paging |
| `ToList()` / `ToListAsync()` | run the query and collect the results |
| `Distinct()`, `SelectMany()`, `Aggregate()` | unique values, flatten, fold |

On a `List<T>`, LINQ runs in memory.
On an `IQueryable<T>` from EF Core, LINQ becomes SQL. It runs only when you call `ToListAsync`, `FirstOrDefaultAsync`, `CountAsync` and similar methods.

Example from `StationHubHelper`, which splits `"PC1; PC2"` into clean names:

```csharp
allowed = (mapping?.Station ?? "")
    .Split(';', StringSplitOptions.RemoveEmptyEntries)
    .Select(s => s.Trim())
    .Where(s => s.Length > 0)
    .ToArray();
```

### 2.11 `async` / `await` and `Task`

Database calls, network calls and JS interop are slow. `async` code waits for them **without blocking a thread**.

```csharp
public async Task<PageStationMapping> GetByPageAsync(EmailNotificationPage page)
{
    return await _dbContext.Set<PageStationMapping>()
        .AsNoTracking().Where(x => x.Page == page)
        .FirstOrDefaultAsync();
}
```

- `Task` is work that finishes later. `Task<T>` finishes later with a result of type T.
- `await` pauses this method until the task completes, then continues. The thread is free in the meantime.
- Naming rule: async methods end in `Async`.
- `Task.WhenAll(a, b, c)` runs several tasks at the same time. `LoadMasterData` uses it to load relays, brands, shifts and blends in parallel.
- `_ = SomeAsync();` is **fire-and-forget**: it starts the task and does not wait. Use it only when the result is not needed (for example `_ = SaveToLocalStorageAsync();`).
- `async void` should only be used for event handlers. Exceptions in it crash or vanish. SyncForm's `ConnectSignalR` is `async void`.

### 2.12 Tuples and deconstruction

A method can return several values without a new class:

```csharp
public static async Task<(string Station, string Message)> ResolveAsync(...)
    => (null, "Station is not set...");

var (station, message) = await StationHubHelper.ResolveAsync(...);   // deconstruct
(StartDate, EndDate) = RelayDateHelper.GetRelayDateRange(relay, pmdSearchDate);
```

### 2.13 Events

An event is a list of callbacks. The owner raises it, and subscribers react.

```csharp
public event Action OnChange;            // declare (StationState)
OnChange?.Invoke();                      // raise

StationState.OnChange += OnStationStateChanged;   // subscribe (page)
StationState.OnChange -= OnStationStateChanged;   // unsubscribe (Dispose)
```

If you forget `-=`, the owner keeps a reference to the dead page. That is a memory leak, and the dead page still runs code.

### 2.14 Extension methods

A `static` method whose first parameter has `this` can be called as if it belonged to that type:

```csharp
public static WeightBaseData ProcessThreeDecimalWeightData(this string rawData) { ... }

var weightData = message.ProcessThreeDecimalWeightData();   // message is a string
```

Other examples: `ApplyOrdering` and `ApplyPaging` on `IQueryable` (`IQMSV2.Repository/Extensions/IQueryableExtensions.cs`), and `identity.HasRole(...)` and `identity.FullName()` (`IQMSV2.Web/Models/IdentityModels/IdentityExtensions.cs`).

### 2.15 Attributes

Attributes are metadata in `[...]`. Frameworks read them.

```csharp
[Table("IQMS_PMD_MOISTURE_DATA_ENTRY")]          // EF Core: table name
[Column(TypeName = "decimal(18,3)")]             // EF Core: SQL type
[ForeignKey("BranchId")]                         // EF Core: relation
[Route("auth")] [HttpGet("switch-branch/{branchId}")]   // ASP.NET routing
[Authorize]                                      // require login
@attribute [Authorize(Roles = Permissions.SuperAdmin + "," + Permissions.PMD.MoisturePMD)]  // Razor
```

### 2.16 Exceptions

```csharp
try   { ... }
catch (TaskCanceledException) { return; }   // a specific error
catch (Exception ex) { _toastService.ShowError(ex.Message); }
finally { _isSaving = false; }               // always runs
```

The code often uses `catch { }`, which hides errors silently. That is acceptable only for "best effort" work such as browser storage.

### 2.17 Pattern matching, `switch` expressions and index-from-end

```csharp
cellValue is Guid g && g == Guid.Empty       // type test + variable
bool isLocked = column switch { "EmptyPanWeight" => ..., _ => false };
string valuePart = parts[^1];                // last element
```

---

## 3. Solution map: projects and layers

`IQMSV2.sln` contains six projects. They target .NET 10 (`net10.0`).

| Project | Type | Role |
|---|---|---|
| `IQMSV2.Common` | class library | enums, constants, permissions, parsing helpers, `StaticValue`, `DeviceConfig` |
| `IQMSV2.Entities` | class library | entity classes (tables), DTOs, query objects |
| `IQMSV2.Repository` | class library | `ApplicationDbContext`, migrations, repositories, units of work |
| `IQMSV2.Services` | class library | business logic services |
| `IQMSV2.Web` | ASP.NET Core / Blazor Server | UI, SignalR hub, login, startup |
| `IQMSV2.API` | ASP.NET Core Web API | JWT-protected read API for external sync |

Outside the solution:

| Folder | Role |
|---|---|
| `MiddleWireModified/IQMSWinService/IQMSWinForm` | **SyncForm**: the WinForms app on each lab PC. Reads COM ports and sends data to `DeviceHub`. |
| `MiddleWireModified/IQMSWinService/IQMSServiceAutoRunner` | Windows Service that keeps SyncForm running (restarts it if it exits). |
| `MiddleWire` | older version of the middleware |
| `IQMSV2.Site` | an old separate site (`ChemicalLab.Web`) and not part of this solution |
| `docs/` | documentation |

### 3.1 Layered architecture

```
┌────────────────────────────────────────────────────────────┐
│ IQMSV2.Web  (Razor pages, Hub, Startup)                    │  presentation
│   injects I...Service                                      │
├────────────────────────────────────────────────────────────┤
│ IQMSV2.Services   (XxxService : IXxxService)               │  business logic
│   uses I...UnitOfWork                                      │
├────────────────────────────────────────────────────────────┤
│ IQMSV2.Repository (XxxRepository, XxxUnitOfWork, DbContext)│  data access
│   uses EF Core                                             │
├────────────────────────────────────────────────────────────┤
│ SQL Server                                                 │  storage
└────────────────────────────────────────────────────────────┘
  IQMSV2.Entities and IQMSV2.Common are used by every layer.
```

Rule: a layer calls only the layer below it.
A page should not use `ApplicationDbContext` directly. It calls a service, the service calls a unit of work, and the unit of work hands out repositories.

**Exception:** `DeviceHub` takes `ApplicationDbContext` in its constructor (a legacy pattern).

### 3.2 Folder conventions

| Where | What |
|---|---|
| `IQMSV2.Entities/*.cs` | one class per table |
| `IQMSV2.Entities/DTO` | Data Transfer Objects (shapes for API and reports) |
| `IQMSV2.Entities/NotMapped` | query objects (`SearchQuery`, `QueryResult<T>`), not tables |
| `IQMSV2.Repository/Contracts` | `IXxxRepository`, `IXxxUnitOfWork` |
| `IQMSV2.Repository/Core` | generic `Repository<T>` and `UnitOfWork` |
| `IQMSV2.Repository/Migrations` | EF Core migrations (database schema history) |
| `IQMSV2.Services/Contracts` | `IXxxService` |
| `IQMSV2.Web/Pages/<Module>` | Razor pages per module |
| `IQMSV2.Web/Shared` | layout, navbar, footer, pagination, date picker |
| `IQMSV2.Web/Core` | web helpers: email, file storage, `StationState`, `StationHubHelper` |
| `IQMSV2.Web/Models` | web-only models: DTOs for grids (`PmdDataDto`), helpers (`RelayDateHelper`, `ReadOnlyCellHelper`), identity |
| `IQMSV2.Web/Hubs` | `DeviceHub` |
| `IQMSV2.Web/wwwroot` | CSS, JS (`swalHelper.js`, `fastEntryTable.js`, `clock.js`, `dowloadexcell.js`), images |

---

## 4. Startup: Program.cs, Startup.cs and dependency injection

### 4.1 Program.cs: the entry point

`IQMSV2.Web/Program.cs`:

1. `Main` configures **Serilog**. It logs only Error and Fatal to `logs/critical-<date>.txt`, keeps files for 30 days, and limits each file to 10 MB.
2. It builds the host with `Host.CreateDefaultBuilder(args)`. That step reads `appsettings.json`, environment variables and command-line arguments.
3. `webBuilder.UseStartup<Startup>()` tells ASP.NET to use the `Startup` class.
4. `.Build().Run()` starts the web server (Kestrel or IIS), and `Run` blocks until shutdown.
5. `AppVersion()` returns `"2.1.11"`. Pages append it to CSS URLs (`?v=2.1.11`) so browsers reload the files after a deployment.

### 4.2 Startup.ConfigureServices: registering services

Dependency Injection (DI) means a class does not create its own dependencies. It asks for them in its constructor (or with `@inject` in Razor), and the **DI container** creates them.

```csharp
services.AddTransient<IPageStationMappingService, PageStationMappingService>();
```

This says: "when someone asks for `IPageStationMappingService`, create a `PageStationMappingService`".

The container builds the whole chain by itself:

```
Page @inject IPageStationMappingService
  → PageStationMappingService(IPageStationMappingUnitOfWork)
      → PageStationMappingUnitOfWork(ApplicationDbContext)
          → ApplicationDbContext(DbContextOptions)   (connection string from appsettings)
```

**Lifetimes** decide how long an object lives:

| Lifetime | One instance per… | Used here for |
|---|---|---|
| `Transient` | every request for it (new each time) | almost all repositories, UoWs, services, and `ApplicationDbContext` |
| `Scoped` | per scope. In Blazor Server, one scope = one **circuit** (one browser tab) | `StationState`, `ICurrentUserService`, `AuthenticationStateProvider`, dashboard, shift calendar, `IEmailHelper` |
| `Singleton` | the whole app | `PermissionPolicyProvider`, memory cache |

**Why `ApplicationDbContext` is Transient:** `DbContext` is not thread-safe.
In Blazor Server a circuit lives for a long time, and several async calls can overlap.
A transient context gives each service its own context, which avoids "a second operation was started on this context" errors.

`StationState` must be **Scoped**. The navbar and the page in the same tab must share one object. Different tabs and PCs must not share it.

Other registrations:

| Call | Purpose |
|---|---|
| `services.Configure<AppSettings>(Configuration.GetSection("AppSettings"))` | binds JSON settings to a class. Read it with `IOptions<AppSettings>`. |
| `AddServerSideBlazor(options => …)` | Blazor Server. Keeps disconnected circuits for 24 h, JS interop timeout 5 min. |
| `AddBlazoredToast`, `AddBlazoredModal`, `AddMudServices` | UI libraries: toasts, modals, MudBlazor components |
| `AddDbContext<ApplicationDbContext>(… UseSqlServer(LabConnString) …)` | EF Core with SQL Server |
| `AddIdentityCore` / `AddDefaultIdentity` | ASP.NET Identity (users, roles). Which one depends on SSO. |
| `AddAuthentication(...)` | cookie + OpenID Connect (SSO) **or** Identity cookie + JWT (section 9) |
| `AddSignalR(…)` | client timeout 5 min, keep-alive 15 s, max message 10 MB |
| `AddMemoryCache()` | used by `DashboardService` (60 s cache) |
| `AddControllers()` | for `AuthController` (branch switch endpoint) |

### 4.3 Startup.Configure: the request pipeline

Middleware runs **in order** for every HTTP request:

```
UseResponseCompression → (DeveloperExceptionPage | ExceptionHandler + HSTS)
→ UseHttpsRedirection → UseStaticFiles → UseRouting
→ UseAuthentication → UseAuthorization → UseEndpoints
```

Endpoints:

| Endpoint | What |
|---|---|
| `MapControllers()` | API controllers in the Web project (`/auth/switch-branch/{id}`) |
| `MapBlazorHub()` | the Blazor Server SignalR connection (`/_blazor`) |
| `MapFallbackToPage("/_Host")` | every other URL loads `Pages/_Host.cshtml`, which starts the Blazor app |
| `MapHub<DeviceHub>("/device")` | the machine-data hub |

Order matters. Authentication must come before authorization, and both must come before the endpoints.

### 4.4 appsettings.json

| Section | Used for |
|---|---|
| `ConnectionStrings:LabConnString` | SQL Server connection |
| `AppSettings` | `TokenSecretKey` (JWT), `SubDomain`, mail switch and similar |
| `SSOSettings` | `Enable`, Azure AD `Authority`, `ClientId`, `ClientSecret`, `CallbackPath` |
| `SMTP` | email server (`EmailHelper`) |

> **Security warning:** `appsettings.json` currently holds the `sa` database password and the SSO `ClientSecret` in git. Move them to user-secrets (development) or environment variables (production), and rotate the exposed values.

---

## 5. Entities and EF Core

### 5.1 What EF Core is

Entity Framework Core is an **ORM** (Object-Relational Mapper). You work with C# objects, and EF Core writes the SQL.

| C# | Database |
|---|---|
| class (`PMDMoistureDataEntry`) | table (`IQMS_PMD_MOISTURE_DATA_ENTRY`) |
| property | column |
| object | row |
| `DbSet<T>` | the table you query |
| navigation property (`Blend Blend`) | foreign-key relation (JOIN) |

### 5.2 Base classes

`IQMSV2.Entities/Core/Entity.cs` and `AuditableEntity.cs`:

| Field | Meaning |
|---|---|
| `Id` (`Guid`) | primary key, created in the constructor (`Guid.NewGuid()`) |
| `IsDeleted` | **soft delete**: rows are flagged, not removed |
| `IsActive` | active/inactive switch |
| `CreatedBy`, `Created` | who and when created (`Created = DateTime.Now` in the constructor) |
| `LastModifiedBy`, `LastModified` | who and when last changed |

Soft delete means queries must filter `!x.IsDeleted`. The generic repository does this for you in `GetAllAsync`. **`GetByIdAsync` does not filter it.**

### 5.3 A typical entity

`IQMSV2.Entities/PMDMoistureDataEntry.cs`:

```csharp
[Table("IQMS_PMD_MOISTURE_DATA_ENTRY")]
public class PMDMoistureDataEntry : AuditableEntity
{
    public Guid? ShiftId { get; set; }          // foreign key (nullable)
    public Guid? RelayId { get; set; }
    public Guid? BlendId { get; set; }
    ...
    [Column(TypeName = "decimal(18,3)")]
    public decimal? EmptyPanWt { get; set; }    // 3 decimals, matches the balance
    ...
    public Guid BranchId { get; set; }          // every data row belongs to a branch

    [ForeignKey("BlendId")]
    public Blend Blend { get; set; }            // navigation property
}
```

The data-entry entities all follow this shape:
master-data foreign keys (Shift, Relay, Blend, SamplingPoint, Parameter, Department), measured values, execution time, remarks, `BranchId`, and the audit fields.

### 5.4 Identity entities

- `ApplicationUser : IdentityUser<Guid>` adds `FullName`, `IsActive`, `LastLogIn`, `UserRoles`, `UserBranchs`, and inactivation history fields.
- `ApplicationRole : IdentityRole<Guid>`.
- `ApplicationUserRole` is the join table between users and roles.

### 5.5 ApplicationDbContext

`IQMSV2.Repository/ApplicationDbContext.cs` extends `IdentityDbContext<ApplicationUser, ApplicationRole, Guid, …>`. That gives it the Identity tables (`AspNetUsers`, `AspNetRoles`, `AspNetRoleClaims`, …).

It declares one `DbSet<T>` per table, for example:

```csharp
public DbSet<PMDMoistureDataEntry> PMDMoistureDataEntries { get; set; }
public DbSet<PageStationMapping> PageStationMappings { get; set; }
```

`OnModelCreating` configures the user–role many-to-many relation with a composite key `{ UserId, RoleId }`.

### 5.6 Migrations

A migration is C# code that changes the database schema. Each one has:

- `Up()`: apply the change (for example `CreateTable("PageStationMappings")`).
- `Down()`: undo it.
- A `.Designer.cs` file and an updated `ApplicationDbContextModelSnapshot.cs`, which record the full model at that point.

Commands (run from the solution folder):

```bash
dotnet ef migrations add <Name> --project IQMSV2.Repository --startup-project IQMSV2.Web
dotnet ef database update      --project IQMSV2.Repository --startup-project IQMSV2.Web
```

### 5.7 Tracking vs no-tracking

- EF Core **tracks** entities it loads: it remembers the original values, and `SaveChangesAsync` writes only what changed.
- `AsNoTracking()` skips this. It is faster for read-only data. The repository uses it for all reads.
- Do not track the same `Id` twice in one context. You get "another instance with the same key is already being tracked". `Repository.UpdateAsync` avoids this: it loads the tracked copy with `FindAsync`, then copies the values onto it with `SetValues`.

### 5.8 Bulk update with ExecuteUpdateAsync

`PMDMoistureDataEntryRepository.UpdatePMDMoistureDataAsync` updates rows **directly in SQL**, without loading them:

```csharp
await _dbContext.PMDMoistureDataEntries
    .Where(x => x.Id == item.Id)
    .ExecuteUpdateAsync(s => s
        .SetProperty(x => x.PanNo, x => item.PanNo ?? x.PanNo)   // keep the DB value if the new one is null
        ...);
```

`ExecuteUpdateAsync` does **not** need `SaveChangesAsync`. It runs immediately and returns the number of affected rows.

---

## 6. Repository and Unit of Work

### 6.1 Why these patterns

- **Repository**: one class hides how one entity is stored. Callers never write EF queries.
- **Unit of Work (UoW)**: groups repositories that share **one** `DbContext`, plus one `CompleteAsync()` that saves everything in one transaction.

### 6.2 Generic Repository\<T>

`IQMSV2.Repository/Core/Repository.cs` provides CRUD for any entity:

| Method | What it does |
|---|---|
| `GetAllAsync(predicate?, queryObj?, columnsMap?, includes…)` | filter `!IsDeleted`, apply your `predicate`, count, sort, page, `Include` relations, `AsNoTracking`. Returns `QueryResult<T>` (`TotalItems`, `Items`). |
| `GetByIdAsync(id, includeRelated)` | one row. `includeRelated = true` includes **all** navigations. |
| `AddAsync`, `AddRangeAsync` | mark rows as new (saved on `CompleteAsync`) |
| `UpdateAsync` | find the tracked copy, copy values, mark it Modified |
| `DeleteAsync` | **soft delete**: sets `IsDeleted = true`, then `UpdateAsync` |
| `DeleteFromDBAsync`, `DeleteRangeFromDBAsync` | hard delete |
| `ActiveInactiveAsync` | flip `IsActive` |
| `IsExistsAsync`, `GetSingleItemAsync`, `GetCountAsync` | helpers |
| `ExcuteProcedure`, `GetFromFunction` | raw SQL or stored procedures |

**Note:** `AddAsync`, `UpdateAsync` and `DeleteAsync` do not write to the database by themselves. The write happens on `UnitOfWork.CompleteAsync()` (`SaveChangesAsync`).

### 6.3 Paging and sorting

`IQueryObject` (abstract) carries `SortBy`, `IsSortAscending`, `Page` and `PageSize` (default 50, type `byte`).
`SearchQuery : IQueryObject` adds `SearchTerm`, `IsActive` and `BranchId`.

`IQueryableExtensions`:

```csharp
query.ApplyOrdering(queryObj, columnsMap);   // sorts by columnsMap[queryObj.SortBy]
query.ApplyPaging(queryObj);                 // Skip((Page-1)*PageSize).Take(PageSize)
```

`columnsMap` maps a column name (a string from the UI) to a lambda:

```csharp
var columnsMap = new Dictionary<string, Expression<Func<PageStationMapping, object>>>
{
    ["Created"] = x => x.Created,
    ["Page"]    = x => x.Page,
};
```

This means the UI cannot sort by an arbitrary string. Only mapped columns sort, which is safe.

### 6.4 A specific repository

When the generic methods are not enough, a specific repository inherits the generic one and adds queries:

```csharp
public class PMDMoistureDataEntryRepository
    : Repository<PMDMoistureDataEntry>, IPMDMoistureDataEntryRepository
{
    public async Task<IList<PMDMoistureDataEntry>> GetPMDDataByRelayShiftExeDateAsync(
        Guid relayId, Guid shiftid, DateTime start, DateTime end)
    {
        return await _dbContext.PMDMoistureDataEntries
            .Where(x => !x.IsDeleted && x.RelayId == relayId && x.ShiftId == shiftid
                        && x.Created >= start && x.Created < end)
            .OrderBy(x => x.Created).AsNoTracking().ToListAsync();
    }
}
```

### 6.5 Unit of Work

```csharp
public class UnitOfWork : IUnitOfWork
{
    protected readonly ApplicationDbContext _dbContext;
    public async Task<bool> CompleteAsync() => await _dbContext.SaveChangesAsync() > 0;
    public virtual async Task<IDbContextTransaction> BeginTransaction()
        => await _dbContext.Database.BeginTransactionAsync();
}

public class PMDMechineDataUnitOfWork : UnitOfWork, IPMDMechineDataUnitOfWork
{
    public IPMDMoistureDataEntryRepository PMDMoistureDataEntryRepository
        => new PMDMoistureDataEntryRepository(_context);     // same context
    public ISMDMoistureDataEntryRepository SMDMoistureDataEntryRepository
        => new SMDMoistureDataEntryRepository(_context);
    ...
}
```

Every repository from one UoW shares **one** `DbContext`, so `CompleteAsync()` saves all their changes together.

`CompleteAsync()` returns `true` only if at least one row changed. Watch for this: saving an unchanged entity returns `false`.

---

## 7. Services layer

A service holds the business logic. It receives a UoW in its constructor (DI) and exposes methods that pages call.

Typical shape (`IQMSV2.Services/PMDMoistureDataEntryService.cs`):

```csharp
public class PMDMoistureDataEntryService : IPMDMoistureDataEntryService
{
    private readonly IPMDMechineDataUnitOfWork _unitOfWork;
    public PMDMoistureDataEntryService(IPMDMechineDataUnitOfWork unitOfWork) => _unitOfWork = unitOfWork;

    public async Task<bool> AddRangeAsync(IList<PMDMoistureDataEntry> entries)
    {
        await _unitOfWork.PMDMoistureDataEntryRepository.AddRangeAsync(entries);
        return await _unitOfWork.CompleteAsync();            // write to DB
    }

    public async Task<bool> UpdatePMDMoistureDataAsync(IList<PMDMoistureDataEntry> entries)
        => await _unitOfWork.PMDMoistureDataEntryRepository.UpdatePMDMoistureDataAsync(entries) > 0;
}
```

Many services are thin pass-throughs. Real logic lives in a few places:

| Service | Notable logic |
|---|---|
| `ApplicationRoleService` | stores a role's permissions as **role claims** (`AddClaimAsync(role, new Claim("Permission", "Permissions.1A1"))`) |
| `ApplicationUserService` | users, last login, branches |
| `UserActivationHistService` | auto-inactivates users idle for 60 days (called at SSO login) |
| `ShiftRelayCalendarService` | which shift a relay works on a date |
| `DashboardService` | today's counts per module, cached 60 s with `IMemoryCache` |
| `PageStationMappingService` | CRUD + `GetByPageAsync` |
| `ChangeTrackerService` | records "table X changed" so the external sync knows what to fetch |

Support types:

- `Services/Result/Result.cs`: `Result.Success()` and `Result.Failure(errors)`. `IdentityResult.ToApplicationResult()` converts Identity results.
- `Services/Exceptions`: `NotFoundException`, `ValidationException`, `IdentityValidationException`.

---

## 8. Blazor Server

### 8.1 How Blazor Server works

```
Browser                                   Server
───────                                   ──────
GET /pmd/pmdMoisture  ───────────────►   _Host.cshtml renders <App> (prerender, HTML)
load blazor.server.js
open WebSocket /_blazor ◄────────────►   "circuit": C# component objects live HERE
click / type  ──── event over socket ─►  run C# handler, re-render
             ◄──── DOM diff ──────────   send only the changed HTML
```

Key facts:

- Your C# page code runs **on the server**, not in the browser.
- One browser tab = one **circuit** = one DI scope. Scoped services live as long as the tab.
- The page object stays in server memory while the tab is open, so fields (for example `Rows`) keep their values.
- `_Host.cshtml` uses `render-mode="ServerPrerendered"`. The page is first rendered once as static HTML **without a live connection**, then again in the interactive circuit. During prerender there is **no JavaScript**, so JS interop and browser storage fail. That is why storage-dependent work goes in `OnAfterRenderAsync`.

### 8.2 Routing and the app shell

- `App.razor`: `<CascadingAuthenticationState>` → `<Router>` → `<AuthorizeRouteView DefaultLayout="MainLayout">`. Unauthorized users see `<NotAuthPage>`, and unknown URLs show `<_404Error>`.
- `@page "/pmd/pmdMoisture"` registers a page's URL.
- `Shared/MainLayout.razor` renders `<TopMenuBar>`, then `@Body` (the page), then `<Footer>`. It also redirects to login when not authenticated.

### 8.3 Razor syntax cheat sheet

| Syntax | Meaning |
|---|---|
| `@page "/x"` | route |
| `@inject IFoo Foo` | DI into a property |
| `@using X` | import |
| `@implements IDisposable` | the component implements an interface |
| `@attribute [Authorize(...)]` | apply an attribute to the component |
| `@code { ... }` | C# members of the component |
| `@expr` / `@(expr)` | output a value |
| `@if`, `@foreach`, `@switch` | control flow in markup |
| `@onclick="Handler"` | event → C# method |
| `@onclick="() => Delete(row)"` | lambda with an argument |
| `@bind="field"` | two-way binding (default event `onchange`) |
| `@bind:event="oninput"` | update on each keystroke |
| `@bind:after="Method"` | run Method after the bound value is set (.NET 7+) |
| `@bind-Value="x"` | bind to a component parameter named `Value` |
| `@* comment *@` | Razor comment |

Example from the grid:

```razor
<input class="form-control form-control-sm @(ActiveRow == row && ActiveColumn == "EmptyPanWeight" ? "active-listening" : "")"
       @bind="row.EmptyPanWeight" readonly
       @onfocus="@(() => StartListening(row, "EmptyPanWeight"))"
       @onblur="() => ClearActiveColumn()" />
```

The cell is read-only (machine-only). Focusing it marks it as the target for the next machine reading.

### 8.4 Component lifecycle

```
constructor
 → SetParametersAsync
 → OnInitialized / OnInitializedAsync      (once; prerender AND interactive)
 → OnParametersSet / OnParametersSetAsync
 → render
 → OnAfterRender / OnAfterRenderAsync(firstRender)   (interactive only; JS is available)
 … events → re-render → OnAfterRenderAsync(false) …
 → Dispose                                  (only if @implements IDisposable)
```

What this project does in each step:

| Hook | Typical work |
|---|---|
| `OnInitializedAsync` | permissions check, `LoadMasterData()` (DB), add a first empty row |
| `OnAfterRenderAsync(firstRender: true)` | JS init (`initLiveClock`, `fastEntryTableInit`), load the draft from session storage, **station + SignalR connect** |
| `Dispose` | cancel timers and debounce tokens, dispose the hub connection, unsubscribe events |

`TaskCompletionSource _masterDataLoaded` makes `OnAfterRenderAsync` wait until `OnInitializedAsync` has finished loading master data:

```csharp
await _masterDataLoaded.Task;      // in OnAfterRenderAsync
_masterDataLoaded.TrySetResult();  // at the end of OnInitializedAsync
```

### 8.5 Re-rendering: StateHasChanged and InvokeAsync

- After a UI event handler, Blazor re-renders automatically.
- When data changes from **outside** a UI event, call `StateHasChanged()` yourself. Examples: a SignalR message, a timer, or another component's event.
- Those outside callbacks run on a **different thread**. A component must only be touched on its own dispatcher, so wrap the call:

```csharp
await InvokeAsync(StateHasChanged);
_ = InvokeAsync(async () => { await ConnectToStationAsync(); StateHasChanged(); });
```

### 8.6 Cascading parameters

`[CascadingParameter] Task<AuthenticationState> AuthStat` receives the login state from `<CascadingAuthenticationState>` in `App.razor`:

```csharp
var user = (await AuthStat).User;
isUserHasEditPermission = ((ClaimsIdentity)user.Identity).HasRole(Permissions.Configuration.EditPermission);
```

### 8.7 JS interop

C# calls JavaScript functions on `window`:

```csharp
bool ok = await JS.InvokeAsync<bool>("showConfirmAlert", "Do you want to ...?");   // returns a value
await JS.InvokeVoidAsync("downloadFile", fileName, base64);                       // no return
await JS.InvokeVoidAsync("location.reload");
```

| JS file (`wwwroot/js`) | Functions |
|---|---|
| `swalHelper.js` | `showConfirmAlert` (SweetAlert2 confirm dialog) and other alerts |
| `fastEntryTable.js` | `fastEntryTableInit` (keyboard navigation in grids) |
| `clock.js` | `initLiveClock` |
| `dowloadexcell.js` | `downloadFile` |

### 8.8 Browser storage

| Class | Lives in | Survives | Used for |
|---|---|---|---|
| `ProtectedSessionStorage` | browser `sessionStorage`, encrypted | reload, **not** tab close | unsaved grid drafts (`PmdMoistureDraft`) |
| `ProtectedLocalStorage` | browser `localStorage`, encrypted | reload, browser restart | this PC's station (`IQMS_StationId`) |

Both need JS, so call them only after the first render.

### 8.9 Shared components and libraries

- `Shared/Pagination.razor` is a paging control for list pages. `CustomDatePicker.razor` is a date input.
- **Blazored.Toast**: `_toastService.ShowSuccess / ShowWarning / ShowError`.
- **Blazored.Modal**: modals.
- **MudBlazor**: rich components (autocomplete, dialogs).
- **ClosedXML**: builds Excel files for export.
- **AdminLTE + Bootstrap + jQuery**: styling and layout (`_Host.cshtml`).

### 8.10 CRUD page patterns

Master-data modules (Brand, Blend, Shift, Relay, …) use one of two shapes:

1. **Separate pages**: `List.razor` (`/Listbrands`), `Add.razor` (`/Brand/add`), `Edit.razor` (`/brand/edit/{id}`).
2. **Single page with a modal**: `AddViewEdit.razor` (`/brands`). It shows a list, a search box and `<Pagination>`, and adds or edits in a popup.

The flow is the same in both: build a `SearchQuery` → `service.GetAllAsync(query)` → show `result.Items` → `<Pagination>` changes `query.Page` → reload.
On save: validate → `AddAsync` / `UpdateAsync` → write a user log (`IUserLogService`) → record a change (`IChangeTrackerService`) → toast.

---

## 9. Authentication, roles and permissions

### 9.1 Two login modes

`SSOSettings:Enable` in `appsettings.json` switches the mode **at startup**:

| | SSO disabled | SSO enabled |
|---|---|---|
| Identity | `AddDefaultIdentity` (login UI pages) | `AddIdentityCore` + `SignInManager` |
| Login | `/Identity/Account/Login` (username/password) | Microsoft Entra ID (Azure AD) via OpenID Connect |
| Cookie | Identity application cookie | cookie + OIDC |
| Extra | JWT bearer (`TokenSecretKey`) | token acquisition, in-memory token cache |

SSO login flow (`OnTokenValidated` in `Startup.cs`):

1. Read the user name from the token (`preferred_username`).
2. Find the user in `AspNetUsers`. If the user is not found, redirect to `/UserNotFound`.
3. If the user is inactive, redirect to `/LoginError`.
4. If the last login was more than 60 days ago, auto-inactivate the user, then redirect to `/LoginError`.
5. Replace the claims with the app's own claims: name, `FullName`, `UserId`, branch, and one `Permission` claim per permission of the user's role.
6. Update the last-login time and write a user log.

Without SSO, `ApplicationClaimsPrincipalFactory.CreateAsync` adds the same custom claims when the Identity cookie is created.

### 9.2 Claims

A claim is a key/value fact about the logged-in user. Custom claim types (`CustomClaimType`):

| Claim | Value |
|---|---|
| `UserId` | user `Guid` |
| `UserName`, `FullName`, `ImageUrl` | display |
| `UserBranchId`, `UserBranchName` | current branch. If the user has exactly one branch it is that one, otherwise the default branch. |
| `Permission` | one claim per permission string |

`ICurrentUserService` (`IQMSV2.Web/Services/CurrentUserService.cs`, Scoped) reads these claims into the `UserId`, `Name` and `BranchId` properties.
It also listens to `AuthenticationStateChanged`.

Pages wait until `BranchId` is set:

```csharp
while (_CurrentUser.BranchId == Guid.Empty) await Task.Delay(50);
```

### 9.3 Permissions

`IQMSV2.Common/Values/Permissions.cs` defines constant strings:

```csharp
public const string SuperAdmin = "Permissions.SuperAdmin";
public static class PMD { public const string MoisturePMD = "Permissions.1A1"; ... }
public static class UserManagement { ... public const string StationMapping = "Permissions.5A6"; }
```

Code prefixes: `0A*` Configuration, `1A*` PMD, `2A*` SMD, `3A*` FMD, `4A*` Targets, `5A*` User Management.
`Configuration.EditPermission` (`Permissions.0A22`) is a special "privileged editor" permission.

**Storage:** a role's permissions are rows in `AspNetRoleClaims` (type `Permission`), managed by `ApplicationRoleService`.
A user has one role (the first in `UserRoles` is used).

### 9.4 How `[Authorize(Roles = ...)]` uses permissions

`IQMSV2AuthStateProvider` (in `Models/IdentityModels/ChemicalLabAuthStateProvider.cs`) is the Blazor `AuthenticationStateProvider`.
In `GetAuthenticationStateAsync` it loads the user's role permissions and adds each one as a **`ClaimTypes.Role`** claim.
Permissions therefore act as roles, and both of these work:

```razor
@attribute [Authorize(Roles = Permissions.SuperAdmin + "," + Permissions.PMD.MoisturePMD)]   @* page level: any one of the listed *@

<AuthorizeView Roles="@Helper.JoinRoles(Permissions.SuperAdmin, Permissions.UserManagement.StationMapping)">
    <Authorized> ...menu item... </Authorized>
</AuthorizeView>
```

`Helper.JoinRoles` joins the strings with commas. In code, use `identity.HasRole(...)`.

There is also a `PermissionPolicyProvider` that builds policies named `Permissions.*` with a `PermissionRequirement`.
No `AuthorizationHandler` for that requirement exists in the Web project, so the pages rely on **roles**, not policies.

### 9.5 Branches

- Each data row stores `BranchId`, and master data is loaded per branch (`GetShiftsByBranch(_CurrentUser.BranchId)`).
- A user with several branches sees a branch switch in the footer.
- `IQMSV2.Web/AuthController.cs` → `GET /auth/switch-branch/{branchId}` rewrites the branch claims and signs the user in again.

### 9.6 Row-level edit rules

`Models/ReadOnlyCellHelper.GetBgColor(...)` decides whether a loaded cell is locked:

1. Empty cell → editable.
2. The user has `EditPermission` → editable.
3. The user created the row **and** the relay window is current → editable.
4. Otherwise → locked (yellow background, `readonly`).

When a privileged user changes machine data on someone else's row, `Remarks` is mandatory.
When they change a key field, the page asks for confirmation and sends an email (section 12).

---

## 10. Machine data: SyncForm, SignalR and DeviceHub

### 10.1 SignalR in one paragraph

SignalR keeps a **persistent two-way connection** (WebSocket, with long polling as a fallback).
Clients call **hub methods** on the server (`connection.SendAsync("Data", ...)`).
The server calls **client methods** (`Clients.Group(x).SendAsync("Data", ...)`), and clients handle them with `connection.On<...>("Data", handler)`.

The **hub** is the server class. A new hub object is created for **every call**, so a hub cannot keep state in instance fields. Anything shared must be `static`.

### 10.2 SyncForm (on each lab PC)

`MiddleWireModified/IQMSWinService/IQMSWinForm/SyncForm.cs`. Configuration is in `App.config`:

```xml
<add key="ServiceType" value="Port" />
<add key="PMD_Moisture_Balance" value="COM2" />      <!-- device type -> COM port -->
<add key="PMD_FillValue_DialReader" value="COM1" />
...
<add key="AnalyticalBalanceBaudRate" value="9600" />
<add key="DialReaderBaudRate" value="2400" />
<add key="WssServer" value="https://localhost:44316/device?station=PC1" />
```

What it does:

1. **Builds `ServiceVm.DeviceList`** from the device keys. Each key becomes a `DeviceConfig` (`DeviceType`, `ConnectionPoint` = COM port).
2. **Opens the serial ports.** Balances use the balance baud rate and data bits, and dial readers use theirs. Each device gets `Status = Open` or `Close`.
3. **Connects to the hub** at `WssServer`. Automatic reconnect uses back-off delays (0 s, 2 s, 5 s … 1 h). A custom `Closed` loop also resends `SetupModule` for every device after a reconnect.
4. **Handles `DeviceSetup("Start")`** from the hub by sending `SetupModule(device)` for each device. This registers its devices on the server.
5. **On serial data** (`_serialPort_DataReceived`): wait 1 s so the full message arrives, `ReadExisting()`, remove `\0`, then for each device on that port call `connection.SendAsync("Data", device, data)`.

`IQMSServiceAutoRunner` is a Windows Service (`ProcessMonitorService : BackgroundService`). It starts SyncForm and restarts it when it exits.

### 10.3 DeviceHub (on the server)

`IQMSV2.Web/Hubs/DeviceHub.cs`, mapped at `/device`:

| Member | Role |
|---|---|
| `static ConcurrentDictionary<string,string> ConnectionStations` | connectionId → station (from `?station=`) |
| `OnConnectedAsync` | read `?station=`, store it, `Groups.AddToGroupAsync(connId, station)`, send `DeviceSetup("Start")` to the caller |
| `SetupModule(DeviceConfig)` | replace the device with the same type **and same station** in `StaticValue.DeviceList`, then broadcast `DeviceSetup("Successful")` |
| `Data(DeviceConfig, string)` | send `"Data"` **only to the sender's station group**. Dropped if there is no station. |
| `IsDeviceOpen(station, type)` | static: is a device of this type open for this station? Pages use it for the "connected at COM…" status line. |
| `FileData`, `FileDataGC`, `FileDataBlend` | older file-based instruments. These still use `Clients.All`. |
| `OnDisconnectedAsync` | remove the connection's devices and its station entry, then broadcast `DeviceSetup("Disconnected")` |

### 10.4 End-to-end data flow

```
1. Operator focuses "Empty Pan Weight" cell      → page: ActiveRow=row, ActiveColumn="EmptyPanWeight"
2. Operator presses PRINT on the balance (COM2)   → bytes on the serial port
3. SyncForm DataReceived                          → SendAsync("Data", {PMD_Moisture_Balance, COM2}, "  73.623 g")
4. DeviceHub.Data                                 → Clients.Group("PC1").SendAsync("Data", device, msg)
5. Page handler DataManage(config, message)
     - ignore if no active cell or wrong DeviceType
     - message.ProcessThreeDecimalWeightData()    → 73.623
     - write into ActiveRow.EmptyPanWeight, recalc, set execution time
     - log line, InvokeAsync(StateHasChanged), save the draft
```

### 10.5 Parsing helpers

These are in `IQMSV2.Common/Helper.cs` and all are extension methods on `string`:

| Method | Input → output |
|---|---|
| `ProcessThreeDecimalWeightData` | regex `-?\d+(\.\d+)?` → first number, rounded to 3 decimals |
| `ProcessWeightData` | whole string → decimal |
| `ProcessDialReaderData` | last space-separated part, digits only, ÷ 10000 → 2 decimals |
| `ProcessQTMData`, `ProcessPPMData`, `ProcessPresureDropTestData` | legacy instruments |

Each one returns an object with `Reading`, `ProcessStatus` (`Success`/`Error`) and `ProcessResult` (error text). The page checks `ProcessStatus` before using `Reading`.

---

## 11. Station mapping

### 11.1 Problem solved

Before this feature:

- `DeviceHub.Data` sent each reading to **every** open page on every PC. A weight from PC1 could land in a focused cell on PC2.
- `SetupModule` replaced devices by type only, so PC2's balance removed PC1's from `DeviceList`.
- The "connected" status counted devices on any PC.

Now each PC has a **station** name. The SyncForm and the browser pages of that PC join the same SignalR group, and readings stay inside that group.

### 11.2 Parts

| Part | File | Role |
|---|---|---|
| `PageStationMapping` entity + table | `IQMSV2.Entities/PageStationMapping.cs`, migration `20261125072655_PageStationMapping` | per page (`EmailNotificationPage`), the allowed stations, e.g. `"PC1;PC2"` |
| Repository / UoW / service | `PageStationMappingRepository`, `…UnitOfWork`, `PageStationMappingService` | CRUD + `GetByPageAsync(page)` |
| Settings page | `Pages/PageStationMapping/PageStationMappings.razor` (`/pagestationmappings`) | edit mappings. Validates names (letters, digits, `- _ .`). Permission `Permissions.5A6`. |
| `StationState` (Scoped) | `IQMSV2.Web/Core/StationState.cs` | this browser's station, saved in `ProtectedLocalStorage` key `IQMS_StationId`. `OnChange` event. Special value `NotAStation`. |
| Navbar | `Shared/TopMenuBar.razor` | if no station is saved, shows a station dropdown instead of the menu. "Not a station" is first and selected by default, and an OK button saves it. The current station shows at the top right; click it to clear it (with confirmation). |
| `StationHubHelper` | `IQMSV2.Web/Core/StationHubHelper.cs` | `ResolveAsync(stationState, mappingService, page)` → `(station, null)` or `(null, reason)` |
| `DeviceHub` | see 10.3 | groups, station-aware `SetupModule`, `Data` and `IsDeviceOpen` |
| SyncForm config | `App.config` `WssServer=…/device?station=PC1` | the SyncForm's station |

### 11.3 Page logic (the same in all nine machine pages)

```csharp
// OnAfterRenderAsync(firstRender)
await LoadStationAndConnectAsync();

private async Task LoadStationAndConnectAsync()
{
    await ConnectToStationAsync();
    StationState.OnChange += OnStationStateChanged;      // react to navbar changes
}

private async Task ConnectToStationAsync()
{
    // 1. close the old connection (leaves the old group)
    // 2. resolve: not set / Not a station / not mapped -> show the message, return (manual entry still works)
    // 3. InitializeSignalR() with  /device?station=<station>
    // 4. re-attach the "Data" listener if a cell is focused
}
```

The nine pages and their keys:

| Page | Route | `EmailNotificationPage` | Device types |
|---|---|---|---|
| PMD Moisture | `/pmd/pmdMoisture` | `PMDMoisture` | `PMD_Moisture_Balance` |
| SMD Moisture | `/pmd/smdMoisture` | `SMDMoisture` | `SMD_Moisture_Balance` |
| Fill Value | `/pmd/pmdFillValue` | `PMDFillValue` | `PMD_FillValue_DialReader`, `PMD_FillValue_Balance` |
| PSD-PMD | `/pmd/pmdPsd` | `PMDPSD` | `PMD_PSD_Balance` |
| PSD-SMD | `/pmd/PmdPsdSmd` | `PMDPSDSMD` | `SMD_PSD_Balance` |
| EFO | `/smd/efo` | `SMDEFO` | `SMD_EFO_Balance` |
| Firmness | `/smd/firmness` | `Firmness` | `SMD_Firmness_DialReader`, `SMD_Firmness_Balance` |
| Pack Seal | `/smd/packseal` | `PackSeal` | `SMD_PackSeal_Balance` |
| FMD Data | `/fmd/fmddata` | `FRD` | `FMD_DialReader`, `FMD_Balance` |

### 11.4 Deployment checklist

Do these in order:

1. Apply the migration (`dotnet ef database update`).
2. Fill `/pagestationmappings` for each page.
3. Set a unique `?station=` in each PC's SyncForm `App.config`, then restart SyncForm.
4. On each PC's browser, choose the same station in the navbar.

Names must match exactly, and the match is **case-sensitive**.

---

## 12. Walkthrough: the PMD Moisture page, end to end

File: `IQMSV2.Web/Pages/Pmd/PmdMoisture.razor` (about 1,440 lines). The other data-entry pages follow the same structure.

### 12.1 Header

```razor
@page "/pmd/pmdMoisture"
@inject ... (services: shift, relay, blend, sampling point, department, parameter,
             PMD moisture data, user log, change tracker, shift calendar, email, station...)
@implements IDisposable
@attribute [Authorize(Roles = Permissions.SuperAdmin + "," + Permissions.PMD.MoisturePMD)]
```

### 12.2 State (fields)

| Field | Purpose |
|---|---|
| `List<PmdDataDto> Rows` | the grid. Each row is a **DTO** with string fields for the inputs, plus per-cell colours and read-only flags. |
| `SelectedRelayId`, `SelectedShiftId`, `pmdSearchDate` | header filters |
| `relayList`, `shiftList`, `blendList`, `samplingPointList` | master data for dropdowns |
| `DeptId`, `ParamId` | found by name (`"PMD"`, `"Moisture-PMD"`) |
| `ActiveRow`, `ActiveColumn` | which cell receives machine data |
| `_hubConnection`, `StationId`, `logHeader`, `logEntries`, `LogData` | SignalR and the machine log box |
| `_isSaving`, `_isOpening` | double-click guards |
| `_saveDebounceCts` | debounce for draft saving |

### 12.3 Loading

`OnInitializedAsync`:

1. `CheckUserEditPermissionAsync()` sets `isUserHasEditPermission`.
2. `LoadMasterData()`:
   - waits for `BranchId`;
   - starts 6 queries and awaits them with `Task.WhenAll`;
   - loads the sampling points for the department and parameter;
   - `AdjustSearchDateForNightShift()`: before noon, during a night relay, uses yesterday's date;
   - `CheckShiftFromCalendarAsync()`: if the shift calendar defines a shift for this relay and date, selects it and **locks** the shift dropdown.
3. Adds an empty row, then `_masterDataLoaded.TrySetResult()`.

`OnAfterRenderAsync(firstRender)`: JS init → wait for master data → `LoadFromLocalStorageAsync()` (restore the draft) → `LoadStationAndConnectAsync()` → `StateHasChanged()`.

### 12.4 Opening existing data

`OpenButtonClicked`:

1. If a draft exists, confirm first (unsaved data would be lost).
2. `LoadPMDDataList()`:
   - `RelayDateHelper.GetRelayDateRange(relay, date)` → `(start, end)` from the relay's start and end times. Night relays end the next day.
   - `GetPMDDataByRelayShiftExeDateAsync(relay, shift, start, end)`.
   - `isCurrentActiveRelay = now is inside [start, end]`.
   - Map each entity to a `PmdDataDto`. Use `ReadOnlyCellHelper` for each cell's colour and read-only flag. Keep the **original** values (`OriginalBlendId`, `OriginalPanNo` …) for change detection.
   - Add an empty row at the end.

### 12.5 Entering data

| Action | Code |
|---|---|
| Select Blend | `OnBlendSelected`: set the execution time; if it is the last row, add a new row; save the draft |
| Type Pan No | `OnPanNoInput`: if Blend and Sampling Point are empty, copy them (and Operation No) from the previous row; add a row if last |
| Focus Operation No | `SetOperationNo`: prefill `yyMM` |
| Operation No input | digits only, max 7. Yellow (`bg-warning`) if not exactly 7. |
| Focus a weight cell | `StartListening(row, column)` |
| Machine reading | `DataManage` → fill the cell → `calculateTobaccoWeight` / `calculateMoisture` |

Calculations:

```
TobaccoWeight = TobaccoPanWeight − EmptyPanWeight
OvenMoisture% = (TobaccoPanWeight − FinalTobaccoPanWeight) / (TobaccoPanWeight − EmptyPanWeight) × 100
```

**Draft autosave:** `SaveToLocalStorageAsync` debounces for 500 ms, then saves `Rows`, the filters and the date to `ProtectedSessionStorage` (`PmdMoistureDraft`). A browser reload does not lose work.

### 12.6 Saving

`AddPMDMoistureData`:

1. Guard against a double click (`_isSaving`).
2. Validate:
   - Relay and Shift are selected;
   - at least one row has a Blend;
   - every selected row has a Sampling Point;
   - every Operation No is exactly 7 digits;
   - an existing row's relay equals the selected relay.
3. Build two lists:
   - `toAdd`: rows with `Id == Guid.Empty`. These become new entities with `CreatedBy` and `Created`.
   - `toUpdate`: rows with an Id. These become entities with `LastModifiedBy` and `LastModified`.
4. Privileged-user rules (only if `EditPermission`):
   - if machine weights changed on rows that require privilege → `Remarks` is mandatory;
   - if key fields changed (Blend, Sampling Point, Operation No, Pan No) → confirm dialog, then **email** using the `EmailNotificationSetting` for `PMDMoisture`, sent in the background with `Task.Run`.
5. Save:
   - `AddRangeAsync(toAdd)`: tracked insert, then `SaveChanges`;
   - `UpdatePMDMoistureDataAsync(toUpdate)`: `ExecuteUpdate` in SQL.
6. On success:
   - user log (`UserLog`, type Create/Update);
   - change tracker (`IQMS_PMD_MOISTURE_DATA_ENTRY`, used by the external sync API);
   - toast;
   - clear the draft;
   - reload the data.

### 12.7 Other actions

- **Close**: if a draft exists, confirm, clear it, then `location.reload`.
- **Export**: ClosedXML builds an `.xlsx` in memory, then `downloadFile(name, base64)`.
- **Dispose**: cancel the debounce, dispose the hub, unsubscribe `StationState.OnChange`.

---

## 13. Other modules

### 13.1 Master data (Configuration menu)

Brand, Blend, Filter, Pan Weight, FRD Machine, Department, Material Category, Relay, Shift, Supplier, Tow Type, Fault, Material Parameter, Dry Weight, Parameter, Sampling Point, IQMS Module.
All are simple CRUD pages (section 8.10). Permissions are `Permissions.0A*`.

Two concepts appear in every data page:

- **Shift**: a colour team (Yellow, Blue, Green, White).
- **Relay**: a fixed time window or team (A, B, C, D) with `RelayStartTime`, `RelayEndTime`, `RelayStartDayAdd` and `RelayEndDayAdd`. If `RelayEndDayAdd > RelayStartDayAdd`, it is a night relay that ends the next day.

### 13.2 Targets

Target pages for PMD Moisture, Quality Ratio, Fill Value, FMD (FRD), SMD, Meter Trim and Free Way. They set the limits that measurements are compared against. Permissions are `Permissions.4A*`.

### 13.3 Shift Relay Calendar

`ShiftRelayCalendar` has one row per `(Branch, Date, Relay)` → `ShiftId` (null means the relay is off).
`ShiftRelayCalendarService` offers `GetByMonthAsync`, `GetByDateAndRelayAsync`, `SaveCellAsync`, `SaveBulkAsync` and `GetRelayIdForShiftAsync`.
Data-entry pages use it to **lock** the shift for the chosen relay and date.

### 13.4 Email notifications

- `EmailNotificationSetting` has one row per `EmailNotificationPage`: To, Cc, Bcc, Subject, Body, SendTime, Priority.
- `IEmailHelper` / `EmailHelper` sends with MailKit, using the `SMTP` configuration.
- Pages send an email when a privileged user changes key fields.

### 13.5 User management

Users, roles (with a permission checklist), branches, user–branch assignment, device list, email notification settings and page station mapping.
`UserLog` stores activity logs. `UserActivationHistory` stores inactivation and reactivation history.

### 13.6 Dashboard

`Pages/Index.razor` shows today's entry counts per module.
`DashboardService.GetTodayCountsAsync` calls each repository's `GetTodayCountAsync` and caches the result for 60 s in `IMemoryCache`.

### 13.7 Reports and import

- `Pages/Report`: list and detail views, plus Excel export.
- `Pages/Import`: `IExcelToDatabase` imports master data from Excel.

### 13.8 IQMSV2.API (sync API)

This is a separate web API that lets another system pull IQMS data.

1. `POST /Auth/token` with header `X-API-KEY` returns a JWT (HMAC-SHA256). Issuer, audience and expiry come from the `Jwt` config.
2. `GET /GetConfigData/IQMS_BRAND?SearchDate=…` (and the other master tables) returns master data. This requires `[Authorize]`.
3. `GET /GetMachineData/IQMS_PMD_MOISTURE_DATA_ENTRY?fromDate=&toDate=` (and the other data tables) returns rows **created or modified** in the range, as DTOs with database-style names (`PMDE_ID`, `BL_ID` …).
4. After a fetch, the repository deletes the matching `ChangeTracker` row for that table and date.

DI in the API uses **Autofac** (`containerBuilder.RegisterType<…>().As<…>().InstancePerLifetimeScope()`).
`Models/AppContainer.cs` exposes the container, so the models can resolve services.

---

## 14. Advanced topics and pitfalls

### 14.1 Threads and shared state

- `StaticValue.DeviceList` is a plain `List<T>` shared by all hub calls. `List<T>` is **not thread-safe**: two SyncForms registering at the same moment can corrupt it. `ConnectionStations` uses `ConcurrentDictionary`, which is safe.
- To make `DeviceList` safe, use a lock or a concurrent collection.
- Blazor component code must run on the component dispatcher. Use `InvokeAsync` for SignalR, timer and other-component callbacks.

### 14.2 Disposal and leaks

A component that subscribes to events or opens connections must:

1. declare `@implements IDisposable` (without it, Blazor never calls `Dispose`);
2. unsubscribe every `+=`;
3. dispose `HubConnection`, `Timer` and `CancellationTokenSource`.

### 14.3 Reconnect logic

- `WithAutomaticReconnect()` handles network drops.
- The custom `Closed` handler only retries when `error != null` (an unexpected close), and only while `_hubConnection == connection` (it is still the current one). This stops an old connection from reconnecting after a station change or page close.

### 14.4 Debouncing

```csharp
_saveDebounceCts?.Cancel();
var cts = new CancellationTokenSource(); _saveDebounceCts = cts;
try { await Task.Delay(500, cts.Token); } catch (TaskCanceledException) { return; }
// save only if no newer call came within 500 ms
```

This avoids writing to browser storage on every keystroke.

### 14.5 Double-submit guards

`_isSaving` and `_isOpening` flags, set in `try` and reset in `finally`, stop two saves running at once.

### 14.6 Prerender gotchas

`OnInitializedAsync` runs twice: once for prerender and once interactive.
Do not use JS or browser storage in it. Avoid side effects that must happen only once.

### 14.7 DbContext lifetime

- The context is Transient, so different services get **different** contexts. Two services cannot share one transaction unless they come from the same UoW.
- Use `AsNoTracking()` for reads.
- In updates, beware of tracking conflicts (section 5.7).

### 14.8 Fire-and-forget email

`_ = Task.Run(() => EmailHelper.SendEmail(...))` does not block the save.
An exception inside it is caught, but `_toastService` calls from a background thread may not render. Treat email as best effort.

### 14.9 Time handling

- The code uses `DateTime.Now` (server local time), except `UserLog.TimeToUse`, which uses `UtcNow`.
- Relay windows and the night-shift adjustment depend on the server's time zone.

### 14.10 Logging

- **Web**: Serilog, Error level and above, written to `logs/critical-*.txt`.
- **SyncForm**: Serilog, Debug level and above, written to `C:\IQMS\Logs\IQMS_*.log` (`LogDirectory` key).
- **AutoRunner**: written to `logs/IQMSServiceAutoRunner-*.log`.

---

## 15. How to add a new feature

Example: a new data-entry table `XyzDataEntry` with a page.

1. **Entity**: `IQMSV2.Entities/XyzDataEntry.cs : AuditableEntity`. Add `[Table("IQMS_XYZ_DATA_ENTRY")]`, foreign keys, decimals with `[Column(TypeName="decimal(18,3)")]`, and `BranchId`.
2. **DbSet**: `public DbSet<XyzDataEntry> XyzDataEntries { get; set; }` in `ApplicationDbContext`.
3. **Migration**: `dotnet ef migrations add XyzDataEntry --project IQMSV2.Repository --startup-project IQMSV2.Web`. Review the generated `Up`/`Down`, then run `database update`.
4. **Repository**: `IXyzDataEntryRepository : IRepository<XyzDataEntry>` in `Contracts`. Add `XyzDataEntryRepository : Repository<XyzDataEntry>, IXyzDataEntryRepository` with any custom queries.
5. **Unit of Work**: `IXyzDataEntryUnitOfWork : IUnitOfWork` with the repository property, and `XyzDataEntryUnitOfWork : UnitOfWork`.
6. **Service**: `IXyzDataEntryService` in `Services/Contracts`, and `XyzDataEntryService` using the UoW.
7. **DI**: in `Startup.ConfigureServices` register the repository, the UoW and the service (`AddTransient`). If the API needs them, register them in `IQMSV2.API/Program.cs` (Autofac) too.
8. **Permission**: add a constant in `Permissions.cs` (next free code in the right group). Then add it to the role permission UI so admins can grant it.
9. **Page**: `IQMSV2.Web/Pages/<Module>/Xyz.razor` with `@page`, `@inject`, `@attribute [Authorize(Roles=…)]` and `@implements IDisposable` if needed.
10. **Menu**: add a `NavLink` inside an `<AuthorizeView Roles=…>` in `Shared/TopMenuBar.razor`. Also add the permission to the parent menu's `JoinRoles` list.
11. **Machine data (optional)**:
    - add an `EnumDeviceType` value in **both** `IQMSV2.Common` and the SyncForm `IQMSService.Common` (the numbers must match);
    - add an `EmailNotificationPage` value;
    - add the COM key to SyncForm `App.config`;
    - copy the station pattern from section 11.3 and add the page's station mapping.
12. **Sync (optional)**: add a `FetchAPITableName` constant, `ChangeTrackerService.AddChangesAsync` on save, and an endpoint in `MachineDataController`.

---

## 16. Glossary

| Term | Meaning |
|---|---|
| Blazor Server | UI framework where C# components run on the server and the browser gets DOM updates over SignalR |
| Circuit | one live Blazor connection (one browser tab) and its server-side state |
| Claim | a key/value fact about the logged-in user |
| DI (Dependency Injection) | the framework creates and supplies a class's dependencies |
| DTO | Data Transfer Object: a plain class shaped for the UI or an API, not a table |
| EF Core | Entity Framework Core, the ORM |
| Entity | a class mapped to a table |
| Hub | SignalR server class (`DeviceHub`) |
| Migration | versioned code that changes the database schema |
| Permission | a string like `Permissions.1A1`, stored as a role claim and checked as a role |
| Relay | a fixed work team or time window (A/B/C/D) with start and end times |
| Repository | class that hides data access for one entity |
| Scoped / Transient / Singleton | DI lifetimes (section 4.2) |
| Shift | colour team (Yellow/Blue/Green/White) working a relay on a date |
| Soft delete | marking `IsDeleted = true` instead of removing the row |
| Station | name of a lab PC (e.g. `PC1`), shared by its SyncForm and its browser |
| SyncForm | WinForms app on a lab PC that reads COM ports and sends readings to `DeviceHub` |
| Unit of Work | groups repositories on one `DbContext` and saves them together |
