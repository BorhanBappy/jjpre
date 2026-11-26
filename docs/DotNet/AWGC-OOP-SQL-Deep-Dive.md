# AWGC Software Programmer — OOP (C#) and SQL Deep Dive

**Post:** Software Programmer (Contractual, Civilian), Army War Game Centre, Bangladesh Army
**Exam:** Saturday, 28 Nov 2026, 11:00 AM (report by 10:30 AM)
**Companion file:** [AWGC-Software-Programmer-Written-Exam-Prep.md](AWGC-Software-Programmer-Written-Exam-Prep.md) covers all topics briefly (NoSQL, war game, OS, networking, GK). **This file goes deep on the two biggest topics: OOP with C# and SQL.**

> Every C# output marked "verified" was checked by running the code on .NET 10.
> Every SQL result shown for the §B9 sample data was checked by running the query (SQLite engine).
> Dialect-only code (T-SQL / PL/SQL procedures, triggers, cursors) was reviewed but not executed.

---

## Contents

**Part A — OOP with C#**
- A1 OOP basics · A2 Class anatomy · A3 Encapsulation and access modifiers · A4 Abstraction and abstract classes
- A5 Interfaces · A6 Inheritance · A7 Polymorphism · A8 static · A9 Constructors and destructors
- A10 this and base · A11 Value vs reference semantics, struct, record, enum
- A12 Object relationships and UML · A13 Equality · A14 Shallow vs deep copy · A15 Generics
- A16 Delegates and events · A17 Exceptions · A18 SOLID (violation → fix) · A19 Other design principles
- A20 Design patterns with C# · A21 Full war-game class design (written-exam answer)
- A22 More OOP programs · A23 Output-prediction traps · A24 Rapid-fire Q&A · A25 OOP MCQ · A26 Find the error

**Part B — SQL and databases**
- B1 Database basics · B2 Relational model and relational algebra · B3 ER model · B4 Keys · B5 Data types and constraints
- B6 Functional dependency · B7 Normalization (worked examples)
- B8 DDL and DML in three dialects · B9 Sample schema · B10 SELECT, NULL, functions · B11 GROUP BY
- B12 Joins (with result tables) · B13 Subqueries and CTE · B14 Set operators · B15 Window functions
- B16 Views · B17 Indexes · B18 Stored procedures, functions, triggers, cursors · B19 Transactions and concurrency
- B20 Security and SQL injection · B21 SQL from C# (ADO.NET, EF Core, LINQ) · B22 Practice queries
- B23 Classic SQL puzzles · B24 SQL traps · B25 SQL MCQ · B26 Rapid-fire Q&A
- B27 SQL vs MongoDB bridge · B28 War-game database design (written-exam answer)

**Part C — Last-night cheat sheet**

---

## Friday Plan (27 Nov) — one day only

| Time | Work | Sections |
|---|---|---|
| 07:00–09:00 | OOP core: pillars, class anatomy, access modifiers, abstract, interface | A1–A5 |
| 09:00–10:30 | Inheritance, polymorphism, static, constructors (read every output trap) | A6–A11 |
| 10:30–10:45 | Break | |
| 10:45–12:15 | Relationships, SOLID, design patterns, war-game class design | A12–A21 |
| 12:15–14:00 | Jumu'ah, lunch, rest | |
| 14:00–15:30 | SQL theory: keys, FD, normalization, ER, relational algebra | B1–B7 |
| 15:30–17:30 | **Write queries by hand:** SELECT, GROUP BY, joins, subqueries, windows | B8–B15, B22 |
| 17:30–18:30 | Break, Maghrib | |
| 18:30–19:45 | Views, indexes, procedures, triggers, transactions, injection | B16–B21 |
| 19:45–20:30 | War-game DB design + MongoDB bridge | B27–B28 |
| 20:30–21:30 | Self-test without looking: A23, A25, B24, B25 | |
| 21:30–22:00 | Part C cheat sheet, then **sleep** | C |

Saturday morning: read only Part C. Leave early.

---

## How to Write a Good Written Answer

For an "Explain X" question (5–10 marks):
1. **One-line definition.**
2. **Diagram or table.** For a "difference between" question, always draw a table with 5–6 rows.
3. **Short code** (C#) or SQL.
4. **Example.** A war-game flavoured example (Unit, Tank, Soldier, Scenario) shows you understand the job.
5. **Advantages / when to use.**

For code questions: write comments, show the expected output, validate input.
For SQL questions: use table aliases, uppercase keywords, end each statement with `;`. If you use `TOP` or `LIMIT`, name the database (SQL Server / MySQL).

---

# PART A — OOP WITH C#

## A1. OOP Basics

**Definition:** Object-Oriented Programming (OOP) is a programming paradigm that organizes software as a set of **objects**. Each object combines **data** (fields / state) and **behaviour** (methods). Objects are created from **classes**.

**Four pillars:** Encapsulation, Abstraction, Inheritance, Polymorphism. (Memory trick: **"A PIE"** — Abstraction, Polymorphism, Inheritance, Encapsulation.)

**Advantages of OOP**
- **Modularity:** each class is a separate unit; easy to understand and test.
- **Reusability:** inheritance and composition reuse existing code.
- **Maintainability:** a change inside one class does not break others.
- **Extensibility:** polymorphism lets you add new types without changing old code.
- **Security:** encapsulation hides data.
- **Real-world modelling:** units, weapons, maps, and orders map naturally to classes.

**Disadvantages:** programs become larger, design takes more time, there can be a small performance cost, and it is easy to over-engineer.

### Procedural vs Object-Oriented

| Point | Procedural (C, Pascal) | Object-Oriented (C#, Java, C++) |
|---|---|---|
| Basic unit | Function | Object / class |
| Approach | Top-down | Bottom-up |
| Data | Global, shared by functions | Hidden inside objects |
| Access control | None | public, private, protected, internal |
| Reuse | Function calls | Inheritance, composition |
| Overloading | Not supported in C | Supported |
| Adding new data types | Hard, many functions change | Easy, add a new class |
| Example | C, Pascal, FORTRAN | C#, Java, C++, Python |

### Class vs Object

| Class | Object |
|---|---|
| Blueprint / template | Instance of a class |
| Logical entity | Physical entity (occupies memory on the heap) |
| Declared once | Many objects can be created from one class |
| No memory for instance data when declared | Memory allocated when `new` is called |
| `class Tank { }` | `Tank t = new Tank();` |

An object has three things: **identity** (its own memory location), **state** (field values), and **behaviour** (methods).

### What happens in memory

```csharp
Tank t1 = new Tank("T-1");
Tank t2 = t1;              // copies the reference, not the object
t2.Name = "T-2";
Console.WriteLine(t1.Name); // T-2
```

```
  Stack (variables)          Managed heap (objects)
 ┌───────────┐              ┌──────────────────┐
 │ t1   ●────┼─────────────►│  Tank object     │
 │ t2   ●────┼─────────────►│  Name = "T-2"    │
 └───────────┘              └──────────────────┘
```

Both variables point to the **same** object.
(Note for viva: "value types on the stack, reference types on the heap" is a simplification. A value-type field inside a class lives on the heap with its object.)

**Object life cycle:** declare variable → `new` allocates memory on the managed heap → constructor runs → object is used → no reference points to it any more → Garbage Collector (GC) reclaims it → finalizer runs if one exists.

---

## A2. Class Anatomy

| Member | Purpose | Example |
|---|---|---|
| Field | Stores data | `private int _age;` |
| Constant | Compile-time fixed value (implicitly static) | `public const int MinAge = 18;` |
| Property | Controlled access to data | `public int Age { get; set; }` |
| Method | Behaviour | `public void Promote()` |
| Constructor | Initializes a new object | `public Soldier(string name)` |
| Finalizer | Cleanup before GC frees memory | `~Soldier()` |
| Indexer | Array-like access | `public string this[int i]` |
| Event | Notifies subscribers | `public event EventHandler? Promoted;` |
| Operator | Custom operator behaviour | `public static Vec operator +(Vec a, Vec b)` |
| Nested type | Type inside a type | `class Tank { enum Gear { } }` |

### A fully annotated class (verified)

```csharp
public class Soldier
{
    public const int MinAge = 18;            // constant: implicitly static

    private static int _count;               // static field: one copy shared by all objects

    private readonly string _armyNo;         // readonly: assigned only here or in constructor
    private int _age;                        // instance field: each object has its own

    public string Name { get; set; }         // auto-implemented property
    public string ArmyNo => _armyNo;         // read-only, expression-bodied property

    public int Age                           // full property with validation
    {
        get => _age;
        set
        {
            if (value < MinAge)
                throw new ArgumentOutOfRangeException(nameof(Age), "Age must be 18 or more");
            _age = value;
        }
    }

    public static int Count => _count;       // static property

    public Soldier(string armyNo, string name, int age)   // constructor
    {
        _armyNo = armyNo;
        Name = name;
        Age = age;                           // goes through validation
        _count++;
    }

    public override string ToString() => $"{ArmyNo} {Name} ({Age})";
}

// Usage
try { var s = new Soldier("BA-1001", "Rahim", 15); }
catch (ArgumentOutOfRangeException ex) { Console.WriteLine(ex.ParamName); }   // Age

var ok = new Soldier("BA-1002", "Karim", 25);
Console.WriteLine(ok);              // BA-1002 Karim (25)
Console.WriteLine(Soldier.Count);   // 1   (first object failed before _count++)
```

### Field vs Property

| Field | Property |
|---|---|
| A variable inside the class | A pair of `get`/`set` accessors (methods in disguise) |
| No validation | Can validate in `set` |
| Cannot be read-only to outside and writable inside (without two fields) | `{ get; private set; }` does this easily |
| Cannot be declared in an interface | Can be declared in an interface |
| Data binding (WPF, MVC) does not work with fields | Data binding works |
| Rule: keep fields **private** | Expose data through **public properties** |

### All kinds of properties

```csharp
public class RadioSet
{
    public RadioSet(string callsign) => Callsign = callsign;

    public string Callsign { get; }                 // get-only: set only in constructor
    public double Frequency { get; set; }           // read-write auto-property
    public int Channel { get; private set; }        // public read, private write
    public string Model { get; init; } = "PRC";     // init-only: set in object initializer
    public required string Unit { get; set; }       // required (C# 11): must be set when created
    public bool IsVhf => Frequency >= 30 && Frequency <= 300;   // computed, read-only
    public static int TotalSets { get; set; }       // static property
}

var r = new RadioSet("Alpha-1") { Frequency = 45.5, Unit = "1 Coy" };
Console.WriteLine($"{r.Callsign} {r.Frequency} {r.IsVhf}");   // Alpha-1 45.5 True
```

---

## A3. Encapsulation and Access Modifiers

**Definition:** Encapsulation means **wrapping data and the methods that work on that data into one unit (a class)** and **restricting direct access** to the data. Outside code uses public methods or properties. The data itself is kept `private`. This is also called **data hiding**.

**How C# achieves it:** `private` fields, public properties with validation, access modifiers, `readonly` fields, and returning read-only views of collections.

**Benefits:** control over data, validation, freedom to change the internal representation later, read-only or write-only access, easier testing, and security.

### Example (verified)

```csharp
public class InsufficientFundsException : Exception
{
    public InsufficientFundsException(decimal requested, decimal balance)
        : base($"Cannot withdraw {requested}; balance is {balance}") { }
}

public class BankAccount
{
    private decimal _balance;                          // hidden
    private readonly List<string> _history = new();

    public string Number { get; }
    public string Owner { get; }
    public decimal Balance => _balance;                // read-only from outside
    public IReadOnlyList<string> History => _history;  // outside cannot Add/Remove

    public BankAccount(string number, string owner, decimal opening)
    {
        Number = number; Owner = owner; _balance = opening;
        _history.Add($"Open {opening}");
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Deposit must be positive");
        _balance += amount;
        _history.Add($"Deposit {amount}");
    }

    public void Withdraw(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Withdraw must be positive");
        if (amount > _balance) throw new InsufficientFundsException(amount, _balance);
        _balance -= amount;
        _history.Add($"Withdraw {amount}");
    }
}

var acc = new BankAccount("1001", "Rahim", 5000m);
acc.Deposit(2000m);
acc.Withdraw(1500m);
try { acc.Withdraw(10000m); } catch (InsufficientFundsException ex) { Console.WriteLine($"Error: {ex.Message}"); }
try { acc.Deposit(-5m); }     catch (ArgumentException ex)         { Console.WriteLine($"Error: {ex.Message}"); }
Console.WriteLine($"Balance: {acc.Balance}");
foreach (var t in acc.History) Console.WriteLine(t);
// acc._balance = 1000000;   // compile error: inaccessible due to its protection level
```

Output:
```
Error: Cannot withdraw 10000; balance is 5500
Error: Deposit must be positive
Balance: 5500
Open 5000
Deposit 2000
Withdraw 1500
```

### Access modifiers — who can access? (memorize this table)

| Modifier | Same class | Derived class, same assembly | Other class, same assembly | Derived class, other assembly | Other class, other assembly |
|---|:-:|:-:|:-:|:-:|:-:|
| `public` | ✔ | ✔ | ✔ | ✔ | ✔ |
| `protected internal` | ✔ | ✔ | ✔ | ✔ | ✘ |
| `protected` | ✔ | ✔ | ✘ | ✔ | ✘ |
| `internal` | ✔ | ✔ | ✔ | ✘ | ✘ |
| `private protected` | ✔ | ✔ | ✘ | ✘ | ✘ |
| `private` | ✔ | ✘ | ✘ | ✘ | ✘ |

- **Assembly** = one compiled `.dll` or `.exe` (one project).
- `protected internal` = protected **OR** internal (wider).
- `private protected` = protected **AND** internal (narrower). Added in C# 7.2.

### Default access modifiers

| Item | Default |
|---|---|
| Top-level class, struct, interface, enum, delegate | `internal` |
| Class member (field, method, property) | `private` |
| Struct member | `private` |
| Interface member | `public` |
| Enum member | `public` (cannot be changed) |
| Nested type | `private` |

Rules:
- A top-level type can only be `public` or `internal` (or `file` in C# 11).
- A derived class cannot be **more** accessible than its base class (`public class B : A` fails if `A` is `internal`): "Inconsistent accessibility" error.
- An override cannot change the access modifier of the method it overrides.

### Encapsulation vs Abstraction

| Encapsulation | Abstraction |
|---|---|
| Hides **data** (how it is stored) | Hides **complexity** (how it works) |
| Implementation level | Design level |
| Achieved with access modifiers, properties | Achieved with abstract classes, interfaces |
| Answers "how to protect it?" | Answers "what to show?" |
| Example: capsule hides the medicine | Example: TV remote shows buttons, hides circuits |

---

## A4. Abstraction and Abstract Classes

**Definition:** Abstraction means **showing only the essential features** of an object and **hiding the implementation details**. The user knows **what** an object does, not **how**. In C#, abstraction uses **abstract classes** and **interfaces**.

### Abstract class example (verified)

```csharp
public abstract class WeaponA
{
    public string Name { get; }
    public int Ammo { get; protected set; }
    private readonly int _capacity;

    protected WeaponA(string name, int capacity)    // abstract class CAN have a constructor
    {
        Name = name; _capacity = capacity; Ammo = capacity;
    }

    public void Fire()                               // concrete method: shared logic
    {
        if (Ammo == 0) { Console.WriteLine($"{Name}: out of ammo"); return; }
        Ammo--;
        Console.WriteLine($"{Name}: {Sound()} (ammo {Ammo})");
    }

    public void Reload() { Ammo = _capacity; Console.WriteLine($"{Name} reloaded"); }

    protected abstract string Sound();               // abstract: no body, child must implement
}

public class Mortar : WeaponA
{
    public Mortar(string n, int cap) : base(n, cap) { }
    protected override string Sound() => "thump";
}

WeaponA w = new Mortar("81mm Mortar", 6);
w.Fire(); w.Fire(); w.Reload();
Console.WriteLine(w.Ammo);
```
Output:
```
81mm Mortar: thump (ammo 5)
81mm Mortar: thump (ammo 4)
81mm Mortar reloaded
6
```

### Rules of abstract classes and methods

1. An abstract class **cannot be instantiated**: `new WeaponA(...)` is a compile error.
2. It can contain abstract **and** non-abstract members, fields, constructors, static members, properties, and events.
3. An abstract method has **no body** (`;` instead of `{ }`) and is **implicitly virtual**.
4. Abstract methods can exist **only** inside an abstract class.
5. A non-abstract child **must override all** abstract members. If it does not, it must itself be declared abstract.
6. An abstract member **cannot** be `private`, `static`, or `sealed`, and you do not write `virtual` with it.
7. An abstract class **cannot** be `sealed` or `static` (those keywords contradict "must be inherited").
8. Its constructor is usually `protected`. It runs when a child object is created.
9. An abstract class can have **zero** abstract methods. Then it only prevents direct instantiation.
10. An abstract class can implement an interface and leave the interface methods abstract.

**Q: Why does an abstract class have a constructor if we cannot create its object?**
To initialize its own fields when a **derived** object is created. The derived constructor calls it through `base(...)`.

---

## A5. Interfaces

**Definition:** An interface is a **contract**: a set of members that an implementing class **promises** to provide. It defines **"can-do"** ability (`IMovable`, `IAttackable`), while a base class defines **"is-a"** identity.

```csharp
public interface IMovable    { void MoveToward(int x); }
public interface IAttackable { void TakeHit(int damage); }

public class Bunker : IAttackable
{
    private int _hp = 100;
    public void TakeHit(int dmg)
    {
        _hp = Math.Max(0, _hp - dmg);
        Console.WriteLine(_hp == 0 ? "Bunker destroyed" : $"Bunker hp={_hp}");
    }
}

IAttackable target = new Bunker();   // program to an interface
target.TakeHit(30);                  // Bunker hp=70
target.TakeHit(80);                  // Bunker destroyed
```

### Interface inheritance (verified)

```csharp
interface IMovable  { void MoveToward(int x); }
interface IArmoured : IMovable { int ArmourMm { get; } }   // interface extends interface

class Apc : IArmoured
{
    public int ArmourMm => 30;
    public void MoveToward(int x) => Console.WriteLine($"APC moving to {x}");
}

IArmoured a = new Apc();
a.MoveToward(5);              // APC moving to 5
Console.WriteLine(a.ArmourMm); // 30
```

### Default interface methods (C# 8+) — trap (verified)

```csharp
interface ILogger { void Log(string m) => Console.WriteLine($"LOG: {m}"); }
class FileLogger : ILogger { }        // does not implement Log

ILogger lg = new FileLogger();
lg.Log("hello");                      // LOG: hello
// new FileLogger().Log("hello");     // COMPILE ERROR: FileLogger has no member Log
```
A default method is callable **only through the interface reference**.

### Explicit interface implementation (verified)

Two interfaces have a method with the same name. Implement each one separately:

```csharp
interface IRadio { void Send(); }
interface IPhone { void Send(); }

class Walkie : IRadio, IPhone
{
    void IRadio.Send() => Console.WriteLine("Radio send");   // no access modifier allowed
    void IPhone.Send() => Console.WriteLine("Phone send");
}

var w = new Walkie();
((IRadio)w).Send();   // Radio send
((IPhone)w).Send();   // Phone send
// w.Send();          // COMPILE ERROR: explicit members are not visible on the class
```

### Important built-in interfaces

| Interface | Method | Use |
|---|---|---|
| `IDisposable` | `Dispose()` | Release unmanaged resources (files, DB connections); works with `using` |
| `IComparable<T>` | `CompareTo(T)` | Natural sort order (`list.Sort()`) |
| `IComparer<T>` | `Compare(T, T)` | Custom sort order |
| `IEquatable<T>` | `Equals(T)` | Type-safe equality |
| `IEnumerable<T>` | `GetEnumerator()` | Allows `foreach` and LINQ |
| `ICloneable` | `Clone()` | Copy an object |

### IComparable and IComparer (verified)

```csharp
class Officer : IComparable<Officer>
{
    public string Name { get; }
    public int Seniority { get; }          // 1 = most senior
    public Officer(string n, int s) { Name = n; Seniority = s; }

    public int CompareTo(Officer? other) =>
        other is null ? 1 : Seniority.CompareTo(other.Seniority);
}

class ByName : IComparer<Officer>
{
    public int Compare(Officer? x, Officer? y) =>
        string.Compare(x?.Name, y?.Name, StringComparison.Ordinal);
}

var list = new List<Officer> { new("Karim", 3), new("Rahim", 1), new("Sadia", 2) };
list.Sort();                    // Rahim, Sadia, Karim   (IComparable)
list.Sort(new ByName());        // Karim, Rahim, Sadia   (IComparer)
list.Sort((a, b) => b.Seniority.CompareTo(a.Seniority));   // Karim, Sadia, Rahim (lambda)
```

### Abstract class vs Interface (full table)

| Point | Abstract class | Interface |
|---|---|---|
| Keyword | `abstract class` | `interface` |
| Create object? | No | No |
| Multiple inheritance | A class extends **only one** | A class implements **many** |
| Fields | Yes (instance and static) | No instance fields (static allowed from C# 8) |
| Constructor | Yes | No |
| Method bodies | Abstract and concrete | Abstract; default bodies allowed from C# 8 |
| Member access modifiers | Any | `public` by default |
| Can inherit from | One class + many interfaces | Only interfaces |
| Relationship | "is-a" (Tank **is a** Vehicle) | "can-do" (Tank **can** Move) |
| Adding a new method later | Add a concrete method; children do not break | Breaks every implementer (unless default body) |
| Struct can use it? | No | Yes |
| Best for | Closely related classes sharing code and state | Unrelated classes sharing a capability |

**Rule of thumb:** Use an abstract class when classes share **code and state**. Use an interface when you need a **contract** across unrelated classes, or need multiple inheritance.

---

## A6. Inheritance

**Definition:** Inheritance is the mechanism by which one class (**derived / child / sub class**) acquires the members of another class (**base / parent / super class**). It models an **"is-a"** relationship and enables **code reuse**.

Syntax: `class Tank : Vehicle { }`

### Types of inheritance

```
Single          Multilevel              Hierarchical                  Multiple (interfaces only)
Vehicle         Vehicle                     Unit                      IMovable   IAttacker
   │               │                  ┌──────┼──────┐                     ╲        ╱
 Tank        ArmouredVehicle      Infantry Armour Artillery                 Tank
                   │
                 Tank
```

| Type | C# support |
|---|---|
| Single | Yes |
| Multilevel | Yes |
| Hierarchical | Yes |
| Multiple (class from two classes) | **No** — use interfaces |
| Hybrid | Only through interfaces |

### Why no multiple class inheritance? The diamond problem

```
          Weapon
         Fire()
        ╱      ╲
   Rifle        Launcher
   Fire()       Fire()
        ╲      ╱
      RifleLauncher      ← which Fire() does it inherit?
```
If `RifleLauncher` inherited from both `Rifle` and `Launcher`, a call to `Fire()` would be ambiguous. C# avoids this by allowing **one base class + many interfaces**.

### What is inherited?

- All fields, properties, methods, and events are inherited.
- **Constructors and finalizers are NOT inherited.** (The child must call `base(...)`.)
- **Private members ARE inherited** (they exist inside the child object) **but are not accessible** in the child's code.
- Static members are accessible through the child type name, but they belong to the base.

### Constructor execution order (verified)

```csharp
class Parent
{
    private string _a = Log("Parent field init");
    static Parent() => Console.WriteLine("Parent static ctor");
    public Parent() => Console.WriteLine("Parent ctor");
    protected static string Log(string m) { Console.WriteLine(m); return m; }
}
class Child : Parent
{
    private string _b = Log("Child field init");
    static Child() => Console.WriteLine("Child static ctor");
    public Child() => Console.WriteLine("Child ctor");
}

new Child();
```
Output:
```
Child static ctor
Parent static ctor
Child field init
Parent field init
Parent ctor
Child ctor
```

Why:
1. `Child` is used first, so its **static constructor** runs first.
2. The `Child` constructor must call the `Parent` constructor, so `Parent` is now used and its **static constructor** runs.
3. In C#, **field initializers run before the base constructor is called**, so child fields initialize first, then parent fields.
4. Constructor **bodies** run from **base to derived**: Parent ctor, then Child ctor.

**Short exam answer:** "When a derived object is created, the base class constructor executes first, then the derived class constructor. Finalizers run in the reverse order (derived first)."

A second `new Child()` prints only the instance lines (static constructors run once):
```
Child field init
Parent field init
Parent ctor
Child ctor
```

### Trap: calling a virtual method from a base constructor (verified)

```csharp
class A
{
    public A() { Print(); }
    public virtual void Print() => Console.WriteLine("A");
}
class B : A
{
    private int x = 5;
    public B() { x = 10; }
    public override void Print() => Console.WriteLine($"B {x}");
}
new B();    // prints: B 5
```
The override runs (runtime type is `B`). `x` is 5 because the field initializer already ran, but the `B` constructor body (`x = 10`) has not run yet. (In Java this prints `B 0`.) **Lesson:** do not call virtual methods from constructors.

### Methods of System.Object (every class inherits these)

| Method | Purpose |
|---|---|
| `ToString()` | String form; default prints the type name |
| `Equals(object)` | Equality; default compares references for classes |
| `GetHashCode()` | Hash for `Dictionary`/`HashSet` |
| `GetType()` | Runtime type information |
| `MemberwiseClone()` | Shallow copy (protected) |
| `Finalize()` | Called by GC (written as `~ClassName()`) (protected) |
| `static ReferenceEquals(a, b)` | True if both point to the same object |
| `static Equals(a, b)` | Null-safe equality |

### Upcasting, downcasting, `is`, `as` (verified)

(`Unit`, `Tank`, `Artillery`, `IMovable` are the classes from A21.)

```csharp
object o = new Tank("T", Side.Blue, 0, 5);
Console.WriteLine(o is Unit);        // True   (Tank is a Unit)
Console.WriteLine(o is IMovable);    // True   (Tank implements IMovable)
Console.WriteLine(o is Artillery);   // False
var a = o as Artillery;              // as returns null on failure (no exception)
Console.WriteLine(a == null);        // True
if (o is Unit u && u.Strength > 3)   // pattern matching: test + cast in one step
    Console.WriteLine(u.Name);       // T

Unit up = new Tank("T2", Side.Blue, 0, 5);   // upcast: implicit, always safe
Tank down = (Tank)up;                        // downcast: explicit cast
// Artillery bad = (Artillery)up;            // runtime InvalidCastException
```

### `sealed`

- **Sealed class:** cannot be inherited (`string` is sealed). Use it for security, or when a design is final.
- **Sealed method:** `sealed override` stops further overriding in grandchildren.

```csharp
class A50 { public virtual void Who() => Console.WriteLine("A50"); }
class B50 : A50 { public sealed override void Who() => Console.WriteLine("B50"); }
class C50 : B50 { public new void Who() => Console.WriteLine("C50"); }   // can only hide

A50 x = new C50();
x.Who();    // B50   (the last override in the chain is B50's; C50 only hides it)
```

**Advantages of inheritance:** code reuse, polymorphism, extensibility, logical hierarchy.
**Disadvantages:** tight coupling between parent and child, fragile base class problem (a change in the parent breaks children), deep hierarchies are hard to understand. Prefer **composition** when the relation is "has-a" (see A19).

---

## A7. Polymorphism

**Definition:** Polymorphism means **"many forms"**: the same method name or the same reference type behaves differently depending on the actual object or the arguments.

| Compile-time (static, early binding) | Run-time (dynamic, late binding) |
|---|---|
| Method **overloading** | Method **overriding** (`virtual` / `override`) |
| Operator overloading | Abstract methods |
| Decided by the compiler from the argument types | Decided at run time from the **actual object type** |
| Faster | Slightly slower (virtual table lookup) |
| Same class | Base and derived classes |

### Method overloading

Same method name, **different parameter list** (number, type, or order of parameters).

```csharp
int    Add(int a, int b)          => a + b;
double Add(double a, double b)    => a + b;
int    Add(int a, int b, int c)   => a + b + c;
string Add(string a, int b)       => a + b;
string Add(int a, string b)       => a + b;   // order differs: allowed
// double Add(int a, int b)       // ERROR: return type alone is not enough
```

Rules:
1. Parameters must differ in number, type, or order.
2. **Return type alone does not count.**
3. `ref`/`out`/`in` vs by-value counts as different, but `ref` vs `out` alone does not.
4. `params` and optional parameters can create ambiguity errors.

**Overload resolution traps (verified)**

```csharp
static void Show(int x)    => Console.WriteLine("int");
static void Show(long x)   => Console.WriteLine("long");
static void Show(object x) => Console.WriteLine("object");

Show(5);          // int
Show(5L);         // long
Show('A');        // int     (char converts implicitly to int; int is a better match than long)
Show(5.0);        // object  (double has no implicit conversion to int or long; boxing to object)
Show("x");        // object
Show((short)3);   // int     (short → int is the best widening conversion)
```

```csharp
static void Show(string s) => Console.WriteLine("string");
static void Show(object o) => Console.WriteLine("object");
Show(null);       // string  (the most specific type wins)
```
If the two overloads were `Show(string)` and `Show(StringBuilder)`, `Show(null)` would be a compile error (ambiguous call).

### Operator overloading (verified)

```csharp
public readonly struct Vec
{
    public double X { get; }
    public double Y { get; }
    public Vec(double x, double y) { X = x; Y = y; }

    public static Vec operator +(Vec a, Vec b) => new(a.X + b.X, a.Y + b.Y);
    public static Vec operator *(Vec a, double k) => new(a.X * k, a.Y * k);
    public static bool operator ==(Vec a, Vec b) => a.X == b.X && a.Y == b.Y;
    public static bool operator !=(Vec a, Vec b) => !(a == b);   // must be paired with ==

    public override bool Equals(object? obj) => obj is Vec v && this == v;
    public override int GetHashCode() => HashCode.Combine(X, Y);
    public override string ToString() => $"({X}, {Y})";
}

Console.WriteLine(new Vec(1, 2) + new Vec(3, 4));   // (4, 6)
Console.WriteLine(new Vec(1, 1) == new Vec(1, 1));  // True
Console.WriteLine(new Vec(2, 3) * 2);               // (4, 6)
```

Rules:
- Operator methods must be `public static`.
- At least one parameter must be the containing type.
- Comparison operators come in pairs: `==` with `!=`, `<` with `>`, `<=` with `>=`.
- When you overload `==`, also override `Equals` and `GetHashCode`.
- You **cannot** overload `=`, `.`, `?:`, `new`, `is`, `as`, `typeof`, `&&`, `||` directly. `+=` uses your `+` automatically.

### Method overriding

```csharp
public abstract class Shape
{
    public abstract double Area();
}
public class Circle : Shape
{
    private readonly double _r;
    public Circle(double r) => _r = r;
    public override double Area() => Math.PI * _r * _r;
}
public class Rect : Shape
{
    protected double W, H;
    public Rect(double w, double h) { W = w; H = h; }
    public override double Area() => W * H;
}
public class Square : Rect
{
    public Square(double s) : base(s, s) { }    // inherits Rect.Area()
}

Shape[] shapes = { new Circle(1), new Rect(2, 3), new Square(2) };
foreach (var s in shapes)
    Console.WriteLine($"{s.GetType().Name}: {s.Area():F2}");   // one call, three behaviours
```
Output:
```
Circle: 3.14
Rect: 6.00
Square: 4.00
```

Overriding rules:
1. The base method must be `virtual`, `abstract`, or `override`.
2. Same name, same parameters, same return type (C# 9 allows a more derived return type).
3. You cannot change the access modifier.
4. You cannot override `static`, non-virtual, or `sealed` methods.
5. An `override` method is itself virtual, so grandchildren can override it again unless it is `sealed`.

**How run-time polymorphism works:** every object stores a pointer to its type's **method table (v-table)**. A virtual call looks up the method slot in the actual object's table at run time.

### `override` vs `new` (method hiding)

| `override` | `new` |
|---|---|
| Replaces the base virtual method | Hides the base method (creates a new slot) |
| Base reference calls the **child** version | Base reference calls the **base** version |
| Base method must be `virtual`/`abstract`/`override` | Base method can be anything |
| Run-time polymorphism | No polymorphism; decided by the reference type |

```csharp
class A { public virtual void Show() => Console.WriteLine("A"); }
class B : A { public override void Show() => Console.WriteLine("B"); }
class C : A { public new void Show() => Console.WriteLine("C"); }

A b = new B(); b.Show();    // B
A c = new C(); c.Show();    // A   ← reference type decides with 'new'
C c2 = new C(); c2.Show();  // C
```

**Harder chain (verified):**
```csharp
class A10 { public virtual void F() => Console.Write("A"); }
class B10 : A10 { public override void F() => Console.Write("B"); }
class C10 : B10 { public new virtual void F() => Console.Write("C"); }   // new slot
class D10 : C10 { public override void F() => Console.Write("D"); }     // overrides C's slot

A10 a = new D10(); a.F();   // B
B10 b = new D10(); b.F();   // B
C10 c = new D10(); c.F();   // D
D10 d = new D10(); d.F();   // D        → prints BBDD
```

**Base method calling a virtual method (verified):**
```csharp
class A11 { public virtual string Who() => "A"; public string Call() => Who(); }
class B11 : A11 { public override string Who() => "B"; }
Console.WriteLine(new B11().Call());   // B   (virtual dispatch even from inside the base)
```

---

## A8. The `static` Keyword

| Static member | Instance member |
|---|---|
| Belongs to the **class** | Belongs to each **object** |
| One copy shared by all objects | Each object has its own copy |
| Accessed as `ClassName.Member` | Accessed as `object.Member` |
| Cannot use `this` | Can use `this` |
| Cannot directly access instance members | Can access static and instance members |
| Memory allocated once when the type loads | Memory allocated per object |

```csharp
class Counter
{
    public static int Count;          // shared
    public Counter() { Count++; }
}
new Counter(); new Counter(); new Counter();
Console.WriteLine(Counter.Count);     // 3
```

**Static class** (`Math`, `Console`, `File`):
- Contains **only** static members.
- **Cannot be instantiated**, **cannot be inherited** (implicitly sealed), **cannot** implement interfaces.
- Cannot have an instance constructor; can have a static constructor.
- Used for utility/helper methods and **extension methods**.

**Static constructor:**
- No access modifier, **no parameters**, only one per class.
- Runs **automatically once**, before the first object is created or the first static member is used.
- Cannot be called directly.
- Used to initialize static data (for example, load a terrain lookup table once).

**Static members are not polymorphic (verified):**
```csharp
class P { public static string Name = "P"; }
class Q : P { public new static string Name = "Q"; }   // hides, does not override
Console.WriteLine(P.Name + " " + Q.Name);              // P Q
```
`static` methods cannot be `virtual`, `abstract`, or `override`.

**Extension methods (verified):**
```csharp
static class StringExt
{
    public static string ToTitle(this string s) =>
        string.Join(" ", s.Split(' ').Select(w => char.ToUpper(w[0]) + w[1..]));
    public static bool IsEven(this int n) => n % 2 == 0;
}
Console.WriteLine("dhaka cantonment".ToTitle());   // Dhaka Cantonment
Console.WriteLine(12.IsEven());                    // True
```
Rules: declared in a **static class**, the method is **static**, and the first parameter has `this`. They add methods to existing types without inheritance (LINQ is built this way).

---

## A9. Constructors and Destructors

**Constructor:** a special method that runs automatically when an object is created with `new`, used to initialize the object.

Rules:
- Same name as the class. **No return type** (not even `void`).
- Can be overloaded. Can be `public`, `private`, `protected`, `internal`.
- If you write **no** constructor, the compiler adds a public parameterless one. If you write **any** constructor, the default one is **not** added.
- Not inherited. Cannot be `virtual`, `abstract`, or `override`.

### Types of constructors

```csharp
public class Tank
{
    public string Name { get; }
    public int Crew { get; }
    public static int Built { get; private set; }

    // 1. Default (parameterless) constructor
    public Tank() : this("Unnamed", 3) { }

    // 2. Parameterized constructor
    public Tank(string name, int crew)
    {
        Name = name; Crew = crew; Built++;
    }

    // 3. Copy constructor (C# has no built-in one; we write it)
    public Tank(Tank other) : this(other.Name + "-copy", other.Crew) { }

    // 4. Static constructor: runs once
    static Tank() => Console.WriteLine("Tank type loaded");
}

// 5. Private constructor: no outside 'new' (Singleton, or a class with only static members)
public sealed class SimClock
{
    private static readonly Lazy<SimClock> _instance = new(() => new SimClock());
    public static SimClock Instance => _instance.Value;
    private SimClock() { }
    public int Time { get; private set; }
    public void Tick() => Time++;
}
```

### Constructor chaining with `this(...)` (verified)

```csharp
class Soldier2
{
    public string Name { get; }
    public string Rank { get; }
    public Soldier2() : this("Unknown") { }                     // → calls 1-parameter ctor
    public Soldier2(string name) : this(name, "Sainik") { }     // → calls 2-parameter ctor
    public Soldier2(string name, string rank) { Name = name; Rank = rank; }
    public override string ToString() => $"{Rank} {Name}";
}
Console.WriteLine(new Soldier2());                  // Sainik Unknown
Console.WriteLine(new Soldier2("Rahim"));           // Sainik Rahim
Console.WriteLine(new Soldier2("Karim", "Major"));  // Major Karim
```
`this(...)` calls another constructor of the **same** class. `base(...)` calls a constructor of the **parent** class.

### Object initializer and primary constructor

```csharp
var r = new RadioSet("Alpha-1") { Frequency = 45.5, Unit = "1 Coy" };   // object initializer (runs after the ctor)

public class Radio(string callsign)          // primary constructor (C# 12)
{
    public string Callsign { get; } = callsign;
}
```

### Destructor (finalizer) and IDisposable

```csharp
class MapFile : IDisposable
{
    private readonly string _n;
    public MapFile(string n) { _n = n; Console.WriteLine($"open {_n}"); }
    public void Dispose() => Console.WriteLine($"dispose {_n}");   // deterministic cleanup
    ~MapFile() { /* finalizer: runs some time later, when GC decides */ }
}

using (var f = new MapFile("R1"))
{
    Console.WriteLine("using body");
}
Console.WriteLine("after using");
```
Output (verified):
```
open R1
using body
dispose R1
after using
```

Finalizer rules: written `~ClassName()`; **no parameters, no access modifier, no return type**; only **one** per class; only in **classes** (not structs); **cannot be called directly**; called by the GC at an unknown time (non-deterministic). For files, DB connections, and sockets use **`IDisposable` + `using`**, which runs `Dispose()` even if an exception occurs.

### Constructor vs Method

| Constructor | Method |
|---|---|
| Same name as the class | Any name |
| No return type | Must have a return type (or `void`) |
| Called automatically by `new` | Called explicitly |
| Not inherited | Inherited |
| Cannot be virtual/abstract | Can be virtual/abstract |
| Initializes the object | Defines behaviour |

### Quick answers
- Can a constructor be private? **Yes** (Singleton, static-only classes).
- Can a constructor be static? **Yes**, one, without parameters.
- Can a constructor be overloaded? **Yes.**
- Can a constructor be inherited? **No.**
- Can a constructor be virtual? **No.**
- Can a constructor call another? **Yes**, `this(...)` or `base(...)`.
- Can a constructor return a value? **No.**
- Can an abstract class have a constructor? **Yes.**
- Can an interface have a constructor? **No.**

---

## A10. `this` and `base`

**`this`** refers to the **current object**. Uses:
1. Separate a field from a parameter with the same name: `this.name = name;`
2. Call another constructor of the same class: `: this(...)`
3. Pass the current object to another method: `hq.Register(this);`
4. Declare an indexer: `public string this[int i]`
5. Declare an extension method: `static bool IsEven(this int n)`

**`base`** refers to the **parent part** of the current object. Uses:
1. Call the parent constructor: `: base(name, side)`
2. Call the parent version of an overridden method: `base.Attack(target);`

```csharp
public override void Attack(Unit target)
{
    Console.Write("[indirect] ");
    base.Attack(target);         // reuse parent logic, then extend
}
```
Neither `this` nor `base` can be used inside a **static** method.

---

## A11. Value vs Reference Semantics: struct, class, record, enum

### Passing objects to methods (verified, very common exam question)

```csharp
class Soldier { public string Name { get; set; } = ""; }

static void Change(Soldier s)
{
    s.Name = "Changed";                 // modifies the SAME object the caller has
    s = new Soldier { Name = "New" };   // only the local copy of the reference changes
}
static void ChangeRef(ref Soldier s)
{
    s = new Soldier { Name = "New" };   // caller's variable now points to the new object
}

var x = new Soldier { Name = "Old" };
Change(x);           Console.WriteLine(x.Name);   // Changed
ChangeRef(ref x);    Console.WriteLine(x.Name);   // New
```

A reference type is passed **by value of the reference** (a copy of the address). The method can modify the object, but reassigning the parameter does not affect the caller unless you use `ref`.

### struct vs class (verified)

```csharp
struct PointS { public int X; }
class  PointC { public int X; }

var p = new PointS { X = 1 }; var q = p; q.X = 99;
Console.WriteLine($"{p.X} {q.X}");   // 1 99    (struct: the whole value is copied)

var r = new PointC { X = 1 }; var t = r; t.X = 99;
Console.WriteLine($"{r.X} {t.X}");   // 99 99   (class: the reference is copied)
```

| struct | class |
|---|---|
| Value type | Reference type |
| Assignment copies the data | Assignment copies the reference |
| Cannot inherit or be inherited (can implement interfaces) | Supports inheritance |
| Default value: all fields zero | Default value: `null` |
| No finalizer | Can have a finalizer |
| Good for small data: `Point`, `Vec`, `DateTime` | Good for entities with identity and behaviour |
| Derives from `System.ValueType` | Derives from `System.Object` |

### record (C# 9) (verified)

```csharp
public record Pos(int X, int Y);       // positional record: immutable, value equality

var a = new Pos(1, 2);
var b = new Pos(1, 2);
Console.WriteLine(a == b);             // True   (compares values)
Console.WriteLine(a);                  // Pos { X = 1, Y = 2 }   (auto ToString)
var c = a with { Y = 5 };              // non-destructive copy
Console.WriteLine(c);                  // Pos { X = 1, Y = 5 }

class PosC { public int X, Y; public PosC(int x, int y) { X = x; Y = y; } }
Console.WriteLine(new PosC(1, 2) == new PosC(1, 2));   // False  (class compares references)
```
Use records for **data transfer objects (DTOs)**, messages, and events in a simulation log.

### Boxing and unboxing (verified)

```csharp
int n = 5;
object o = n;          // boxing: value copied into a new heap object
int m = (int)o;        // unboxing: must cast to the EXACT type
// long l = (long)o;   // runtime InvalidCastException
```
Boxing costs memory and time. Generics (`List<int>`) avoid it; old `ArrayList` boxes every `int`.

### enum (verified)

```csharp
enum UnitStatus { Idle, Moving, Engaging, Destroyed }   // underlying int: 0, 1, 2, 3

var st = UnitStatus.Engaging;
Console.WriteLine((int)st);                 // 2
Console.WriteLine(st);                      // Engaging
Console.WriteLine((UnitStatus)3);           // Destroyed
Console.WriteLine(Enum.Parse<UnitStatus>("Moving") == UnitStatus.Moving);   // True
```

---

## A12. Object Relationships and UML Class Notation

| Relationship | Meaning | Strength | Example | UML symbol |
|---|---|---|---|---|
| **Dependency** | A uses B temporarily (parameter, local variable) | Weakest | `Officer.Call(Radio r)` | dashed arrow `- - - ->` |
| **Association** | A knows B (field reference); both live independently | Weak | `Officer` has a `Radio` field | solid line `────` |
| **Aggregation** | "has-a"; whole and parts can live independently | Medium | `Platoon` has `Soldier`s | hollow diamond at the whole `◇────` |
| **Composition** | "owns"; part is created and dies with the whole | Strong | `Tank` owns its `Engine` | filled diamond at the whole `◆────` |
| **Generalization (inheritance)** | "is-a" | Strong | `Tank` is a `Vehicle` | solid line, hollow triangle at parent `────▷` |
| **Realization** | class implements interface | — | `Tank` implements `IMovable` | dashed line, hollow triangle `- - -▷` |

```csharp
// Dependency: Radio is only a parameter
class Officer1 { public void Call(Radio r) => r.Transmit("SITREP"); }

// Association: Officer keeps a reference, but does not own the Radio
class Officer2 { public Radio? Radio { get; set; } }

// Aggregation: soldiers are created outside and passed in; they survive if the platoon is disbanded
class Platoon
{
    private readonly List<Soldier> _soldiers = new();
    public void Assign(Soldier s) => _soldiers.Add(s);
}

// Composition: the Engine is created inside the Tank and is never shared
class Engine { public int Hp { get; } public Engine(int hp) => Hp = hp; }
class Tank
{
    private readonly Engine _engine = new Engine(1200);
}
```

### Aggregation vs Composition

| Aggregation | Composition |
|---|---|
| Weak "has-a" | Strong "owns" / "part-of" |
| Part can exist without the whole | Part cannot exist without the whole |
| Part is created outside and passed in | Part is created inside the whole |
| Part may be shared | Part is not shared |
| Hollow diamond ◇ | Filled diamond ◆ |
| Department – Teacher, Platoon – Soldier | House – Room, Tank – Engine |

### UML class box

```
┌─────────────────────────────────┐
│      «abstract» Unit            │   ← class name (italic or «abstract» for abstract)
├─────────────────────────────────┤
│ - _strength : int               │   ← attributes:  -  private
│ + Name : string                 │                  +  public
│ + Side : Side                   │                  #  protected
│ # X : int                       │                  ~  internal / package
├─────────────────────────────────┤
│ + Attack(target : Unit) : void  │   ← operations
│ + TakeDamage(d : int) : void    │
│ + FirePower : int {abstract}    │
└─────────────────────────────────┘
```

### Class diagram for the war-game model (A21)

```
                 «interface»
                  IMovable
              + MoveToward(x)
                 △       △
                 ┊       ┊   (realization: dashed line)
┌────────────────┴─┐   ┌─┴──────────────┐   ┌──────────────────┐
│    Infantry      │   │      Tank      │   │    Artillery     │
└────────┬─────────┘   └───────┬────────┘   └────────┬─────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               ▽   (generalization: solid line, hollow triangle)
                      ┌──────────────────┐            ┌──────────────┐
                      │ «abstract» Unit  │*─────────◇ │    Battle    │
                      └──────────────────┘            └──────────────┘
                                         (aggregation: Battle has many Units)
```

Multiplicity: `1` exactly one, `0..1` zero or one, `*` or `0..*` many, `1..*` one or more.

---

## A13. Object Equality

| Expression | For classes (default) | For `string` | For structs / records |
|---|---|---|---|
| `a == b` | Same reference? | Same characters (operator overloaded) | Records: same values. Structs: only if `==` is defined |
| `a.Equals(b)` | Same reference (unless overridden) | Same characters | Same values |
| `ReferenceEquals(a, b)` | Same reference | Same reference | Always False for value types (boxed separately) |

**Traps (verified)**
```csharp
object a = 5, b = 5;
Console.WriteLine(a == b);        // False  (two different boxed objects; reference comparison)
Console.WriteLine(a.Equals(b));   // True   (Int32.Equals compares values)

string s1 = "hi";
string s2 = new string(new[] { 'h', 'i' });
Console.WriteLine(s1 == s2);                   // True   (string overloads ==)
Console.WriteLine((object)s1 == (object)s2);   // False  (object == compares references)
Console.WriteLine(s1.Equals(s2));              // True
```

### Overriding Equals and GetHashCode (verified)

```csharp
class Rank
{
    public string Title { get; }
    public Rank(string t) { Title = t; }
    public override bool Equals(object? obj) => obj is Rank r && r.Title == Title;
    public override int GetHashCode() => Title.GetHashCode();
}

var set = new HashSet<Rank> { new Rank("Major"), new Rank("Major") };
Console.WriteLine(set.Count);    // 1   (equal objects → treated as one)

var set2 = new HashSet<Soldier> { new Soldier { Name = "A" }, new Soldier { Name = "A" } };
Console.WriteLine(set2.Count);   // 2   (Soldier does not override Equals → reference equality)
```
**Rule:** if two objects are equal by `Equals`, they **must** return the same `GetHashCode`. Otherwise `Dictionary` and `HashSet` break.

---

## A14. Shallow Copy vs Deep Copy

| Shallow copy | Deep copy |
|---|---|
| Copies the fields; **reference fields still point to the same objects** | Copies the fields **and** creates new copies of referenced objects |
| `MemberwiseClone()` | Write it manually, or serialize/deserialize |
| Fast | Slower |
| Changing a shared inner object affects both copies | Copies are fully independent |

```csharp
class Platoon
{
    public string Name { get; set; } = "";
    public Soldier Leader { get; set; } = new();
    public Platoon ShallowCopy() => (Platoon)MemberwiseClone();
    public Platoon DeepCopy() => new Platoon { Name = Name, Leader = new Soldier { Name = Leader.Name } };
}

var p1 = new Platoon { Name = "1 Pl", Leader = new Soldier { Name = "Rahim" } };
var shallow = p1.ShallowCopy();
var deep = p1.DeepCopy();
p1.Name = "2 Pl";
p1.Leader.Name = "Karim";

Console.WriteLine($"{shallow.Name} {shallow.Leader.Name}");   // 1 Pl Karim   ← Leader is shared
Console.WriteLine($"{deep.Name} {deep.Leader.Name}");         // 1 Pl Rahim
```
`shallow.Name` stayed "1 Pl" because `p1.Name = "2 Pl"` makes `p1` point to a **new** string; the copy still points to the old one. Strings are immutable, so they behave like values here.

---

## A15. Generics

**Definition:** Generics let you write a class, interface, or method with a **type parameter** (`T`) that is filled in later. Benefits: **type safety** at compile time, **no boxing**, **code reuse**.

```csharp
// Generic method
public static void Swap<T>(ref T a, ref T b) { T t = a; a = b; b = t; }

// Generic method with a constraint
public static T Max<T>(T a, T b) where T : IComparable<T> => a.CompareTo(b) >= 0 ? a : b;

int a = 1, b = 2; Swap(ref a, ref b);   // a = 2, b = 1
Console.WriteLine(Max(3, 9));           // 9
Console.WriteLine(Max("apple", "mango"));   // mango
```

### Generic repository (verified)

```csharp
public interface IEntity { int Id { get; } }
public class Weapon : IEntity { public int Id { get; set; } public string Name { get; set; } = ""; }

public interface IRepository<T> where T : IEntity
{
    void Add(T item);
    T? GetById(int id);
    IEnumerable<T> GetAll();
}

public class InMemoryRepository<T> : IRepository<T> where T : class, IEntity
{
    private readonly Dictionary<int, T> _store = new();
    public void Add(T item) => _store[item.Id] = item;
    public T? GetById(int id) => _store.TryGetValue(id, out var v) ? v : null;
    public IEnumerable<T> GetAll() => _store.Values;
}

var repo = new InMemoryRepository<Weapon>();
repo.Add(new Weapon { Id = 1, Name = "Rifle" });
repo.Add(new Weapon { Id = 2, Name = "Mortar" });
Console.WriteLine(repo.GetById(2)?.Name);                  // Mortar
Console.WriteLine(repo.GetAll().Count());                  // 2
Console.WriteLine(repo.GetById(9)?.Name ?? "not found");   // not found
```

### Generic stack implementation (verified, common written question)

```csharp
public class MyStack<T>
{
    private readonly T[] _items;
    private int _top = -1;

    public MyStack(int capacity) => _items = new T[capacity];
    public int Count => _top + 1;

    public void Push(T item)
    {
        if (_top == _items.Length - 1) throw new InvalidOperationException("Stack overflow");
        _items[++_top] = item;
    }

    public T Pop()
    {
        if (_top < 0) throw new InvalidOperationException("Stack underflow");
        return _items[_top--];
    }

    public T Peek() => _top < 0 ? throw new InvalidOperationException("Stack empty") : _items[_top];
}

var st = new MyStack<string>(2);
st.Push("A"); st.Push("B");
try { st.Push("C"); } catch (InvalidOperationException ex) { Console.WriteLine(ex.Message); }  // Stack overflow
Console.WriteLine(st.Pop());    // B
Console.WriteLine(st.Peek());   // A
Console.WriteLine(st.Count);    // 1
```

### Generic constraints

| Constraint | Meaning |
|---|---|
| `where T : class` | T must be a reference type |
| `where T : struct` | T must be a non-nullable value type |
| `where T : new()` | T must have a public parameterless constructor |
| `where T : Unit` | T must be `Unit` or derive from it |
| `where T : IComparable<T>` | T must implement the interface |
| `where T : U` | T must derive from another type parameter U |
| `where T : notnull` | T must be non-nullable |
| `where T : unmanaged` | T must be an unmanaged value type (int, double, simple structs) |

**Covariance (`out T`)** — `IEnumerable<string>` can be used as `IEnumerable<object>` (verified). But `List<string>` **cannot** be assigned to `List<object>`, because a list allows writing.

---

## A16. Delegates and Events

**Delegate:** a **type-safe function pointer**: a variable that holds a reference to a method with a matching signature.

```csharp
delegate void Notify(string msg);       // custom delegate type

static void MsgA(string s) => Console.WriteLine($"A got {s}");
static void MsgB(string s) => Console.WriteLine($"B got {s}");

Notify n = MsgA;
n += MsgB;            // multicast: two methods
n("move");            // A got move / B got move
n -= MsgA;
n("halt");            // B got halt
```

**Built-in generic delegates (verified):**
```csharp
Func<int, int, int> add = (a, b) => a + b;     // takes inputs, returns a value (last type = return)
Action<string> say = m => Console.WriteLine($"Say: {m}");   // returns void
Predicate<int> isAdult = age => age >= 18;     // returns bool

Console.WriteLine(add(2, 3));     // 5
say("ready");                     // Say: ready
Console.WriteLine(isAdult(16));   // False
```

**Event:** a delegate wrapped with restrictions. Outside code can only **subscribe (`+=`) or unsubscribe (`-=`)**; only the declaring class can **raise** it. This is the **Observer pattern** built into C#.

```csharp
public class ContactEventArgs : EventArgs
{
    public string Callsign { get; }
    public int RangeKm { get; }
    public ContactEventArgs(string c, int r) { Callsign = c; RangeKm = r; }
}

public class Radar                                   // publisher
{
    public event EventHandler<ContactEventArgs>? ContactDetected;
    public void Detect(string callsign, int km) =>
        ContactDetected?.Invoke(this, new ContactEventArgs(callsign, km));
}

var radar = new Radar();
radar.ContactDetected += (s, e) => Console.WriteLine($"HQ: contact {e.Callsign} at {e.RangeKm} km");  // subscriber 1
radar.ContactDetected += (s, e) => Console.WriteLine($"Log: {e.Callsign}");                            // subscriber 2
radar.Detect("Bandit-1", 12);
```
Output:
```
HQ: contact Bandit-1 at 12 km
Log: Bandit-1
```

| Delegate | Event |
|---|---|
| A type (function pointer) | A class member based on a delegate |
| Anyone with access can invoke it or reassign it with `=` | Only the declaring class can invoke it |
| Can be used as a parameter, a callback | Outside: only `+=` and `-=` |

**Lambda capture trap (verified):**
```csharp
var acts = new List<Action>();
for (int i = 0; i < 3; i++) acts.Add(() => Console.Write(i));
foreach (var a in acts) a();      // 333  (all lambdas share one variable i, which ended at 3)

var acts2 = new List<Action>();
foreach (var i in new[] { 0, 1, 2 }) acts2.Add(() => Console.Write(i));
foreach (var a in acts2) a();     // 012  (foreach creates a new variable each iteration)
```

---

## A17. Exception Handling in OOP

**Exception hierarchy (main classes):**
```
System.Object
 └─ System.Exception
     ├─ System.SystemException
     │   ├─ NullReferenceException
     │   ├─ IndexOutOfRangeException
     │   ├─ InvalidCastException
     │   ├─ ArithmeticException
     │   │   ├─ DivideByZeroException
     │   │   └─ OverflowException
     │   ├─ ArgumentException
     │   │   ├─ ArgumentNullException
     │   │   └─ ArgumentOutOfRangeException
     │   ├─ InvalidOperationException
     │   ├─ FormatException
     │   ├─ OutOfMemoryException
     │   └─ StackOverflowException
     └─ ApplicationException (old style; derive custom exceptions from Exception)
```

### try / catch / finally order (verified)

```csharp
try
{
    Console.WriteLine("try start");
    int[] a = new int[2];
    a[5] = 1;                                  // throws
    Console.WriteLine("never printed");
}
catch (IndexOutOfRangeException) { Console.WriteLine("caught index"); }   // specific first
catch (Exception)                { Console.WriteLine("caught general"); } // general last
finally                          { Console.WriteLine("finally"); }
Console.WriteLine("after");
```
Output:
```
try start
caught index
finally
after
```
Rules:
- Put **specific** catch blocks **before** general ones. A general `catch (Exception)` before a specific one is a compile error (the specific block would be unreachable).
- `finally` always runs (exception or not, even after `return`). It does not run if the process is killed or on `StackOverflowException`.

### `finally` with `return` (verified)

```csharp
static int Get()
{
    int x = 1;
    try { return x; }               // return value (1) is decided here
    finally { x = 2; Console.WriteLine("finally runs"); }
}
Console.WriteLine(Get());
```
Output: `finally runs` then `1`.

### Custom exception

```csharp
public class InsufficientFundsException : Exception
{
    public decimal Requested { get; }
    public InsufficientFundsException(decimal requested, decimal balance)
        : base($"Cannot withdraw {requested}; balance is {balance}")
        => Requested = requested;
}
```
Convention: name ends with `Exception`; derive from `Exception`; pass the message to `base(...)`.

### `throw` vs `throw ex`

```csharp
catch (Exception ex)
{
    Log(ex);
    throw;        // re-throws and KEEPS the original stack trace  ✔
    // throw ex;  // re-throws but RESETS the stack trace to this line ✘
}
```

### Exception filter (verified)
```csharp
try { throw new InvalidOperationException("Radio jammed"); }
catch (InvalidOperationException ex) when (ex.Message.Contains("jammed"))
{
    Console.WriteLine("Switch frequency");
}
```

### Arithmetic traps (verified)
```csharp
int zero = 0;
// Console.WriteLine(7 / zero);   // DivideByZeroException (integer)
Console.WriteLine(7.0 / 0);       // ∞  (double division does NOT throw: Infinity)

int m = int.MaxValue;
m = m + 1;                        // -2147483648 (silent overflow, unchecked by default)
int n = int.MaxValue;
// n = checked(n + 1);            // OverflowException
```

---

## A18. SOLID Principles (violation → fix)

### S — Single Responsibility Principle
"A class should have **only one reason to change**."

```csharp
// ✘ Violation: one class calculates, saves, and emails
class ExerciseReport
{
    public double CalculateScore() { /* ... */ return 0; }
    public void SaveToDatabase() { /* SQL code */ }
    public void EmailToHq() { /* SMTP code */ }
}

// ✔ Fix: one job per class
class ScoreCalculator   { public double Calculate(Exercise e) => 0; }
class ReportRepository  { public void Save(Report r) { } }
class HqNotifier        { public void Send(Report r) { } }
```

### O — Open/Closed Principle
"Open for **extension**, closed for **modification**."

```csharp
// ✘ Violation: every new unit type forces a change here
int FirePower(string type, int size) => type switch
{
    "Infantry" => size / 10,
    "Armour"   => size * 3,
    _ => 0
};

// ✔ Fix: add a new class; existing code is untouched (verified: total = 10 + 30 + 20 = 60)
abstract class Unit { public abstract int FirePower { get; } }
class Infantry : Unit { private readonly int _men;  public Infantry(int m) => _men = m;  public override int FirePower => _men / 10; }
class Armour   : Unit { private readonly int _tanks; public Armour(int t) => _tanks = t;  public override int FirePower => _tanks * 3; }
class Drone    : Unit { private readonly int _n;     public Drone(int n) => _n = n;      public override int FirePower => _n * 4; }  // NEW, nothing else changed

Unit[] units = { new Infantry(100), new Armour(10), new Drone(5) };
Console.WriteLine(units.Sum(u => u.FirePower));   // 60
```

### L — Liskov Substitution Principle
"Objects of a child class must be usable **wherever the parent is expected**, without breaking the program."

```csharp
// ✘ Violation: Knife inherits Reload() but cannot reload
class Weapon { public virtual string Reload() => "reloaded"; }
class Knife : Weapon { public override string Reload() => throw new NotSupportedException(); }
// Code that loops over List<Weapon> and calls Reload() now crashes.

// ✔ Fix: only reloadable weapons have Reload (verified)
abstract class Weapon2 { public abstract string Use(); }
interface IReloadable { string Reload(); }
class Rifle : Weapon2, IReloadable { public override string Use() => "Rifle fires"; public string Reload() => "(rifle reloaded)"; }
class Knife2 : Weapon2 { public override string Use() => "Knife strikes"; }

foreach (Weapon2 w in new List<Weapon2> { new Rifle(), new Knife2() })
{
    Console.Write(w.Use() + " ");
    if (w is IReloadable r) Console.Write(r.Reload());
    Console.WriteLine();
}
// Rifle fires (rifle reloaded)
// Knife strikes
```
Classic textbook example: `Square : Rectangle`. Setting `Width` on a square also changes `Height`, which breaks code that expects a rectangle.

### I — Interface Segregation Principle
"Clients should not be forced to depend on methods they do not use." Many small interfaces are better than one fat interface.

```csharp
// ✘ Violation
interface IUnit { void Move(); void Fire(); void Fly(); void Dive(); }
class InfantrySection : IUnit { public void Fly() => throw new NotSupportedException(); /* ... */ }

// ✔ Fix
interface IMovable  { void Move(); }
interface IFirer    { void Fire(); }
interface IFlyable  { void Fly(); }
class InfantrySection2 : IMovable, IFirer { public void Move() { } public void Fire() { } }
class Helicopter : IMovable, IFirer, IFlyable { public void Move() { } public void Fire() { } public void Fly() { } }
```

### D — Dependency Inversion Principle
"High-level modules should not depend on low-level modules. **Both should depend on abstractions.**"

```csharp
// ✘ Violation: MissionPlanner is welded to SQL Server
class MissionPlanner0 { private readonly SqlMissionRepository _repo = new(); }

// ✔ Fix: depend on an interface, receive it through the constructor (verified)
interface IMissionRepository { void Save(string m); IEnumerable<string> All(); }

class InMemoryMissionRepository : IMissionRepository
{
    private readonly List<string> _db = new();
    public void Save(string m) => _db.Add(m);
    public IEnumerable<string> All() => _db;
}

class MissionPlanner
{
    private readonly IMissionRepository _repo;
    public MissionPlanner(IMissionRepository repo) => _repo = repo;   // constructor injection
    public void Plan(string name) => _repo.Save($"Mission:{name}");
}

IMissionRepository repo = new InMemoryMissionRepository();   // swap for SQL/Mongo later
var planner = new MissionPlanner(repo);
planner.Plan("Recce"); planner.Plan("Raid");
Console.WriteLine(string.Join(", ", repo.All()));   // Mission:Recce, Mission:Raid
```

In ASP.NET Core the DI container does the `new` for you:
```csharp
builder.Services.AddScoped<IMissionRepository, SqlMissionRepository>();
```

| DI lifetime | Instance created |
|---|---|
| `AddSingleton` | Once for the whole application |
| `AddScoped` | Once per HTTP request (scope) |
| `AddTransient` | Every time it is requested |

**DIP vs DI vs IoC:** DIP is the **principle** (depend on abstractions). Dependency Injection is the **technique** (pass dependencies from outside). Inversion of Control is the **general idea** (a framework controls object creation and flow, not your code).

---

## A19. Other Design Principles

| Principle | Meaning |
|---|---|
| **DRY** — Don't Repeat Yourself | Every piece of logic should exist in one place |
| **KISS** — Keep It Simple, Stupid | Prefer the simplest working design |
| **YAGNI** — You Aren't Gonna Need It | Do not build features before they are needed |
| **High cohesion** | A class's members are closely related to one job |
| **Low coupling** | Classes depend on each other as little as possible (through interfaces) |
| **Law of Demeter** | Talk only to immediate friends: avoid `a.GetB().GetC().Do()` |
| **Composition over inheritance** | Build behaviour by combining objects ("has-a") instead of deep class trees |
| **Program to an interface** | Declare variables as `IRepository`, not `SqlRepository` |
| **Tell, don't ask** | Tell an object to do work (`acc.Withdraw(x)`), do not read its data and decide outside |

### Composition over inheritance

```csharp
// ✘ Inheritance explosion: TankWithMg, TankWithMissile, ApcWithMg, ApcWithMissile, ...
// ✔ Composition: a vehicle HAS a weapon and an engine; swap them at run time
interface IWeaponSystem { string Fire(); }
class MachineGun : IWeaponSystem { public string Fire() => "MG burst"; }
class AtMissile  : IWeaponSystem { public string Fire() => "ATGM launch"; }

class ArmouredVehicle
{
    public IWeaponSystem Weapon { get; set; }
    public ArmouredVehicle(IWeaponSystem w) => Weapon = w;
    public string Engage() => Weapon.Fire();
}

var apc = new ArmouredVehicle(new MachineGun());
Console.WriteLine(apc.Engage());   // MG burst
apc.Weapon = new AtMissile();      // re-armed at run time
Console.WriteLine(apc.Engage());   // ATGM launch
```

### Coupling and cohesion (theory question)

| Cohesion (best → worst) | Coupling (best → worst) |
|---|---|
| Functional | Data (pass only needed data) |
| Sequential | Stamp (pass a whole structure) |
| Communicational | Control (pass a flag that controls logic) |
| Procedural | External (shared external format/device) |
| Temporal | Common (shared global data) |
| Logical | Content (one module changes another's internals) |
| Coincidental | |

Goal: **high cohesion, low coupling**.

---

## A20. Design Patterns with C#

A **design pattern** is a proven, reusable solution to a common design problem. The "Gang of Four" (GoF) book (1994) lists **23** patterns in three groups:

| Creational (5) — object creation | Structural (7) — composing classes | Behavioural (11) — communication |
|---|---|---|
| Singleton | Adapter | Chain of Responsibility |
| Factory Method | Bridge | Command |
| Abstract Factory | Composite | Interpreter |
| Builder | Decorator | Iterator |
| Prototype | Facade | Mediator |
| | Flyweight | Memento |
| | Proxy | Observer |
| | | State |
| | | Strategy |
| | | Template Method |
| | | Visitor |

Architectural patterns often asked too: **MVC, MVVM, Repository, Unit of Work, Dependency Injection, Layered architecture**.

### 1. Singleton (Creational) — exactly one instance (verified)

Use: simulation clock, configuration, logger.
```csharp
public sealed class SimClock
{
    private static readonly Lazy<SimClock> _instance = new(() => new SimClock());  // thread-safe, lazy
    public static SimClock Instance => _instance.Value;
    public int Time { get; private set; }
    private SimClock() { }                 // private: no 'new' from outside
    public void Tick() => Time++;
}

var c1 = SimClock.Instance; var c2 = SimClock.Instance;
c1.Tick(); c2.Tick();
Console.WriteLine(ReferenceEquals(c1, c2));     // True
Console.WriteLine(SimClock.Instance.Time);      // 2
```
Classic thread-safe version with double-checked locking:
```csharp
public sealed class Config
{
    private static Config? _instance;
    private static readonly object _lock = new();
    private Config() { }
    public static Config Instance
    {
        get
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null) _instance = new Config();
                }
            }
            return _instance;
        }
    }
}
```
**Singleton vs static class:** a singleton can implement interfaces, be passed as a parameter, be lazily created, and be replaced in tests. A static class can do none of these.

### 2. Factory Method / Simple Factory (Creational) (verified)

Use: create the right unit object from scenario data (a string read from a file or database).
```csharp
static class UnitFactory
{
    public static Unit Create(string type, string name, Side side) => type switch
    {
        "inf"  => new Infantry(name, side, 0, 100),
        "tank" => new Tank(name, side, 0, 10),
        "arty" => new Artillery(name, side, 0, 20),
        _ => throw new ArgumentException($"Unknown unit type: {type}")
    };
}

foreach (var t in new[] { "inf", "tank", "arty" })
{
    Unit u = UnitFactory.Create(t, "U-" + t, Side.Blue);
    Console.WriteLine($"{u.GetType().Name} power={u.FirePower} range={u.Range}");
}
// Infantry power=10 range=2
// Tank power=30 range=8
// Artillery power=40 range=10
```

### 3. Builder (Creational) (verified)

Use: build a complex object step by step (a scenario with many optional parts).
```csharp
class Scenario
{
    public string Name { get; init; } = "";
    public string Map { get; init; } = "";
    public int Hours { get; init; }
    public List<string> Units { get; init; } = new();
    public override string ToString() => $"{Name} on {Map}, {Hours}h, units: {string.Join("/", Units)}";
}

class ScenarioBuilder
{
    private string _name = "Untitled", _map = "Blank";
    private int _hours = 1;
    private readonly List<string> _units = new();
    public ScenarioBuilder Named(string n)      { _name = n; return this; }   // return this → fluent chaining
    public ScenarioBuilder OnMap(string m)      { _map = m; return this; }
    public ScenarioBuilder WithDuration(int h)  { _hours = h; return this; }
    public ScenarioBuilder AddUnit(string u)    { _units.Add(u); return this; }
    public Scenario Build() => new() { Name = _name, Map = _map, Hours = _hours, Units = new List<string>(_units) };
}

Scenario s = new ScenarioBuilder().Named("Op Shield").OnMap("Mymensingh")
                                  .WithDuration(6).AddUnit("Alpha Coy").AddUnit("Bravo Tank").Build();
Console.WriteLine(s);   // Op Shield on Mymensingh, 6h, units: Alpha Coy/Bravo Tank
```

### 4. Adapter (Structural) (verified)

Use: make an old/incompatible class fit a new interface (legacy GPS device → new map module).
```csharp
class LegacyGps { public string ReadNmea() => "24.7471,90.4203"; }       // old API we cannot change

interface IPositionSource { (double Lat, double Lon) GetLatLon(); }      // what our system expects

class GpsAdapter : IPositionSource
{
    private readonly LegacyGps _gps;
    public GpsAdapter(LegacyGps gps) => _gps = gps;
    public (double Lat, double Lon) GetLatLon()
    {
        var p = _gps.ReadNmea().Split(',');
        return (double.Parse(p[0], CultureInfo.InvariantCulture),
                double.Parse(p[1], CultureInfo.InvariantCulture));
    }
}

IPositionSource src = new GpsAdapter(new LegacyGps());
var (lat, lon) = src.GetLatLon();
Console.WriteLine($"{lat}, {lon}");   // 24.7471, 90.4203
```

### 5. Decorator (Structural) (verified)

Use: add features to an object at run time without changing its class (rifle attachments).
```csharp
interface IRifle { string Describe(); int Accuracy { get; } }
class BasicRifle : IRifle { public string Describe() => "Rifle"; public int Accuracy => 60; }

abstract class RifleDecorator : IRifle
{
    protected readonly IRifle Inner;
    protected RifleDecorator(IRifle inner) => Inner = inner;
    public virtual string Describe() => Inner.Describe();
    public virtual int Accuracy => Inner.Accuracy;
}
class ScopeAttachment : RifleDecorator
{
    public ScopeAttachment(IRifle r) : base(r) { }
    public override string Describe() => Inner.Describe() + " + Scope";
    public override int Accuracy => Inner.Accuracy + 25;
}
class SilencerAttachment : RifleDecorator
{
    public SilencerAttachment(IRifle r) : base(r) { }
    public override string Describe() => Inner.Describe() + " + Silencer";
    public override int Accuracy => Inner.Accuracy - 5;
}

IRifle r = new BasicRifle();
Console.WriteLine($"{r.Describe()} | accuracy {r.Accuracy}");   // Rifle | accuracy 60
r = new ScopeAttachment(r);
r = new SilencerAttachment(r);
Console.WriteLine($"{r.Describe()} | accuracy {r.Accuracy}");   // Rifle + Scope + Silencer | accuracy 80
```

### 6. Composite (Structural) (verified)

Use: tree structures where a group and a single item are treated the same — an **ORBAT** (order of battle): brigade → battalion → company.
```csharp
abstract class OrbatNode
{
    public string Name { get; }
    protected OrbatNode(string name) => Name = name;
    public abstract int Strength { get; }
    public abstract void Print(int indent);
}
class SubUnit : OrbatNode                       // leaf
{
    private readonly int _men;
    public SubUnit(string n, int men) : base(n) => _men = men;
    public override int Strength => _men;
    public override void Print(int indent) => Console.WriteLine($"{new string(' ', indent)}- {Name} ({_men})");
}
class Formation : OrbatNode                     // composite: contains children
{
    private readonly List<OrbatNode> _children = new();
    public Formation(string n) : base(n) { }
    public void Add(OrbatNode node) => _children.Add(node);
    public override int Strength => _children.Sum(c => c.Strength);   // recursion
    public override void Print(int indent)
    {
        Console.WriteLine($"{new string(' ', indent)}+ {Name} [{Strength}]");
        foreach (var c in _children) c.Print(indent + 2);
    }
}

var bde = new Formation("Blue Bde");
var bn = new Formation("1 Bn");
bn.Add(new SubUnit("A Coy", 120)); bn.Add(new SubUnit("B Coy", 110));
bde.Add(bn); bde.Add(new SubUnit("Arty Bty", 90));
bde.Print(0);
Console.WriteLine($"Total strength: {bde.Strength}");
```
Output:
```
+ Blue Bde [320]
  + 1 Bn [230]
    - A Coy (120)
    - B Coy (110)
  - Arty Bty (90)
Total strength: 320
```

### 7. Facade (Structural)

Use: one simple entry point for a complex subsystem.
```csharp
class SimulationFacade
{
    private readonly TerrainLoader _terrain = new();
    private readonly UnitLoader _units = new();
    private readonly SimEngine _engine = new();
    public void StartExercise(string scenarioFile)
    {
        _terrain.Load(scenarioFile);
        _units.Load(scenarioFile);
        _engine.Run();
    }
}
// Client code: new SimulationFacade().StartExercise("op_shield.json");
```

### 8. Strategy (Behavioural) (verified)

Use: change an algorithm at run time (fire mode, AI behaviour, pathfinding algorithm).
```csharp
interface IFireStrategy { string Fire(int rounds); }
class DirectFire   : IFireStrategy { public string Fire(int r) => $"Direct fire: {r} rounds at visible target"; }
class IndirectFire : IFireStrategy { public string Fire(int r) => $"Indirect fire: {r} rounds on grid reference"; }

class Gunner
{
    public IFireStrategy Strategy { get; set; }
    public Gunner(IFireStrategy s) => Strategy = s;
    public string Engage(int r) => Strategy.Fire(r);
}

var gun = new Gunner(new DirectFire());
Console.WriteLine(gun.Engage(10));    // Direct fire: 10 rounds at visible target
gun.Strategy = new IndirectFire();
Console.WriteLine(gun.Engage(10));    // Indirect fire: 10 rounds on grid reference
```

### 9. Observer (Behavioural)
One object (subject) notifies many subscribers when its state changes. In C# use **events** — see the Radar example in A16.

### 10. Command (Behavioural) (verified)

Use: wrap an order as an object → queue, log, replay, and **undo** moves.
```csharp
class MapUnit { public int X, Y; }

interface ICommand { void Execute(); void Undo(); }

class MoveCommand : ICommand
{
    private readonly MapUnit _u; private readonly int _dx, _dy;
    public MoveCommand(MapUnit u, int dx, int dy) { _u = u; _dx = dx; _dy = dy; }
    public void Execute() { _u.X += _dx; _u.Y += _dy; }
    public void Undo()    { _u.X -= _dx; _u.Y -= _dy; }
}

class CommandInvoker
{
    private readonly Stack<ICommand> _done = new();
    public void Execute(ICommand c) { c.Execute(); _done.Push(c); }
    public void Undo() { if (_done.Count > 0) _done.Pop().Undo(); }
}

var u = new MapUnit(); var inv = new CommandInvoker();
inv.Execute(new MoveCommand(u, 3, 0));
inv.Execute(new MoveCommand(u, 0, 2));
Console.WriteLine($"({u.X},{u.Y})");   // (3,2)
inv.Undo(); Console.WriteLine($"({u.X},{u.Y})");   // (3,0)
inv.Undo(); Console.WriteLine($"({u.X},{u.Y})");   // (0,0)
```

### 11. State (Behavioural) (verified)

Use: an object changes behaviour when its internal state changes (unit AI: Patrol → Attack → Retreat).
```csharp
interface ITankState { string Name { get; } ITankState Next(bool enemyVisible, int health); }

class PatrolState : ITankState
{
    public string Name => "Patrol";
    public ITankState Next(bool e, int h) => e ? new AttackState() : this;
}
class AttackState : ITankState
{
    public string Name => "Attack";
    public ITankState Next(bool e, int h) => h < 30 ? new RetreatState() : (e ? this : new PatrolState());
}
class RetreatState : ITankState
{
    public string Name => "Retreat";
    public ITankState Next(bool e, int h) => this;
}

class TankAi
{
    private ITankState _state = new PatrolState();
    public void Update(bool enemyVisible, int health)
    {
        var old = _state.Name;
        _state = _state.Next(enemyVisible, health);
        Console.WriteLine($"{old} -> {_state.Name}");
    }
}

var ai = new TankAi();
ai.Update(enemyVisible: false, health: 100);   // Patrol -> Patrol
ai.Update(true, 100);                          // Patrol -> Attack
ai.Update(true, 20);                           // Attack -> Retreat
ai.Update(false, 20);                          // Retreat -> Retreat
```

### 12. Template Method (Behavioural) (verified)

Use: the base class fixes the **steps** of an algorithm; children fill in some steps.
```csharp
abstract class Exercise
{
    public void Run()                     // template method: fixed order
    {
        Brief();
        Execute();
        Console.WriteLine("After-action review");
    }
    protected virtual void Brief() => Console.WriteLine("Standard briefing");   // hook (optional)
    protected abstract void Execute();                                          // must implement
}
class FieldExercise : Exercise { protected override void Execute() => Console.WriteLine("Troops move in the field"); }
class MapExercise : Exercise
{
    protected override void Brief() => Console.WriteLine("Map briefing in war room");
    protected override void Execute() => Console.WriteLine("Moves played on the map");
}

new FieldExercise().Run();
new MapExercise().Run();
```
Output:
```
Standard briefing
Troops move in the field
After-action review
Map briefing in war room
Moves played on the map
After-action review
```

### 13. Repository and Unit of Work (Architectural)
- **Repository:** hides data-access code behind an interface (`IRepository<T>` in A15). The business layer does not know whether data comes from SQL Server, MongoDB, or memory.
- **Unit of Work:** groups several repository changes into **one transaction** (`SaveChanges()` in EF Core's `DbContext` is a unit of work).

### 14. MVC and MVVM

| MVC (ASP.NET Core MVC) | MVVM (WPF, MAUI) |
|---|---|
| **Model:** data + business rules | **Model:** data + business rules |
| **View:** UI (Razor page) | **View:** XAML UI |
| **Controller:** receives the request, calls the model, picks the view | **ViewModel:** exposes data and commands; the View binds to it |
| Request-driven (web) | Data-binding driven (desktop) |

### Pattern → war-game use (quick table)

| Pattern | War-game use |
|---|---|
| Singleton | Simulation clock, config, logger |
| Factory | Create units from scenario file |
| Builder | Build a scenario with many options |
| Prototype | Clone a unit template ("copy this tank 10 times") |
| Adapter | Connect a legacy GPS/radar feed |
| Decorator | Weapon attachments, unit buffs |
| Composite | ORBAT tree (brigade → battalion → company) |
| Facade | One `StartExercise()` call for terrain + units + engine |
| Proxy | Lazy-load a huge terrain map; access control |
| Observer | Radar contact → HQ, map, log are notified |
| Strategy | Fire modes, AI behaviour, pathfinding (A* vs Dijkstra) |
| Command | Orders with undo/replay; after-action review |
| State | Unit AI: Patrol, Attack, Retreat, Destroyed |
| Template Method | Exercise phases: brief → execute → review |
| Memento | Save/restore a simulation snapshot |
| Mediator | Control cell coordinates Blue and Red players |

---

## A21. Full War-Game Class Design (written-exam answer)

**Likely question:** *"Design an object-oriented model for a simple war-game simulation. Draw the class diagram and write C# code that shows encapsulation, abstraction, inheritance, polymorphism, and interfaces."*

### Step 1 — Requirements
- Two sides: **Blue** (own force) and **Red** (opposing force).
- Unit types: **Infantry, Tank, Artillery**. Every unit has a name, side, position, and strength.
- Fire power and range depend on the unit type.
- Infantry and tanks can **move**; artillery cannot.
- Turn-based: each surviving unit fires at the first enemy within its range.
- When a unit is destroyed, the battle is **notified**.
- The battle ends when one side has no surviving units.

### Step 2 — Identify classes (nouns → classes, verbs → methods)
| Noun / verb | Becomes |
|---|---|
| unit | `abstract class Unit` |
| infantry, tank, artillery | `Infantry`, `Tank`, `Artillery` (derived classes) |
| side | `enum Side` |
| can move | `interface IMovable` |
| fire, take damage | `Attack()`, `TakeDamage()` methods |
| destroyed notification | `event Destroyed` |
| battle, turn | `class Battle` with `Run()` |

### Step 3 — Class diagram
See the diagram in A12 (`Unit` abstract base; `Infantry`, `Tank`, `Artillery` derive from it; `Infantry` and `Tank` realize `IMovable`; `Battle` aggregates many `Unit`s).

### Step 4 — Code (verified, .NET 10)

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

var battle = new Battle();
battle.Add(new Infantry("Alpha Coy", Side.Blue, 0, 100));
battle.Add(new Tank("Bravo Tank", Side.Blue, 0, 10));
battle.Add(new Infantry("Red Coy", Side.Red, 3, 80));
battle.Add(new Artillery("Red Bty", Side.Red, 9, 20));
battle.MovePhase();
battle.PrintDeployment();
battle.Run(maxTurns: 10);

public enum Side { Blue, Red }

public interface IMovable                       // INTERFACE: "can-do" ability
{
    void MoveToward(int targetX);
}

public abstract class Unit                      // ABSTRACTION: cannot create a plain "Unit"
{
    private int _strength;                      // ENCAPSULATION: hidden field

    public string Name { get; }
    public Side Side { get; }
    public int X { get; protected set; }        // children may change position
    public int Strength
    {
        get => _strength;
        private set => _strength = Math.Max(0, value);   // validation: never negative
    }
    public bool IsDestroyed => Strength == 0;

    public event Action<Unit>? Destroyed;       // EVENT (Observer pattern)

    protected Unit(string name, Side side, int x, int strength)
    {
        Name = name; Side = side; X = x; Strength = strength;
    }

    public abstract int FirePower { get; }      // each child must define
    public abstract int Range { get; }

    public bool InRange(Unit other) => Math.Abs(X - other.X) <= Range;

    public virtual void Attack(Unit target)     // can be overridden
    {
        Console.WriteLine($"{Name} fires at {target.Name} (power {FirePower})");
        target.TakeDamage(FirePower);
    }

    public void TakeDamage(int damage)
    {
        Strength -= damage;
        Console.WriteLine($"   {Name} strength -> {Strength}");
        if (IsDestroyed) Destroyed?.Invoke(this);
    }

    public override string ToString() => $"[{Side}] {Name}: strength={Strength}, x={X}";
}

public class Infantry : Unit, IMovable          // INHERITANCE + INTERFACE
{
    public Infantry(string name, Side side, int x, int strength) : base(name, side, x, strength) { }
    public override int FirePower => Strength / 10;      // POLYMORPHISM
    public override int Range => 2;
    public void MoveToward(int targetX)
    {
        X += Math.Sign(targetX - X);                     // one step
        Console.WriteLine($"{Name} moves to x={X}");
    }
}

public class Tank : Unit, IMovable
{
    public Tank(string name, Side side, int x, int strength) : base(name, side, x, strength) { }
    public override int FirePower => Strength * 3;
    public override int Range => 8;
    public void MoveToward(int targetX)
    {
        X += 2 * Math.Sign(targetX - X);                 // faster: two steps
        Console.WriteLine($"{Name} moves to x={X}");
    }
}

public sealed class Artillery : Unit            // sealed: no further inheritance; NOT IMovable
{
    public Artillery(string name, Side side, int x, int strength) : base(name, side, x, strength) { }
    public override int FirePower => Strength * 2;
    public override int Range => 10;
    public override void Attack(Unit target)     // extends parent behaviour
    {
        Console.Write("[indirect] ");
        base.Attack(target);
    }
}

public class Battle
{
    private readonly List<Unit> _units = new();                     // AGGREGATION

    public void Add(Unit unit)
    {
        _units.Add(unit);
        unit.Destroyed += u => Console.WriteLine($"   *** {u.Name} destroyed ***");   // subscribe
    }

    private static Side Enemy(Side s) => s == Side.Blue ? Side.Red : Side.Blue;

    private IEnumerable<Unit> Alive(Side side) =>
        _units.Where(u => u.Side == side && !u.IsDestroyed);

    public void MovePhase()
    {
        foreach (var unit in _units)
        {
            if (unit is IMovable mover)                              // only movable units
            {
                Unit enemy = Alive(Enemy(unit.Side)).First();
                mover.MoveToward(enemy.X);
            }
        }
    }

    public void PrintDeployment()
    {
        Console.WriteLine("== Deployment ==");
        foreach (var u in _units) Console.WriteLine(u);              // calls overridden ToString()
    }

    public void Run(int maxTurns)
    {
        for (int turn = 1; turn <= maxTurns; turn++)
        {
            if (!Alive(Side.Blue).Any() || !Alive(Side.Red).Any()) break;
            Console.WriteLine($"--- Turn {turn} ---");
            foreach (var attacker in _units)
            {
                if (attacker.IsDestroyed) continue;
                Unit? target = Alive(Enemy(attacker.Side)).FirstOrDefault(attacker.InRange);
                if (target is null) Console.WriteLine($"{attacker.Name}: no target in range");
                else attacker.Attack(target);                        // RUN-TIME POLYMORPHISM
            }
        }
        string result = (Alive(Side.Blue).Any(), Alive(Side.Red).Any()) switch
        {
            (true, false) => "Blue wins",
            (false, true) => "Red wins",
            _ => "No decision"
        };
        Console.WriteLine($"Result: {result}");
    }
}
```

### Step 5 — Output (verified)
```
Alpha Coy moves to x=1
Bravo Tank moves to x=2
Red Coy moves to x=2
== Deployment ==
[Blue] Alpha Coy: strength=100, x=1
[Blue] Bravo Tank: strength=10, x=2
[Red] Red Coy: strength=80, x=2
[Red] Red Bty: strength=20, x=9
--- Turn 1 ---
Alpha Coy fires at Red Coy (power 10)
   Red Coy strength -> 70
Bravo Tank fires at Red Coy (power 30)
   Red Coy strength -> 40
Red Coy fires at Alpha Coy (power 4)
   Alpha Coy strength -> 96
[indirect] Red Bty fires at Alpha Coy (power 40)
   Alpha Coy strength -> 56
--- Turn 2 ---
Alpha Coy fires at Red Coy (power 5)
   Red Coy strength -> 35
Bravo Tank fires at Red Coy (power 30)
   Red Coy strength -> 5
Red Coy fires at Alpha Coy (power 0)
   Alpha Coy strength -> 56
[indirect] Red Bty fires at Alpha Coy (power 40)
   Alpha Coy strength -> 16
--- Turn 3 ---
Alpha Coy fires at Red Coy (power 1)
   Red Coy strength -> 4
Bravo Tank fires at Red Coy (power 30)
   Red Coy strength -> 0
   *** Red Coy destroyed ***
[indirect] Red Bty fires at Alpha Coy (power 40)
   Alpha Coy strength -> 0
   *** Alpha Coy destroyed ***
--- Turn 4 ---
Bravo Tank fires at Red Bty (power 30)
   Red Bty strength -> 0
   *** Red Bty destroyed ***
Result: Blue wins
```
Notice turn 2: `Red Coy` has strength 5, so `5 / 10 = 0` (integer division) and its power is 0.

### Step 6 — Where each OOP concept appears

| Concept | Where in the code |
|---|---|
| Encapsulation | `private int _strength` with a validating `private set`; `X` has `protected set` |
| Abstraction | `abstract class Unit`, abstract `FirePower` and `Range` |
| Inheritance | `Infantry : Unit`, `Tank : Unit`, `Artillery : Unit`; `base(...)` constructor calls |
| Run-time polymorphism | `attacker.Attack(target)` and `FirePower` resolve to the real type |
| Method overriding + base call | `Artillery.Attack` adds "[indirect]" then calls `base.Attack` |
| Interface | `IMovable` only for units that can move (Interface Segregation) |
| Type check / pattern matching | `if (unit is IMovable mover)` |
| sealed | `Artillery` cannot be inherited |
| Event / Observer | `Destroyed` event; `Battle` subscribes in `Add` |
| Aggregation | `Battle` holds a `List<Unit>` created outside |
| Open/Closed | Add a `Drone : Unit` class; `Battle` does not change |
| ToString override | `PrintDeployment()` prints units with the overridden `ToString()` |

### Step 7 — How to extend (say this for extra marks)
- **Strategy pattern** for target selection (nearest, weakest, highest threat).
- **Factory** to load units from a scenario file or database.
- **Repository** to save the exercise and the event log to SQL Server (see B28).
- **Command pattern** to record every order for **after-action review** (replay/undo).
- **State pattern** for unit AI (Patrol → Attack → Retreat).
- Real-time version: a fixed time-step game loop instead of turns.

---

## A22. More OOP Programs (verified)

### 1. Employee payroll (abstract class + polymorphism)

```csharp
abstract class Employee
{
    public string Name { get; }
    protected Employee(string name) => Name = name;
    public abstract decimal CalculatePay();
    public override string ToString() => $"{GetType().Name,-18} {Name,-6} {CalculatePay(),10:N0}";
}

class SalariedEmployee : Employee
{
    private readonly decimal _monthly;
    public SalariedEmployee(string n, decimal monthly) : base(n) => _monthly = monthly;
    public override decimal CalculatePay() => _monthly;
}

class HourlyEmployee : Employee
{
    private readonly decimal _rate; private readonly int _hours;
    public HourlyEmployee(string n, decimal rate, int hours) : base(n) { _rate = rate; _hours = hours; }
    public override decimal CalculatePay() =>
        _hours <= 160 ? _rate * _hours
                      : _rate * 160 + (_hours - 160) * _rate * 1.5m;   // overtime 1.5x
}

class CommissionEmployee : Employee
{
    private readonly decimal _base, _sales, _rate;
    public CommissionEmployee(string n, decimal b, decimal sales, decimal rate) : base(n)
    { _base = b; _sales = sales; _rate = rate; }
    public override decimal CalculatePay() => _base + _sales * _rate;
}

List<Employee> staff = new()
{
    new SalariedEmployee("Rahim", 60000),
    new HourlyEmployee("Karim", 300, 160),
    new CommissionEmployee("Sadia", 20000, 500000, 0.05m)
};
decimal total = 0;
foreach (var e in staff) { Console.WriteLine(e); total += e.CalculatePay(); }
Console.WriteLine($"Total payroll: {total:N0}");
```
Output:
```
SalariedEmployee   Rahim      60,000
HourlyEmployee     Karim      48,000
CommissionEmployee Sadia      45,000
Total payroll: 153,000
```
(`,-18` = left-align in 18 characters; `,10:N0` = right-align in 10 with thousand separators.)

### 2. Student result (switch expression with relational patterns)

```csharp
class Student
{
    public string Name { get; }
    private readonly int[] _marks;
    public Student(string name, int[] marks) { Name = name; _marks = marks; }
    public double Average => _marks.Average();
    public string Grade => Average switch
    {
        >= 80 => "A+",
        >= 70 => "A",
        >= 60 => "A-",
        >= 50 => "B",
        >= 40 => "C",
        _     => "F"
    };
}

var s1 = new Student("Ayesha", new[] { 85, 72, 64 });
var s2 = new Student("Tanvir", new[] { 55, 40, 30 });
Console.WriteLine($"{s1.Name}: avg {s1.Average:F2}, grade {s1.Grade}");   // Ayesha: avg 73.67, grade A
Console.WriteLine($"{s2.Name}: avg {s2.Average:F2}, grade {s2.Grade}");   // Tanvir: avg 41.67, grade C
```

### 3. Indexer (ORBAT list)

```csharp
class Orbat
{
    private readonly string[] _subUnits = new string[4];
    public string this[int i] { get => _subUnits[i]; set => _subUnits[i] = value; }   // int indexer
    public int this[string name] => Array.IndexOf(_subUnits, name);                   // overloaded indexer
}

var orbat = new Orbat();
orbat[0] = "1 Coy"; orbat[1] = "2 Coy";
Console.WriteLine(orbat[1]);        // 2 Coy
Console.WriteLine(orbat["1 Coy"]);  // 0
```

Other programs already in this file: BankAccount (A3), Shape hierarchy (A7), Vec operator overloading (A7), generic stack (A15), generic repository (A15), all patterns (A20), war game (A21).

---

## A23. Output-Prediction Traps (self-test; every answer verified)

Cover the answer, write your answer, then check.

**1.**
```csharp
class A { public virtual void Show() => Console.WriteLine("A"); }
class B : A { public override void Show() => Console.WriteLine("B"); }
class C : A { public new void Show() => Console.WriteLine("C"); }
A b = new B(); b.Show();
A c = new C(); c.Show();
```
<details><summary>Answer</summary>

`B` then `A`. Override → the object's type decides. `new` → the reference type decides.
</details>

**2.**
```csharp
int x = 5;
x = x++ + ++x;
Console.WriteLine(x);
int y = 10;
int z = y++ + y;
Console.WriteLine($"{y} {z}");
```
<details><summary>Answer</summary>

`12` and `11 21`. `x++` gives 5 (x becomes 6), `++x` makes x 7 and gives 7: 5 + 7 = 12. `y++` gives 10 (y becomes 11), then `+ y` adds 11: z = 21.
</details>

**3.**
```csharp
Console.WriteLine(1 + 2 + "3");
Console.WriteLine("1" + 2 + 3);
Console.WriteLine("1" + (2 + 3));
```
<details><summary>Answer</summary>

`33`, `123`, `15`. Evaluation goes left to right; once a string appears, `+` becomes concatenation.
</details>

**4.**
```csharp
Console.WriteLine(7 / 2);
Console.WriteLine(7 % 2);
Console.WriteLine(-7 / 2);
Console.WriteLine(-7 % 2);
Console.WriteLine(7 / 2.0);
```
<details><summary>Answer</summary>

`3`, `1`, `-3`, `-1`, `3.5`. Integer division truncates toward zero; the remainder takes the sign of the dividend.
</details>

**5.**
```csharp
Console.WriteLine(Math.Round(2.5));
Console.WriteLine(Math.Round(3.5));
Console.WriteLine(Math.Round(2.5, MidpointRounding.AwayFromZero));
```
<details><summary>Answer</summary>

`2`, `4`, `3`. The default is **banker's rounding** (round half to even).
</details>

**6.**
```csharp
Console.WriteLine('A' + 1);
Console.WriteLine((char)('A' + 1));
Console.WriteLine('A' + "1");
```
<details><summary>Answer</summary>

`66`, `B`, `A1`. `char + int` is an `int`. `char + string` is a string.
</details>

**7.**
```csharp
string s = "army";
s.ToUpper();
Console.WriteLine(s);
```
<details><summary>Answer</summary>

`army`. Strings are immutable; `ToUpper()` returns a new string that was ignored. Write `s = s.ToUpper();`.
</details>

**8.**
```csharp
object o = 5;
long l = (long)o;
```
<details><summary>Answer</summary>

Run-time `InvalidCastException`. Unboxing must use the exact type: `(long)(int)o` works.
</details>

**9.**
```csharp
int m = int.MaxValue;
m = m + 1;
Console.WriteLine(m);
```
<details><summary>Answer</summary>

`-2147483648`. Overflow wraps silently in an unchecked context. `checked(m + 1)` throws `OverflowException`.
</details>

**10.**
```csharp
Console.WriteLine(default(int));
Console.WriteLine(default(bool));
Console.WriteLine(default(string) == null);
```
<details><summary>Answer</summary>

`0`, `False`, `True`.
</details>

**11.**
```csharp
static int Sum(params int[] n) => n.Sum();
Console.WriteLine(Sum());
Console.WriteLine(Sum(1, 2, 3));
Console.WriteLine(Sum(new[] { 4, 5 }));
```
<details><summary>Answer</summary>

`0`, `6`, `9`. `params` accepts zero or more arguments, or an array.
</details>

**12.**
```csharp
class Soldier { public string Name { get; set; } = ""; }
Console.WriteLine(new Soldier { Name = "Z" });
```
<details><summary>Answer</summary>

`Soldier`. The default `ToString()` prints the full type name (here there is no namespace). Override `ToString()` to print data.
</details>

**13.**
```csharp
Console.WriteLine("abc" == "ABC");
Console.WriteLine(string.Equals("abc", "ABC", StringComparison.OrdinalIgnoreCase));
```
<details><summary>Answer</summary>

`False`, `True`.
</details>

**14.** Constructor order: see A6 (`Child static ctor`, `Parent static ctor`, `Child field init`, `Parent field init`, `Parent ctor`, `Child ctor`).

**15.** Virtual call from base constructor: see A6 (`B 5`).

**16.** `override` / `new virtual` chain: see A7 (`BBDD`).

**17.** Overload resolution: see A7 (`Show('A')` → `int`; `Show(5.0)` → `object`; `Show(null)` → `string`).

**18.** Passing objects: see A11 (`Changed`, then `New` with `ref`).

**19.** Struct vs class copy: see A11 (`1 99` vs `99 99`).

**20.** Boxed equality: see A13 (`False`, `True`).

**21.** Shallow copy: see A14 (`1 Pl Karim` vs `1 Pl Rahim`).

**22.** Lambda capture: see A16 (`333` vs `012`).

**23.** `finally` with `return`: see A17 (`finally runs`, then `1`).

**24.** Sealed override + `new`: see A6 (`B50`).

**25.** Static hiding: see A8 (`P Q`).

**26.**
```csharp
double d = 7.0 / 0;
Console.WriteLine(d);
int zero = 0;
Console.WriteLine(7 / zero);
```
<details><summary>Answer</summary>

`∞` (positive infinity), then `DivideByZeroException`. Only **integer** division by zero throws.
</details>

**27.**
```csharp
class Counter { public static int Count; public Counter() { Count++; } }
new Counter(); new Counter(); new Counter();
Console.WriteLine(Counter.Count);
```
<details><summary>Answer</summary>

`3`. A static field is shared by all objects.
</details>

**28.**
```csharp
var set = new HashSet<Soldier> { new Soldier { Name = "A" }, new Soldier { Name = "A" } };
Console.WriteLine(set.Count);
```
<details><summary>Answer</summary>

`2`. `Soldier` does not override `Equals`/`GetHashCode`, so the two objects are different.
</details>

---

## A24. Rapid-Fire OOP Q&A (one-line answers)

1. **OOP?** A paradigm that models software as objects combining data and methods.
2. **Class?** A blueprint that defines data and behaviour.
3. **Object?** An instance of a class, with identity, state, and behaviour.
4. **Four pillars?** Encapsulation, Abstraction, Inheritance, Polymorphism.
5. **Encapsulation?** Bundling data and methods in a class and hiding the data with access modifiers.
6. **Abstraction?** Showing essential features and hiding implementation (abstract class, interface).
7. **Inheritance?** A child class acquires the members of a parent class ("is-a").
8. **Polymorphism?** One name, many forms: overloading (compile time) and overriding (run time).
9. **Multiple inheritance in C#?** Not with classes; yes with interfaces.
10. **Abstract class?** A class marked `abstract`; cannot be instantiated; may contain abstract methods.
11. **Interface?** A contract of members that a class or struct implements.
12. **Abstract class constructor?** Allowed; runs when a child object is created.
13. **Object of an abstract class or interface?** Not possible.
14. **Abstract + sealed together?** Not allowed (contradiction).
15. **Sealed class?** Cannot be inherited (e.g., `string`).
16. **Static class?** Only static members; cannot be instantiated or inherited.
17. **Overloading vs overriding?** Same class + different parameters + compile time, vs parent–child + same signature + run time.
18. **Overload by return type only?** No.
19. **Override a static method?** No (it can only be hidden with `new`).
20. **Override a private method?** No.
21. **Method hiding?** A child member with `new` hides the parent member; the reference type decides which runs.
22. **`virtual`?** Marks a method that children may override.
23. **`base`?** Accesses the parent's constructor or members.
24. **`this`?** The current object.
25. **Constructor types?** Default, parameterized, copy, static, private.
26. **Static constructor?** Runs once before first use; no parameters or access modifier.
27. **Destructor / finalizer?** `~ClassName()`; called by GC at an unknown time.
28. **Dispose vs Finalize?** Dispose is explicit and deterministic (`using`); Finalize is called by GC, non-deterministic.
29. **`using` statement?** Calls `Dispose()` automatically at the end of the block, even on exception.
30. **Property?** `get`/`set` accessors that control access to a field.
31. **Indexer?** Lets an object be used like an array: `this[int i]`.
32. **`const` vs `readonly`?** `const`: compile-time, implicitly static, set at declaration. `readonly`: run-time, set at declaration or in the constructor.
33. **`ref` vs `out`?** `ref` must be initialized before the call; `out` must be assigned inside the method.
34. **Value vs reference type?** Holds the data itself vs holds a reference to data on the heap.
35. **Boxing?** Converting a value type to `object`; unboxing is the reverse.
36. **struct vs class?** Value type, no inheritance vs reference type, supports inheritance.
37. **record?** A type with value-based equality, immutable by default, with `with` expressions.
38. **Delegate?** A type-safe function pointer.
39. **Event?** A delegate-based notification; only the owner class can raise it.
40. **Generics?** Type parameters that give type safety and avoid boxing.
41. **Extension method?** A static method in a static class whose first parameter uses `this`.
42. **Partial class?** One class split across several files, compiled as one.
43. **Anonymous type?** `new { Name = "x", Age = 3 }`: a compiler-generated read-only type.
44. **Nested class?** A class declared inside another class.
45. **Base class of all types?** `System.Object`.
46. **`is` vs `as`?** `is` tests type (returns bool, can also cast with a pattern); `as` casts or returns null.
47. **Early vs late binding?** Method chosen at compile time vs at run time.
48. **Pure virtual function (C++)?** Same as an abstract method in C#.
49. **Can an interface have fields?** No instance fields.
50. **Two interfaces with the same method?** Use explicit interface implementation.
51. **Why is `string` immutable?** Thread safety, string interning, safe as dictionary keys, security.
52. **string vs StringBuilder?** Immutable vs mutable; use StringBuilder for many concatenations in a loop.
53. **Garbage Collector?** Automatic memory manager; generations 0, 1, 2.
54. **SOLID?** SRP, OCP, LSP, ISP, DIP.
55. **Coupling and cohesion?** Aim for low coupling and high cohesion.
56. **Aggregation vs composition?** Part can live alone vs part dies with the whole.
57. **Design pattern?** A proven reusable solution to a common design problem.
58. **Singleton?** A class with exactly one instance and a global access point.
59. **Dependency Injection?** Supplying an object's dependencies from outside (usually through the constructor).
60. **Namespace?** A logical group of types that prevents name conflicts.
61. **Assembly?** A compiled unit (.dll/.exe) with IL code, metadata, and a manifest.
62. **Access modifiers in C#?** public, private, protected, internal, protected internal, private protected.
63. **Default access of a class member?** private. **Of a top-level class?** internal.
64. **Can a constructor be private?** Yes (Singleton).
65. **Object initializer?** `new Tank { Name = "T1" }`: sets properties after the constructor.
66. **Can a struct have a parameterless constructor?** Yes, from C# 10.
67. **Can we inherit a struct?** No (structs are sealed).
68. **What is `object` vs `var` vs `dynamic`?** `object`: base type, needs a cast. `var`: compile-time inferred, strongly typed. `dynamic`: type checked at run time.

---

## A25. OOP MCQ (40 questions; answer key at the end)

1. Which is NOT a pillar of OOP? (a) Encapsulation (b) Inheritance (c) Compilation (d) Polymorphism
2. Which keyword prevents a class from being inherited? (a) static (b) sealed (c) const (d) private
3. Default access modifier of class members in C#: (a) public (b) internal (c) private (d) protected
4. Default access modifier of a top-level class: (a) public (b) internal (c) private (d) protected
5. A C# class can directly inherit from how many classes? (a) 0 (b) 1 (c) 2 (d) unlimited
6. Multiple inheritance in C# is achieved through: (a) classes (b) abstract classes (c) interfaces (d) structs
7. Method overloading is an example of: (a) run-time polymorphism (b) compile-time polymorphism (c) encapsulation (d) abstraction
8. To allow overriding, a base method must be: (a) static (b) sealed (c) virtual (d) private
9. Which keyword hides an inherited member? (a) override (b) new (c) base (d) sealed
10. Which cannot be instantiated? (a) sealed class (b) abstract class (c) partial class (d) public class
11. An abstract method: (a) has a body (b) must be private (c) has no body (d) can be static
12. Which is a value type? (a) string (b) class (c) struct (d) interface
13. Converting a value type to `object` is called: (a) casting (b) boxing (c) unboxing (d) parsing
14. Base class of all .NET types: (a) System.Base (b) System.Object (c) System.Type (d) System.Root
15. Which constructor runs only once per type? (a) default (b) private (c) static (d) copy
16. A static class: (a) can be instantiated (b) can be inherited (c) contains only static members (d) can implement interfaces
17. Accessible only within the same assembly: (a) private (b) protected (c) internal (d) public
18. `protected internal` means accessible from: (a) same assembly AND derived (b) same assembly OR derived (c) only derived (d) only same class
19. Deterministic resource cleanup uses: (a) finalizer (b) GC.Collect() (c) IDisposable with using (d) destructor
20. Which re-throws and keeps the stack trace? (a) `throw ex;` (b) `throw;` (c) `rethrow;` (d) `throw new Exception();`
21. Keyword to call the parent constructor in C#: (a) this (b) super (c) base (d) parent
22. Which is immutable? (a) StringBuilder (b) string (c) List<T> (d) int[]
23. An interface can contain: (a) instance fields (b) constructors (c) method declarations (d) finalizers
24. "L" in SOLID: (a) Low coupling (b) Liskov Substitution (c) Late binding (d) Layering
25. "A class should have only one reason to change": (a) OCP (b) SRP (c) ISP (d) DIP
26. "Depend on abstractions, not concrete classes": (a) DIP (b) LSP (c) OCP (d) SRP
27. Pattern that guarantees a single instance: (a) Factory (b) Singleton (c) Prototype (d) Builder
28. Pattern that swaps an algorithm at run time: (a) State (b) Strategy (c) Adapter (d) Facade
29. Pattern that best supports undo: (a) Command (b) Observer (c) Composite (d) Proxy
30. Pattern that treats a group and a single item the same way: (a) Decorator (b) Composite (c) Bridge (d) Flyweight
31. In C#, the Observer pattern is built in as: (a) interfaces (b) events (c) attributes (d) generics
32. In UML, a filled diamond means: (a) aggregation (b) composition (c) dependency (d) realization
33. In UML, a solid line with a hollow triangle means: (a) inheritance (b) association (c) composition (d) dependency
34. `sealed override` on a method means: (a) it cannot be overridden further (b) the class cannot be instantiated (c) it is static (d) it hides the base method
35. A `readonly` field can be assigned: (a) anywhere (b) at declaration or in a constructor (c) only in a static constructor (d) never
36. `const` fields are implicitly: (a) virtual (b) static (c) instance (d) private
37. Which is NOT inherited? (a) public methods (b) protected fields (c) constructors (d) properties
38. Outside the declaring class, an event can only be used with: (a) `=` and `()` (b) `+=` and `-=` (c) `()` only (d) nothing
39. Keyword that marks a covariant generic type parameter: (a) in (b) out (c) ref (d) params
40. ASP.NET Core DI lifetime that creates one instance per HTTP request: (a) Singleton (b) Scoped (c) Transient (d) Static

**Answer key:** 1-c, 2-b, 3-c, 4-b, 5-b, 6-c, 7-b, 8-c, 9-b, 10-b, 11-c, 12-c, 13-b, 14-b, 15-c, 16-c, 17-c, 18-b, 19-c, 20-b, 21-c, 22-b, 23-c, 24-b, 25-b, 26-a, 27-b, 28-b, 29-a, 30-b, 31-b, 32-b, 33-a, 34-a, 35-b, 36-b, 37-c, 38-b, 39-b, 40-b

---

## A26. Find the Error (common "correct this code" questions)

| # | Code | Error and fix |
|---|---|---|
| 1 | `abstract class Weapon { }` … `var w = new Weapon();` | Cannot create an instance of an abstract class. Create a derived class object. |
| 2 | `abstract class Weapon { public abstract string Use(); }` `class Knife : Weapon { }` | `Knife` does not implement the abstract member `Use()`. Add `public override string Use() => ...;` |
| 3 | `sealed class Radio { }` `class Walkie : Radio { }` | Cannot derive from a sealed class. |
| 4 | `class A { public void F() { } }` `class B : A { public override void F() { } }` | `F` is not virtual/abstract. Mark it `virtual` in `A`, or use `new` in `B`. |
| 5 | `int Get() { … }` `double Get() { … }` | Overloads cannot differ only by return type. |
| 6 | `class S { int x; static void M() { x = 5; } }` | A static method cannot access an instance field without an object. |
| 7 | `interface IUnit { int strength; }` | Interfaces cannot contain instance fields. Use a property: `int Strength { get; }` |
| 8 | `class A { void F() { } }` … `new A().F();` | `F` is private by default. Make it `public`. |
| 9 | `class Tank : Vehicle, Weapon { }` (both classes) | A class cannot have multiple base classes. Make `Weapon` an interface. |
| 10 | `abstract class W { public abstract void F() { } }` | An abstract method cannot have a body. Use `public abstract void F();` |
| 11 | `class P { readonly int x = 1; void Set() { x = 2; } }` | A readonly field can be assigned only at declaration or in a constructor. |
| 12 | `class A { public virtual void F() { } }` `class B : A { protected override void F() { } }` | An override cannot change the access modifier. |
| 13 | `static class U { public void F() { } }` | A static class cannot have instance members. Use `public static void F()`. |
| 14 | `struct S : BaseClass { }` | A struct cannot inherit from a class (only implement interfaces). |
| 15 | `void Get(out int x) { }` | An `out` parameter must be assigned before the method returns. |
| 16 | `class A { public A(int x) { } }` `class B : A { public B() { } }` | `A` has no parameterless constructor. Use `public B() : base(0) { }`. |
| 17 | `const DateTime d = DateTime.Now;` | `const` needs a compile-time constant. Use `static readonly`. |
| 18 | `catch (Exception) { }` `catch (IOException) { }` | The second catch is unreachable. Put the specific exception first. |
| 19 | `public class B : A { }` where `A` is `internal` | Inconsistent accessibility: base class is less accessible than `B`. |
| 20 | `class A { public A() { } public A() { } }` | Two constructors with the same signature. |

---

# PART B — SQL AND DATABASES

## B1. Database Basics

| Term | Meaning |
|---|---|
| **Data** | Raw facts (e.g., `90000`, `Rahim`) |
| **Information** | Processed, meaningful data ("Rahim's salary is 90,000") |
| **Database** | An organized collection of related data |
| **DBMS** | Software that stores, retrieves, and manages a database (MS Access, early dBase) |
| **RDBMS** | A DBMS based on the relational model: data in **related tables** with keys and constraints (SQL Server, MySQL, Oracle, PostgreSQL) |
| **SQL** | Structured Query Language: the standard language for relational databases |

### File system vs DBMS (why use a DBMS?)

| Problem with a file system | How a DBMS solves it |
|---|---|
| Data redundancy (same data in many files) | Normalized tables, shared data |
| Inconsistency (copies disagree) | Single source of truth, constraints |
| Hard to query (write a program for each question) | SQL queries |
| No integrity rules | PRIMARY KEY, FOREIGN KEY, CHECK, NOT NULL |
| No atomicity (crash mid-update corrupts data) | Transactions (ACID) |
| Concurrent access problems | Locking, isolation levels |
| Weak security | Users, roles, GRANT/REVOKE |
| No backup/recovery | Logs, backups, point-in-time recovery |

### DBMS vs RDBMS

| DBMS | RDBMS |
|---|---|
| Data may be stored as files or hierarchies | Data stored in tables (relations) |
| No relationships between tables required | Relationships through keys |
| Normalization not required | Normalization is the norm |
| Usually single user, small data | Multi-user, large data |
| Weak or no integrity constraints | Integrity constraints enforced |
| Example: file-based systems, early dBase | SQL Server, MySQL, Oracle, PostgreSQL |

### Three-schema architecture (ANSI/SPARC)

```
   External level     View 1 (HQ)   View 2 (Training)   View 3 (Pay)      ← what each user sees
                            ╲            │             ╱
                             ╲   logical data independence
                              ╲          │           ╱
   Conceptual level      Whole logical schema: tables, columns, keys, constraints
                                         │
                               physical data independence
                                         │
   Internal level        Files, pages, indexes, storage on disk
```

- **Physical data independence:** change storage (add an index, move files) without changing the logical schema.
- **Logical data independence:** change the logical schema (add a column/table) without changing user views or applications. Harder to achieve.

### Codd's rules (13 rules, numbered 0–12) for a relational DBMS
0. **Foundation rule** — the system must manage data entirely through relational capabilities.
1. **Information rule** — all data is stored as values in tables.
2. **Guaranteed access** — every value is reachable by table name + primary key + column name.
3. **Systematic treatment of NULL** — NULL represents missing information, independent of data type.
4. **Active online catalog** — the database description (metadata) is stored in tables too.
5. **Comprehensive data sub-language** — one language for definition, manipulation, security, transactions (SQL).
6. **View updating** — theoretically updatable views must be updatable by the system.
7. **High-level insert, update, delete** — set-at-a-time operations, not only row-at-a-time.
8. **Physical data independence.**
9. **Logical data independence.**
10. **Integrity independence** — integrity constraints are stored in the catalog, not in application code.
11. **Distribution independence** — users should not need to know whether data is distributed.
12. **Non-subversion** — low-level access must not bypass integrity rules.

### OLTP vs OLAP

| OLTP (transaction processing) | OLAP (analytical processing) |
|---|---|
| Day-to-day operations (orders, logins, unit moves) | Analysis, reports, decision support |
| Many short INSERT/UPDATE/DELETE | Few large, complex SELECTs |
| Highly normalized | Denormalized (star / snowflake schema) |
| Current data | Historical data |
| Example: exercise management system | Data warehouse of all past exercises |

**Star schema:** a central **fact table** (measures: casualties, ammo used) connected to **dimension tables** (time, unit, terrain, exercise).

---

## B2. Relational Model and Relational Algebra

| Formal term | Common term |
|---|---|
| Relation | Table |
| Tuple | Row / record |
| Attribute | Column / field |
| Domain | Set of allowed values for a column |
| Degree | Number of **columns** |
| Cardinality | Number of **rows** |
| Relation schema | Table structure: `Employee(emp_id, name, salary)` |
| Relation instance | The data in the table at one moment |

Properties of a relation: no duplicate rows, row order does not matter, column order does not matter, each cell holds one atomic value.

**Example:** the `Employee` table in B9 has degree 8 and cardinality 8.

### Relational algebra operators

| Operator | Symbol | SQL equivalent | Type |
|---|---|---|---|
| Selection | σ (sigma) | `WHERE` (choose rows) | Unary |
| Projection | π (pi) | `SELECT col1, col2` with `DISTINCT` (choose columns) | Unary |
| Rename | ρ (rho) | `AS` | Unary |
| Union | ∪ | `UNION` | Binary, set |
| Set difference | − | `EXCEPT` / `MINUS` | Binary, set |
| Cartesian product | × | `CROSS JOIN` | Binary |
| Intersection | ∩ | `INTERSECT` | Derived |
| Natural join | ⋈ | `NATURAL JOIN` / `JOIN ... ON` equal columns | Derived |
| Theta join | ⋈θ | `JOIN ... ON <condition>` | Derived |
| Left / right / full outer join | ⟕ ⟖ ⟗ | `LEFT` / `RIGHT` / `FULL OUTER JOIN` | Extended |
| Division | ÷ | "for all" queries (double `NOT EXISTS`) | Derived |
| Aggregation / grouping | γ (gamma) or 𝒢 | `GROUP BY` with aggregate functions | Extended |

**Fundamental operators (6):** σ, π, ρ, ∪, −, ×. The others can be built from these.

**Union compatibility:** for ∪, ∩, −, both relations must have the **same number of attributes** and **compatible domains** in the same order.

### Examples (using the B9 data)

1. Names of employees earning more than 60,000:
   `π name ( σ salary > 60000 (Employee) )`
   ```sql
   SELECT name FROM Employee WHERE salary > 60000;
   ```
   Result: Rahim, Ayesha, Sadia.

2. Employee names with department names:
   `π name, dept_name ( Employee ⋈ Department )`

3. Employees in IT earning above 60,000:
   `π name ( σ dept_name='IT' ∧ salary>60000 ( Employee ⋈ Department ) )` → Rahim, Ayesha.

4. **Division ("for all")** — soldiers who completed **all** courses:
   `π army_no, course_id (Enrollment) ÷ π course_id (Course)`
   ```sql
   -- Version 1: double NOT EXISTS ("there is no course that this soldier has not taken")
   SELECT s.army_no
   FROM Soldier s
   WHERE NOT EXISTS (
       SELECT 1 FROM Course c
       WHERE NOT EXISTS (
           SELECT 1 FROM Enrollment e
           WHERE e.army_no = s.army_no AND e.course_id = c.course_id));

   -- Version 2: counting
   SELECT army_no
   FROM Enrollment
   GROUP BY army_no
   HAVING COUNT(DISTINCT course_id) = (SELECT COUNT(*) FROM Course);
   ```

**Relational calculus** is the non-procedural counterpart (says *what* to get): tuple relational calculus `{ t | t ∈ Employee ∧ t.salary > 60000 }` and domain relational calculus. **Relational algebra is procedural** (says *how*: a sequence of operations).

---

## B3. Entity-Relationship (ER) Model

| Term | Meaning | Example |
|---|---|---|
| Entity | A real-world object | Soldier "Rahim" |
| Entity set | All entities of one type | All soldiers |
| Attribute | A property | name, dob |
| Relationship | Association between entities | Soldier **belongs to** Unit |
| Degree of relationship | Number of entity sets involved | unary (recursive), binary, ternary |
| Cardinality | How many on each side | 1:1, 1:N, M:N |
| Participation | Must every entity take part? | Total (double line) or partial (single line) |
| Weak entity | Cannot be identified by its own attributes; depends on an owner | Dependent of a Soldier |

### Attribute types

| Type | Meaning | Example | Chen symbol |
|---|---|---|---|
| Simple | Cannot be divided | army_no | ellipse |
| Composite | Made of sub-parts | name = first + last | ellipse with sub-ellipses |
| Single-valued | One value | dob | ellipse |
| Multi-valued | Many values | phone numbers | **double ellipse** |
| Derived | Computed from others | age (from dob) | **dashed ellipse** |
| Key | Uniquely identifies | army_no | ellipse with **underlined** name |
| Partial key | Identifies a weak entity within its owner | dependent name | **dashed underline** |

### Chen notation symbols

| Symbol | Meaning |
|---|---|
| Rectangle | Strong entity |
| Double rectangle | Weak entity |
| Diamond | Relationship |
| Double diamond | Identifying relationship (for a weak entity) |
| Ellipse | Attribute |
| Single line | Partial participation |
| Double line | Total participation |
| 1, N, M on lines | Cardinality |

**Crow's foot notation** (used in tools like MySQL Workbench, SQL Server diagrams): `──┼─` one, `──○<` zero or many, `──┼<` one or many.

### Example ER diagram: military training database

```
 (first) (last)
     \   /
    ( name )  (dob)  ((phone))  [age]                       (unit_id)  (unit_name)
         \      |      /         ¦                               \       /
       ┌─────────────────────────────┐                      ┌──────────────┐
       │          SOLDIER            │ N   ◇──────────◇   1 │     UNIT     │
       │   key: army_no (underlined) │═════< BELONGS_TO >───│              │
       └─────────────────────────────┘     ◇──────────◇     └──────────────┘
            │ M                  ║ 1
       ◇─────────◇          ◈═════════◈
       < ENROLLS >──(grade) << HAS >>     (double diamond: identifying relationship)
       ◇─────────◇          ◈═════════◈
            │ N                  ║ N
       ┌──────────┐        ╔═══════════════╗
       │  COURSE  │        ║   DEPENDENT   ║  (double box: weak entity,
       └──────────┘        ╚═══════════════╝   partial key dep_name)
```
- `((phone))` = multi-valued, `[age]` = derived, `═══` = total participation (every soldier belongs to a unit).
- Soldier–Unit is N:1, Soldier–Course is M:N with attribute `grade`, Dependent is a weak entity of Soldier.

### ER → relational mapping rules

| ER construct | Becomes |
|---|---|
| Strong entity | A table; key attribute → primary key |
| Composite attribute | One column per component (`first_name`, `last_name`) |
| Multi-valued attribute | A **new table** (owner key + value), composite PK |
| Derived attribute | Not stored (compute in a query or a computed column) |
| Weak entity | A table with the owner's PK as FK + partial key; PK = owner PK + partial key |
| 1:1 relationship | FK on one side (prefer the total-participation side), with UNIQUE |
| 1:N relationship | FK on the **N** side |
| M:N relationship | A **junction table** with both PKs as FKs; relationship attributes go here |
| Recursive 1:N (unary) | A self-referencing FK (`manager_id → emp_id`) |
| Generalization (ISA) | One table per class, one table per subclass, or one table with a `type` column |

### Mapping the example

```sql
CREATE TABLE Unit (
    unit_id   INT PRIMARY KEY,
    unit_name VARCHAR(100) NOT NULL
);

CREATE TABLE Soldier (
    army_no    VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL,
    dob        DATE NOT NULL,                    -- age is derived, not stored
    unit_id    INT NOT NULL REFERENCES Unit(unit_id)   -- N side holds the FK; NOT NULL = total participation
);

CREATE TABLE SoldierPhone (                      -- multi-valued attribute
    army_no VARCHAR(20) REFERENCES Soldier(army_no),
    phone   VARCHAR(20),
    PRIMARY KEY (army_no, phone)
);

CREATE TABLE Course (
    course_id   INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollment (                        -- M:N junction table
    army_no   VARCHAR(20) REFERENCES Soldier(army_no),
    course_id INT REFERENCES Course(course_id),
    grade     VARCHAR(2),
    PRIMARY KEY (army_no, course_id)
);

CREATE TABLE Dependent (                         -- weak entity
    army_no  VARCHAR(20) REFERENCES Soldier(army_no) ON DELETE CASCADE,
    dep_name VARCHAR(50),
    relation VARCHAR(20),
    PRIMARY KEY (army_no, dep_name)
);
```

---

## B4. Keys

| Key | Definition |
|---|---|
| **Super key** | Any set of columns that uniquely identifies a row (may contain extra columns) |
| **Candidate key** | A **minimal** super key (remove any column and it stops being unique) |
| **Primary key** | The candidate key chosen to identify rows; **unique + NOT NULL**; one per table |
| **Alternate key** | A candidate key that was not chosen as the primary key |
| **Foreign key** | Column(s) that reference the primary/unique key of another (or the same) table |
| **Composite key** | A key made of two or more columns |
| **Unique key** | Enforces uniqueness; allows NULL |
| **Surrogate key** | An artificial key with no business meaning (`IDENTITY`, `AUTO_INCREMENT`, GUID) |
| **Natural key** | A key with business meaning (NID, army number, email) |
| **Prime attribute** | A column that is part of **any** candidate key |
| **Non-prime attribute** | A column that is not part of any candidate key |

### Identify the keys (classic question)

`Soldier(army_no, nid, email, name, unit_id)` — army_no, nid, and email are each unique.

- Super keys: `{army_no}`, `{nid}`, `{email}`, `{army_no, name}`, `{nid, email}`, `{army_no, nid, email, name, unit_id}`, … (any superset of a candidate key)
- Candidate keys: `{army_no}`, `{nid}`, `{email}`
- Primary key: `army_no`
- Alternate keys: `nid`, `email`
- Foreign key: `unit_id` → `Unit(unit_id)`
- In `Enrollment(army_no, course_id, grade)`: composite primary key `(army_no, course_id)`; each part is also a foreign key.

Relation: **Primary key ⊆ Candidate keys ⊆ Super keys.** Alternate keys = Candidate keys − Primary key.

### Primary key vs Unique key

| Primary key | Unique key |
|---|---|
| Only **one** per table | **Many** per table |
| **NULL not allowed** | NULL allowed (SQL Server: only one NULL; MySQL, Oracle, PostgreSQL: many NULLs) |
| Creates a **clustered** index by default in SQL Server | Creates a **non-clustered** index by default |
| Identifies the row; referenced by foreign keys | Prevents duplicates in an alternate key; can also be referenced by an FK |

### Primary key vs Foreign key

| Primary key | Foreign key |
|---|---|
| Uniquely identifies a row in its own table | Links to a key in another table |
| Cannot be NULL | Can be NULL (optional relationship) |
| Cannot have duplicates | Can have duplicates (many employees → one department) |
| One per table | Many per table |

Quick answers:
- Can a foreign key be NULL? **Yes.**
- Can a foreign key reference a UNIQUE column? **Yes.**
- Can a foreign key reference the same table? **Yes** (self-reference: `manager_id`).
- Can a table have no primary key? Yes (a "heap"), but it is bad practice.

---

## B5. Data Types and Constraints

### Data types across the three databases

| Purpose | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Integer | `INT`, `BIGINT`, `SMALLINT`, `TINYINT` | `INT`, `BIGINT`, `SMALLINT`, `TINYINT` | `NUMBER(10)`, `INTEGER` |
| Exact decimal (money) | `DECIMAL(p,s)`, `NUMERIC`, `MONEY` | `DECIMAL(p,s)` | `NUMBER(p,s)` |
| Approximate | `FLOAT`, `REAL` | `FLOAT`, `DOUBLE` | `BINARY_FLOAT`, `BINARY_DOUBLE`, `FLOAT` |
| Fixed-length text | `CHAR(n)` | `CHAR(n)` | `CHAR(n)` |
| Variable text | `VARCHAR(n)` | `VARCHAR(n)` | `VARCHAR2(n)` |
| Unicode text (Bangla) | `NVARCHAR(n)` + `N'...'` literals | `VARCHAR(n)` with `utf8mb4` charset | `NVARCHAR2(n)` |
| Large text | `VARCHAR(MAX)`, `NVARCHAR(MAX)` | `TEXT`, `LONGTEXT` | `CLOB`, `NCLOB` |
| Date | `DATE` | `DATE` | `DATE` (**also stores time**) |
| Date + time | `DATETIME2`, `DATETIME` | `DATETIME`, `TIMESTAMP` | `TIMESTAMP` |
| Boolean | `BIT` | `BOOLEAN` (stored as `TINYINT(1)`) | `BOOLEAN` only from 23ai; earlier `NUMBER(1)` or `CHAR(1)` |
| Binary | `VARBINARY(MAX)` | `BLOB` | `BLOB` |
| Auto-number | `IDENTITY(1,1)` | `AUTO_INCREMENT` | `GENERATED AS IDENTITY` (12c+) or `SEQUENCE` |

`DECIMAL(10,2)` = 10 digits in total, 2 after the decimal point → max `99999999.99`.

**CHAR vs VARCHAR vs NVARCHAR:** `CHAR(10)` always uses 10 characters (padded with spaces), good for fixed codes like `'M'`/`'F'`. `VARCHAR(10)` uses only the actual length. `NVARCHAR` stores Unicode (UTF-16 in SQL Server), needed for Bangla text: `INSERT ... VALUES (N'রহিম')`.

### Constraints

| Constraint | Purpose |
|---|---|
| `NOT NULL` | Column must have a value |
| `UNIQUE` | No duplicate values |
| `PRIMARY KEY` | `UNIQUE` + `NOT NULL`, identifies the row |
| `FOREIGN KEY` | Value must exist in the referenced table (referential integrity) |
| `CHECK` | Value must satisfy a condition (`salary > 0`) |
| `DEFAULT` | Value used when none is given |

```sql
CREATE TABLE Weapon (
    weapon_id   INT           NOT NULL,
    weapon_name VARCHAR(50)   NOT NULL,
    category    VARCHAR(20)   DEFAULT 'Small Arms',
    range_km    DECIMAL(6,2)  CHECK (range_km > 0),          -- column-level constraint
    serial_no   VARCHAR(30),
    unit_id     INT,
    CONSTRAINT pk_weapon PRIMARY KEY (weapon_id),            -- table-level, named
    CONSTRAINT uq_weapon_serial UNIQUE (serial_no),
    CONSTRAINT fk_weapon_unit FOREIGN KEY (unit_id)
        REFERENCES Unit(unit_id) ON DELETE SET NULL
);
```
Name your constraints (`pk_`, `fk_`, `uq_`, `ck_`) so error messages and `ALTER TABLE ... DROP CONSTRAINT` are easy.
Note: MySQL parsed but **ignored** `CHECK` constraints before version 8.0.16.

### Referential actions (what happens to child rows when the parent changes)

| Action | Effect on child rows |
|---|---|
| `NO ACTION` / `RESTRICT` (default) | Block the delete/update of the parent |
| `CASCADE` | Delete/update the child rows too |
| `SET NULL` | Set the FK in child rows to NULL |
| `SET DEFAULT` | Set the FK to its default value (SQL Server, not MySQL InnoDB) |

Oracle supports only `ON DELETE CASCADE` and `ON DELETE SET NULL` (no `ON UPDATE` actions).

### Types of integrity

| Integrity | Rule | Enforced by |
|---|---|---|
| Entity integrity | Primary key cannot be NULL | PRIMARY KEY |
| Referential integrity | FK must match an existing PK, or be NULL | FOREIGN KEY |
| Domain integrity | Values must be from the allowed domain | Data type, CHECK, NOT NULL, DEFAULT |
| User-defined integrity | Business rules | CHECK, triggers, procedures |

---

## B6. Functional Dependency (FD)

**Definition:** `X → Y` (X functionally determines Y) means: if two rows have the same value of X, they must have the same value of Y. X is the **determinant**, Y the **dependent**.
Example: `army_no → name` (one army number has exactly one name).

| Type | Meaning | Example |
|---|---|---|
| Trivial | Y ⊆ X | `{army_no, name} → name` |
| Non-trivial | Y ⊄ X | `army_no → name` |
| Full | Y depends on the whole key, not on part of it | `(army_no, course_id) → grade` |
| Partial | Y depends on part of a composite key | `(army_no, course_id) → name` (because `army_no → name`) |
| Transitive | X → Y and Y → Z, so X → Z (Y not a key) | `army_no → unit_id → unit_name` |
| Multi-valued (MVD) | X →→ Y: X determines a **set** of Y values independent of other columns | `officer →→ language` |

### Armstrong's axioms (sound and complete)

| Rule | Statement |
|---|---|
| Reflexivity | If Y ⊆ X then X → Y |
| Augmentation | If X → Y then XZ → YZ |
| Transitivity | If X → Y and Y → Z then X → Z |
| Union (derived) | If X → Y and X → Z then X → YZ |
| Decomposition (derived) | If X → YZ then X → Y and X → Z |
| Pseudo-transitivity (derived) | If X → Y and WY → Z then WX → Z |

### Attribute closure (X⁺) — algorithm

1. Start with `result = X`.
2. For every FD `A → B`: if `A ⊆ result`, add `B` to `result`.
3. Repeat until nothing changes.
If `X⁺` contains all attributes, X is a **super key**. If no proper subset of X is a super key, X is a **candidate key**.

### Worked example 1

`R(A, B, C, D, E)`, `F = { A → B, B → C, CD → E }`

- `A⁺ = {A, B, C}` (A→B, then B→C). Not all attributes.
- Trick: attributes that **never appear on a right side** must be in every key. Here **A** and **D**.
- `(AD)⁺`: start {A, D} → A→B adds B → B→C adds C → CD→E adds E → {A, B, C, D, E} = all. ✔
- `A⁺` ≠ all and `D⁺ = {D}` ≠ all, so AD is minimal → **candidate key = AD**.
- Prime attributes: A, D. Non-prime: B, C, E.
- Normal form: `A → B` has a part of the key (A) determining a non-prime attribute (B) → **partial dependency → not in 2NF**. R is in **1NF** only.
- 3NF/BCNF decomposition: `R1(A, B)`, `R2(B, C)`, `R3(C, D, E)`, `R4(A, D)` (R4 keeps the original key so the join is lossless).

### Worked example 2

`R(A, B, C, D)`, `F = { AB → C, C → D, D → A }`

- B never appears on a right side → B is in every key. `B⁺ = {B}`.
- `(AB)⁺ = {A, B, C, D}` ✔, `(BC)⁺ = {B, C, D, A}` ✔, `(BD)⁺ = {B, D, A, C}` ✔.
- **Candidate keys: AB, BC, BD.** Every attribute is prime.
- 3NF? For every FD, the right side is prime → **yes, 3NF.**
- BCNF? `C → D`: C⁺ = {C, D, A} is not a super key → **violates BCNF.** So R is in 3NF but not BCNF.

### Canonical (minimal) cover

A minimal equivalent set of FDs: single attribute on the right, no extraneous attributes on the left, no redundant FDs.
Example: `F = { A → BC, B → C, A → B, AB → C }`
1. Split: A→B, A→C, B→C, A→B, AB→C → remove duplicate A→B.
2. In AB→C, B is extraneous (A⁺ already contains C) → becomes A→C.
3. A→C is redundant (A→B and B→C give it).
**Canonical cover = { A → B, B → C }.**

---

## B7. Normalization (with full worked examples)

**Definition:** Normalization is the process of organizing tables to **reduce redundancy** and **remove insert, update, and delete anomalies**, by decomposing tables based on functional dependencies.

### The three anomalies

Using this un-normalized table:

| army_no | name | unit_id | unit_name | course_id | course_name | grade |
|---|---|---|---|---|---|---|
| 1001 | Rahim | U1 | Signal Bn | C1 | Basic Computer | A |
| 1001 | Rahim | U1 | Signal Bn | C2 | Networking | B |
| 1002 | Karim | U1 | Signal Bn | C1 | Basic Computer | A- |
| 1003 | Sadia | U2 | Engineer Bn | C2 | Networking | A |
| 1003 | Sadia | U2 | Engineer Bn | C3 | Database | A+ |

- **Update anomaly:** renaming "Signal Bn" requires changing 3 rows; missing one makes the data inconsistent.
- **Insert anomaly:** a new course "C4 Cyber Security" cannot be inserted until a soldier enrolls (`army_no` is part of the key and cannot be NULL).
- **Delete anomaly:** deleting Sadia's C3 row deletes the only record that course C3 is called "Database".

### 1NF — First Normal Form

**Rule:** every cell holds a **single atomic value**; no repeating groups; each row is unique (has a key).

Not in 1NF:

| army_no | name | courses |
|---|---|---|
| 1001 | Rahim | C1 Basic Computer (A), C2 Networking (B) |
| 1003 | Sadia | C2 Networking (A), C3 Database (A+) |

In 1NF: the 5-row table above, one row per soldier per course. Key: `(army_no, course_id)`.

### 2NF — Second Normal Form

**Rule:** in 1NF **and** no **partial dependency**: every non-key column depends on the **whole** primary key.
(A table with a single-column primary key is automatically in 2NF.)

FDs in the 1NF table:
- `army_no → name, unit_id, unit_name` (depends on part of the key ✘)
- `course_id → course_name` (depends on part of the key ✘)
- `(army_no, course_id) → grade` (full ✔)

Decompose:

**Soldier**
| army_no | name | unit_id | unit_name |
|---|---|---|---|
| 1001 | Rahim | U1 | Signal Bn |
| 1002 | Karim | U1 | Signal Bn |
| 1003 | Sadia | U2 | Engineer Bn |

**Course**
| course_id | course_name |
|---|---|
| C1 | Basic Computer |
| C2 | Networking |
| C3 | Database |

**Enrollment**
| army_no | course_id | grade |
|---|---|---|
| 1001 | C1 | A |
| 1001 | C2 | B |
| 1002 | C1 | A- |
| 1003 | C2 | A |
| 1003 | C3 | A+ |

### 3NF — Third Normal Form

**Rule:** in 2NF **and** no **transitive dependency**: a non-key column must not depend on another non-key column.
Formal: for every FD `X → Y`, either X is a super key **or** Y is a prime attribute.

In `Soldier`: `army_no → unit_id` and `unit_id → unit_name` → `unit_name` depends transitively on the key ✘.

Decompose `Soldier`:

**Soldier**
| army_no | name | unit_id |
|---|---|---|
| 1001 | Rahim | U1 |
| 1002 | Karim | U1 |
| 1003 | Sadia | U2 |

**Unit**
| unit_id | unit_name |
|---|---|
| U1 | Signal Bn |
| U2 | Engineer Bn |

Final 3NF design: **Soldier, Unit, Course, Enrollment.** All three anomalies are gone: rename a unit in one row, insert a course without a soldier, delete an enrollment without losing course data.

Memory line for 1NF–3NF: *"The key, the whole key, and nothing but the key."*

### BCNF — Boyce-Codd Normal Form

**Rule:** for every non-trivial FD `X → Y`, **X must be a super key**. (Stricter than 3NF: no exception for prime attributes.)

**Example that is 3NF but not BCNF:**
`Training(trainee, subject, instructor)`. Each instructor teaches only one subject; for each subject a trainee has one instructor.
- FDs: `(trainee, subject) → instructor`, `instructor → subject`.
- Candidate keys: `(trainee, subject)` and `(trainee, instructor)`. All three columns are prime.
- 3NF ✔ (subject is prime). BCNF ✘ (`instructor` is not a super key).

| trainee | subject | instructor |
|---|---|---|
| Rahim | Database | Maj Karim |
| Sadia | Database | Maj Karim |
| Rahim | Networking | Capt Nusrat |

Decompose into BCNF:
- `InstructorSubject(instructor PK, subject)`
- `TraineeInstructor(trainee, instructor)` with PK `(trainee, instructor)`

Trade-off: this decomposition is **lossless**, but the FD `(trainee, subject) → instructor` is no longer enforceable inside one table (**not dependency-preserving**). 3NF can always be reached with both properties; BCNF cannot always.

### 4NF — Fourth Normal Form

**Rule:** in BCNF and no non-trivial **multi-valued dependency** (unless the determinant is a super key).

| officer | language | skill |
|---|---|---|
| Karim | English | Driving |
| Karim | English | Swimming |
| Karim | Arabic | Driving |
| Karim | Arabic | Swimming |

Languages and skills are independent, so every combination must be stored (redundancy). Split into `OfficerLanguage(officer, language)` and `OfficerSkill(officer, skill)`.

### 5NF — Fifth Normal Form (Project-Join NF)
In 4NF and every **join dependency** is implied by candidate keys: the table cannot be split into smaller tables and re-joined without losing or adding information, except along keys. Rare in practice.

### Summary table

| Normal form | Condition |
|---|---|
| 1NF | Atomic values, no repeating groups |
| 2NF | 1NF + no partial dependency on part of a composite key |
| 3NF | 2NF + no transitive dependency (X→Y: X super key or Y prime) |
| BCNF | Every determinant is a super key |
| 4NF | BCNF + no non-trivial multi-valued dependency |
| 5NF | 4NF + no non-trivial join dependency |

### Lossless-join decomposition
Splitting R into R1 and R2 is lossless if the common columns form a key of at least one of them:
`(R1 ∩ R2) → R1` or `(R1 ∩ R2) → R2`.
Example: `Soldier(army_no, name, unit_id)` and `Unit(unit_id, unit_name)`: common column `unit_id` is the key of `Unit` → lossless.

### Denormalization
Deliberately adding redundancy (pre-joined or summary columns) to make **reads faster**, for reports, dashboards, and data warehouses. Cost: more storage and a risk of inconsistency, so writes must update every copy.

| Normalization | Denormalization |
|---|---|
| Removes redundancy | Adds redundancy on purpose |
| Faster, safer writes | Faster reads |
| More tables, more joins | Fewer joins |
| OLTP systems | OLAP / reporting systems |

---

## B8. DDL and DML in Three Dialects

### SQL command categories

| Category | Full name | Commands | Auto-commit? |
|---|---|---|---|
| DDL | Data Definition Language | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` | Oracle and MySQL commit implicitly; SQL Server DDL can be rolled back inside a transaction |
| DML | Data Manipulation Language | `INSERT`, `UPDATE`, `DELETE`, `MERGE` | No (part of a transaction) |
| DQL | Data Query Language | `SELECT` | — |
| DCL | Data Control Language | `GRANT`, `REVOKE` (`DENY` in SQL Server) | — |
| TCL | Transaction Control Language | `COMMIT`, `ROLLBACK`, `SAVEPOINT` | — |

### CREATE TABLE with an auto-number column

```sql
-- SQL Server
CREATE TABLE Unit (
    unit_id   INT IDENTITY(1,1) PRIMARY KEY,      -- seed 1, increment 1
    unit_name NVARCHAR(100) NOT NULL
);

-- MySQL
CREATE TABLE Unit (
    unit_id   INT AUTO_INCREMENT PRIMARY KEY,
    unit_name VARCHAR(100) NOT NULL
);

-- Oracle 12c+
CREATE TABLE Unit (
    unit_id   NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    unit_name VARCHAR2(100) NOT NULL
);

-- Oracle (classic way): sequence
CREATE SEQUENCE unit_seq START WITH 1 INCREMENT BY 1;
INSERT INTO Unit (unit_id, unit_name) VALUES (unit_seq.NEXTVAL, 'Signal Bn');
```

Get the id just inserted: SQL Server `SCOPE_IDENTITY()`, MySQL `LAST_INSERT_ID()`, Oracle `RETURNING unit_id INTO :v` or `unit_seq.CURRVAL`.

### ALTER TABLE in three dialects

| Task | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Add column | `ALTER TABLE Employee ADD email VARCHAR(100);` | `ALTER TABLE Employee ADD COLUMN email VARCHAR(100);` | `ALTER TABLE Employee ADD (email VARCHAR2(100));` |
| Change data type | `ALTER TABLE Employee ALTER COLUMN city VARCHAR(100);` | `ALTER TABLE Employee MODIFY city VARCHAR(100);` | `ALTER TABLE Employee MODIFY (city VARCHAR2(100));` |
| Rename column | `EXEC sp_rename 'Employee.city', 'home_city', 'COLUMN';` | `ALTER TABLE Employee RENAME COLUMN city TO home_city;` | `ALTER TABLE Employee RENAME COLUMN city TO home_city;` |
| Drop column | `ALTER TABLE Employee DROP COLUMN email;` | same | same |
| Rename table | `EXEC sp_rename 'Employee', 'Staff';` | `RENAME TABLE Employee TO Staff;` | `ALTER TABLE Employee RENAME TO Staff;` |
| Add constraint | `ALTER TABLE Employee ADD CONSTRAINT ck_sal CHECK (salary > 0);` | same | same |
| Drop constraint | `ALTER TABLE Employee DROP CONSTRAINT ck_sal;` | `ALTER TABLE Employee DROP CHECK ck_sal;` (8.0.19+ also `DROP CONSTRAINT`) | `ALTER TABLE Employee DROP CONSTRAINT ck_sal;` |

### DELETE vs TRUNCATE vs DROP

| Point | DELETE | TRUNCATE | DROP |
|---|---|---|---|
| Type | DML | DDL | DDL |
| Removes | Selected rows (`WHERE` allowed) | All rows | The whole table (structure + data + indexes) |
| `WHERE` clause | Yes | No | No |
| Speed | Slower (logs each row) | Fast (deallocates pages) | Fast |
| Rollback | Yes | SQL Server: yes inside a transaction. Oracle/MySQL: no (implicit commit) | SQL Server: yes inside a transaction. Oracle/MySQL: no (Oracle has `FLASHBACK TABLE` from the recycle bin) |
| Triggers | DELETE triggers fire | Do not fire | Do not fire |
| Identity counter | Not reset | Reset to the seed | Gone with the table |
| Table referenced by an FK | Allowed (if no child rows block it) | Not allowed | Not allowed until the FK is dropped |

### INSERT

```sql
-- Single row (always list the columns)
INSERT INTO Department (dept_id, dept_name, location) VALUES (50, 'Training', 'Sylhet');

-- Many rows (SQL Server, MySQL, Oracle 23ai)
INSERT INTO Department (dept_id, dept_name, location)
VALUES (60, 'Logistics', 'Dhaka'),
       (70, 'Medical', 'Cumilla');

-- Older Oracle: INSERT ALL
INSERT ALL
  INTO Department (dept_id, dept_name, location) VALUES (60, 'Logistics', 'Dhaka')
  INTO Department (dept_id, dept_name, location) VALUES (70, 'Medical', 'Cumilla')
SELECT * FROM dual;

-- Insert from a query
INSERT INTO EmployeeArchive (emp_id, name, salary)
SELECT emp_id, name, salary FROM Employee WHERE join_date < '2020-01-01';
```

### UPDATE

```sql
UPDATE Employee SET salary = salary * 1.10 WHERE dept_id = 10;    -- 10% raise for IT

-- Different raise per department (CASE)
UPDATE Employee
SET salary = CASE dept_id
                 WHEN 10 THEN salary * 1.10
                 WHEN 20 THEN salary * 1.05
                 ELSE salary
             END;
```
**Always write `WHERE` first** when you type an UPDATE or DELETE. Without `WHERE`, every row changes.

**UPDATE with a join:**
```sql
-- SQL Server
UPDATE e SET e.salary = e.salary * 1.10
FROM Employee e JOIN Department d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'IT';

-- MySQL
UPDATE Employee e JOIN Department d ON e.dept_id = d.dept_id
SET e.salary = e.salary * 1.10
WHERE d.dept_name = 'IT';

-- Oracle (and works everywhere): subquery
UPDATE Employee SET salary = salary * 1.10
WHERE dept_id = (SELECT dept_id FROM Department WHERE dept_name = 'IT');
```

### DELETE

```sql
DELETE FROM Employee WHERE emp_id = 8;

-- With a join (SQL Server and MySQL)
DELETE e FROM Employee e JOIN Department d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'HR';

-- Portable
DELETE FROM Employee
WHERE dept_id IN (SELECT dept_id FROM Department WHERE dept_name = 'HR');
```

### MERGE / UPSERT (insert if new, update if it exists)

```sql
-- SQL Server and Oracle
MERGE INTO UnitStrength t
USING DailyReport s
   ON (t.unit_id = s.unit_id)
WHEN MATCHED THEN
    UPDATE SET t.strength = s.strength
WHEN NOT MATCHED THEN
    INSERT (unit_id, strength) VALUES (s.unit_id, s.strength);   -- SQL Server requires the final ;

-- MySQL
INSERT INTO UnitStrength (unit_id, strength) VALUES (5, 120) AS new
ON DUPLICATE KEY UPDATE strength = new.strength;
-- (older MySQL: ... ON DUPLICATE KEY UPDATE strength = VALUES(strength);)
```

### Copy a table

| Task | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Copy structure + data | `SELECT * INTO Emp_Backup FROM Employee;` | `CREATE TABLE Emp_Backup AS SELECT * FROM Employee;` | `CREATE TABLE Emp_Backup AS SELECT * FROM Employee;` |
| Structure only | `SELECT * INTO Emp_Empty FROM Employee WHERE 1 = 0;` | `CREATE TABLE Emp_Empty LIKE Employee;` | `CREATE TABLE Emp_Empty AS SELECT * FROM Employee WHERE 1 = 0;` |

(Copying with `SELECT INTO` / `CREATE TABLE AS` does not copy primary keys, foreign keys, or indexes. MySQL `LIKE` copies indexes.)

---

## B9. Sample Schema and Data (used for every result table below)

```sql
CREATE TABLE Department (
    dept_id   INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL UNIQUE,
    location  VARCHAR(50)
);

CREATE TABLE Employee (
    emp_id     INT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    gender     CHAR(1) CHECK (gender IN ('M', 'F')),
    dept_id    INT NULL,
    manager_id INT NULL,
    salary     DECIMAL(10,2) CHECK (salary > 0),
    join_date  DATE,
    city       VARCHAR(50),
    CONSTRAINT fk_emp_dept FOREIGN KEY (dept_id)    REFERENCES Department(dept_id),
    CONSTRAINT fk_emp_mgr  FOREIGN KEY (manager_id) REFERENCES Employee(emp_id)
);

CREATE TABLE SalaryGrade (
    grade   CHAR(1) PRIMARY KEY,
    min_sal INT,
    max_sal INT
);

INSERT INTO Department VALUES (10, 'IT', 'Dhaka'), (20, 'HR', 'Mymensingh'),
                              (30, 'Finance', 'Dhaka'), (40, 'Research', 'Chattogram');

INSERT INTO Employee VALUES
(1, 'Rahim',   'M', 10,   NULL, 90000, '2019-03-15', 'Dhaka'),
(2, 'Karim',   'M', 10,   1,    60000, '2021-07-01', 'Dhaka'),
(3, 'Ayesha',  'F', 10,   1,    65000, '2022-01-10', 'Mymensingh'),
(4, 'Nusrat',  'F', 20,   1,    50000, '2020-11-20', 'Mymensingh'),
(5, 'Tanvir',  'M', 20,   4,    55000, '2023-05-05', 'Dhaka'),
(6, 'Sadia',   'F', 30,   1,    70000, '2018-09-09', 'Chattogram'),
(7, 'Imran',   'M', 30,   6,    60000, '2024-02-14', 'Dhaka'),
(8, 'Farhana', 'F', NULL, 1,    35000, '2025-06-01', 'Sylhet');

INSERT INTO SalaryGrade VALUES ('A', 70000, 100000), ('B', 55000, 69999),
                               ('C', 40000, 54999), ('D', 0, 39999);
```

**Department**

| dept_id | dept_name | location |
|---|---|---|
| 10 | IT | Dhaka |
| 20 | HR | Mymensingh |
| 30 | Finance | Dhaka |
| 40 | Research | Chattogram |

**Employee**

| emp_id | name | gender | dept_id | manager_id | salary | join_date | city |
|---|---|---|---|---|---|---|---|
| 1 | Rahim | M | 10 | NULL | 90000 | 2019-03-15 | Dhaka |
| 2 | Karim | M | 10 | 1 | 60000 | 2021-07-01 | Dhaka |
| 3 | Ayesha | F | 10 | 1 | 65000 | 2022-01-10 | Mymensingh |
| 4 | Nusrat | F | 20 | 1 | 50000 | 2020-11-20 | Mymensingh |
| 5 | Tanvir | M | 20 | 4 | 55000 | 2023-05-05 | Dhaka |
| 6 | Sadia | F | 30 | 1 | 70000 | 2018-09-09 | Chattogram |
| 7 | Imran | M | 30 | 6 | 60000 | 2024-02-14 | Dhaka |
| 8 | Farhana | F | NULL | 1 | 35000 | 2025-06-01 | Sylhet |

Points to notice: Farhana has **no department**; Research has **no employees**; Rahim has **no manager**; Karim and Imran have the **same salary** (useful for RANK vs DENSE_RANK).

Useful facts: total salary = 485,000; average = 60,625; max = 90,000; min = 35,000.

---

## B10. SELECT in Depth

### Written order vs logical execution order

```
Written order                 Logical execution order
-------------                 -----------------------
SELECT     5                  1. FROM / JOIN   (build the row set)
FROM       1                  2. WHERE         (filter rows)
WHERE      2                  3. GROUP BY      (make groups)
GROUP BY   3                  4. HAVING        (filter groups)
HAVING     4                  5. SELECT        (compute columns, aliases)
ORDER BY   7                  6. DISTINCT      (remove duplicates)
LIMIT/TOP  8                  7. ORDER BY      (sort)
                              8. TOP / LIMIT / OFFSET-FETCH
```

Consequences (common exam questions):
- A column alias from `SELECT` **cannot** be used in `WHERE` (WHERE runs first).
- An alias **can** be used in `ORDER BY`.
- Aggregates (`SUM`, `COUNT`) **cannot** be used in `WHERE`; use `HAVING`.
- (MySQL allows an alias in `HAVING`; SQL Server and Oracle do not.)

```sql
SELECT name, salary * 12 AS annual
FROM Employee
-- WHERE annual > 700000        ✘ error: invalid column name 'annual'
WHERE salary * 12 > 700000      -- ✔
ORDER BY annual DESC;           -- ✔ alias allowed here
```
Result: Rahim 1,080,000; Sadia 840,000; Ayesha 780,000; Karim 720,000; Imran 720,000.

### WHERE operators

| Operator | Example | Note |
|---|---|---|
| `=`, `<>` (`!=`), `>`, `<`, `>=`, `<=` | `salary >= 60000` | `<>` is standard |
| `BETWEEN a AND b` | `salary BETWEEN 50000 AND 65000` | **Inclusive** at both ends → Karim, Ayesha, Nusrat, Tanvir, Imran |
| `IN (list)` | `city IN ('Sylhet', 'Chattogram')` | → Sadia, Farhana |
| `LIKE` | `name LIKE 'A%'` | `%` = any number of characters, `_` = exactly one |
| `IS NULL` / `IS NOT NULL` | `dept_id IS NULL` | → Farhana. **Never** `= NULL` |
| `AND`, `OR`, `NOT` | | Precedence: `NOT` > `AND` > `OR` |

**LIKE examples (verified):**

| Pattern | Meaning | Result |
|---|---|---|
| `'A%'` | starts with A | Ayesha |
| `'%a'` | ends with a | Ayesha, Sadia, Farhana |
| `'_a%'` | second letter is a | Rahim, Karim, Tanvir, Sadia, Farhana |
| `'%an%'` | contains "an" | Tanvir, Imran, Farhana |

Case sensitivity: SQL Server and MySQL default collations are **case-insensitive** (`'a%'` matches "Ayesha"); Oracle is **case-sensitive** (use `UPPER(name) LIKE 'A%'`).
To search for a literal `%` or `_`: `LIKE '%10\%%' ESCAPE '\'` (SQL Server also allows `[%]`).

**AND/OR precedence trap (verified):**
```sql
SELECT name FROM Employee
WHERE dept_id = 10 OR dept_id = 20 AND salary > 62000;
-- AND runs first: dept 10 (anyone)  OR  (dept 20 AND salary > 62000)
-- Result: Rahim, Karim, Ayesha

SELECT name FROM Employee
WHERE (dept_id = 10 OR dept_id = 20) AND salary > 62000;
-- Result: Rahim, Ayesha
```

### NULL and three-valued logic

`NULL` means **unknown / missing**. Any comparison with NULL gives **UNKNOWN**, and `WHERE` keeps only rows where the condition is **TRUE**.

| AND | TRUE | FALSE | UNKNOWN |
|---|---|---|---|
| **TRUE** | TRUE | FALSE | UNKNOWN |
| **FALSE** | FALSE | FALSE | FALSE |
| **UNKNOWN** | UNKNOWN | FALSE | UNKNOWN |

| OR | TRUE | FALSE | UNKNOWN |
|---|---|---|---|
| **TRUE** | TRUE | TRUE | TRUE |
| **FALSE** | TRUE | FALSE | UNKNOWN |
| **UNKNOWN** | TRUE | UNKNOWN | UNKNOWN |

`NOT UNKNOWN` = UNKNOWN.

Facts:
- `NULL = NULL` is UNKNOWN, not TRUE. Use `IS NULL`.
- `NULL + 5` = NULL. `'abc' + NULL` = NULL in SQL Server.
- `WHERE dept_id <> 10` does **not** return Farhana (her dept_id is NULL).

| Function | SQL Server | MySQL | Oracle | Meaning |
|---|---|---|---|---|
| Replace NULL | `ISNULL(x, 0)` | `IFNULL(x, 0)` | `NVL(x, 0)` | If x is NULL use 0 |
| Standard | `COALESCE(a, b, c)` | same | same | First non-NULL value |
| `NULLIF(a, b)` | ✔ | ✔ | ✔ | NULL if a = b, else a (avoids divide-by-zero: `x / NULLIF(y, 0)`) |
| If-NULL-else | — | — | `NVL2(x, a, b)` | a if x not NULL, else b |

```sql
SELECT name, COALESCE(dept_id, 0) AS dept, COALESCE(manager_id, 0) AS mgr
FROM Employee
WHERE dept_id IS NULL OR manager_id IS NULL;
```
| name | dept | mgr |
|---|---|---|
| Rahim | 10 | 0 |
| Farhana | 0 | 1 |

### ORDER BY

```sql
SELECT name, dept_id, salary FROM Employee
ORDER BY dept_id ASC, salary DESC;     -- ASC is the default
-- ORDER BY 2, 3 DESC                  -- by column position (allowed, but not recommended)
```
**NULL ordering:** SQL Server and MySQL put NULLs **first** in ascending order; Oracle and PostgreSQL put NULLs **last**. Oracle/PostgreSQL support `ORDER BY dept_id NULLS FIRST`.

### Limiting rows (top N)

| SQL Server | MySQL | Oracle 12c+ | Oracle (old) |
|---|---|---|---|
| `SELECT TOP 3 ... ORDER BY salary DESC` | `... ORDER BY salary DESC LIMIT 3` | `... ORDER BY salary DESC FETCH FIRST 3 ROWS ONLY` | `SELECT * FROM (SELECT ... ORDER BY salary DESC) WHERE ROWNUM <= 3` |
| `... ORDER BY salary DESC OFFSET 3 ROWS FETCH NEXT 3 ROWS ONLY` (page 2) | `... LIMIT 3 OFFSET 3` or `LIMIT 3, 3` | `... OFFSET 3 ROWS FETCH NEXT 3 ROWS ONLY` | |
| `TOP 3 WITH TIES` | — | `FETCH FIRST 3 ROWS WITH TIES` | |

Top 3 salaries: Rahim 90000, Sadia 70000, Ayesha 65000.
**ROWNUM trap (Oracle):** `WHERE ROWNUM <= 3 ORDER BY salary DESC` takes 3 random rows **first**, then sorts them. Sort in a subquery first.

### CASE expression

```sql
SELECT name, salary,
       CASE
           WHEN salary >= 70000 THEN 'High'
           WHEN salary >= 50000 THEN 'Medium'
           ELSE 'Low'
       END AS band
FROM Employee;
```
| name | salary | band |
|---|---|---|
| Rahim | 90000 | High |
| Karim | 60000 | Medium |
| Ayesha | 65000 | Medium |
| Nusrat | 50000 | Medium |
| Tanvir | 55000 | Medium |
| Sadia | 70000 | High |
| Imran | 60000 | Medium |
| Farhana | 35000 | Low |

Simple CASE: `CASE gender WHEN 'M' THEN 'Male' WHEN 'F' THEN 'Female' END`. Oracle also has `DECODE(gender, 'M', 'Male', 'F', 'Female', 'Unknown')`.

### String functions

| Task | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Length | `LEN(s)` (ignores trailing spaces) | `CHAR_LENGTH(s)` (`LENGTH` = bytes) | `LENGTH(s)` |
| Upper / lower | `UPPER`, `LOWER` | same | same |
| Substring | `SUBSTRING(s, 1, 3)` | `SUBSTRING(s, 1, 3)` / `SUBSTR` | `SUBSTR(s, 1, 3)` |
| Concatenate | `s1 + s2` or `CONCAT(s1, s2)` | `CONCAT(s1, s2)` | `s1 \|\| s2` or `CONCAT(s1, s2)` (2 args) |
| Find position | `CHARINDEX('a', s)` | `LOCATE('a', s)` / `INSTR(s, 'a')` | `INSTR(s, 'a')` |
| Trim | `TRIM`, `LTRIM`, `RTRIM` | same | same |
| Replace | `REPLACE(s, 'a', 'b')` | same | same |
| Left / right part | `LEFT(s, 3)`, `RIGHT(s, 3)` | same | `SUBSTR(s, 1, 3)`, `SUBSTR(s, -3)` |
| Reverse | `REVERSE(s)` | `REVERSE(s)` | `REVERSE(s)` (undocumented) |

String positions start at **1** in SQL (not 0).

### Numeric functions
`ROUND(12.345, 2)` = 12.35 · `CEILING(4.1)` = 5 (Oracle/MySQL `CEIL`) · `FLOOR(4.9)` = 4 · `ABS(-7)` = 7 · `POWER(2, 10)` = 1024 · `SQRT(16)` = 4 · `MOD(10, 3)` = 1 (SQL Server: `10 % 3`).

### Date functions

| Task | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Current date-time | `GETDATE()`, `SYSDATETIME()` | `NOW()` | `SYSDATE`, `SYSTIMESTAMP` |
| Current date only | `CAST(GETDATE() AS DATE)` | `CURDATE()` | `TRUNC(SYSDATE)` |
| Add 6 months | `DATEADD(MONTH, 6, d)` | `DATE_ADD(d, INTERVAL 6 MONTH)` | `ADD_MONTHS(d, 6)` |
| Add 1 day | `DATEADD(DAY, 1, d)` | `DATE_ADD(d, INTERVAL 1 DAY)` | `d + 1` |
| Difference in days | `DATEDIFF(DAY, d1, d2)` | `DATEDIFF(d2, d1)` | `d2 - d1` |
| Year part | `YEAR(d)` or `DATEPART(YEAR, d)` | `YEAR(d)` | `EXTRACT(YEAR FROM d)` |
| Format | `FORMAT(d, 'dd-MM-yyyy')` | `DATE_FORMAT(d, '%d-%m-%Y')` | `TO_CHAR(d, 'DD-MM-YYYY')` |
| String → date | `CONVERT(DATE, '2026-11-28')` | `STR_TO_DATE('28-11-2026', '%d-%m-%Y')` | `TO_DATE('28-11-2026', 'DD-MM-YYYY')` |

Conversion: `CAST(x AS type)` is standard and works everywhere. SQL Server also has `CONVERT(type, x, style)`; Oracle has `TO_CHAR`, `TO_DATE`, `TO_NUMBER`.

**Date range trap:** if `join_date` is a `DATETIME`, `BETWEEN '2025-01-01' AND '2025-12-31'` misses times after midnight on 31 Dec. Safer:
```sql
WHERE join_date >= '2025-01-01' AND join_date < '2026-01-01'
```

---

## B11. Aggregate Functions and GROUP BY

### COUNT variants (verified)

```sql
SELECT COUNT(*)                AS all_rows,        -- 8  (counts every row)
       COUNT(dept_id)          AS with_dept,       -- 7  (NULL not counted)
       COUNT(manager_id)       AS with_mgr,        -- 7
       COUNT(DISTINCT dept_id) AS dept_count,      -- 3  (10, 20, 30; NULL ignored)
       COUNT(DISTINCT city)    AS cities,          -- 4
       SUM(salary)             AS total,           -- 485000
       AVG(salary)             AS average,         -- 60625
       MAX(salary)             AS highest,         -- 90000
       MIN(salary)             AS lowest           -- 35000
FROM Employee;
```

Rules:
- All aggregate functions **ignore NULL**, except `COUNT(*)`.
- `AVG(col)` = SUM of non-NULL values ÷ COUNT of non-NULL values. It is **not** `SUM(col) / COUNT(*)` when NULLs exist.
- On an empty set: `COUNT` returns 0; `SUM`, `AVG`, `MAX`, `MIN` return **NULL**.
- **SQL Server trap:** `AVG` of an `INT` column returns an `INT` (truncated). Use `AVG(salary * 1.0)` or `AVG(CAST(salary AS DECIMAL(10,2)))`.
- Every column in `SELECT` that is **not** inside an aggregate **must be in `GROUP BY`**. (MySQL enforces this with `ONLY_FULL_GROUP_BY`, the default since 5.7.)

### GROUP BY (verified)

```sql
SELECT dept_id, COUNT(*) AS cnt, SUM(salary) AS total,
       AVG(salary) AS avg_sal, MAX(salary) AS max_sal, MIN(salary) AS min_sal
FROM Employee
GROUP BY dept_id
ORDER BY dept_id;
```
| dept_id | cnt | total | avg_sal | max_sal | min_sal |
|---|---|---|---|---|---|
| NULL | 1 | 35000 | 35000.00 | 35000 | 35000 |
| 10 | 3 | 215000 | 71666.67 | 90000 | 60000 |
| 20 | 2 | 105000 | 52500.00 | 55000 | 50000 |
| 30 | 2 | 130000 | 65000.00 | 70000 | 60000 |

NULLs form **one group** of their own in GROUP BY.

### WHERE vs HAVING

| WHERE | HAVING |
|---|---|
| Filters **rows** | Filters **groups** |
| Runs **before** GROUP BY | Runs **after** GROUP BY |
| Cannot use aggregates | Can use aggregates |
| Works without GROUP BY | Normally used with GROUP BY |

```sql
-- Departments where, counting only staff who joined from 2020, there are at least 2 people
SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal
FROM Employee
WHERE join_date >= '2020-01-01'        -- row filter first
GROUP BY dept_id
HAVING COUNT(*) >= 2;                  -- then group filter
```
| dept_id | cnt | avg_sal |
|---|---|---|
| 10 | 2 | 62500 |
| 20 | 2 | 52500 |

### More GROUP BY results (verified)

```sql
SELECT gender, COUNT(*), MIN(salary), MAX(salary), AVG(salary)
FROM Employee GROUP BY gender;
```
| gender | count | min | max | avg |
|---|---|---|---|---|
| F | 4 | 35000 | 70000 | 55000.00 |
| M | 4 | 55000 | 90000 | 66250.00 |

```sql
SELECT city, SUM(salary) AS total FROM Employee
GROUP BY city HAVING SUM(salary) > 100000 ORDER BY total DESC;
```
| city | total |
|---|---|
| Dhaka | 265000 |
| Mymensingh | 115000 |

**Group by two columns:**
```sql
SELECT dept_id, gender, COUNT(*) FROM Employee
WHERE dept_id IS NOT NULL
GROUP BY dept_id, gender ORDER BY dept_id, gender;
```
| dept_id | gender | count |
|---|---|---|
| 10 | F | 1 |
| 10 | M | 2 |
| 20 | F | 1 |
| 20 | M | 1 |
| 30 | F | 1 |
| 30 | M | 1 |

### ROLLUP / CUBE (subtotals)
```sql
-- SQL Server / Oracle
SELECT dept_id, SUM(salary) FROM Employee GROUP BY ROLLUP(dept_id);
-- MySQL
SELECT dept_id, SUM(salary) FROM Employee GROUP BY dept_id WITH ROLLUP;
```
Adds a grand-total row (dept_id NULL, 485000). `CUBE(a, b)` adds subtotals for every combination. `GROUPING SETS` lets you choose which subtotals.

---

## B12. Joins (with result tables, all verified)

```
 INNER JOIN          LEFT JOIN           RIGHT JOIN          FULL OUTER JOIN
  ┌───┬───┬───┐       ┌───┬───┬───┐       ┌───┬───┬───┐       ┌───┬───┬───┐
  │ A │███│ B │       │███│███│ B │       │ A │███│███│       │███│███│███│
  └───┴───┴───┘       └───┴───┴───┘       └───┴───┴───┘       └───┴───┴───┘
 matching only       all of A +          all of B +          all rows of
                     matches of B        matches of A        both tables
```

| Join | Returns | Rows here |
|---|---|---|
| INNER | Only matching rows | 7 |
| LEFT (OUTER) | All rows from the left table + matches (NULL if none) | 8 |
| RIGHT (OUTER) | All rows from the right table + matches | 8 |
| FULL (OUTER) | All rows from both tables | 9 |
| CROSS | Every combination (Cartesian product) | 8 × 4 = 32 |
| SELF | Table joined to itself | — |

### INNER JOIN

```sql
SELECT e.name, d.dept_name
FROM Employee e
INNER JOIN Department d ON e.dept_id = d.dept_id;
```
| name | dept_name |
|---|---|
| Rahim | IT |
| Karim | IT |
| Ayesha | IT |
| Nusrat | HR |
| Tanvir | HR |
| Sadia | Finance |
| Imran | Finance |

Farhana (no department) and Research (no employees) are missing.

### LEFT JOIN

```sql
SELECT e.name, d.dept_name
FROM Employee e
LEFT JOIN Department d ON e.dept_id = d.dept_id;
```
Same 7 rows **+** `Farhana | NULL` → 8 rows.

### RIGHT JOIN

```sql
SELECT e.name, d.dept_name
FROM Employee e
RIGHT JOIN Department d ON e.dept_id = d.dept_id;
```
Same 7 rows **+** `NULL | Research` → 8 rows.

### FULL OUTER JOIN

```sql
SELECT e.name, d.dept_name
FROM Employee e
FULL OUTER JOIN Department d ON e.dept_id = d.dept_id;
```
7 matching rows + `Farhana | NULL` + `NULL | Research` → 9 rows.

**MySQL has no FULL OUTER JOIN.** Emulate it:
```sql
SELECT e.name, d.dept_name FROM Employee e LEFT JOIN Department d ON e.dept_id = d.dept_id
UNION
SELECT e.name, d.dept_name FROM Employee e RIGHT JOIN Department d ON e.dept_id = d.dept_id;
```

### CROSS JOIN
```sql
SELECT e.name, d.dept_name FROM Employee e CROSS JOIN Department d;   -- 32 rows
```
Use: generate combinations (every unit × every terrain type).

### SELF JOIN — employee with manager name

```sql
SELECT e.name AS employee, m.name AS manager
FROM Employee e
LEFT JOIN Employee m ON e.manager_id = m.emp_id;
```
| employee | manager |
|---|---|
| Rahim | NULL |
| Karim | Rahim |
| Ayesha | Rahim |
| Nusrat | Rahim |
| Tanvir | Nusrat |
| Sadia | Rahim |
| Imran | Sadia |
| Farhana | Rahim |

(With `INNER JOIN`, Rahim would disappear because he has no manager.)

**Employees who earn more than their manager:**
```sql
SELECT e.name, e.salary, m.name AS manager, m.salary AS mgr_salary
FROM Employee e
JOIN Employee m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;
```
| name | salary | manager | mgr_salary |
|---|---|---|---|
| Tanvir | 55000 | Nusrat | 50000 |

**Managers and their number of direct reports:**
```sql
SELECT m.name, COUNT(*) AS reports
FROM Employee e
JOIN Employee m ON e.manager_id = m.emp_id
GROUP BY m.emp_id, m.name;
```
| name | reports |
|---|---|
| Rahim | 5 |
| Nusrat | 1 |
| Sadia | 1 |

### Non-equi join (join on a range)

```sql
SELECT e.name, e.salary, g.grade
FROM Employee e
JOIN SalaryGrade g ON e.salary BETWEEN g.min_sal AND g.max_sal;
```
| name | salary | grade |
|---|---|---|
| Rahim | 90000 | A |
| Karim | 60000 | B |
| Ayesha | 65000 | B |
| Nusrat | 50000 | C |
| Tanvir | 55000 | B |
| Sadia | 70000 | A |
| Imran | 60000 | B |
| Farhana | 35000 | D |

An **equi-join** uses `=` in the condition; a **non-equi join** (theta join) uses `<`, `>`, `BETWEEN`, etc.

### Anti-join and semi-join

```sql
-- Anti-join: employees with NO department
SELECT e.name
FROM Employee e
LEFT JOIN Department d ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;                   -- Farhana

-- Anti-join: departments with NO employees
SELECT d.dept_name
FROM Department d
LEFT JOIN Employee e ON d.dept_id = e.dept_id
WHERE e.emp_id IS NULL;                    -- Research

-- Semi-join: departments that HAVE employees (each listed once)
SELECT d.dept_name
FROM Department d
WHERE EXISTS (SELECT 1 FROM Employee e WHERE e.dept_id = d.dept_id);   -- IT, HR, Finance
```

### Count per department including empty departments (trap)

```sql
SELECT d.dept_name, COUNT(e.emp_id) AS cnt          -- ✔ COUNT(column from the right table)
FROM Department d
LEFT JOIN Employee e ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;
```
| dept_name | cnt |
|---|---|
| IT | 3 |
| HR | 2 |
| Finance | 2 |
| Research | **0** |

With `COUNT(*)` instead, Research shows **1** (the row with NULLs is still a row). Wrong answer.

### ON vs WHERE in a LEFT JOIN (trap)

```sql
-- Filter inside ON: keeps every department
SELECT d.dept_name, e.name
FROM Department d
LEFT JOIN Employee e ON d.dept_id = e.dept_id AND e.gender = 'F';
```
| dept_name | name |
|---|---|
| IT | Ayesha |
| HR | Nusrat |
| Finance | Sadia |
| Research | NULL |

```sql
-- Filter in WHERE: the LEFT JOIN behaves like an INNER JOIN
SELECT d.dept_name, e.name
FROM Department d
LEFT JOIN Employee e ON d.dept_id = e.dept_id
WHERE e.gender = 'F';
```
| dept_name | name |
|---|---|
| IT | Ayesha |
| HR | Nusrat |
| Finance | Sadia |

The WHERE condition `e.gender = 'F'` is UNKNOWN for Research's NULL row, so the row is removed.

### Other join syntax

```sql
-- Old comma style (avoid): join condition in WHERE
SELECT e.name, d.dept_name FROM Employee e, Department d WHERE e.dept_id = d.dept_id;

-- Old Oracle outer join (+): (+) goes on the side that may be NULL
SELECT e.name, d.dept_name FROM Employee e, Department d WHERE e.dept_id = d.dept_id(+);

-- NATURAL JOIN / USING (MySQL, Oracle): joins on columns with the same name
SELECT name, dept_name FROM Employee JOIN Department USING (dept_id);
```
NATURAL JOIN is risky: if both tables later get another same-named column (such as `created_at`), the join silently changes.

---

## B13. Subqueries and CTEs

| Type | Returns | Used with | Example |
|---|---|---|---|
| Scalar | One value | `=`, `>`, `<` | `salary > (SELECT AVG(salary) ...)` |
| Multi-row | One column, many rows | `IN`, `ANY`, `ALL`, `EXISTS` | `dept_id IN (SELECT ...)` |
| Multi-column | Many columns | `IN` with a row constructor (MySQL, Oracle) | `(a, b) IN (SELECT x, y ...)` |
| Correlated | Runs once per outer row; refers to the outer query | any | dept-average example below |
| Derived table / inline view | A table | `FROM (SELECT ...) alias` | window-function filters |

### Scalar subquery (verified)

```sql
SELECT name, salary
FROM Employee
WHERE salary > (SELECT AVG(salary) FROM Employee);    -- average = 60625
```
Result: Rahim 90000, Ayesha 65000, Sadia 70000.

### IN with a subquery
```sql
SELECT name FROM Employee
WHERE dept_id IN (SELECT dept_id FROM Department WHERE location = 'Dhaka');
```
Result: Rahim, Karim, Ayesha (IT), Sadia, Imran (Finance).

### ANY and ALL (verified)

HR (dept 20) salaries are 50000 and 55000.
```sql
SELECT name FROM Employee
WHERE salary > ALL (SELECT salary FROM Employee WHERE dept_id = 20);   -- greater than 55000
-- Rahim, Karim, Ayesha, Sadia, Imran

SELECT name FROM Employee
WHERE salary > ANY (SELECT salary FROM Employee WHERE dept_id = 20);   -- greater than 50000
-- Rahim, Karim, Ayesha, Tanvir, Sadia, Imran
```

| Expression | Equivalent |
|---|---|
| `> ALL (...)` | `> MAX(...)` |
| `> ANY (...)` | `> MIN(...)` |
| `< ALL (...)` | `< MIN(...)` |
| `= ANY (...)` | `IN (...)` |
| `<> ALL (...)` | `NOT IN (...)` |

### Correlated subquery: above their own department's average (verified)

```sql
SELECT e.name, e.dept_id, e.salary
FROM Employee e
WHERE e.salary > (SELECT AVG(x.salary)
                  FROM Employee x
                  WHERE x.dept_id = e.dept_id);   -- refers to the outer row
```
| name | dept_id | salary |
|---|---|---|
| Rahim | 10 | 90000 |
| Tanvir | 20 | 55000 |
| Sadia | 30 | 70000 |

Department averages: IT 71666.67, HR 52500, Finance 65000. Farhana is excluded: `x.dept_id = NULL` matches nothing, so her average is NULL.

### Subquery in the SELECT list
```sql
SELECT d.dept_name,
       (SELECT COUNT(*) FROM Employee e WHERE e.dept_id = d.dept_id) AS staff
FROM Department d;
```
IT 3, HR 2, Finance 2, Research 0.

### EXISTS vs IN

| IN | EXISTS |
|---|---|
| Compares a value with a list | Checks whether the subquery returns **any** row |
| Subquery result is built first | Stops at the first match (short-circuit) |
| Good when the subquery result is small | Good when the subquery table is large / correlated |
| `NOT IN` fails with NULLs (see below) | `NOT EXISTS` is NULL-safe |

### NOT IN with NULL — the most famous trap (verified)

"Find employees who are not managers":
```sql
SELECT name FROM Employee
WHERE emp_id NOT IN (SELECT manager_id FROM Employee);
-- Returns NO ROWS!
```
The subquery returns `(NULL, 1, 1, 1, 4, 1, 6, 1)`. `emp_id NOT IN (..., NULL)` means `emp_id <> NULL AND ...`, which is never TRUE.

Correct versions:
```sql
SELECT name FROM Employee
WHERE emp_id NOT IN (SELECT manager_id FROM Employee WHERE manager_id IS NOT NULL);

SELECT name FROM Employee e
WHERE NOT EXISTS (SELECT 1 FROM Employee x WHERE x.manager_id = e.emp_id);
```
Result: Karim, Ayesha, Tanvir, Imran, Farhana.

### Derived table (inline view)

```sql
SELECT dept_id, name, salary
FROM (SELECT e.*, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
      FROM Employee e) t                 -- SQL Server and MySQL require an alias
WHERE rnk = 1;
```
Oracle does not allow `AS` before a table alias: write `) t`, not `) AS t`. (Writing `) t` works in all three.)

### CTE (Common Table Expression)

```sql
WITH DeptAvg AS (
    SELECT dept_id, AVG(salary) AS avg_sal
    FROM Employee
    GROUP BY dept_id
)
SELECT e.name, e.salary, a.avg_sal
FROM Employee e
JOIN DeptAvg a ON e.dept_id = a.dept_id
WHERE e.salary > a.avg_sal;
```
Same result as the correlated subquery (Rahim, Tanvir, Sadia). A CTE is a **named temporary result** that exists only for one statement. It makes queries readable and can be referenced more than once.

### Recursive CTE — chain of command (verified)

```sql
-- SQL Server
WITH Chain AS (
    SELECT emp_id, name, manager_id, 1 AS lvl,
           CAST(name AS VARCHAR(200)) AS path
    FROM Employee
    WHERE manager_id IS NULL                       -- anchor member: the top
    UNION ALL
    SELECT e.emp_id, e.name, e.manager_id, c.lvl + 1,
           CAST(c.path + ' > ' + e.name AS VARCHAR(200))
    FROM Employee e
    JOIN Chain c ON e.manager_id = c.emp_id        -- recursive member
)
SELECT lvl, name, path FROM Chain ORDER BY lvl, emp_id;

-- MySQL 8: write WITH RECURSIVE, use CAST(... AS CHAR(200)) and CONCAT(c.path, ' > ', e.name)
-- Oracle:  WITH Chain (emp_id, name, manager_id, lvl, path) AS (...)   ← column list is required
--          and use c.path || ' > ' || e.name
```
| lvl | name | path |
|---|---|---|
| 1 | Rahim | Rahim |
| 2 | Karim | Rahim > Karim |
| 2 | Ayesha | Rahim > Ayesha |
| 2 | Nusrat | Rahim > Nusrat |
| 2 | Sadia | Rahim > Sadia |
| 2 | Farhana | Rahim > Farhana |
| 3 | Tanvir | Rahim > Nusrat > Tanvir |
| 3 | Imran | Rahim > Sadia > Imran |

Use in a war game: walk an **ORBAT** (brigade → battalion → company) stored as `Unit(unit_id, parent_unit_id)`.
Oracle also has `CONNECT BY`:
```sql
SELECT LEVEL, name FROM Employee
START WITH manager_id IS NULL
CONNECT BY PRIOR emp_id = manager_id;
```
SQL Server stops recursion at 100 levels by default (`OPTION (MAXRECURSION n)` changes it).

---

## B14. Set Operators

```sql
SELECT city FROM Employee
UNION
SELECT location FROM Department;
```

| Operator | Result (verified) |
|---|---|
| `UNION` (removes duplicates) | Chattogram, Dhaka, Mymensingh, Sylhet (4 rows) |
| `UNION ALL` (keeps duplicates) | 12 rows (8 + 4) |
| `INTERSECT` (in both) | Chattogram, Dhaka, Mymensingh |
| `EXCEPT` / `MINUS` (Employee cities not in Department locations) | Sylhet |
| Department locations `EXCEPT` Employee cities | (empty) |

Rules:
- Both queries must have the **same number of columns** with **compatible types**.
- Column names come from the **first** query.
- `ORDER BY` only once, at the end.
- `UNION ALL` is faster (no duplicate removal).

Support: SQL Server `UNION`, `INTERSECT`, `EXCEPT`. Oracle `UNION`, `INTERSECT`, `MINUS` (Oracle 21c+ also accepts `EXCEPT`). MySQL `UNION`; `INTERSECT` and `EXCEPT` only from **8.0.31**.

### JOIN vs UNION

| JOIN | UNION |
|---|---|
| Combines **columns** (side by side) | Combines **rows** (one below another) |
| Tables need a related column | Queries need the same number and type of columns |
| Result is wider | Result is longer |

---

## B15. Window Functions (all results verified)

**Syntax:** `function() OVER ( [PARTITION BY ...] [ORDER BY ...] [frame] )`

A window function computes a value **for each row** using a set of related rows, **without collapsing rows** like GROUP BY does.

| GROUP BY | Window function |
|---|---|
| One row per group | Keeps every row |
| Cannot show individual and group values together without a join | Can show `name`, `salary`, and the department total in one row |

### ROW_NUMBER vs RANK vs DENSE_RANK

```sql
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC, emp_id) AS row_num,
       RANK()       OVER (ORDER BY salary DESC)         AS rnk,
       DENSE_RANK() OVER (ORDER BY salary DESC)         AS dense_rnk
FROM Employee;
```
| name | salary | row_num | rnk | dense_rnk |
|---|---|---|---|---|
| Rahim | 90000 | 1 | 1 | 1 |
| Sadia | 70000 | 2 | 2 | 2 |
| Ayesha | 65000 | 3 | 3 | 3 |
| Karim | 60000 | 4 | **4** | **4** |
| Imran | 60000 | 5 | **4** | **4** |
| Tanvir | 55000 | 6 | **6** | **5** |
| Nusrat | 50000 | 7 | 7 | 6 |
| Farhana | 35000 | 8 | 8 | 7 |

- `ROW_NUMBER`: always unique (1, 2, 3, …), ties broken arbitrarily (here by `emp_id`).
- `RANK`: ties share a rank, then it **skips** (4, 4, **6**).
- `DENSE_RANK`: ties share a rank, **no gap** (4, 4, **5**). Use it for "Nth highest salary".

### PARTITION BY: rank inside each department

```sql
SELECT dept_id, name, salary,
       RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk_in_dept
FROM Employee
WHERE dept_id IS NOT NULL;
```
| dept_id | name | salary | rnk_in_dept |
|---|---|---|---|
| 10 | Rahim | 90000 | 1 |
| 10 | Ayesha | 65000 | 2 |
| 10 | Karim | 60000 | 3 |
| 20 | Tanvir | 55000 | 1 |
| 20 | Nusrat | 50000 | 2 |
| 30 | Sadia | 70000 | 1 |
| 30 | Imran | 60000 | 2 |

**Second highest in each department** (`WHERE rnk = 2` on a derived table): Ayesha 65000, Nusrat 50000, Imran 60000.

### Running total and department running total

```sql
SELECT emp_id, name, salary,
       SUM(salary) OVER (ORDER BY emp_id) AS running_total
FROM Employee;
```
| emp_id | name | salary | running_total |
|---|---|---|---|
| 1 | Rahim | 90000 | 90000 |
| 2 | Karim | 60000 | 150000 |
| 3 | Ayesha | 65000 | 215000 |
| 4 | Nusrat | 50000 | 265000 |
| 5 | Tanvir | 55000 | 320000 |
| 6 | Sadia | 70000 | 390000 |
| 7 | Imran | 60000 | 450000 |
| 8 | Farhana | 35000 | 485000 |

With `PARTITION BY dept_id`, the total restarts in each department: IT 90000 → 150000 → 215000; HR 50000 → 105000; Finance 70000 → 130000.

### Percentage of department total

```sql
SELECT name, dept_id, salary,
       ROUND(100.0 * salary / SUM(salary) OVER (PARTITION BY dept_id), 1) AS pct
FROM Employee WHERE dept_id IS NOT NULL;
```
| name | dept_id | salary | pct |
|---|---|---|---|
| Rahim | 10 | 90000 | 41.9 |
| Karim | 10 | 60000 | 27.9 |
| Ayesha | 10 | 65000 | 30.2 |
| Nusrat | 20 | 50000 | 47.6 |
| Tanvir | 20 | 55000 | 52.4 |
| Sadia | 30 | 70000 | 53.8 |
| Imran | 30 | 60000 | 46.2 |

### LAG and LEAD (previous / next row)

```sql
SELECT name, join_date,
       LAG(name)  OVER (ORDER BY join_date) AS joined_before,
       LEAD(name) OVER (ORDER BY join_date) AS joined_after
FROM Employee;
```
| name | join_date | joined_before | joined_after |
|---|---|---|---|
| Sadia | 2018-09-09 | NULL | Rahim |
| Rahim | 2019-03-15 | Sadia | Nusrat |
| Nusrat | 2020-11-20 | Rahim | Karim |
| Karim | 2021-07-01 | Nusrat | Ayesha |
| Ayesha | 2022-01-10 | Karim | Tanvir |
| Tanvir | 2023-05-05 | Ayesha | Imran |
| Imran | 2024-02-14 | Tanvir | Farhana |
| Farhana | 2025-06-01 | Imran | NULL |

Use in a war game: compare a unit's position or strength with its **previous** report (`strength - LAG(strength) OVER (PARTITION BY unit_id ORDER BY report_time)` = losses since the last report).

### Moving average (frame clause)

```sql
SELECT name, salary,
       AVG(salary) OVER (ORDER BY emp_id ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS avg_last_2
FROM Employee;
```
Rahim 90000.0, Karim 75000.0, Ayesha 62500.0, Nusrat 57500.0, Tanvir 52500.0, Sadia 62500.0, Imran 65000.0, Farhana 47500.0.

### NTILE and FIRST_VALUE

- `NTILE(4) OVER (ORDER BY salary DESC)` splits rows into 4 buckets: Rahim, Sadia → 1; Ayesha, Karim → 2; Imran, Tanvir → 3; Nusrat, Farhana → 4.
- `FIRST_VALUE(name) OVER (PARTITION BY dept_id ORDER BY salary DESC)` → the top earner's name on every row of the department (IT: Rahim, HR: Tanvir, Finance: Sadia).

| Function | Purpose |
|---|---|
| `ROW_NUMBER()` | Unique sequence number |
| `RANK()` | Rank with gaps |
| `DENSE_RANK()` | Rank without gaps |
| `NTILE(n)` | Split into n buckets |
| `LAG(col, n)` / `LEAD(col, n)` | Value from n rows before / after |
| `FIRST_VALUE(col)` / `LAST_VALUE(col)` | First / last value in the window |
| `SUM`, `AVG`, `COUNT`, `MIN`, `MAX` `OVER (...)` | Running or group totals without collapsing rows |

Window functions cannot be used directly in `WHERE` (they run in the SELECT step). Wrap them in a derived table or CTE, then filter.

---

## B16. Views

**Definition:** A view is a **virtual table** based on a stored `SELECT` query. It stores the query, **not the data** (except materialized/indexed views). Every time you query the view, the underlying query runs.

```sql
-- Hide salary: a public staff list
CREATE VIEW vw_EmployeePublic AS
SELECT e.emp_id, e.name, d.dept_name, e.city
FROM Employee e
LEFT JOIN Department d ON e.dept_id = d.dept_id;

SELECT * FROM vw_EmployeePublic WHERE city = 'Dhaka';   -- use like a table

-- Summary view
CREATE VIEW vw_DeptSummary AS
SELECT d.dept_name, COUNT(e.emp_id) AS staff, COALESCE(SUM(e.salary), 0) AS total_salary
FROM Department d
LEFT JOIN Employee e ON e.dept_id = d.dept_id
GROUP BY d.dept_name;

-- Change / remove
CREATE OR REPLACE VIEW ...        -- MySQL, Oracle
CREATE OR ALTER VIEW ...          -- SQL Server 2016 SP1+
DROP VIEW vw_DeptSummary;
```

**Advantages:**
1. **Security** — show only some columns/rows (no salary column for clerks); grant permission on the view, not the table.
2. **Simplicity** — hide complex joins behind a simple name.
3. **Consistency** — everyone uses the same business logic.
4. **Logical data independence** — tables can change while the view keeps the same shape.

**Updatable view rules** (you can INSERT/UPDATE/DELETE through it) — generally the view must:
- use **one** base table,
- have no `DISTINCT`, `GROUP BY`, `HAVING`, aggregates, `UNION`, or window functions,
- include all `NOT NULL` columns without defaults (for INSERT).

**WITH CHECK OPTION** — rejects changes that would make a row disappear from the view:
```sql
CREATE VIEW vw_ITStaff AS
SELECT emp_id, name, dept_id, salary FROM Employee WHERE dept_id = 10
WITH CHECK OPTION;

UPDATE vw_ITStaff SET dept_id = 20 WHERE emp_id = 2;   -- ERROR: row would leave the view
```

**Materialized view** (Oracle, PostgreSQL) / **indexed view** (SQL Server, created `WITH SCHEMABINDING` plus a unique clustered index): stores the **result physically**, so reads are fast, but it must be refreshed or maintained on every change. MySQL has no materialized views.

| Table | View | Materialized view |
|---|---|---|
| Stores data | Stores only the query | Stores the query result |
| Always current | Always current | Current only after refresh |
| Uses storage | Almost none | Uses storage |
| Can have indexes | No (except indexed views) | Yes |

---

## B17. Indexes

**Definition:** An index is a separate data structure (usually a **B+ tree**) that lets the database find rows quickly without scanning the whole table, like the index at the back of a book.

```
                         [ 50000 | 65000 ]                         ← root (guide keys)
              ┌──────────────────┼──────────────────┐
          [35000]   ⇄   [50000 | 55000 | 60000]   ⇄   [65000 | 70000 | 90000]   ← leaves: ALL keys, sorted
             │                   │                          │
          row ptr            row ptrs                   row ptrs
   (leaves are linked left ⇄ right, so a range like salary BETWEEN 50000 AND 70000 is one walk)
```
Search cost: about **O(log n)** instead of O(n) for a full table scan.

### Clustered vs Non-clustered

| Clustered index | Non-clustered index |
|---|---|
| Sorts and stores the **table rows themselves** in key order | A **separate structure** with the key + a pointer (row locator) to the row |
| Leaf level **is** the data | Leaf level holds keys + pointers |
| Only **one** per table | Many per table (SQL Server: up to 999) |
| Created by default on the **primary key** (SQL Server) | Created by default on a **UNIQUE** constraint |
| Fast for range queries on the key | Needs an extra lookup to fetch other columns (unless covering) |
| Like a phone book sorted by name | Like the index at the back of a textbook |

MySQL InnoDB: the table is **always** clustered on the primary key. Oracle: tables are heaps by default; an **index-organized table (IOT)** is the clustered equivalent.

### Creating indexes

```sql
CREATE INDEX ix_employee_dept ON Employee(dept_id);                       -- non-clustered
CREATE UNIQUE INDEX ux_employee_email ON Employee(email);                 -- unique
CREATE INDEX ix_employee_dept_salary ON Employee(dept_id, salary);        -- composite

-- SQL Server only
CREATE CLUSTERED INDEX cx_log_time ON EventLog(event_time);
CREATE NONCLUSTERED INDEX ix_emp_dept_incl ON Employee(dept_id) INCLUDE (name, salary);   -- covering
CREATE INDEX ix_emp_active ON Employee(dept_id) WHERE dept_id IS NOT NULL;               -- filtered

-- Drop
DROP INDEX ix_employee_dept ON Employee;   -- SQL Server, MySQL
DROP INDEX ix_employee_dept;               -- Oracle
```

### Composite index — leftmost-prefix rule
Index on `(dept_id, salary)`:
- ✔ `WHERE dept_id = 10`
- ✔ `WHERE dept_id = 10 AND salary > 60000`
- ✘ `WHERE salary > 60000` alone (usually cannot seek; the index is sorted by dept_id first)

Put the most selective, most-used equality column first.

**Covering index:** contains **every column the query needs**, so the database never touches the table. Example: `ix_emp_dept_incl` covers `SELECT name, salary FROM Employee WHERE dept_id = 10`.

### When to create an index
- Primary keys and **foreign keys** (joins use them).
- Columns used often in `WHERE`, `JOIN`, `ORDER BY`, `GROUP BY`.
- High selectivity (many distinct values).

### When NOT to
- Very small tables.
- Columns with few distinct values (gender) — except Oracle **bitmap indexes**, designed for this in reporting systems.
- Tables with heavy INSERT/UPDATE/DELETE: every index slows writes and uses space.

### Write index-friendly (SARGable) queries

| ✘ Index cannot be used well | ✔ Index can be used |
|---|---|
| `WHERE YEAR(join_date) = 2025` | `WHERE join_date >= '2025-01-01' AND join_date < '2026-01-01'` |
| `WHERE salary * 12 > 700000` | `WHERE salary > 700000 / 12.0` |
| `WHERE name LIKE '%im'` (leading wildcard) | `WHERE name LIKE 'Ra%'` |
| `WHERE UPPER(name) = 'RAHIM'` | Store data consistently, or use a function-based index (Oracle) / computed column index (SQL Server) |
| Comparing a `VARCHAR` column with an `NVARCHAR`/number parameter (implicit conversion) | Use the same data type |

**See the plan:** SQL Server: "Display Estimated/Actual Execution Plan" (Ctrl+L / Ctrl+M) or `SET SHOWPLAN_ALL ON`. MySQL: `EXPLAIN SELECT ...`. Oracle: `EXPLAIN PLAN FOR SELECT ...;` then `SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);`.
**Index seek** = jump to the matching keys (good). **Index/table scan** = read everything (bad for large tables).

Other index types: **hash** (equality only), **bitmap** (Oracle, low cardinality), **full-text** (word search), **spatial** (map/terrain coordinates — useful for war-game GIS data), **columnstore** (SQL Server analytics).

---

## B18. Stored Procedures, Functions, Triggers, Cursors

### Stored procedure

**Definition:** a named, precompiled set of SQL statements stored in the database and executed with one call.

**Advantages:** execution plan reuse, less network traffic (one call instead of many statements), security (grant EXECUTE without table access; prevents injection when parameters are used), reuse, central business logic.
**Disadvantages:** vendor-specific syntax (T-SQL ≠ PL/SQL), harder to version-control and unit-test, business logic split between app and DB.

**SQL Server (T-SQL)**
```sql
CREATE OR ALTER PROCEDURE usp_RaiseSalary
    @DeptId  INT,
    @Percent DECIMAL(5,2),
    @Updated INT OUTPUT                     -- output parameter
AS
BEGIN
    SET NOCOUNT ON;                         -- don't send "n rows affected" messages
    BEGIN TRY
        BEGIN TRANSACTION;
        UPDATE Employee
        SET salary = salary * (1 + @Percent / 100)
        WHERE dept_id = @DeptId;
        SET @Updated = @@ROWCOUNT;
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        THROW;                              -- re-raise the error
    END CATCH
END;

-- Execute
DECLARE @n INT;
EXEC usp_RaiseSalary @DeptId = 10, @Percent = 10, @Updated = @n OUTPUT;
SELECT @n AS rows_updated;                  -- 3
```

**MySQL**
```sql
DELIMITER //
CREATE PROCEDURE usp_GetByDept(IN p_dept INT, OUT p_count INT)
BEGIN
    SELECT emp_id, name, salary FROM Employee WHERE dept_id = p_dept;
    SELECT COUNT(*) INTO p_count FROM Employee WHERE dept_id = p_dept;
END //
DELIMITER ;

CALL usp_GetByDept(10, @cnt);
SELECT @cnt;                                -- 3
```
(`DELIMITER` changes the statement terminator so the `;` inside the body does not end the CREATE statement.)

**Oracle (PL/SQL)**
```sql
CREATE OR REPLACE PROCEDURE usp_raise_salary (
    p_dept    IN  NUMBER,
    p_percent IN  NUMBER,
    p_updated OUT NUMBER
) AS
BEGIN
    UPDATE Employee SET salary = salary * (1 + p_percent / 100) WHERE dept_id = p_dept;
    p_updated := SQL%ROWCOUNT;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/

-- Execute
DECLARE v_n NUMBER;
BEGIN
    usp_raise_salary(10, 10, v_n);
    DBMS_OUTPUT.PUT_LINE('Updated: ' || v_n);
END;
/
```

Parameter modes: `IN` (input, default), `OUT` (output), `IN OUT` (both; T-SQL: `OUTPUT` acts as in-out).

### User-defined functions

```sql
-- SQL Server scalar function
CREATE FUNCTION dbo.fn_AnnualSalary (@monthly DECIMAL(10,2))
RETURNS DECIMAL(12,2)
AS
BEGIN
    RETURN @monthly * 12;
END;
SELECT name, dbo.fn_AnnualSalary(salary) AS annual FROM Employee;   -- schema prefix required

-- SQL Server inline table-valued function (a "parameterized view")
CREATE FUNCTION dbo.fn_StaffOfDept (@DeptId INT)
RETURNS TABLE
AS RETURN (SELECT emp_id, name, salary FROM Employee WHERE dept_id = @DeptId);
SELECT * FROM dbo.fn_StaffOfDept(10);

-- MySQL
CREATE FUNCTION fn_annual(monthly DECIMAL(10,2)) RETURNS DECIMAL(12,2)
DETERMINISTIC
RETURN monthly * 12;

-- Oracle
CREATE OR REPLACE FUNCTION fn_annual (p_monthly NUMBER) RETURN NUMBER IS
BEGIN
    RETURN p_monthly * 12;
END;
/
```

### Stored procedure vs Function

| Stored procedure | Function |
|---|---|
| May return zero, one, or many values (OUT params, result sets) | **Must return** one value or a table |
| Can run INSERT/UPDATE/DELETE | Cannot modify data (SQL Server; Oracle only when not called from SQL) |
| **Cannot** be used in SELECT/WHERE | **Can** be used in SELECT, WHERE, JOIN |
| Can use transactions and TRY/CATCH | No transactions; no TRY/CATCH (SQL Server) |
| Can call functions | Cannot call procedures (SQL Server) |
| Called with `EXEC` / `CALL` | Called inside a query |
| Can have OUTPUT parameters | Only input parameters (SQL Server) |

### Triggers

**Definition:** a stored block that runs **automatically** when an event happens on a table (INSERT, UPDATE, DELETE), or on DDL/logon events.

| Type | Meaning |
|---|---|
| `BEFORE` | Runs before the change (MySQL, Oracle) — validate or modify the new values |
| `AFTER` (`FOR` in SQL Server) | Runs after the change — auditing, logging |
| `INSTEAD OF` | Replaces the action (SQL Server, Oracle) — used on views |
| Row-level (`FOR EACH ROW`) | Once per affected row (MySQL, Oracle) |
| Statement-level | Once per statement (SQL Server DML triggers are statement-level) |
| DDL trigger | Fires on CREATE/ALTER/DROP (audit schema changes) |

**Uses:** audit trail (who changed what), enforcing complex rules, keeping derived/summary data in sync, preventing changes (e.g., no deletion of finished exercises).
**Disadvantages:** hidden logic (hard to debug), slower DML, can cascade into other triggers.

**SQL Server audit trigger** — uses the "magic" tables `inserted` and `deleted`:
```sql
CREATE TABLE SalaryAudit (
    audit_id   INT IDENTITY PRIMARY KEY,
    emp_id     INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    changed_by SYSNAME DEFAULT SUSER_SNAME(),
    changed_at DATETIME2 DEFAULT SYSDATETIME()
);

CREATE TRIGGER trg_Employee_SalaryAudit
ON Employee
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO SalaryAudit (emp_id, old_salary, new_salary)
    SELECT d.emp_id, d.salary, i.salary
    FROM deleted d
    JOIN inserted i ON d.emp_id = i.emp_id
    WHERE d.salary <> i.salary;            -- handles multi-row updates
END;
```

| Statement | `inserted` contains | `deleted` contains |
|---|---|---|
| INSERT | new rows | (empty) |
| DELETE | (empty) | removed rows |
| UPDATE | rows **after** the change | rows **before** the change |

**MySQL** (row-level, `OLD`/`NEW`):
```sql
DELIMITER //
CREATE TRIGGER trg_salary_audit
AFTER UPDATE ON Employee
FOR EACH ROW
BEGIN
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO SalaryAudit (emp_id, old_salary, new_salary)
        VALUES (OLD.emp_id, OLD.salary, NEW.salary);
    END IF;
END //
DELIMITER ;
```

**Oracle** (`:OLD`/`:NEW`, BEFORE trigger to validate):
```sql
CREATE OR REPLACE TRIGGER trg_salary_check
BEFORE UPDATE OF salary ON Employee
FOR EACH ROW
BEGIN
    IF :NEW.salary < :OLD.salary THEN
        RAISE_APPLICATION_ERROR(-20001, 'Salary cannot be reduced');
    END IF;
END;
/
```

### Cursors

**Definition:** a pointer used to process a query result **one row at a time**.
Steps: **DECLARE → OPEN → FETCH (loop) → CLOSE → DEALLOCATE.**

```sql
-- SQL Server
DECLARE @name VARCHAR(100), @salary DECIMAL(10,2);

DECLARE emp_cur CURSOR FOR
    SELECT name, salary FROM Employee WHERE dept_id = 10;

OPEN emp_cur;
FETCH NEXT FROM emp_cur INTO @name, @salary;
WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT @name + ' earns ' + CAST(@salary AS VARCHAR(20));
    FETCH NEXT FROM emp_cur INTO @name, @salary;
END;
CLOSE emp_cur;
DEALLOCATE emp_cur;
```

```sql
-- Oracle: cursor FOR loop (opens, fetches, and closes automatically)
BEGIN
    FOR r IN (SELECT name, salary FROM Employee WHERE dept_id = 10) LOOP
        DBMS_OUTPUT.PUT_LINE(r.name || ' earns ' || r.salary);
    END LOOP;
END;
/
```
Oracle cursor attributes: `%FOUND`, `%NOTFOUND`, `%ROWCOUNT`, `%ISOPEN`. **Implicit cursor** = created automatically for every DML/`SELECT INTO` (`SQL%ROWCOUNT`); **explicit cursor** = declared by you.

**Why avoid cursors?** Row-by-row processing is slow. Prefer one **set-based** statement (`UPDATE ... WHERE ...`). Use cursors only when each row needs separate procedural logic.

### PL/SQL block structure and exceptions
```sql
DECLARE                                  -- optional: variables
    v_name Employee.name%TYPE;           -- same type as the column
BEGIN                                    -- mandatory: statements
    SELECT name INTO v_name FROM Employee WHERE emp_id = 99;
    DBMS_OUTPUT.PUT_LINE(v_name);
EXCEPTION                                -- optional: error handling
    WHEN NO_DATA_FOUND THEN DBMS_OUTPUT.PUT_LINE('No such employee');
    WHEN TOO_MANY_ROWS THEN DBMS_OUTPUT.PUT_LINE('More than one row');
    WHEN OTHERS        THEN DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/
```
Output: `No such employee`.

### T-SQL essentials
```sql
DECLARE @total DECIMAL(12,2);
SELECT @total = SUM(salary) FROM Employee;
IF @total > 400000
    PRINT 'Budget exceeded';
ELSE
    PRINT 'Within budget';

DECLARE @i INT = 1;
WHILE @i <= 3
BEGIN
    PRINT CONCAT('Turn ', @i);
    SET @i += 1;
END;
```
`@@ROWCOUNT` = rows affected by the last statement. `SCOPE_IDENTITY()` = last identity in the current scope (**safer** than `@@IDENTITY`, which can return an id created by a trigger).

---

## B19. Transactions and Concurrency

**Transaction:** a group of operations executed as **one logical unit of work**: either all succeed or none do.

### ACID (with a war-game example: move 100 rounds from Depot A to Unit B)

| Property | Meaning | In the example |
|---|---|---|
| **Atomicity** | All or nothing | Both the debit and the credit happen, or neither |
| **Consistency** | DB moves from one valid state to another; constraints hold | Total ammunition stays the same; stock never negative (CHECK) |
| **Isolation** | Concurrent transactions do not see each other's partial work | Another report does not see ammo "in the air" |
| **Durability** | Once committed, the change survives crashes | After COMMIT, a power failure does not lose it (transaction log) |

Who ensures what: Atomicity → recovery manager (undo log); Consistency → constraints + application; Isolation → concurrency control (locks/MVCC); Durability → write-ahead log, recovery.

### Transaction states
```
             ┌──────────────────────┐   commit    ┌───────────┐
  begin ───► │ Active               │──────────►  │ Partially │ ──► Committed
             └──────────────────────┘             │ committed │
                       │ error                    └───────────┘
                       ▼                                │ failure
                   ┌────────┐       rollback      ┌────────────┐
                   │ Failed │ ─────────────────►  │  Aborted   │
                   └────────┘                     └────────────┘
```

### Syntax in three databases

| Action | SQL Server | MySQL | Oracle |
|---|---|---|---|
| Start | `BEGIN TRANSACTION;` | `START TRANSACTION;` | Implicit (starts with the first DML) |
| Save point | `SAVE TRANSACTION sp1;` | `SAVEPOINT sp1;` | `SAVEPOINT sp1;` |
| Undo to save point | `ROLLBACK TRANSACTION sp1;` | `ROLLBACK TO SAVEPOINT sp1;` | `ROLLBACK TO sp1;` |
| Commit | `COMMIT;` | `COMMIT;` | `COMMIT;` |
| Undo all | `ROLLBACK;` | `ROLLBACK;` | `ROLLBACK;` |
| Auto-commit default | On (each statement commits) | On (`autocommit = 1`) | Off in SQL*Plus; DDL commits implicitly |

**Full SQL Server example:**
```sql
SET XACT_ABORT ON;                            -- any run-time error aborts and rolls back
BEGIN TRY
    BEGIN TRANSACTION;
        UPDATE AmmoStock SET qty = qty - 100 WHERE location = 'Depot A';
        UPDATE AmmoStock SET qty = qty + 100 WHERE location = 'Unit B';
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
    THROW;
END CATCH;
```

**Savepoint example (MySQL/Oracle style):**
```sql
START TRANSACTION;
INSERT INTO Department VALUES (50, 'Training', 'Sylhet');     -- step 1
SAVEPOINT after_training;
INSERT INTO Department VALUES (60, 'Logistics', 'Dhaka');     -- step 2
ROLLBACK TO SAVEPOINT after_training;                         -- undo step 2 only
COMMIT;                                                       -- Training (50) is saved, Logistics (60) is not
```

### Concurrency problems

| Problem | What happens | Timeline |
|---|---|---|
| **Dirty read** | T2 reads data T1 changed but has **not committed**; T1 then rolls back | T1: UPDATE qty=50 → T2: reads 50 → T1: ROLLBACK (qty is really 100) |
| **Non-repeatable read** | T1 reads a row twice and gets **different values** because T2 updated and committed in between | T1: read 100 → T2: UPDATE 50, COMMIT → T1: read 50 |
| **Phantom read** | T1 runs the same query twice and gets **new/missing rows** because T2 inserted/deleted | T1: COUNT=3 → T2: INSERT, COMMIT → T1: COUNT=4 |
| **Lost update** | Two transactions read the same value and both write; one update is overwritten | T1 reads 100, T2 reads 100, T1 writes 90, T2 writes 80 → T1's change lost |

### Isolation levels

| Isolation level | Dirty read | Non-repeatable read | Phantom read |
|---|:-:|:-:|:-:|
| READ UNCOMMITTED | Possible | Possible | Possible |
| READ COMMITTED | Prevented | Possible | Possible |
| REPEATABLE READ | Prevented | Prevented | Possible (in the SQL standard) |
| SERIALIZABLE | Prevented | Prevented | Prevented |
| SNAPSHOT (SQL Server) | Prevented | Prevented | Prevented (update conflicts raise an error) |

Higher isolation = more correctness, less concurrency (more locking/blocking).

**Default levels:** SQL Server — READ COMMITTED. MySQL InnoDB — **REPEATABLE READ** (its next-key locks also block most phantoms). Oracle — READ COMMITTED (Oracle offers only READ COMMITTED, SERIALIZABLE, and READ ONLY). PostgreSQL — READ COMMITTED.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;                  -- SQL Server, MySQL, Oracle syntax
```

### Locks

| Lock | Taken for | Compatible with S? | Compatible with X? |
|---|---|:-:|:-:|
| Shared (S) | Reading | ✔ | ✘ |
| Exclusive (X) | Writing | ✘ | ✘ |
| Update (U, SQL Server) | Read now, maybe write later (prevents a common deadlock) | ✔ | ✘ |

Granularity: row → page → table → database. **Lock escalation:** many row locks are converted into one table lock to save memory.

**Two-Phase Locking (2PL):** a transaction first only **acquires** locks (growing phase), then only **releases** them (shrinking phase). This guarantees **serializability**. **Strict 2PL** holds exclusive locks until COMMIT/ROLLBACK (prevents dirty reads and cascading rollbacks).

### Deadlock

Two transactions each hold a lock the other needs:
```
T1: locks row A ........ wants row B (waits)
T2: locks row B ........ wants row A (waits)    → circular wait = deadlock
```
The database detects the cycle and kills one transaction (the **victim**). SQL Server raises error **1205**.
Prevention: access tables/rows **in the same order** in all code, keep transactions **short**, index properly, use a lower isolation level where safe, and **retry** the victim transaction in application code.

### Optimistic vs pessimistic concurrency

| Pessimistic | Optimistic |
|---|---|
| Lock the data **before** editing | Do not lock; **check for changes** when saving |
| Good when conflicts are frequent | Good when conflicts are rare (most web apps) |
| `SELECT ... FOR UPDATE` (MySQL/Oracle), `WITH (UPDLOCK)` (SQL Server) | Version column: `rowversion` (SQL Server), `[Timestamp]`/concurrency token (EF Core) |

```sql
-- Optimistic update: succeeds only if nobody changed the row since we read version 7
UPDATE Unit SET strength = 90, version = version + 1
WHERE unit_id = 5 AND version = 7;
-- 0 rows affected → someone else changed it → reload and retry
```

**MVCC (Multi-Version Concurrency Control):** the database keeps old versions of rows, so **readers do not block writers** and writers do not block readers. Used by Oracle, PostgreSQL, MySQL InnoDB, and SQL Server with `READ_COMMITTED_SNAPSHOT ON`.

### Serializability (theory)
- **Schedule:** the order in which operations of concurrent transactions run. A **serial** schedule runs transactions one after another.
- Two operations **conflict** if they belong to different transactions, use the **same data item**, and **at least one is a write**.
- A schedule is **conflict-serializable** if its **precedence graph** (edge Ti → Tj when an operation of Ti conflicts with and comes before one of Tj) has **no cycle**.

### Recovery
- **Write-Ahead Logging (WAL):** a change is written to the log **before** it is written to the data file.
- After a crash: **REDO** committed transactions, **UNDO** uncommitted ones.
- **Checkpoint:** a point where all changes are flushed to disk, so recovery starts from there.
- **Backups:** full, differential (changes since the last full), transaction-log/incremental (changes since the last log backup). SQL Server recovery models: SIMPLE, FULL, BULK_LOGGED.

---

## B20. Database Security and SQL Injection

**Authentication** = who are you? (login). **Authorization** = what may you do? (permissions).

```sql
-- SQL Server
CREATE LOGIN exercise_app WITH PASSWORD = 'Strong#Pass2026';
CREATE USER exercise_app FOR LOGIN exercise_app;
GRANT SELECT, INSERT, UPDATE ON dbo.Unit TO exercise_app;
GRANT EXECUTE ON dbo.usp_RaiseSalary TO exercise_app;
DENY  DELETE ON dbo.Unit TO exercise_app;          -- DENY overrides any GRANT
REVOKE UPDATE ON dbo.Unit FROM exercise_app;       -- remove a grant

-- Roles
CREATE ROLE planners;
GRANT SELECT ON dbo.Scenario TO planners;
ALTER ROLE planners ADD MEMBER exercise_app;       -- SQL Server
-- MySQL/Oracle: GRANT planners TO exercise_app;

-- MySQL
CREATE USER 'exercise_app'@'localhost' IDENTIFIED BY 'Strong#Pass2026';
GRANT SELECT, INSERT ON wargame.* TO 'exercise_app'@'localhost';

-- WITH GRANT OPTION lets the receiver grant the permission to others
GRANT SELECT ON Employee TO hr_lead WITH GRANT OPTION;
```

**Principle of least privilege:** give each account only the permissions it needs. The application account should not be `sa`/`root`/`SYS`.

### SQL injection

Vulnerable C# code (string concatenation):
```csharp
string sql = "SELECT * FROM Users WHERE username = '" + txtUser.Text +
             "' AND password = '" + txtPass.Text + "'";
```
If the attacker types `' OR '1'='1' --` as the user name, the query becomes:
```sql
SELECT * FROM Users WHERE username = '' OR '1'='1' --' AND password = '...'
```
`'1'='1'` is always true and `--` comments out the password check → login without a password. Input like `'; DROP TABLE Users; --` can destroy data.

**Prevention**
1. **Parameterized queries** (the main defence):
   ```csharp
   using var cmd = new SqlCommand(
       "SELECT user_id FROM Users WHERE username = @u AND password_hash = @p", con);
   cmd.Parameters.Add("@u", SqlDbType.NVarChar, 50).Value = txtUser.Text;
   cmd.Parameters.Add("@p", SqlDbType.VarBinary, 64).Value = ComputeHash(txtPass.Text);
   ```
   The input is always treated as **data**, never as SQL code.
2. Stored procedures **with parameters** (no dynamic SQL built by concatenation inside them).
3. ORM (Entity Framework Core) queries, which parameterize automatically. Avoid `FromSqlRaw` with concatenated input; use `FromSqlInterpolated`.
4. Input validation (whitelist: an id must be a number).
5. Least-privilege DB accounts.
6. Do not show raw database errors to users.

### Other protection
- **Store passwords hashed with a salt** (bcrypt, PBKDF2, Argon2), never in plain text.
- Encryption at rest (SQL Server/Oracle **TDE** — Transparent Data Encryption) and in transit (TLS).
- **Auditing** (who read/changed what, when).
- Encrypted, tested backups.
- For military systems: isolated (air-gapped) networks, role-based access by need-to-know, and a complete audit trail.

---

## B21. SQL from C# (ADO.NET, Dapper, EF Core, LINQ)

### ADO.NET objects

| Object | Purpose |
|---|---|
| `SqlConnection` | Opens a connection to the database |
| `SqlCommand` | Runs a SQL statement or stored procedure |
| `SqlParameter` | Safe parameter value |
| `SqlDataReader` | Fast, forward-only, read-only stream of rows (**connected**) |
| `SqlDataAdapter` | Fills a `DataSet`/`DataTable` and writes changes back (**disconnected**) |
| `DataSet` / `DataTable` | In-memory copy of tables |
| `SqlTransaction` | Groups commands into one transaction |

| Method | Returns | Use for |
|---|---|---|
| `ExecuteReader()` | `SqlDataReader` | SELECT with many rows |
| `ExecuteNonQuery()` | `int` (rows affected) | INSERT, UPDATE, DELETE, DDL |
| `ExecuteScalar()` | `object` (first column of the first row) | `COUNT(*)`, `SUM`, a new id |

| Connected (DataReader) | Disconnected (DataSet / DataAdapter) |
|---|---|
| Connection stays open while reading | Connection opens, fills, closes |
| Forward-only, read-only | Can move anywhere, edit, then update |
| Fast, low memory | More memory |

Providers: `Microsoft.Data.SqlClient` (SQL Server), `MySqlConnector` or `MySql.Data` (MySQL), `Oracle.ManagedDataAccess.Core` (Oracle), `MongoDB.Driver` (MongoDB).

```csharp
using Microsoft.Data.SqlClient;
using System.Data;

string cs = "Server=.;Database=WarGameDB;Trusted_Connection=True;TrustServerCertificate=True;";

// 1. Read rows (parameterized)
using (var con = new SqlConnection(cs))
using (var cmd = new SqlCommand("SELECT name, salary FROM Employee WHERE dept_id = @dept", con))
{
    cmd.Parameters.Add("@dept", SqlDbType.Int).Value = 10;
    con.Open();
    using var rd = cmd.ExecuteReader();
    while (rd.Read())
        Console.WriteLine($"{rd.GetString(0)} {rd.GetDecimal(1)}");
}

// 2. Insert (ExecuteNonQuery)
using (var con = new SqlConnection(cs))
using (var cmd = new SqlCommand("INSERT INTO Department (dept_id, dept_name, location) VALUES (@id, @n, @l)", con))
{
    cmd.Parameters.AddWithValue("@id", 50);
    cmd.Parameters.AddWithValue("@n", "Training");
    cmd.Parameters.AddWithValue("@l", "Sylhet");
    con.Open();
    int rows = cmd.ExecuteNonQuery();          // 1
}

// 3. Single value (ExecuteScalar)
using (var con = new SqlConnection(cs))
using (var cmd = new SqlCommand("SELECT COUNT(*) FROM Employee", con))
{
    con.Open();
    int count = (int)cmd.ExecuteScalar()!;     // 8
}

// 4. Stored procedure with an OUTPUT parameter
using (var con = new SqlConnection(cs))
using (var cmd = new SqlCommand("usp_RaiseSalary", con) { CommandType = CommandType.StoredProcedure })
{
    cmd.Parameters.AddWithValue("@DeptId", 10);
    cmd.Parameters.AddWithValue("@Percent", 10m);
    var outP = cmd.Parameters.Add("@Updated", SqlDbType.Int);
    outP.Direction = ParameterDirection.Output;
    con.Open();
    cmd.ExecuteNonQuery();
    Console.WriteLine($"Updated: {outP.Value}");
}

// 5. Transaction
using (var con = new SqlConnection(cs))
{
    con.Open();
    using var tx = con.BeginTransaction();
    try
    {
        using var c1 = new SqlCommand("UPDATE AmmoStock SET qty = qty - 100 WHERE location = 'Depot A'", con, tx);
        using var c2 = new SqlCommand("UPDATE AmmoStock SET qty = qty + 100 WHERE location = 'Unit B'", con, tx);
        c1.ExecuteNonQuery();
        c2.ExecuteNonQuery();
        tx.Commit();
    }
    catch
    {
        tx.Rollback();
        throw;
    }
}
```
**Connection pooling:** ADO.NET reuses physical connections automatically. Always close/dispose connections quickly (`using`) so they return to the pool.

### Dapper (micro-ORM)
```csharp
using Dapper;
using var con = new SqlConnection(cs);
var staff = con.Query<Employee>(
    "SELECT emp_id AS EmpId, name AS Name, salary AS Salary FROM Employee WHERE dept_id = @dept",
    new { dept = 10 });                         // parameterized automatically
```

### Entity Framework Core (ORM)

**ORM** (Object-Relational Mapper) maps **classes ↔ tables**, **objects ↔ rows**, **properties ↔ columns**, so you query with LINQ instead of writing SQL.

```csharp
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Department
{
    [Key] public int DeptId { get; set; }
    [Required, MaxLength(50)] public string DeptName { get; set; } = "";
    public string? Location { get; set; }
    public List<Employee> Employees { get; set; } = new();     // navigation: one-to-many
}

public class Employee
{
    [Key] public int EmpId { get; set; }
    [Required, MaxLength(100)] public string Name { get; set; } = "";
    [Column(TypeName = "decimal(10,2)")] public decimal Salary { get; set; }
    public int? DeptId { get; set; }                            // foreign key
    public Department? Department { get; set; }                 // navigation
    [Timestamp] public byte[]? RowVersion { get; set; }         // optimistic concurrency
}

public class WarGameContext : DbContext
{
    public DbSet<Employee> Employees => Set<Employee>();
    public DbSet<Department> Departments => Set<Department>();

    protected override void OnConfiguring(DbContextOptionsBuilder o) =>
        o.UseSqlServer("Server=.;Database=WarGameDB;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder mb)       // Fluent API (alternative to attributes)
    {
        mb.Entity<Department>().HasIndex(d => d.DeptName).IsUnique();
        mb.Entity<Employee>().HasOne(e => e.Department).WithMany(d => d.Employees)
          .HasForeignKey(e => e.DeptId).OnDelete(DeleteBehavior.SetNull);
    }
}
```

**Migrations (code-first):**
```
dotnet ef migrations add InitialCreate     # Package Manager Console: Add-Migration InitialCreate
dotnet ef database update                  # Package Manager Console: Update-Database
```
Code-first = write classes, generate the database. Database-first = existing database, generate classes (`dotnet ef dbcontext scaffold`).

**CRUD with EF Core:**
```csharp
using var db = new WarGameContext();

// Create
db.Departments.Add(new Department { DeptId = 50, DeptName = "Training", Location = "Sylhet" });
db.SaveChanges();                                   // INSERT; SaveChanges is one transaction (unit of work)

// Read
var itStaff = db.Employees
    .Where(e => e.Department!.DeptName == "IT" && e.Salary > 60000)
    .OrderByDescending(e => e.Salary)
    .Select(e => new { e.Name, e.Salary })
    .ToList();                                      // SQL runs here

// Update
var emp = db.Employees.Find(2);                     // by primary key
if (emp != null) { emp.Salary *= 1.10m; db.SaveChanges(); }   // change tracking → UPDATE

// Delete
var old = db.Employees.Find(8);
if (old != null) { db.Employees.Remove(old); db.SaveChanges(); }
```

**Loading related data:**

| Strategy | How | SQL |
|---|---|---|
| Eager loading | `db.Departments.Include(d => d.Employees)` | One query with JOIN |
| Explicit loading | `db.Entry(dept).Collection(d => d.Employees).Load()` | Separate query when you ask |
| Lazy loading | Navigation loads automatically on first access (needs proxies package + `virtual`) | A query on each access — risk of **N+1** |

**N+1 problem:** 1 query loads N departments, then N more queries load each department's employees. Fix: `Include(...)` or a projection with `Select`.

Other tips: `AsNoTracking()` for read-only queries (faster); `FromSqlInterpolated($"... {id}")` is parameterized (safe); `FromSqlRaw` with string concatenation is **not** safe.

**IEnumerable vs IQueryable:**

| `IQueryable<T>` | `IEnumerable<T>` |
|---|---|
| Builds an expression tree translated to **SQL** | Runs in **memory** (LINQ to Objects) |
| Filtering happens **in the database** | Filtering happens **after** loading the rows |
| Use for DB queries before `ToList()` | Use for in-memory collections |

### LINQ ↔ SQL

| LINQ | SQL |
|---|---|
| `Where(e => ...)` | `WHERE` |
| `Select(e => new { ... })` | `SELECT columns` |
| `OrderBy` / `OrderByDescending` / `ThenBy` | `ORDER BY ... ASC/DESC` |
| `GroupBy(e => e.DeptId)` | `GROUP BY` |
| `Join(...)` / `join ... on ... equals` | `INNER JOIN` |
| `GroupJoin` + `DefaultIfEmpty()` | `LEFT JOIN` |
| `Count()`, `Sum()`, `Average()`, `Min()`, `Max()` | `COUNT`, `SUM`, `AVG`, `MIN`, `MAX` |
| `Skip(n).Take(m)` | `OFFSET n ROWS FETCH NEXT m ROWS ONLY` |
| `Any()` | `EXISTS` |
| `Contains(x)` on a list | `IN (...)` |
| `Distinct()` | `DISTINCT` |
| `First()` / `FirstOrDefault()` | `TOP 1` / `LIMIT 1` |

### LINQ on the B9 data (verified, in-memory)

```csharp
// Method syntax
var rich = emps.Where(e => e.Salary > 60000)
               .OrderByDescending(e => e.Salary)
               .Select(e => new { e.Name, e.Salary });
// Rahim 90000, Sadia 70000, Ayesha 65000

// Query syntax (same result)
var richQ = from e in emps
            where e.Salary > 60000
            orderby e.Salary descending
            select e.Name;

// GROUP BY
var byDept = emps.Where(e => e.DeptId != null)
                 .GroupBy(e => e.DeptId)
                 .Select(g => new { Dept = g.Key, Count = g.Count(), Avg = g.Average(e => e.Salary) });
// 10: 3, 71666.67   20: 2, 52500.00   30: 2, 65000.00

// INNER JOIN
var joined = from e in emps
             join d in depts on e.DeptId equals d.DeptId
             select $"{e.Name}-{d.DeptName}";
// Rahim-IT, Karim-IT, Ayesha-IT, Nusrat-HR, Tanvir-HR, Sadia-Finance, Imran-Finance

// LEFT JOIN with counts (group join)
var left = from d in depts
           join e in emps on d.DeptId equals e.DeptId into staff
           select new { d.DeptName, Count = staff.Count() };
// IT 3, HR 2, Finance 2, Research 0

// Second highest salary
var second = emps.Select(e => e.Salary).Distinct().OrderByDescending(s => s).Skip(1).First();   // 70000

// Self join: earns more than manager
var overMgr = from e in emps
              join m in emps on e.ManagerId equals m.EmpId
              where e.Salary > m.Salary
              select $"{e.Name}>{m.Name}";       // Tanvir>Nusrat

// Quantifiers and aggregates
emps.Any(e => e.City == "Sylhet");     // True
emps.All(e => e.Salary > 30000);       // True
emps.Count(e => e.Gender == 'F');      // 4
emps.Sum(e => e.Salary);               // 485000
emps.MaxBy(e => e.Salary)!.Name;       // Rahim

// Paging
emps.OrderBy(e => e.EmpId).Skip(3).Take(3).Select(e => e.Name);   // Nusrat, Tanvir, Sadia

// IN
var ids = new[] { 2, 5, 9 };
emps.Where(e => ids.Contains(e.EmpId)).Select(e => e.Name);        // Karim, Tanvir

// First vs FirstOrDefault vs Single
emps.FirstOrDefault(e => e.City == "Rajshahi")?.Name ?? "none";    // none
// emps.First(e => e.City == "Rajshahi");   → InvalidOperationException (no element)
// emps.Single(e => e.City == "Dhaka");     → InvalidOperationException (more than one)
emps.Single(e => e.City == "Sylhet").Name;                          // Farhana
```

**Deferred execution (verified):**
```csharp
var q = emps.Where(e => e.Salary > 80000);   // query defined, NOT run yet
emps.Add(new Employee(9, "Zaman", 'M', 10, 1, 95000m, new DateOnly(2026, 1, 1), "Dhaka"));
Console.WriteLine(q.Count());                // 2  (Rahim and Zaman: runs now, sees the new row)
```
Methods that run immediately: `ToList()`, `ToArray()`, `Count()`, `First()`, `Sum()`, `Max()`, `Any()`.

| `First()` | `FirstOrDefault()` | `Single()` | `SingleOrDefault()` |
|---|---|---|---|
| Throws if empty | Returns default (null/0) if empty | Throws if **not exactly one** | Default if empty; throws if more than one |

---

## B22. Practice Queries (write these by hand; B9 data)

Syntax is SQL Server unless marked. Results are from the B9 data.

### Basic SELECT

**1. Employees living in Dhaka, sorted by name**
```sql
SELECT name FROM Employee WHERE city = 'Dhaka' ORDER BY name;
```
→ Imran, Karim, Rahim, Tanvir

**2. Salary between 50,000 and 65,000 (inclusive)**
```sql
SELECT name, salary FROM Employee WHERE salary BETWEEN 50000 AND 65000;
```
→ Karim, Ayesha, Nusrat, Tanvir, Imran

**3. Names starting with 'S' or ending with 'n'**
```sql
SELECT name FROM Employee WHERE name LIKE 'S%' OR name LIKE '%n';
```
→ Sadia, Imran

**4. Joined in 2022 or later**
```sql
SELECT name, join_date FROM Employee WHERE join_date >= '2022-01-01' ORDER BY join_date;
```
→ Ayesha, Tanvir, Imran, Farhana

**5. Employees without a manager / without a department**
```sql
SELECT name FROM Employee WHERE manager_id IS NULL;   -- Rahim
SELECT name FROM Employee WHERE dept_id IS NULL;      -- Farhana
```

**6. Number of distinct cities**
```sql
SELECT COUNT(DISTINCT city) FROM Employee;            -- 4
```

**7. Names longer than 5 characters**
```sql
SELECT name FROM Employee WHERE LEN(name) > 5;        -- MySQL: CHAR_LENGTH(name); Oracle: LENGTH(name)
```
→ Ayesha, Nusrat, Tanvir, Farhana

**8. First three letters of each name in upper case**
```sql
SELECT UPPER(SUBSTRING(name, 1, 3)) AS short_name FROM Employee;   -- Oracle: SUBSTR
```
→ RAH, KAR, AYE, NUS, TAN, SAD, IMR, FAR

**9. Female employees in IT**
```sql
SELECT e.name FROM Employee e JOIN Department d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'IT' AND e.gender = 'F';
```
→ Ayesha

**10. Rows with odd emp_id**
```sql
SELECT emp_id, name FROM Employee WHERE emp_id % 2 = 1;   -- MySQL also %, Oracle: MOD(emp_id, 2) = 1
```
→ 1 Rahim, 3 Ayesha, 5 Tanvir, 7 Imran

### Aggregation

**11. Staff count per department including empty departments** → IT 3, HR 2, Finance 2, Research 0 (see B12).

**12. Departments with average salary above 60,000**
```sql
SELECT d.dept_name, AVG(e.salary) AS avg_sal
FROM Employee e JOIN Department d ON e.dept_id = d.dept_id
GROUP BY d.dept_name
HAVING AVG(e.salary) > 60000
ORDER BY avg_sal DESC;
```
→ IT 71666.67, Finance 65000.00

**13. Department with the highest total salary**
```sql
SELECT TOP 1 dept_id, SUM(salary) AS total
FROM Employee WHERE dept_id IS NOT NULL
GROUP BY dept_id ORDER BY total DESC;
-- MySQL: ... ORDER BY total DESC LIMIT 1;   Oracle: ... FETCH FIRST 1 ROWS ONLY;
```
→ 10 (IT), 215000

**14. City with the most employees**
```sql
SELECT TOP 1 city, COUNT(*) AS cnt FROM Employee GROUP BY city ORDER BY cnt DESC;
```
→ Dhaka, 4

**15. Employees per joining year**
```sql
SELECT YEAR(join_date) AS yr, COUNT(*) AS cnt     -- Oracle: EXTRACT(YEAR FROM join_date)
FROM Employee GROUP BY YEAR(join_date) ORDER BY yr;
```
→ one employee in each year 2018–2025

**16. Number of employees in each salary band**
```sql
SELECT band, COUNT(*) AS cnt
FROM (SELECT CASE WHEN salary >= 70000 THEN 'High'
                  WHEN salary >= 50000 THEN 'Medium'
                  ELSE 'Low' END AS band
      FROM Employee) t
GROUP BY band;
```
→ High 2, Medium 5, Low 1

**17. Gender count per department as columns (pivot with CASE)**
```sql
SELECT d.dept_name,
       SUM(CASE WHEN e.gender = 'M' THEN 1 ELSE 0 END) AS male,
       SUM(CASE WHEN e.gender = 'F' THEN 1 ELSE 0 END) AS female
FROM Department d
LEFT JOIN Employee e ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;
```
| dept_name | male | female |
|---|---|---|
| IT | 2 | 1 |
| HR | 1 | 1 |
| Finance | 1 | 1 |
| Research | 0 | 0 |

**18. Direct reports per employee, including zero**
```sql
SELECT m.name, COUNT(e.emp_id) AS reports
FROM Employee m
LEFT JOIN Employee e ON e.manager_id = m.emp_id
GROUP BY m.emp_id, m.name;
```
→ Rahim 5, Karim 0, Ayesha 0, Nusrat 1, Tanvir 0, Sadia 1, Imran 0, Farhana 0

### Joins

**19. Employees who live in the same city as their department's location**
```sql
SELECT e.name, e.city
FROM Employee e JOIN Department d ON e.dept_id = d.dept_id
WHERE e.city = d.location;
```
→ Rahim, Karim, Nusrat, Imran

**20. Employees whose manager is in the same department**
```sql
SELECT e.name AS employee, m.name AS manager
FROM Employee e JOIN Employee m ON e.manager_id = m.emp_id
WHERE e.dept_id = m.dept_id;
```
→ Karim–Rahim, Ayesha–Rahim, Tanvir–Nusrat, Imran–Sadia

**21. Number of employees in each salary grade**
```sql
SELECT g.grade, COUNT(e.emp_id) AS cnt
FROM SalaryGrade g
LEFT JOIN Employee e ON e.salary BETWEEN g.min_sal AND g.max_sal
GROUP BY g.grade;
```
→ A 2, B 4, C 1, D 1

**22. Pairs of employees with the same salary**
```sql
SELECT a.name, b.name, a.salary
FROM Employee a JOIN Employee b ON a.salary = b.salary AND a.emp_id < b.emp_id;
```
→ Karim, Imran, 60000 (`a.emp_id < b.emp_id` avoids pairing a row with itself and avoids listing both A–B and B–A)

### Subqueries and window functions

**23. Employees earning more than the IT average (71,666.67)**
```sql
SELECT name FROM Employee
WHERE salary > (SELECT AVG(salary) FROM Employee WHERE dept_id = 10);
```
→ Rahim

**24. Second highest salary — four ways** → 70000
```sql
-- (a) MAX below MAX
SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);

-- (b) DENSE_RANK (works for any N)
SELECT DISTINCT salary FROM
  (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS r FROM Employee) t
WHERE r = 2;

-- (c) OFFSET
SELECT DISTINCT salary FROM Employee ORDER BY salary DESC
OFFSET 1 ROWS FETCH NEXT 1 ROWS ONLY;              -- MySQL: LIMIT 1 OFFSET 1

-- (d) Correlated count: N-1 distinct salaries are greater
SELECT DISTINCT salary FROM Employee e1
WHERE 1 = (SELECT COUNT(DISTINCT salary) FROM Employee e2 WHERE e2.salary > e1.salary);
```
3rd highest = 65000, 4th = 60000.

**25. Everyone in the top 4 salary levels**
```sql
SELECT name, salary FROM
  (SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS r FROM Employee) t
WHERE r <= 4;
```
→ Rahim 90000, Sadia 70000, Ayesha 65000, Karim 60000, Imran 60000 (5 people, because of the tie)

**26. Highest and second-highest earner in each department**
```sql
SELECT dept_id, name, salary, r
FROM (SELECT e.*, DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS r
      FROM Employee e WHERE dept_id IS NOT NULL) t
WHERE r <= 2
ORDER BY dept_id, r;
```
→ IT: Rahim (1), Ayesha (2); HR: Tanvir (1), Nusrat (2); Finance: Sadia (1), Imran (2)

**27. Longest-serving employee in each department**
```sql
SELECT dept_id, name, join_date
FROM (SELECT e.*, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY join_date) AS rn
      FROM Employee e WHERE dept_id IS NOT NULL) t
WHERE rn = 1;
```
→ IT Rahim (2019-03-15), HR Nusrat (2020-11-20), Finance Sadia (2018-09-09)

**28. Completed years of service on exam day (28 Nov 2026)**
```sql
-- MySQL (counts full years)
SELECT name, TIMESTAMPDIFF(YEAR, join_date, '2026-11-28') AS years FROM Employee;
-- Oracle
SELECT name, TRUNC(MONTHS_BETWEEN(DATE '2026-11-28', join_date) / 12) AS years FROM Employee;
-- SQL Server: DATEDIFF(YEAR, ...) counts calendar-year BOUNDARIES, not full years
SELECT name,
       DATEDIFF(YEAR, join_date, '2026-11-28')
       - CASE WHEN DATEADD(YEAR, DATEDIFF(YEAR, join_date, '2026-11-28'), join_date) > '2026-11-28'
              THEN 1 ELSE 0 END AS years
FROM Employee;
```
→ Rahim 7, Karim 5, Ayesha 4, Nusrat 6, Tanvir 3, Sadia 8, Imran 2, Farhana 1
Trap: `DATEDIFF(YEAR, '2025-12-31', '2026-01-01')` = **1** in SQL Server, although only one day passed.

### DML / DDL (each question starts from the original B9 data)

**29. Raise salary: IT +10%, HR +5%, others unchanged**
```sql
UPDATE Employee
SET salary = CASE dept_id WHEN 10 THEN salary * 1.10
                          WHEN 20 THEN salary * 1.05
                          ELSE salary END;
```
New values: Rahim 99000, Karim 66000, Ayesha 71500, Nusrat 52500, Tanvir 57750; others unchanged.

**30. Give every employee without a department to HR**
```sql
UPDATE Employee SET dept_id = 20 WHERE dept_id IS NULL;     -- Farhana
```

**31. Delete departments that have no employees**
```sql
DELETE FROM Department
WHERE NOT EXISTS (SELECT 1 FROM Employee e WHERE e.dept_id = Department.dept_id);   -- Research
```

**32. Add an email column with a unique constraint, then an index on dept_id**
```sql
ALTER TABLE Employee ADD email VARCHAR(100) NULL;
ALTER TABLE Employee ADD CONSTRAINT uq_employee_email UNIQUE (email);
CREATE INDEX ix_employee_dept ON Employee(dept_id);
```
(SQL Server allows only **one** NULL in a UNIQUE column. To allow many NULLs, use a filtered unique index: `CREATE UNIQUE INDEX ux_email ON Employee(email) WHERE email IS NOT NULL;`)

### Practice on a war-game schema (no result tables — write the SQL)

```sql
Unit(unit_id, unit_name, unit_type, side, parent_unit_id, auth_strength, strength)
Exercise(exercise_id, name, start_time, end_time)
Participation(exercise_id, unit_id, role)
EngagementLog(log_id, exercise_id, sim_time, attacker_id, target_id, damage)
```

**W1. Current strength and percentage of authorized strength per side**
```sql
SELECT side, SUM(strength) AS strength, SUM(auth_strength) AS auth,
       CAST(100.0 * SUM(strength) / SUM(auth_strength) AS DECIMAL(5,1)) AS pct
FROM Unit GROUP BY side;
```

**W2. Units below 50% strength (combat ineffective)**
```sql
SELECT unit_name, strength, auth_strength
FROM Unit WHERE strength < 0.5 * auth_strength;
```

**W3. Top 3 units by damage dealt in exercise 7**
```sql
SELECT TOP 3 u.unit_name, SUM(l.damage) AS total_damage
FROM EngagementLog l JOIN Unit u ON u.unit_id = l.attacker_id
WHERE l.exercise_id = 7
GROUP BY u.unit_name
ORDER BY total_damage DESC;
```

**W4. Units that took part in exercise 7 but never fired**
```sql
SELECT u.unit_name
FROM Participation p JOIN Unit u ON u.unit_id = p.unit_id
WHERE p.exercise_id = 7
  AND NOT EXISTS (SELECT 1 FROM EngagementLog l
                  WHERE l.exercise_id = 7 AND l.attacker_id = p.unit_id);
```

**W5. Last engagement of each unit (latest row per group)**
```sql
SELECT attacker_id, sim_time, target_id, damage
FROM (SELECT l.*, ROW_NUMBER() OVER (PARTITION BY attacker_id ORDER BY sim_time DESC) AS rn
      FROM EngagementLog l WHERE exercise_id = 7) t
WHERE rn = 1;
```

**W6. Damage per simulated hour (time series)**
```sql
SELECT DATEPART(HOUR, sim_time) AS hr, SUM(damage) AS damage
FROM EngagementLog WHERE exercise_id = 7
GROUP BY DATEPART(HOUR, sim_time) ORDER BY hr;
```

**W7. Full ORBAT under unit 1 (recursive CTE)**
```sql
WITH Orbat AS (
    SELECT unit_id, unit_name, parent_unit_id, 0 AS depth FROM Unit WHERE unit_id = 1
    UNION ALL
    SELECT u.unit_id, u.unit_name, u.parent_unit_id, o.depth + 1
    FROM Unit u JOIN Orbat o ON u.parent_unit_id = o.unit_id
)
SELECT REPLICATE('  ', depth) + unit_name AS orbat FROM Orbat;   -- MySQL: WITH RECURSIVE, REPEAT(), CONCAT()
```

**W8. Pairs (attacker, target) that engaged more than 5 times**
```sql
SELECT attacker_id, target_id, COUNT(*) AS shots
FROM EngagementLog WHERE exercise_id = 7
GROUP BY attacker_id, target_id
HAVING COUNT(*) > 5;
```

---

## B23. Classic SQL Puzzles

**1. Nth highest salary** — four methods in B22 #24. For N in a procedure, `DENSE_RANK` is the cleanest.

**2. Find duplicate values**
```sql
SELECT email, COUNT(*) AS cnt FROM Contact GROUP BY email HAVING COUNT(*) > 1;
```

**3. Delete duplicates, keep the row with the smallest id**
```sql
-- SQL Server: delete through a CTE
WITH d AS (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn FROM Contact
)
DELETE FROM d WHERE rn > 1;

-- MySQL: self-join delete
DELETE c1 FROM Contact c1
JOIN Contact c2 ON c1.email = c2.email AND c1.id > c2.id;

-- Oracle: ROWID
DELETE FROM Contact a
WHERE a.ROWID > (SELECT MIN(b.ROWID) FROM Contact b WHERE b.email = a.email);

-- Portable
DELETE FROM Contact
WHERE id NOT IN (SELECT MIN(id) FROM Contact GROUP BY email);
-- (MySQL rejects this form: "can't specify target table for update in FROM clause";
--  wrap the subquery: ... NOT IN (SELECT id FROM (SELECT MIN(id) AS id FROM Contact GROUP BY email) k))
```

**4. Swap 'M' and 'F' in one statement**
```sql
UPDATE Employee SET gender = CASE gender WHEN 'M' THEN 'F' ELSE 'M' END;
```

**5. Find missing ids (gaps).** Ids: 1, 2, 3, 5, 6, 9
```sql
SELECT id + 1 AS gap_from, next_id - 1 AS gap_to
FROM (SELECT id, LEAD(id) OVER (ORDER BY id) AS next_id FROM T) x
WHERE next_id - id > 1;
```
→ (4, 4) and (7, 8)

**6. Numbers that appear at least three times in a row**
```sql
SELECT DISTINCT num
FROM (SELECT num,
             LAG(num)  OVER (ORDER BY id) AS prev_num,
             LEAD(num) OVER (ORDER BY id) AS next_num
      FROM Logs) t
WHERE num = prev_num AND num = next_num;
```

**7. Rows in table A that are not in table B**
```sql
SELECT id FROM A EXCEPT SELECT id FROM B;                            -- Oracle: MINUS
SELECT a.id FROM A a WHERE NOT EXISTS (SELECT 1 FROM B b WHERE b.id = a.id);
SELECT a.id FROM A a LEFT JOIN B b ON b.id = a.id WHERE b.id IS NULL;
```

**8. SQL Server PIVOT operator**
```sql
SELECT dept_name, [M], [F]
FROM (SELECT d.dept_name, e.gender
      FROM Employee e JOIN Department d ON e.dept_id = d.dept_id) src
PIVOT (COUNT(gender) FOR gender IN ([M], [F])) p;
```
→ Finance 1 1, HR 1 1, IT 2 1 (same as the CASE pivot, without Research). Oracle 11g+ also has `PIVOT` (`FOR gender IN ('M' AS m, 'F' AS f)`). MySQL: use CASE.

**9. Median salary** (values sorted: 35000, 50000, 55000, 60000, 60000, 65000, 70000, 90000 → (60000 + 60000) / 2 = **60000**)
```sql
-- SQL Server / Oracle
SELECT DISTINCT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER () AS median FROM Employee;
-- Oracle also: SELECT MEDIAN(salary) FROM Employee;
```

**10. Employees who joined on the same date as someone else**
```sql
SELECT e.name, e.join_date FROM Employee e
WHERE EXISTS (SELECT 1 FROM Employee x WHERE x.join_date = e.join_date AND x.emp_id <> e.emp_id);
```
(B9 data: no rows.)

**11. Show each employee's salary and the company maximum in one row**
```sql
SELECT name, salary, MAX(salary) OVER () AS company_max,
       MAX(salary) OVER () - salary AS gap
FROM Employee;
```

**12. Every second row (alternate rows)**
```sql
SELECT * FROM (SELECT e.*, ROW_NUMBER() OVER (ORDER BY emp_id) AS rn FROM Employee e) t
WHERE rn % 2 = 0;
```

**13. First and last record**
```sql
SELECT * FROM Employee WHERE emp_id = (SELECT MIN(emp_id) FROM Employee)
UNION ALL
SELECT * FROM Employee WHERE emp_id = (SELECT MAX(emp_id) FROM Employee);
```

---

## B24. SQL Traps (predict the result)

| # | Query / situation | Result | Why |
|---|---|---|---|
| 1 | `SELECT * FROM Employee WHERE manager_id = NULL;` | No rows | Comparison with NULL is UNKNOWN. Use `IS NULL`. |
| 2 | `SELECT COUNT(*), COUNT(dept_id) FROM Employee;` | 8, 7 | `COUNT(col)` skips NULL |
| 3 | `WHERE emp_id NOT IN (SELECT manager_id FROM Employee)` | No rows | The list contains NULL |
| 4 | `LEFT JOIN ... WHERE right_table.col = 'x'` | Behaves like INNER JOIN | WHERE removes the NULL rows; move the filter into `ON` |
| 5 | `SELECT 5 / 2;` | SQL Server **2**, MySQL **2.5000**, Oracle (`FROM dual`) **2.5** | Integer division in SQL Server |
| 6 | `SELECT 'abc' + NULL;` (SQL Server) | NULL | NULL propagates |
| 7 | `CONCAT('abc', NULL)` | SQL Server/Oracle: `abc`; **MySQL: NULL** | MySQL CONCAT returns NULL if any argument is NULL (`CONCAT_WS` skips NULLs) |
| 8 | Oracle: `SELECT 1 FROM dual WHERE '' IS NULL;` | 1 row | Oracle treats an empty string as NULL |
| 9 | `WHERE salary BETWEEN 65000 AND 50000` | No rows | BETWEEN needs low value first |
| 10 | `SELECT name, dept_id, COUNT(*) FROM Employee GROUP BY dept_id;` | Error | `name` is not grouped or aggregated |
| 11 | `SELECT salary*12 AS annual FROM Employee WHERE annual > 700000;` | Error | Alias not visible in WHERE |
| 12 | SQL Server: `SELECT AVG(x) FROM (VALUES (1),(2)) t(x);` | **1** | AVG of INT returns INT |
| 13 | `SELECT DISTINCT dept_id, gender FROM Employee;` | 7 rows | DISTINCT applies to the whole row |
| 14 | `SELECT SUM(salary) FROM Employee WHERE dept_id = 99;` | NULL (not 0) | SUM of no rows is NULL; use `COALESCE(SUM(salary), 0)` |
| 15 | `SELECT COUNT(*) FROM Employee HAVING COUNT(*) > 5;` | 8 | Without GROUP BY, the whole table is one group |
| 16 | `SELECT * FROM Employee, Department;` | 32 rows | Missing join condition → Cartesian product |
| 17 | `UPDATE Employee SET salary = 0;` | Every row changed | No WHERE clause |
| 18 | `TRUNCATE` then `INSERT` into an IDENTITY table | Numbering restarts at the seed | TRUNCATE resets identity; DELETE does not |
| 19 | Oracle: `SELECT * FROM Employee WHERE ROWNUM <= 3 ORDER BY salary DESC;` | 3 arbitrary rows, then sorted | ROWNUM is assigned before ORDER BY |
| 20 | `name LIKE 'a%'` | SQL Server/MySQL: matches "Ayesha"; Oracle: no match | Default collation case sensitivity differs |
| 21 | `SELECT NULL + 1, NULL * 0;` | NULL, NULL | Any arithmetic with NULL gives NULL |
| 22 | `ORDER BY` inside a view (SQL Server) | Error (unless TOP/OFFSET) | Views/subqueries have no guaranteed order |
| 23 | `COUNT(DISTINCT manager_id)` | 3 (1, 4, 6) | NULL is ignored |
| 24 | `SELECT MAX(name) FROM Employee;` | `Tanvir` | MAX works on text (alphabetical) |

---

## B25. SQL MCQ (50 questions; answer key at the end)

1. SQL stands for: (a) Strong Question Language (b) Structured Query Language (c) Structured Question List (d) Sequential Query Language
2. Which is a DDL command? (a) SELECT (b) INSERT (c) ALTER (d) UPDATE
3. Which is a DCL command? (a) COMMIT (b) GRANT (c) DELETE (d) CREATE
4. Which is a TCL command? (a) ROLLBACK (b) REVOKE (c) DROP (d) TRUNCATE
5. Which removes the table structure itself? (a) DELETE (b) TRUNCATE (c) DROP (d) REMOVE
6. In Oracle, which cannot be rolled back? (a) DELETE (b) UPDATE (c) TRUNCATE (d) INSERT
7. Which clause filters groups? (a) WHERE (b) HAVING (c) ORDER BY (d) GROUP BY
8. Which clause is processed first? (a) SELECT (b) WHERE (c) FROM (d) ORDER BY
9. A primary key allows: (a) duplicates (b) NULLs (c) neither (d) both
10. How many primary keys can a table have? (a) 1 (b) 2 (c) any number (d) 0
11. A foreign key enforces: (a) entity integrity (b) referential integrity (c) domain integrity (d) security
12. Which join returns all rows from both tables? (a) INNER (b) LEFT (c) FULL OUTER (d) CROSS
13. CROSS JOIN of a 5-row and a 4-row table returns: (a) 9 (b) 20 (c) 5 (d) 4
14. Which removes duplicate rows from combined results? (a) UNION ALL (b) UNION (c) JOIN (d) INTERSECT ALL
15. Oracle's `MINUS` is the same as: (a) INTERSECT (b) EXCEPT (c) UNION (d) NOT IN
16. LIKE wildcard for exactly one character: (a) % (b) * (c) _ (d) ?
17. `BETWEEN 10 AND 20` is: (a) exclusive (b) inclusive (c) inclusive only at 10 (d) inclusive only at 20
18. `COUNT(*)` counts: (a) non-NULL values (b) all rows (c) distinct values (d) columns
19. 2NF removes: (a) repeating groups (b) partial dependency (c) transitive dependency (d) multi-valued dependency
20. 3NF removes: (a) repeating groups (b) partial dependency (c) transitive dependency (d) join dependency
21. In BCNF every determinant must be a: (a) foreign key (b) super key (c) non-prime attribute (d) index
22. "Atomic values only" is the rule of: (a) 1NF (b) 2NF (c) 3NF (d) BCNF
23. "A" in ACID: (a) Availability (b) Atomicity (c) Accuracy (d) Authorization
24. Durability is mainly ensured by: (a) indexes (b) the transaction log (c) views (d) triggers
25. Lowest isolation level that prevents dirty reads: (a) Read Uncommitted (b) Read Committed (c) Repeatable Read (d) Serializable
26. Highest isolation level: (a) Read Committed (b) Snapshot (c) Repeatable Read (d) Serializable
27. Default isolation level of MySQL InnoDB: (a) Read Uncommitted (b) Read Committed (c) Repeatable Read (d) Serializable
28. Clustered indexes per table: (a) 1 (b) 2 (c) 999 (d) unlimited
29. In SQL Server a PRIMARY KEY creates by default a: (a) clustered index (b) non-clustered index (c) bitmap index (d) no index
30. A view is a: (a) physical table (b) virtual table (c) index (d) trigger
31. `WITH CHECK OPTION` on a view: (a) speeds it up (b) blocks changes that make rows leave the view (c) encrypts it (d) makes it read-only
32. Which can be used inside a SELECT statement? (a) stored procedure (b) user-defined function (c) trigger (d) cursor
33. In a SQL Server UPDATE trigger, old values are in: (a) inserted (b) deleted (c) old (d) :OLD
34. In an Oracle row trigger, new values are referenced as: (a) NEW (b) :NEW (c) inserted (d) @new
35. Correct cursor order: (a) OPEN, DECLARE, FETCH, CLOSE (b) DECLARE, OPEN, FETCH, CLOSE (c) DECLARE, FETCH, OPEN, CLOSE (d) FETCH, OPEN, CLOSE, DECLARE
36. Oracle's procedural extension of SQL: (a) T-SQL (b) PL/SQL (c) PSQL (d) SQL/PSM
37. SQL Server type for Unicode (Bangla) text: (a) VARCHAR (b) CHAR (c) NVARCHAR (d) TEXT
38. Oracle variable-length string type: (a) VARCHAR2 (b) STRING (c) NVARCHAR (d) TEXT
39. Auto-increment keyword in MySQL: (a) IDENTITY (b) AUTO_INCREMENT (c) SEQUENCE (d) SERIAL
40. Oracle equivalent of SQL Server `ISNULL`: (a) IFNULL (b) NVL (c) NULLIF (d) ZEROIFNULL
41. First 5 rows in Oracle 12c+: (a) TOP 5 (b) LIMIT 5 (c) FETCH FIRST 5 ROWS ONLY (d) FIRST 5
42. Default port of MySQL: (a) 1433 (b) 1521 (c) 3306 (d) 27017
43. Best defence against SQL injection: (a) hiding errors (b) parameterized queries (c) stored passwords (d) HTTPS
44. In relational algebra, σ (sigma) means: (a) projection (b) selection (c) join (d) union
45. In relational algebra, π (pi) means: (a) projection (b) selection (c) product (d) division
46. Two transactions waiting for each other's locks forever is: (a) starvation (b) deadlock (c) livelock (d) phantom
47. Salaries 900, 800, 800, 700 — the rank of 700 with RANK() and DENSE_RANK(): (a) 3, 3 (b) 4, 3 (c) 4, 4 (d) 3, 4
48. Which is NOT an aggregate function? (a) SUM (b) COUNT (c) UPPER (d) AVG
49. A candidate key not chosen as the primary key is: (a) super key (b) foreign key (c) alternate key (d) composite key
50. MongoDB stores data as: (a) rows (b) BSON documents (c) XML files (d) key-value pairs only

**Answer key:** 1-b, 2-c, 3-b, 4-a, 5-c, 6-c, 7-b, 8-c, 9-c, 10-a, 11-b, 12-c, 13-b, 14-b, 15-b, 16-c, 17-b, 18-b, 19-b, 20-c, 21-b, 22-a, 23-b, 24-b, 25-b, 26-d, 27-c, 28-a, 29-a, 30-b, 31-b, 32-b, 33-b, 34-b, 35-b, 36-b, 37-c, 38-a, 39-b, 40-b, 41-c, 42-c, 43-b, 44-b, 45-a, 46-b, 47-b, 48-c, 49-c, 50-b

---

## B26. Rapid-Fire SQL Q&A

1. **DBMS vs RDBMS?** RDBMS stores data in related tables with keys and enforces integrity.
2. **SQL vs MySQL?** SQL is the language; MySQL is a database product that uses SQL.
3. **Primary key?** Unique, NOT NULL column(s) identifying each row; one per table.
4. **Foreign key?** Column that references a key in another table; enforces referential integrity.
5. **Candidate key?** Minimal set of columns that can uniquely identify a row.
6. **Super key?** Any column set that uniquely identifies a row.
7. **Composite key?** Key made of two or more columns.
8. **Surrogate key?** Artificial key (IDENTITY) with no business meaning.
9. **Normalization?** Splitting tables to remove redundancy and anomalies.
10. **1NF / 2NF / 3NF / BCNF?** Atomic values / no partial dependency / no transitive dependency / every determinant is a super key.
11. **Denormalization?** Adding redundancy on purpose for faster reads.
12. **Functional dependency?** X → Y: equal X values imply equal Y values.
13. **ACID?** Atomicity, Consistency, Isolation, Durability.
14. **Transaction?** A unit of work that fully succeeds or fully fails.
15. **COMMIT vs ROLLBACK?** Save changes permanently vs undo changes since the transaction began.
16. **SAVEPOINT?** A marker inside a transaction you can roll back to.
17. **DELETE vs TRUNCATE?** Row-by-row with WHERE, logged, triggers fire vs all rows, fast, resets identity.
18. **WHERE vs HAVING?** Row filter before grouping vs group filter after grouping.
19. **UNION vs UNION ALL?** Removes duplicates vs keeps them (faster).
20. **INNER vs OUTER join?** Only matches vs matches + unmatched rows with NULLs.
21. **Self join?** Joining a table to itself (employee–manager).
22. **Cross join?** Cartesian product: every row with every row.
23. **Subquery?** A query inside another query.
24. **Correlated subquery?** A subquery that refers to the outer row and runs once per row.
25. **EXISTS vs IN?** Checks for any row (stops early, NULL-safe in NOT form) vs compares with a list.
26. **CTE?** A named temporary result defined with `WITH` for one statement.
27. **Recursive CTE?** A CTE that references itself; used for hierarchies (ORBAT, org chart).
28. **View?** A stored SELECT used as a virtual table.
29. **Materialized view?** A view whose result is stored physically and refreshed.
30. **Index?** A structure (B+ tree) that speeds up searches.
31. **Clustered vs non-clustered?** Table rows stored in key order (one per table) vs separate structure with pointers (many).
32. **Covering index?** An index that contains all columns a query needs.
33. **Stored procedure?** Precompiled named SQL code executed with EXEC/CALL.
34. **Function vs procedure?** Must return a value and can be used in SELECT vs can modify data, use transactions, return many results.
35. **Trigger?** Code that runs automatically on INSERT/UPDATE/DELETE.
36. **Cursor?** A pointer for row-by-row processing.
37. **Constraint types?** NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.
38. **NULL?** Missing/unknown value; compare with IS NULL.
39. **COALESCE?** Returns the first non-NULL argument.
40. **CHAR vs VARCHAR?** Fixed length (padded) vs variable length.
41. **VARCHAR vs NVARCHAR?** Non-Unicode vs Unicode (2 bytes/char in SQL Server).
42. **Dirty read?** Reading another transaction's uncommitted data.
43. **Phantom read?** New rows appear when a query is repeated.
44. **Deadlock?** Two transactions wait for each other's locks; the DB kills one.
45. **Isolation levels?** Read Uncommitted, Read Committed, Repeatable Read, Serializable (+ Snapshot).
46. **SQL injection?** Attack that inserts SQL code through input; prevent with parameters.
47. **GRANT vs REVOKE?** Give permission vs take it back.
48. **OLTP vs OLAP?** Day-to-day transactions vs analysis/reporting.
49. **ROW_NUMBER vs RANK vs DENSE_RANK?** Unique numbers vs ties with gaps vs ties without gaps.
50. **ER diagram?** A diagram of entities, attributes, and relationships used to design a database.
51. **Cardinality?** Number of rows (table) or 1:1/1:N/M:N (relationship).
52. **Weak entity?** An entity that needs its owner's key to be identified.
53. **Schema?** The structure (tables, columns, constraints) of a database; also a named container of objects.
54. **Data independence?** Changing one schema level without changing the level above (physical / logical).
55. **Default ports?** SQL Server 1433, MySQL 3306, Oracle 1521, PostgreSQL 5432, MongoDB 27017.

---

## B27. SQL vs MongoDB Bridge (the circular also lists MongoDB)

### Terminology

| SQL (relational) | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document (JSON-like, stored as **BSON**) |
| Column | Field |
| Primary key | `_id` (auto `ObjectId`, 12 bytes) |
| Join | Embedded documents or `$lookup` |
| Index | Index |
| GROUP BY | Aggregation pipeline `$group` |
| Schema (fixed) | Flexible schema (documents in one collection may differ) |

### SQL vs NoSQL

| SQL | NoSQL (MongoDB) |
|---|---|
| Tables with a fixed schema | Documents with a flexible schema |
| Scales **vertically** (bigger server) | Scales **horizontally** (sharding across servers) |
| Strong ACID transactions | Single-document atomic; multi-document transactions since 4.0 |
| Joins are natural | Prefers embedding; `$lookup` for joins |
| Best for structured, related data | Best for semi-structured, fast-changing, very large data |
| SQL Server, MySQL, Oracle | MongoDB, Cassandra, Redis, Neo4j |

NoSQL types: **document** (MongoDB), **key-value** (Redis), **column-family** (Cassandra), **graph** (Neo4j).
**CAP theorem:** in a distributed system with a network **P**artition, you must choose **C**onsistency or **A**vailability. **BASE** (NoSQL style) = Basically Available, Soft state, Eventually consistent.

### Same query in SQL and MongoDB

| SQL | MongoDB shell (`mongosh`) |
|---|---|
| `SELECT * FROM units;` | `db.units.find()` |
| `SELECT * FROM units WHERE side = 'Blue';` | `db.units.find({ side: "Blue" })` |
| `... WHERE side = 'Blue' AND strength >= 10` | `db.units.find({ side: "Blue", strength: { $gte: 10 } })` |
| `... WHERE side = 'Red' OR strength < 5` | `db.units.find({ $or: [ { side: "Red" }, { strength: { $lt: 5 } } ] })` |
| `... WHERE type IN ('Armour', 'Infantry')` | `db.units.find({ type: { $in: ["Armour", "Infantry"] } })` |
| `... WHERE name LIKE 'A%'` | `db.units.find({ name: /^A/ })` |
| `SELECT name, strength FROM units` | `db.units.find({}, { name: 1, strength: 1, _id: 0 })` |
| `... ORDER BY strength DESC LIMIT 3` | `db.units.find().sort({ strength: -1 }).limit(3)` |
| `SELECT COUNT(*) FROM units WHERE side = 'Blue'` | `db.units.countDocuments({ side: "Blue" })` |
| `SELECT DISTINCT type FROM units` | `db.units.distinct("type")` |
| `INSERT INTO units ...` | `db.units.insertOne({ name: "Alpha", side: "Blue", strength: 14 })` |
| `UPDATE units SET status = 'Engaged', strength = strength - 2 WHERE name = 'Alpha'` | `db.units.updateOne({ name: "Alpha" }, { $set: { status: "Engaged" }, $inc: { strength: -2 } })` |
| `DELETE FROM units WHERE strength = 0` | `db.units.deleteMany({ strength: 0 })` |
| `CREATE INDEX ... ON units(side, strength DESC)` | `db.units.createIndex({ side: 1, strength: -1 })` |

**GROUP BY → aggregation pipeline**
```sql
SELECT type, SUM(strength) AS total, COUNT(*) AS n
FROM units WHERE side = 'Blue'
GROUP BY type ORDER BY total DESC;
```
```javascript
db.units.aggregate([
  { $match: { side: "Blue" } },                                        // WHERE
  { $group: { _id: "$type", total: { $sum: "$strength" }, n: { $sum: 1 } } },   // GROUP BY
  { $sort:  { total: -1 } }                                            // ORDER BY
])
```

**JOIN → `$lookup`**
```javascript
db.units.aggregate([
  { $lookup: { from: "weapons", localField: "weaponIds", foreignField: "_id", as: "weapons" } }
])
```

**Geospatial (useful for maps):** coordinates are `[longitude, latitude]`.
```javascript
db.units.createIndex({ location: "2dsphere" })
db.units.find({ location: { $near: {
    $geometry: { type: "Point", coordinates: [90.40, 24.75] },   // near Mymensingh
    $maxDistance: 5000 } } })                                    // metres
```

**From C#:**
```csharp
var client = new MongoClient("mongodb://localhost:27017");
var units = client.GetDatabase("wargame").GetCollection<UnitDoc>("units");
await units.InsertOneAsync(new UnitDoc { Name = "Alpha", Side = "Blue", Strength = 14 });
var blue = await units.Find(u => u.Side == "Blue" && u.Strength >= 10).ToListAsync();
await units.UpdateOneAsync(u => u.Name == "Alpha", Builders<UnitDoc>.Update.Inc(u => u.Strength, -2));
```

### Embed or reference?

| Embed (sub-document) | Reference (store `_id`) |
|---|---|
| Data always read together (unit + its current position) | Data shared by many documents (weapon catalogue) |
| One-to-few | One-to-many with many items, or many-to-many |
| Fast reads, one query | Avoids duplication; needs `$lookup` |
| Document limit 16 MB | — |

**In a war-game system:** keep users, ORBAT, weapons, scenarios, and orders in **SQL** (structured, relational, need ACID). Use **MongoDB** for high-volume, flexible data: simulation event logs, unit telemetry/positions every second, and scenario documents with varying fields.

---

## B28. War-Game Database Design (written-exam answer)

**Likely question:** *"Design a database for a computer-assisted war-game system. Draw the ER diagram, list the tables with keys, and write the SQL to create them."*

### Step 1 — Requirements
1. Store **maps** and **scenarios**; an exercise is run from a scenario.
2. Store **units** of both sides (Blue/Red), their **type**, and their **ORBAT** hierarchy (a unit has a parent unit).
3. Units carry **weapons** (many-to-many with quantity).
4. **Players** (officers) command units in an exercise.
5. Record every **order** given and every **engagement** for the after-action review (AAR).

### Step 2 — Entities and relationships

| Relationship | Cardinality | Implemented by |
|---|---|---|
| Map – Scenario | 1 : N | `Scenario.map_id` FK |
| Scenario – Exercise | 1 : N | `Exercise.scenario_id` FK |
| UnitType – Unit | 1 : N | `Unit.unit_type_id` FK |
| Unit – Unit (parent) | 1 : N (recursive) | `Unit.parent_unit_id` FK |
| Unit – Weapon | M : N | junction table `UnitWeapon(quantity)` |
| Exercise – Unit | M : N | junction table `ExerciseUnit(strength, start position, commander)` |
| Player – ExerciseUnit | 1 : N | `ExerciseUnit.commander_id` FK |
| Exercise – Order, Unit – Order, Player – Order | 1 : N each | FKs in `SimOrder` |
| Exercise – Engagement, Unit – Engagement (attacker, target) | 1 : N | FKs in `Engagement` |

### Step 3 — ER diagram (crow's foot: `|` = one, `<` = many)

```
  Map      |───<  Scenario     |───<  Exercise
  Exercise |───<  ExerciseUnit  >───|  Unit            (Exercise M:N Unit)
  Player   |───<  ExerciseUnit                         (commander_id)
  UnitType |───<  Unit
  Unit     |───<  Unit                                 (parent_unit_id: ORBAT, recursive)
  Unit     |───<  UnitWeapon    >───|  Weapon          (Unit M:N Weapon)
  ExerciseUnit |───< SimOrder   >───|  Player          (issued_by)
  Exercise |───<  Engagement    >───|  Unit            (attacker_id and target_id: two FKs)
  Weapon   |───<  Engagement
```

### Step 4 — Tables (3NF) and SQL (SQL Server)

```sql
CREATE TABLE Map (
    map_id      INT IDENTITY PRIMARY KEY,
    map_name    NVARCHAR(100) NOT NULL,
    region      NVARCHAR(100),
    grid_system VARCHAR(10) NOT NULL DEFAULT 'MGRS'
);

CREATE TABLE Scenario (
    scenario_id INT IDENTITY PRIMARY KEY,
    name        NVARCHAR(100) NOT NULL UNIQUE,
    map_id      INT NOT NULL REFERENCES Map(map_id),
    description NVARCHAR(MAX)
);

CREATE TABLE Exercise (
    exercise_id INT IDENTITY PRIMARY KEY,
    name        NVARCHAR(100) NOT NULL,
    scenario_id INT NOT NULL REFERENCES Scenario(scenario_id),
    start_time  DATETIME2 NOT NULL,
    end_time    DATETIME2 NULL,
    status      VARCHAR(10) NOT NULL DEFAULT 'PLANNED'
                CHECK (status IN ('PLANNED', 'RUNNING', 'PAUSED', 'FINISHED')),
    CONSTRAINT ck_exercise_time CHECK (end_time IS NULL OR end_time > start_time)
);

CREATE TABLE UnitType (
    unit_type_id   INT IDENTITY PRIMARY KEY,
    type_name      VARCHAR(30) NOT NULL UNIQUE,      -- Infantry, Armour, Artillery
    speed_kmh      DECIMAL(5,1) CHECK (speed_kmh >= 0),
    base_firepower INT CHECK (base_firepower >= 0)
);

CREATE TABLE Unit (
    unit_id        INT IDENTITY PRIMARY KEY,
    unit_name      NVARCHAR(100) NOT NULL,
    unit_type_id   INT NOT NULL REFERENCES UnitType(unit_type_id),
    side           CHAR(4) NOT NULL CHECK (side IN ('BLUE', 'RED')),
    parent_unit_id INT NULL REFERENCES Unit(unit_id),          -- ORBAT (self-reference)
    auth_strength  INT NOT NULL CHECK (auth_strength > 0)
);

CREATE TABLE Weapon (
    weapon_id   INT IDENTITY PRIMARY KEY,
    weapon_name NVARCHAR(100) NOT NULL UNIQUE,
    range_km    DECIMAL(6,2) NOT NULL CHECK (range_km > 0),
    caliber_mm  DECIMAL(6,2)
);

CREATE TABLE UnitWeapon (                                     -- M:N Unit–Weapon
    unit_id   INT REFERENCES Unit(unit_id) ON DELETE CASCADE,
    weapon_id INT REFERENCES Weapon(weapon_id),
    quantity  INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (unit_id, weapon_id)
);

CREATE TABLE Player (
    player_id INT IDENTITY PRIMARY KEY,
    army_no   VARCHAR(20) NOT NULL UNIQUE,
    name      NVARCHAR(100) NOT NULL,
    rank_name VARCHAR(30),
    role      VARCHAR(20) NOT NULL CHECK (role IN ('DIRECTOR', 'BLUE', 'RED', 'UMPIRE'))
);

CREATE TABLE ExerciseUnit (                                   -- M:N Exercise–Unit
    exercise_id  INT REFERENCES Exercise(exercise_id),
    unit_id      INT REFERENCES Unit(unit_id),
    commander_id INT REFERENCES Player(player_id),
    strength     INT NOT NULL CHECK (strength >= 0),
    pos_x        DECIMAL(9,3),
    pos_y        DECIMAL(9,3),
    PRIMARY KEY (exercise_id, unit_id)
);

CREATE TABLE SimOrder (
    order_id    BIGINT IDENTITY PRIMARY KEY,
    exercise_id INT NOT NULL,
    unit_id     INT NOT NULL,
    issued_by   INT NOT NULL REFERENCES Player(player_id),
    sim_time    DATETIME2 NOT NULL,
    order_type  VARCHAR(10) NOT NULL CHECK (order_type IN ('MOVE', 'ATTACK', 'DEFEND', 'WITHDRAW')),
    target_x    DECIMAL(9,3),
    target_y    DECIMAL(9,3),
    CONSTRAINT fk_order_exunit FOREIGN KEY (exercise_id, unit_id)
        REFERENCES ExerciseUnit(exercise_id, unit_id)          -- unit must be in that exercise
);

CREATE TABLE Engagement (
    event_id    BIGINT IDENTITY PRIMARY KEY,
    exercise_id INT NOT NULL REFERENCES Exercise(exercise_id),
    sim_time    DATETIME2 NOT NULL,
    attacker_id INT NOT NULL REFERENCES Unit(unit_id),
    target_id   INT NOT NULL REFERENCES Unit(unit_id),
    weapon_id   INT NULL REFERENCES Weapon(weapon_id),
    damage      INT NOT NULL CHECK (damage >= 0),
    CONSTRAINT ck_not_self CHECK (attacker_id <> target_id)
);

-- Indexes for the most common searches
CREATE INDEX ix_engagement_ex_time ON Engagement(exercise_id, sim_time);
CREATE INDEX ix_engagement_attacker ON Engagement(attacker_id);
CREATE INDEX ix_order_ex_time      ON SimOrder(exercise_id, sim_time);
CREATE INDEX ix_unit_parent        ON Unit(parent_unit_id);
```
(SQL Server note: two FKs from `Engagement` to `Unit` are fine; avoid `ON DELETE CASCADE` on both, because SQL Server rejects multiple cascade paths.)

### Step 5 — Why it is in 3NF
- Every table has a primary key; every column holds one value (1NF).
- Junction tables (`UnitWeapon`, `ExerciseUnit`) hold only facts about the **whole** composite key: quantity, strength, position (2NF).
- No non-key column depends on another non-key column: unit type details live in `UnitType`, not repeated in `Unit`; map details live in `Map` (3NF).

### Step 6 — Sample queries
- Current strength per side in exercise 7 → join `ExerciseUnit` with `Unit`, `GROUP BY side`.
- ORBAT tree → recursive CTE on `Unit.parent_unit_id` (B22 W7).
- AAR timeline → `SELECT ... FROM Engagement WHERE exercise_id = 7 ORDER BY sim_time` UNION ALL the orders.
- Top damage dealers → B22 W3.

```sql
-- Strength per side in exercise 7
SELECT u.side, SUM(eu.strength) AS current_strength, SUM(u.auth_strength) AS authorized
FROM ExerciseUnit eu
JOIN Unit u ON u.unit_id = eu.unit_id
WHERE eu.exercise_id = 7
GROUP BY u.side;
```

### Step 7 — Integrity, security, and audit
- Constraints: PK, FK, CHECK (status, side, damage ≥ 0, end > start), UNIQUE (army_no, weapon name).
- Roles: `director` (full), `blue_player` and `red_player` (insert orders only for their side, through stored procedures), `analyst` (read-only views for AAR).
- An audit trigger on `ExerciseUnit` records every strength change.
- Event tables are **insert-only** (no UPDATE/DELETE permission), so the AAR record cannot be altered.
- Backups after every exercise; the database runs on an isolated network.

---

# PART C — LAST-NIGHT CHEAT SHEET

### OOP in 30 lines
1. **4 pillars:** Encapsulation (hide data: private + properties), Abstraction (hide complexity: abstract class/interface), Inheritance (is-a, `:`), Polymorphism (overloading = compile time, overriding = run time).
2. **Abstract class:** no `new`; can have constructor, fields, concrete + abstract methods; single inheritance.
3. **Interface:** contract; no instance fields, no constructor; a class implements many; default methods (C# 8) callable only through the interface.
4. **Overloading:** same name, different parameters; return type alone not enough.
5. **Overriding:** `virtual` → `override`; same signature; cannot change access; `sealed override` stops it.
6. **`new`:** hides; base reference calls base version. `A x = new C(); x.Show();` → A.
7. **Access:** public, private (default for members), protected, internal (default for classes), protected internal (OR), private protected (AND).
8. **Constructor order:** derived static → base static → derived field init → base field init → base ctor → derived ctor. Short answer: base ctor first.
9. **Constructor types:** default, parameterized, copy, static (once, no params), private (Singleton). `this(...)` / `base(...)` chaining.
10. **static:** one copy per class; static class = only static members, no instance, sealed.
11. **const vs readonly:** compile-time + implicitly static vs run-time, set in constructor.
12. **ref vs out:** initialized before call vs assigned inside the method.
13. **struct vs class:** value copy vs reference copy; struct cannot inherit.
14. **record:** value equality, `with` copy.
15. **Boxing:** value → object; unbox to the exact type or InvalidCastException.
16. **Equality:** `==` on classes compares references (string overrides it); override `Equals` + `GetHashCode` together.
17. **Shallow copy** shares inner objects (`MemberwiseClone`); deep copy copies them.
18. **Delegate** = function pointer; **event** = delegate only the owner can raise (`+=`/`-=` outside).
19. **Exceptions:** specific catch first; `finally` always runs; `throw;` keeps the stack trace.
20. **Dispose vs Finalize:** deterministic `using` vs GC-called.
21. **Relationships:** dependency (parameter) < association (field) < aggregation ◇ (independent parts) < composition ◆ (parts die with the whole); inheritance ▷ solid; realization ▷ dashed.
22. **SOLID:** SRP one reason to change · OCP extend, don't modify · LSP child replaces parent · ISP small interfaces · DIP depend on abstractions (constructor injection).
23. **DI lifetimes:** Singleton (app), Scoped (request), Transient (every time).
24. **Patterns:** Singleton, Factory, Builder | Adapter, Decorator, Composite, Facade | Strategy, Observer, Command, State, Template Method. GoF = 23 (5 + 7 + 11).
25. **Traps:** `x = x++ + ++x` (x=5) → 12 · `1+2+"3"` → 33 · `7/2` → 3 · `-7%2` → -1 · `Math.Round(2.5)` → 2 · `'A'+1` → 66 · `7.0/0` → ∞ · `int.MaxValue + 1` → -2147483648 · lambda in `for` → 333.

### SQL in 30 lines
1. **Categories:** DDL (CREATE, ALTER, DROP, TRUNCATE) · DML (INSERT, UPDATE, DELETE, MERGE) · DQL (SELECT) · DCL (GRANT, REVOKE) · TCL (COMMIT, ROLLBACK, SAVEPOINT).
2. **Execution order:** FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → TOP/LIMIT.
3. **Keys:** super ⊇ candidate ⊇ primary; alternate = candidate − primary; FK → PK/UNIQUE; PK: unique + not null.
4. **NF:** 1NF atomic · 2NF no partial dependency · 3NF no transitive dependency · BCNF every determinant a super key · "the key, the whole key, nothing but the key".
5. **Closure:** attributes never on a right side must be in every key.
6. **ACID:** Atomicity, Consistency, Isolation, Durability.
7. **Problems:** dirty read, non-repeatable read, phantom read, lost update.
8. **Isolation:** RU < RC (SQL Server/Oracle default) < RR (MySQL default) < Serializable.
9. **DELETE vs TRUNCATE vs DROP:** rows with WHERE + triggers vs all rows, reset identity vs whole table.
10. **WHERE vs HAVING:** rows before grouping vs groups after.
11. **Joins:** INNER 7, LEFT 8, RIGHT 8, FULL 9, CROSS 32 (B9 data). MySQL: no FULL JOIN → LEFT UNION RIGHT.
12. **LEFT JOIN + WHERE on the right table** = INNER JOIN. Filter in ON instead.
13. **COUNT(*)** counts NULL rows; `COUNT(col)` skips NULL; aggregates ignore NULL; SUM of no rows = NULL.
14. **NOT IN with NULL** returns nothing → use NOT EXISTS.
15. **Nth highest:** `DENSE_RANK() OVER (ORDER BY salary DESC) = N` · 2nd: `MAX(salary) WHERE salary < (SELECT MAX(salary)...)`.
16. **ROW_NUMBER / RANK / DENSE_RANK** on 90,70,65,60,60,55 → 1..6 / 1,2,3,4,4,6 / 1,2,3,4,4,5.
17. **Top N:** SQL Server `TOP n` · MySQL `LIMIT n` · Oracle `FETCH FIRST n ROWS ONLY`.
18. **NULL functions:** ISNULL · IFNULL · NVL · COALESCE (all).
19. **Auto number:** IDENTITY · AUTO_INCREMENT · GENERATED AS IDENTITY / SEQUENCE.
20. **Index:** clustered = 1 per table, data in key order (PK default in SQL Server); non-clustered = many; composite leftmost prefix; avoid functions on indexed columns.
21. **View:** virtual table; security + simplicity; `WITH CHECK OPTION`.
22. **Procedure vs function:** EXEC, can modify data, transactions vs must return, usable in SELECT.
23. **Trigger tables:** SQL Server `inserted`/`deleted` · MySQL `NEW`/`OLD` · Oracle `:NEW`/`:OLD`.
24. **Cursor:** DECLARE → OPEN → FETCH → CLOSE → DEALLOCATE; avoid if a set-based query works.
25. **Injection:** never concatenate input; use parameters (`@p`), least privilege.
26. **ADO.NET:** ExecuteReader (rows) · ExecuteNonQuery (affected count) · ExecuteScalar (one value).
27. **EF Core:** DbContext + DbSet; `dotnet ef migrations add` / `database update`; Include = eager loading; N+1 problem.
28. **Relational algebra:** σ select rows · π project columns · ⋈ join · × product · ∪ ∩ − · ÷ "for all".
29. **Ports:** SQL Server 1433 · MySQL 3306 · Oracle 1521 · MongoDB 27017.
30. **MongoDB:** collection = table, document = row, `find`, `$gt`, `$in`, `$set`, `$inc`, `aggregate([$match, $group, $sort])`, `$lookup` = join.

### Exam day
- Report by 10:30. Carry the admit card/email, NID, photos, certificate copies, 2–3 black pens.
- Read the whole question paper first. Answer the questions you know best first.
- For theory: definition → table/diagram → code → example.
- For code: write neatly, comment, show the expected output.
- For SQL: name the dialect if you use TOP/LIMIT; check NULL cases; end each statement with `;`.
- Keep 10 minutes at the end to re-check outputs and SQL syntax.

**Good luck.**
