# AWGC Software Programmer — Written Exam Preparation

**Post:** Software Programmer (Contractual, Civilian), Army War Game Centre (AWGC), Bangladesh Army
**Exam:** Saturday, 28 Nov 2026, 11:00 AM — Mymensingh Cantonment Public School and College
**Report:** MP Check Post-1 (Sankipara), Momenshahi Cantonment, **by 10:30 AM**

The circular asks for these skills, so the exam will most likely test them:

1. **OOP with C# / .NET** (this is the main focus)
2. **Databases**: SQL (MySQL, MS SQL, Oracle) and NoSQL (MongoDB)
3. **System analysis, design and development of war game simulation systems**
4. **CSE fundamentals**: data structures, algorithms, OS, networking, software engineering
5. Possibly: English, math/aptitude, and general knowledge about Bangladesh and the Armed Forces

---

## 0. Two-Day Study Plan

### Day 1 — Thursday, 26 Nov (≈ 10–11 hours)

| Time | Topic | Section |
|---|---|---|
| 08:00–10:00 | C# and .NET basics: CLR, types, keywords, memory | §1 |
| 10:15–12:30 | OOP pillars, interface vs abstract class, SOLID | §2 |
| 12:30–13:30 | Break | |
| 13:30–16:00 | **Write by hand** every coding problem in §3 (no IDE) | §3 |
| 16:15–18:00 | Data structures, algorithms, complexity | §4 |
| 19:30–21:30 | Advanced C#: LINQ, async, delegates, collections, ASP.NET Core, EF Core | §5 |
| 21:30–22:00 | Self-test: answer §11 MCQ 1–20 without looking | §11 |

### Day 2 — Friday, 27 Nov (≈ 10–11 hours)

| Time | Topic | Section |
|---|---|---|
| 08:00–10:30 | SQL theory: keys, normalization, joins, ACID, indexes | §6 |
| 10:45–12:30 | **Write SQL queries by hand** | §6.3 |
| 12:30–13:30 | Break | |
| 13:30–14:30 | NoSQL and MongoDB | §7 |
| 14:30–16:00 | Software engineering, design patterns, UML | §8 |
| 16:15–17:45 | War game and simulation concepts | §9 |
| 19:30–20:30 | OS, networking, general CSE | §10 |
| 20:30–21:30 | GK, English, math | §12 |
| 21:30–22:00 | Full MCQ self-test (§11); revise only the wrong ones | §11 |

### Friday Night (27 Nov) and Exam Morning (28 Nov)
- Sleep by 11 PM. Do **not** learn new topics on the last night.
- Morning: read only the "Quick revision" boxes and §3 code.
- Leave early. Mymensingh traffic and the cantonment gate check take time. Be at Sankipara gate before 10:30.

### Documents Checklist (from the email)
- [ ] Photocopies of all educational certificates (SSC, HSC, B.Sc., M.Sc. if any)
- [ ] Photocopies of professional certificates (training, job experience)
- [ ] Originals with you, in case they ask to see them
- [ ] 2 passport-size photos
- [ ] NID or Passport (original + photocopy)
- [ ] Admit card / email printout
- [ ] 2–3 black ball-point pens, pencil, eraser, transparent file folder
- [ ] Analog watch (phones are usually not allowed inside a cantonment exam hall)

---

## 1. C# and .NET Fundamentals

**Q1. What is the CLR?**
The Common Language Runtime is the execution engine of .NET. It handles memory management (garbage collection), type safety, exception handling, security and thread management. It runs managed code.

**Q2. Explain the compilation process of a C# program.**
C# source → C# compiler (Roslyn) → **IL** (Intermediate Language) inside an assembly (.dll/.exe) → at run time the **JIT** compiler converts IL to native machine code → CPU executes it.

**Q3. CTS vs CLS?**
- **CTS (Common Type System):** defines all types that .NET supports, so different .NET languages share types.
- **CLS (Common Language Specification):** a subset of CTS rules that every .NET language must follow for interoperability (for example, unsigned types are not CLS-compliant).

**Q4. .NET Framework vs .NET (Core)?**

| .NET Framework | .NET (Core / 5+) |
|---|---|
| Windows only | Cross-platform (Windows, Linux, macOS) |
| Last version 4.8.x, maintenance only | Active (.NET 8, 9, 10 …) |
| Not open source originally | Open source |
| Monolithic installation | Side-by-side versions, container friendly |

**Q5. Value type vs reference type?**

| Value type | Reference type |
|---|---|
| Stores the data directly | Stores a reference (address) to data |
| Usually on the stack (or inline in an object) | Object on the managed heap |
| `int, double, bool, char, struct, enum` | `class, string, array, interface, delegate, object` |
| Copy creates an independent copy | Copy shares the same object |

**Q6. What are boxing and unboxing?**
```csharp
int a = 10;
object o = a;      // boxing: value type -> object on heap
int b = (int)o;    // unboxing: object -> value type (explicit cast)
```
Boxing costs performance. Generics (`List<int>`) avoid it.

**Q7. struct vs class?**
struct is a value type, cannot inherit from another struct/class (can implement interfaces), and is good for small data (Point, Color). class is a reference type, supports inheritance, and can be null.

**Q8. const vs readonly vs static?**
- `const`: compile-time constant, must be assigned at declaration, implicitly static.
- `readonly`: assigned at declaration **or in the constructor**; value fixed at run time.
- `static`: belongs to the class, not to an object; one shared copy.

**Q9. ref vs out vs in?**
- `ref`: variable must be initialized before passing; method may change it.
- `out`: need not be initialized; method **must** assign it.
- `in`: passed by reference but read-only.
```csharp
bool ok = int.TryParse("123", out int n);  // classic out example
```

**Q10. Why is `string` immutable? When do you use StringBuilder?**
Every change to a string creates a new object. For many changes in a loop, use `StringBuilder`, which modifies one buffer and is much faster.

**Q11. `==` vs `Equals()`?**
For reference types, `==` compares references by default; `Equals()` can be overridden to compare content. `string` overrides both to compare content.

**Q12. Access modifiers in C#?**

| Modifier | Accessible from |
|---|---|
| `public` | Everywhere |
| `private` | Same class only (default for members) |
| `protected` | Same class + derived classes |
| `internal` | Same assembly (default for classes) |
| `protected internal` | Same assembly OR derived classes |
| `private protected` | Derived classes in the same assembly |

**Q13. What is garbage collection? Generations?**
GC automatically frees heap memory of objects that are no longer reachable. Generations: **Gen 0** (new, short-lived), **Gen 1** (buffer), **Gen 2** (long-lived). Unmanaged resources (files, DB connections) need `IDisposable` + `using`.
```csharp
using (var conn = new SqlConnection(cs))
{
    conn.Open();
}   // Dispose() is called automatically, even on exception
```

**Q14. Dispose vs Finalize?**
`Dispose()` is called explicitly (or by `using`) and releases resources deterministically. `Finalize()` (destructor `~Class()`) is called by the GC at an unknown time. Prefer Dispose.

**Q15. var vs dynamic vs object?**
- `var`: type decided at **compile time** by inference; strongly typed.
- `dynamic`: type checked at **run time**; errors appear only at run time.
- `object`: base of all types; needs casting.

**Q16. Exception handling — what does `finally` do?**
`finally` always runs, whether an exception occurs or not. Use it to release resources.
```csharp
try { int x = 10 / int.Parse("0"); }
catch (DivideByZeroException ex) { Console.WriteLine(ex.Message); }
catch (Exception ex) { Console.WriteLine("General: " + ex.Message); }
finally { Console.WriteLine("Always runs"); }
```
Catch specific exceptions first, general `Exception` last. `throw;` rethrows and keeps the stack trace; `throw ex;` resets it.

**Q17. What is an assembly?**
A compiled unit (.dll or .exe) containing IL code, metadata and a manifest (version, references).

> **Quick revision:** CLR = runtime, IL + JIT, value vs reference, boxing, const/readonly, ref/out, string immutable, GC generations, using/IDisposable.

---

## 2. Object-Oriented Programming (most important)

**Q1. What are the four pillars of OOP? Explain with examples.**

1. **Encapsulation:** hide data, expose it through methods/properties.
```csharp
public class BankAccount
{
    private decimal _balance;               // hidden
    public decimal Balance => _balance;     // read-only access
    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Invalid amount");
        _balance += amount;
    }
}
```
2. **Inheritance:** a child class reuses the parent's members (`class Tank : Vehicle`).
3. **Polymorphism:** one interface, many forms.
   - Compile-time (static): **method overloading**.
   - Run-time (dynamic): **method overriding** with `virtual` / `override`.
4. **Abstraction:** show only essential features, hide details (abstract classes, interfaces).

**Full example (good to write in the exam):**
```csharp
public abstract class Unit
{
    public string Name { get; set; }
    public int Strength { get; protected set; }

    protected Unit(string name, int strength)
    {
        Name = name;
        Strength = strength;
    }

    public abstract int AttackPower();          // abstraction

    public virtual void Move()                  // can be overridden
        => Console.WriteLine($"{Name} moves.");
}

public class Infantry : Unit                    // inheritance
{
    public Infantry(string name, int s) : base(name, s) { }
    public override int AttackPower() => Strength * 1;
}

public class Armour : Unit
{
    public Armour(string name, int s) : base(name, s) { }
    public override int AttackPower() => Strength * 5;
    public override void Move()                 // polymorphism
        => Console.WriteLine($"{Name} moves on tracks.");
}

// Usage
List<Unit> force = new() { new Infantry("1 Bn", 600), new Armour("Tank Sqn", 14) };
foreach (Unit u in force)
    Console.WriteLine($"{u.Name}: {u.AttackPower()}");   // run-time binding
```

**Q2. Abstract class vs interface?**

| Abstract class | Interface |
|---|---|
| Can have fields, constructors | No instance fields, no constructors |
| Can have implemented + abstract methods | Methods abstract by default (C# 8+ allows default implementations) |
| A class can inherit **only one** | A class can implement **many** |
| Use for "is-a" with shared code | Use for "can-do" capability/contract |
| Members can have any access modifier | Members public by default |

**Q3. Method overloading vs overriding?**

| Overloading | Overriding |
|---|---|
| Same name, different parameters | Same signature in derived class |
| Same class | Parent–child classes |
| Compile-time polymorphism | Run-time polymorphism |
| No keyword needed | `virtual` in base, `override` in child |

```csharp
int Add(int a, int b) => a + b;
double Add(double a, double b) => a + b;
int Add(int a, int b, int c) => a + b + c;
```

**Q4. `override` vs `new` (method hiding)?**
```csharp
class A { public virtual void Show() => Console.WriteLine("A"); }
class B : A { public override void Show() => Console.WriteLine("B"); }
class C : A { public new void Show() => Console.WriteLine("C"); }

A b = new B(); b.Show();   // B  (override: run-time type)
A c = new C(); c.Show();   // A  (new hides: reference type decides)
```

**Q5. What is a `sealed` class?** A class that cannot be inherited (e.g., `string`). A sealed method cannot be overridden further.

**Q6. What is a static class?** Cannot be instantiated, contains only static members (e.g., `Math`). Implicitly sealed.

**Q7. Constructor types?** Default, parameterized, copy, static (runs once, before first use, no parameters/modifiers), private (used in Singleton). Constructor chaining: `this(...)` and `base(...)`.

**Q8. Does C# support multiple inheritance?** Not for classes (avoids the "diamond problem"). It is achieved with multiple interfaces.

**Q9. Association, aggregation, composition?**
- **Association:** general relationship (Teacher – Student).
- **Aggregation:** "has-a", parts can live independently (Department has Teachers).
- **Composition:** strong "has-a", part dies with the whole (House has Rooms).

**Q10. SOLID principles**

| Letter | Principle | Meaning |
|---|---|---|
| S | Single Responsibility | A class should have only one reason to change |
| O | Open/Closed | Open for extension, closed for modification |
| L | Liskov Substitution | A child object must be usable wherever the parent is expected |
| I | Interface Segregation | Many small interfaces are better than one fat interface |
| D | Dependency Inversion | Depend on abstractions, not concrete classes (use DI) |

**Q11. What is a property? Auto-property?**
```csharp
public int Age { get; set; }                       // auto-property
public string Name { get; init; }                  // set only during initialization
private int _x;
public int X { get => _x; set => _x = value < 0 ? 0 : value; }
```

**Q12. What is an indexer?** Lets an object be accessed like an array: `public int this[int i] { get => data[i]; set => data[i] = value; }`

> **Quick revision:** 4 pillars + example, abstract vs interface table, overloading vs overriding table, override vs new output, SOLID.

---

## 3. Coding Problems (write these by hand)

Written exams usually ask 2–4 short programs. Write clean code with proper names. Mention the time complexity.

**P1. Reverse a string (without built-in Reverse)** — O(n)
```csharp
static string Reverse(string s)
{
    char[] arr = s.ToCharArray();
    int i = 0, j = arr.Length - 1;
    while (i < j)
    {
        (arr[i], arr[j]) = (arr[j], arr[i]);
        i++; j--;
    }
    return new string(arr);
}
```

**P2. Palindrome check** — O(n)
```csharp
static bool IsPalindrome(string s)
{
    s = s.ToLower();
    for (int i = 0, j = s.Length - 1; i < j; i++, j--)
        if (s[i] != s[j]) return false;
    return true;
}
```

**P3. Prime check** — O(√n)
```csharp
static bool IsPrime(int n)
{
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
```

**P4. Print primes up to N (Sieve of Eratosthenes)** — O(n log log n)
```csharp
static List<int> Sieve(int n)
{
    bool[] composite = new bool[n + 1];
    var primes = new List<int>();
    for (int i = 2; i <= n; i++)
    {
        if (composite[i]) continue;
        primes.Add(i);
        for (long j = (long)i * i; j <= n; j += i) composite[j] = true;
    }
    return primes;
}
```

**P5. Factorial (iterative and recursive)**
```csharp
static long Factorial(int n)
{
    long f = 1;
    for (int i = 2; i <= n; i++) f *= i;
    return f;
}
static long FactRec(int n) => n <= 1 ? 1 : n * FactRec(n - 1);
```

**P6. Fibonacci series (first n terms)** — O(n)
```csharp
static void Fibonacci(int n)
{
    long a = 0, b = 1;
    for (int i = 0; i < n; i++)
    {
        Console.Write(a + " ");
        (a, b) = (b, a + b);
    }
}
// n = 10 -> 0 1 1 2 3 5 8 13 21 34
```

**P7. Swap two numbers without a third variable**
```csharp
a = a + b; b = a - b; a = a - b;
// or: a ^= b; b ^= a; a ^= b;
// or C#: (a, b) = (b, a);
```

**P8. GCD and LCM** — Euclid's algorithm, O(log n)
```csharp
static int Gcd(int a, int b) => b == 0 ? a : Gcd(b, a % b);
static int Lcm(int a, int b) => a / Gcd(a, b) * b;
```

**P9. Armstrong number** (153 = 1³ + 5³ + 3³)
```csharp
static bool IsArmstrong(int n)
{
    int digits = n.ToString().Length, sum = 0, t = n;
    while (t > 0)
    {
        int d = t % 10;
        sum += (int)Math.Pow(d, digits);
        t /= 10;
    }
    return sum == n;
}
```

**P10. Second largest element in an array** — O(n)
```csharp
static int SecondLargest(int[] a)
{
    int first = int.MinValue, second = int.MinValue;
    foreach (int x in a)
    {
        if (x > first) { second = first; first = x; }
        else if (x > second && x != first) second = x;
    }
    return second;
}
```

**P11. Bubble sort** — O(n²)
```csharp
static void BubbleSort(int[] a)
{
    for (int i = 0; i < a.Length - 1; i++)
    {
        bool swapped = false;
        for (int j = 0; j < a.Length - 1 - i; j++)
        {
            if (a[j] > a[j + 1])
            {
                (a[j], a[j + 1]) = (a[j + 1], a[j]);
                swapped = true;
            }
        }
        if (!swapped) break;   // already sorted -> best case O(n)
    }
}
```

**P12. Binary search (array must be sorted)** — O(log n)
```csharp
static int BinarySearch(int[] a, int key)
{
    int lo = 0, hi = a.Length - 1;
    while (lo <= hi)
    {
        int mid = lo + (hi - lo) / 2;   // avoids overflow
        if (a[mid] == key) return mid;
        if (a[mid] < key) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}
```

**P13. Count vowels, consonants, digits**
```csharp
static void CountChars(string s)
{
    int v = 0, c = 0, d = 0;
    foreach (char ch in s.ToLower())
    {
        if ("aeiou".Contains(ch)) v++;
        else if (char.IsLetter(ch)) c++;
        else if (char.IsDigit(ch)) d++;
    }
    Console.WriteLine($"Vowels={v}, Consonants={c}, Digits={d}");
}
```

**P14. Character frequency / find duplicates** — O(n)
```csharp
static void Frequency(string s)
{
    var map = new Dictionary<char, int>();
    foreach (char ch in s)
        map[ch] = map.TryGetValue(ch, out int n) ? n + 1 : 1;
    foreach (var kv in map)
        Console.WriteLine($"{kv.Key}: {kv.Value}");
}
```

**P15. Anagram check** ("listen" / "silent")
```csharp
static bool IsAnagram(string a, string b)
{
    if (a.Length != b.Length) return false;
    int[] count = new int[256];
    foreach (char c in a) count[c]++;
    foreach (char c in b) if (--count[c] < 0) return false;
    return true;
}
```

**P16. FizzBuzz (1–100)**
```csharp
for (int i = 1; i <= 100; i++)
    Console.WriteLine(i % 15 == 0 ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i.ToString());
```

**P17. Matrix multiplication**
```csharp
static int[,] Multiply(int[,] A, int[,] B)
{
    int n = A.GetLength(0), m = A.GetLength(1), p = B.GetLength(1);
    if (m != B.GetLength(0)) throw new ArgumentException("Size mismatch");
    var C = new int[n, p];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < p; j++)
            for (int k = 0; k < m; k++)
                C[i, j] += A[i, k] * B[k, j];
    return C;
}
```

**P18. Reverse a number and sum of digits**
```csharp
int n = 12345, rev = 0, sum = 0;
while (n > 0) { int d = n % 10; rev = rev * 10 + d; sum += d; n /= 10; }
// rev = 54321, sum = 15
```

**P19. Pattern printing (right triangle / pyramid)**
```csharp
int rows = 4;
for (int i = 1; i <= rows; i++)
{
    Console.Write(new string(' ', rows - i));
    Console.WriteLine(new string('*', 2 * i - 1));
}
//    *
//   ***
//  *****
// *******
```

**P20. Thread-safe Singleton**
```csharp
public sealed class Logger
{
    private static readonly Lazy<Logger> _instance = new(() => new Logger());
    public static Logger Instance => _instance.Value;
    private Logger() { }                      // no outside instantiation
    public void Log(string msg) => Console.WriteLine($"[{DateTime.Now:T}] {msg}");
}
```

**P21. Linked list — reverse**
```csharp
class Node { public int Val; public Node Next; public Node(int v) => Val = v; }

static Node ReverseList(Node head)
{
    Node prev = null, cur = head;
    while (cur != null)
    {
        Node next = cur.Next;
        cur.Next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
```

**P22. Stack using array (push/pop)**
```csharp
class MyStack
{
    private readonly int[] _data;
    private int _top = -1;
    public MyStack(int size) => _data = new int[size];
    public void Push(int x)
    {
        if (_top == _data.Length - 1) throw new InvalidOperationException("Overflow");
        _data[++_top] = x;
    }
    public int Pop()
    {
        if (_top == -1) throw new InvalidOperationException("Underflow");
        return _data[_top--];
    }
}
```

**P23. Balanced parentheses** `"{[()]}"` → true
```csharp
static bool IsBalanced(string s)
{
    var st = new Stack<char>();
    foreach (char c in s)
    {
        if ("([{".Contains(c)) st.Push(c);
        else if (")]}".Contains(c))
        {
            if (st.Count == 0) return false;
            char open = st.Pop();
            if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{'))
                return false;
        }
    }
    return st.Count == 0;
}
```

**Output-prediction questions (common trap questions):**
```csharp
int x = 5;
Console.WriteLine(x++ + ++x);   // 5 + 7 = 12
Console.WriteLine(10 / 3);      // 3   (integer division)
Console.WriteLine(10 % 3);      // 1
Console.WriteLine(10 / 3.0);    // 3.3333333333333335
Console.WriteLine("5" + 3 + 2); // 532
Console.WriteLine(3 + 2 + "5"); // 55
string s = null; Console.WriteLine(s?.Length ?? -1);  // -1
```

---

## 4. Data Structures and Algorithms

**Complexity table (memorize):**

| Algorithm | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|
| Bubble sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Linear search | O(1) | O(n) | O(n) | O(1) | — |
| Binary search | O(1) | O(log n) | O(log n) | O(1) | — |

| Data structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked list | O(n) | O(n) | O(1)* | O(1)* |
| Stack / Queue | — | O(n) | O(1) | O(1) |
| Hash table | — | O(1) avg | O(1) avg | O(1) avg |
| Balanced BST | O(log n) | O(log n) | O(log n) | O(log n) |

\* when the node position is known.

**Q1. Stack vs Queue?** Stack = LIFO (push/pop; used for undo, function calls, expression evaluation). Queue = FIFO (enqueue/dequeue; used for scheduling, BFS, message queues).

**Q2. Array vs Linked list?** Array: contiguous memory, O(1) random access, fixed size. Linked list: nodes with pointers, dynamic size, O(1) insert/delete at known position, no random access.

**Q3. BFS vs DFS?**
BFS uses a queue and visits level by level; finds the shortest path in an **unweighted** graph. DFS uses a stack/recursion and goes deep first; used for cycle detection and topological sort. Both are O(V + E).

**Q4. Dijkstra vs A\*?**
- **Dijkstra:** shortest path from one source with **non-negative** weights. O((V+E) log V) with a priority queue.
- **A\*:** Dijkstra plus a **heuristic** h(n) (e.g., straight-line distance). f(n) = g(n) + h(n). Faster for pathfinding on maps — **very relevant for war game unit movement on terrain**.
- **Bellman-Ford:** handles negative weights, O(VE). **Floyd-Warshall:** all pairs, O(V³).

**Q5. Tree terms:** Binary tree (max 2 children). BST (left < root < right). Traversals: Inorder (L-Root-R, gives sorted order for BST), Preorder (Root-L-R), Postorder (L-R-Root). Height of a balanced tree is O(log n).

**Q6. Recursion vs iteration?** Recursion is cleaner for trees/divide-and-conquer but uses stack memory and may overflow. Iteration uses loops and less memory.

**Q7. What is dynamic programming?** Solve a problem by breaking it into overlapping sub-problems and storing results (memoization/tabulation). Examples: Fibonacci, knapsack, LCS.

**Q8. Greedy algorithm?** Picks the locally best choice at each step. Examples: Dijkstra, Prim, Kruskal, Huffman coding.

---

## 5. Advanced C#, ASP.NET Core and EF Core

**Q1. What is a delegate? Event?**
A delegate is a type-safe function pointer. An event is a delegate-based notification that only the owner class can raise.
```csharp
public delegate void AlertHandler(string msg);

public class Radar
{
    public event Action<string> EnemyDetected;          // built-in delegate
    public void Scan() => EnemyDetected?.Invoke("Contact at grid 4521");
}

var radar = new Radar();
radar.EnemyDetected += m => Console.WriteLine("ALERT: " + m);
radar.Scan();
```
Built-in delegates: `Action` (no return), `Func<T, TResult>` (returns a value), `Predicate<T>` (returns bool).

**Q2. What is LINQ? Write examples.**
Language Integrated Query — query collections, databases, XML with one syntax.
```csharp
var units = new List<(string Name, string Type, int Strength)>
{
    ("A Coy", "Infantry", 120), ("B Sqn", "Armour", 14), ("C Coy", "Infantry", 95)
};

var strong = units.Where(u => u.Strength > 100).Select(u => u.Name);
var total  = units.Sum(u => u.Strength);
var byType = units.GroupBy(u => u.Type)
                  .Select(g => new { Type = g.Key, Count = g.Count(), Total = g.Sum(x => x.Strength) });
var sorted = units.OrderByDescending(u => u.Strength).ThenBy(u => u.Name);
var first  = units.FirstOrDefault(u => u.Type == "Artillery");   // null/default if not found
```
**Deferred execution:** a LINQ query runs only when enumerated (`foreach`, `ToList()`, `Count()`).

**Q3. IEnumerable vs IQueryable?**
`IEnumerable` filters **in memory** (LINQ to Objects). `IQueryable` builds an expression tree that is translated to **SQL and runs in the database** — better for large tables.

**Q4. async / await?**
Lets I/O work (DB, HTTP, file) run without blocking the thread.
```csharp
public async Task<string> GetDataAsync(string url)
{
    using var client = new HttpClient();
    return await client.GetStringAsync(url);
}
```
Avoid `async void` except for event handlers. Avoid `.Result` / `.Wait()` (deadlock risk).

**Q5. Thread vs Task?** `Thread` is an OS-level thread (expensive). `Task` is a higher-level unit of work that runs on the thread pool, supports return values, continuation and async/await. Prefer Task.

**Q6. lock / thread safety?**
```csharp
private readonly object _sync = new();
lock (_sync) { counter++; }       // only one thread at a time
// or: Interlocked.Increment(ref counter);
```
Deadlock: two threads each wait for a lock the other holds.

**Q7. Collections?**
`List<T>` (dynamic array), `Dictionary<TKey,TValue>` (hash map), `HashSet<T>` (unique items), `Queue<T>`, `Stack<T>`, `LinkedList<T>`, `SortedDictionary`, `ConcurrentDictionary` (thread safe). Array vs ArrayList: ArrayList is non-generic (boxing); prefer `List<T>`.

**Q8. Generics?** Type-safe reusable code without boxing.
```csharp
public class Repository<T> where T : class
{
    private readonly List<T> _items = new();
    public void Add(T item) => _items.Add(item);
    public IEnumerable<T> GetAll() => _items;
}
```

**Q9. Extension method?**
```csharp
public static class StringExt
{
    public static bool IsNullOrBlank(this string s) => string.IsNullOrWhiteSpace(s);
}
// "  ".IsNullOrBlank() -> true
```

**Q10. Nullable types?** `int? x = null;` `x.HasValue`, `x ?? 0`. Null-conditional `obj?.Prop`, null-coalescing `??`, `??=`.

**Q11. ASP.NET Core MVC — explain MVC.**
- **Model:** data + business logic.
- **View:** UI (Razor .cshtml).
- **Controller:** handles requests, talks to the model, returns a view/JSON.
Request pipeline: Request → **Middleware** (auth, routing, logging…) → Routing → Controller action → Result → Response.

**Q12. Dependency Injection lifetimes?**

| Lifetime | Instance created |
|---|---|
| `AddTransient` | Every time it is requested |
| `AddScoped` | Once per HTTP request |
| `AddSingleton` | Once for the whole application |

```csharp
builder.Services.AddScoped<IUnitService, UnitService>();
```

**Q13. REST API and HTTP methods?**
GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (delete). Stateless. Status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.
```csharp
[ApiController]
[Route("api/[controller]")]
public class UnitsController : ControllerBase
{
    private readonly AppDbContext _db;
    public UnitsController(AppDbContext db) => _db = db;

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var unit = await _db.Units.FindAsync(id);
        return unit is null ? NotFound() : Ok(unit);
    }
}
```

**Q14. Entity Framework Core?** An ORM: maps C# classes to tables. Approaches: **Code First** (classes → migrations → DB) and **Database First** (scaffold from an existing DB). `DbContext` = session with DB, `DbSet<T>` = table. Lazy vs eager loading (`Include()`). Migrations: `Add-Migration`, `Update-Database`. ADO.NET is the lower-level alternative (SqlConnection, SqlCommand, SqlDataReader).

**Q15. SQL injection — how to prevent?** Use **parameterized queries** / stored procedures / ORM, validate input, use least-privilege DB accounts.
```csharp
var cmd = new SqlCommand("SELECT * FROM Users WHERE Name = @name", conn);
cmd.Parameters.AddWithValue("@name", userInput);
```

**Q16. Authentication vs Authorization?** Authentication = who are you (login, JWT, cookies). Authorization = what are you allowed to do (roles, policies).

---

## 6. Databases — SQL (MS SQL, MySQL, Oracle)

### 6.1 Theory

**Q1. DBMS vs RDBMS?** RDBMS stores data in related tables with keys and enforces integrity constraints (MS SQL, MySQL, Oracle, PostgreSQL).

**Q2. Keys?**
- **Primary key:** unique + not null, one per table.
- **Candidate key:** any column set that can be a primary key.
- **Alternate key:** candidate keys not chosen as primary.
- **Foreign key:** refers to a primary key in another table (referential integrity).
- **Composite key:** key made of two or more columns.
- **Unique key:** unique, but allows one NULL (SQL Server) / multiple NULLs (MySQL, Oracle).
- **Super key:** any set of columns that uniquely identifies a row.

**Q3. Normalization?** Organizing tables to reduce redundancy and anomalies.
- **1NF:** atomic values, no repeating groups.
- **2NF:** 1NF + no **partial dependency** (non-key column depends on the whole composite key).
- **3NF:** 2NF + no **transitive dependency** (non-key column must not depend on another non-key column).
- **BCNF:** for every functional dependency X → Y, X is a super key.
Denormalization: deliberately adding redundancy for read performance (reports, data warehouse).

**Q4. ACID properties of a transaction?**
- **Atomicity:** all or nothing.
- **Consistency:** DB moves from one valid state to another.
- **Isolation:** concurrent transactions don't interfere.
- **Durability:** committed data survives crashes.
```sql
BEGIN TRANSACTION;
UPDATE Account SET Balance = Balance - 500 WHERE Id = 1;
UPDATE Account SET Balance = Balance + 500 WHERE Id = 2;
COMMIT;   -- or ROLLBACK on error
```

**Q5. SQL command categories?**
- **DDL:** CREATE, ALTER, DROP, TRUNCATE
- **DML:** INSERT, UPDATE, DELETE (SELECT is sometimes listed as **DQL**)
- **DCL:** GRANT, REVOKE
- **TCL:** COMMIT, ROLLBACK, SAVEPOINT

**Q6. DELETE vs TRUNCATE vs DROP?**

| DELETE | TRUNCATE | DROP |
|---|---|---|
| DML, removes rows (WHERE allowed) | DDL, removes all rows | DDL, removes the table itself |
| Logged row by row, slower | Minimal logging, fast | Structure + data gone |
| Can rollback | Can rollback in SQL Server inside a transaction; auto-commits in Oracle/MySQL | Cannot easily recover |
| Triggers fire | Triggers don't fire | — |
| Identity not reset | Identity reset | — |

**Q7. Joins?**
- **INNER JOIN:** only matching rows.
- **LEFT JOIN:** all from left + matches from right (NULL if none).
- **RIGHT JOIN:** all from right + matches from left.
- **FULL OUTER JOIN:** all rows from both (not in MySQL directly; use UNION of LEFT and RIGHT).
- **CROSS JOIN:** Cartesian product (m × n rows).
- **SELF JOIN:** table joined to itself (employee–manager).

**Q8. WHERE vs HAVING?** WHERE filters rows **before** grouping; HAVING filters groups **after** GROUP BY (can use aggregates).

**Q9. Query execution order?** FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → TOP/LIMIT.

**Q10. Index?** Speeds up reads, slows writes, uses extra space.
- **Clustered:** sorts the actual table data; only **one** per table (usually the primary key).
- **Non-clustered:** separate structure pointing to rows; many per table.

**Q11. View, stored procedure, function, trigger?**
- **View:** saved SELECT, a virtual table; used for security and simplicity.
- **Stored procedure:** precompiled SQL block; can have IN/OUT parameters, can modify data, can use transactions.
- **Function:** must return a value, can be used inside SELECT, cannot modify data (in SQL Server).
- **Trigger:** runs automatically on INSERT/UPDATE/DELETE.

**Q12. UNION vs UNION ALL?** UNION removes duplicates (slower); UNION ALL keeps all rows.

**Q13. CHAR vs VARCHAR vs NVARCHAR?** CHAR = fixed length. VARCHAR = variable length. NVARCHAR = variable length Unicode (needed for **Bangla text**). Oracle uses VARCHAR2 / NVARCHAR2.

**Q14. Differences between the three databases (syntax):**

| Task | MS SQL Server | MySQL | Oracle |
|---|---|---|---|
| Top N rows | `SELECT TOP 5 ...` | `... LIMIT 5` | `... FETCH FIRST 5 ROWS ONLY` (12c+) or `ROWNUM <= 5` |
| Auto increment | `IDENTITY(1,1)` | `AUTO_INCREMENT` | `GENERATED AS IDENTITY` or SEQUENCE |
| Current date | `GETDATE()` | `NOW()` | `SYSDATE` |
| Null replace | `ISNULL(x, 0)` | `IFNULL(x, 0)` | `NVL(x, 0)` |
| String concat | `+` or `CONCAT()` | `CONCAT()` | `||` or `CONCAT()` |
| Procedural language | T-SQL | SQL/PSM | PL/SQL |

### 6.2 Sample Schema (use for practice)
```sql
CREATE TABLE Department (
    DeptId   INT PRIMARY KEY,
    DeptName VARCHAR(50) NOT NULL
);

CREATE TABLE Employee (
    EmpId     INT PRIMARY KEY,
    Name      VARCHAR(100) NOT NULL,
    Salary    DECIMAL(10,2) CHECK (Salary > 0),
    DeptId    INT,
    ManagerId INT NULL,
    JoinDate  DATE,
    Email     VARCHAR(100) UNIQUE,
    FOREIGN KEY (DeptId) REFERENCES Department(DeptId)
);
```

### 6.3 Query Questions (write these by hand)

**1. Second highest salary**
```sql
SELECT MAX(Salary) AS SecondHighest
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);
```

**2. Nth highest salary (N = 3), works in all three DBs**
```sql
SELECT DISTINCT Salary
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk
      FROM Employee) t
WHERE rnk = 3;
```
MySQL alternative: `SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT 1 OFFSET 2;`

**3. Employees with department name (INNER JOIN)**
```sql
SELECT e.Name, d.DeptName
FROM Employee e
INNER JOIN Department d ON e.DeptId = d.DeptId;
```

**4. Departments with no employees (LEFT JOIN)**
```sql
SELECT d.DeptName
FROM Department d
LEFT JOIN Employee e ON d.DeptId = e.DeptId
WHERE e.EmpId IS NULL;
```

**5. Employee name with manager name (SELF JOIN)**
```sql
SELECT e.Name AS Employee, m.Name AS Manager
FROM Employee e
LEFT JOIN Employee m ON e.ManagerId = m.EmpId;
```

**6. Count employees and average salary per department, only departments with more than 5 employees**
```sql
SELECT d.DeptName, COUNT(*) AS Total, AVG(e.Salary) AS AvgSalary
FROM Employee e
JOIN Department d ON e.DeptId = d.DeptId
GROUP BY d.DeptName
HAVING COUNT(*) > 5
ORDER BY AvgSalary DESC;
```

**7. Highest-paid employee in each department**
```sql
SELECT Name, DeptId, Salary
FROM (SELECT Name, DeptId, Salary,
             RANK() OVER (PARTITION BY DeptId ORDER BY Salary DESC) AS rnk
      FROM Employee) t
WHERE rnk = 1;
```

**8. Employees earning more than the average salary**
```sql
SELECT Name, Salary FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee);
```

**9. Find duplicate emails**
```sql
SELECT Email, COUNT(*) AS Cnt
FROM Employee
GROUP BY Email
HAVING COUNT(*) > 1;
```

**10. Delete duplicate rows, keep the lowest id (SQL Server)**
```sql
WITH cte AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY EmpId) AS rn
    FROM Employee
)
DELETE FROM cte WHERE rn > 1;
```

**11. Names starting with 'A', joined in 2025**
```sql
SELECT * FROM Employee
WHERE Name LIKE 'A%'
  AND JoinDate BETWEEN '2025-01-01' AND '2025-12-31';
```
Wildcards: `%` = any number of characters, `_` = exactly one character.

**12. Increase salary by 10% for department 3**
```sql
UPDATE Employee SET Salary = Salary * 1.10 WHERE DeptId = 3;
```

**13. Add a column, create index, create view**
```sql
ALTER TABLE Employee ADD Phone VARCHAR(20);
CREATE INDEX IX_Employee_DeptId ON Employee(DeptId);
CREATE VIEW vw_EmpDept AS
SELECT e.Name, d.DeptName FROM Employee e JOIN Department d ON e.DeptId = d.DeptId;
```

**14. Stored procedure (SQL Server)**
```sql
CREATE PROCEDURE GetEmployeesByDept @DeptId INT
AS
BEGIN
    SELECT EmpId, Name, Salary FROM Employee WHERE DeptId = @DeptId;
END;
-- EXEC GetEmployeesByDept @DeptId = 2;
```

**15. ROW_NUMBER vs RANK vs DENSE_RANK** (salaries 500, 400, 400, 300)

| Salary | ROW_NUMBER | RANK | DENSE_RANK |
|---|---|---|---|
| 500 | 1 | 1 | 1 |
| 400 | 2 | 2 | 2 |
| 400 | 3 | 2 | 2 |
| 300 | 4 | **4** | **3** |

---

## 7. NoSQL and MongoDB

**Q1. SQL vs NoSQL?**

| SQL (Relational) | NoSQL |
|---|---|
| Fixed schema, tables | Flexible schema |
| Vertical scaling mostly | Horizontal scaling (sharding) |
| ACID focus | Often BASE / eventual consistency (MongoDB supports multi-document ACID transactions since 4.0) |
| Joins | Embedded documents, denormalized |
| MS SQL, MySQL, Oracle | MongoDB, Redis, Cassandra, Neo4j |

**Q2. Types of NoSQL databases?**
Document (MongoDB), Key-Value (Redis), Column-family (Cassandra, HBase), Graph (Neo4j).

**Q3. CAP theorem?** A distributed system can guarantee only **two of three** during a network partition: **C**onsistency, **A**vailability, **P**artition tolerance. Since partitions happen, the real choice is CP or AP.

**Q4. MongoDB terms:** Database → **Collection** (= table) → **Document** (= row, stored as BSON/JSON) → **Field** (= column). Every document has a unique `_id` (ObjectId by default).

**Q5. MongoDB CRUD**
```javascript
db.units.insertOne({ name: "A Coy", type: "Infantry", strength: 120, location: { x: 45, y: 21 } })
db.units.insertMany([{ name: "B Sqn", type: "Armour", strength: 14 }])

db.units.find({ type: "Infantry", strength: { $gt: 100 } })      // WHERE type='Infantry' AND strength>100
db.units.find({}, { name: 1, _id: 0 }).sort({ strength: -1 }).limit(5)

db.units.updateOne({ name: "A Coy" }, { $set: { strength: 110 } })
db.units.deleteOne({ name: "B Sqn" })

db.units.aggregate([
  { $match: { strength: { $gt: 10 } } },
  { $group: { _id: "$type", total: { $sum: "$strength" }, count: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

db.units.createIndex({ type: 1 })
```
Operators: `$eq $ne $gt $gte $lt $lte $in $and $or $set $inc $push $unset`. Aggregation stages: `$match $group $project $sort $limit $lookup` (join).

**Q6. Embedding vs referencing?** Embed when data is read together and is small (one-to-few). Reference when data is large, shared, or grows without limit (one-to-many/many-to-many).

**Q7. Sharding vs replication?** Sharding splits data across servers (scaling). Replication copies data to multiple servers (high availability). MongoDB replica set = 1 primary + secondaries.

**Q8. C# with MongoDB**
```csharp
var client = new MongoClient("mongodb://localhost:27017");
var col = client.GetDatabase("wargame").GetCollection<Unit>("units");
var infantry = await col.Find(u => u.Type == "Infantry").ToListAsync();
```

---

## 8. Software Engineering, Design Patterns, UML

**Q1. SDLC phases?** Requirement analysis → System analysis/feasibility → Design → Implementation (coding) → Testing → Deployment → Maintenance.

**Q2. SDLC models?**
- **Waterfall:** linear, each phase finishes before the next. Good when requirements are fixed (common in defence projects with strict specs).
- **V-Model:** each development phase has a matching test phase.
- **Spiral:** iterative + risk analysis each cycle. Good for large, high-risk systems.
- **Incremental / Iterative:** build in parts.
- **Agile (Scrum):** short sprints (1–4 weeks), working software each sprint, customer feedback. Roles: Product Owner, Scrum Master, Development Team. Artifacts: Product Backlog, Sprint Backlog, Increment. Events: Sprint Planning, Daily Scrum, Sprint Review, Retrospective.
- **Prototype model:** build a quick prototype to clarify requirements — useful for war game UI.

**Q3. Functional vs non-functional requirements?**
Functional = what the system does (e.g., "move a unit", "calculate casualties"). Non-functional = quality (performance, security, reliability, usability, scalability).

**Q4. Feasibility study types?** Technical, economic, operational, schedule, legal.

**Q5. Cohesion and coupling?** Aim for **high cohesion** (a module does one focused job) and **low coupling** (modules depend little on each other).

**Q6. Testing levels and types?**
- Levels: Unit → Integration → System → Acceptance (UAT).
- **Black box:** test behaviour without knowing code (equivalence partitioning, boundary value analysis).
- **White box:** test using code knowledge (statement/branch coverage).
- **Regression:** re-test after changes. **Smoke:** basic build check. **Load/Stress:** performance.
- **Verification** = "Are we building the product right?" **Validation** = "Are we building the right product?"
- C# unit test frameworks: xUnit, NUnit, MSTest.

**Q7. Design patterns (Gang of Four) categories:**
- **Creational:** Singleton, Factory Method, Abstract Factory, Builder, Prototype.
- **Structural:** Adapter, Decorator, Facade, Proxy, Composite, Bridge, Flyweight.
- **Behavioral:** Observer, Strategy, Command, State, Iterator, Template Method, Mediator.

**Factory example:**
```csharp
public interface IUnit { string Describe(); }
public class InfantryUnit : IUnit { public string Describe() => "Infantry"; }
public class ArmourUnit   : IUnit { public string Describe() => "Armour"; }

public static class UnitFactory
{
    public static IUnit Create(string type) => type switch
    {
        "INF" => new InfantryUnit(),
        "ARM" => new ArmourUnit(),
        _     => throw new ArgumentException("Unknown type")
    };
}
```

**Observer** = one subject notifies many observers (C# events, see §5 Q1). Example: when an enemy unit moves, all map views and AI modules are notified.

**Strategy** = swap algorithms at run time (e.g., different combat-resolution rules).

**Command** = wrap an action as an object; supports undo/replay (useful for replaying a war game turn).

**State** = object changes behaviour when its state changes (unit: Idle → Moving → Engaged → Destroyed).

**Repository pattern** = abstracts data access so business logic does not depend on the DB.

**Q8. Architectural patterns?** MVC, MVVM (WPF), Layered / N-tier (Presentation → Business → Data), Client–Server, Microservices, Event-driven.

**Q9. UML diagrams?**
- **Structural:** Class, Object, Component, Deployment, Package.
- **Behavioral:** Use Case, Activity, Sequence, State Machine, Communication.
Class diagram relations: association (line), inheritance (hollow triangle), aggregation (hollow diamond), composition (filled diamond), dependency (dashed arrow).

**Q10. DFD and ER diagram?**
- **DFD:** shows data flow: external entity (rectangle), process (circle), data store (open rectangle), data flow (arrow). Level 0 = context diagram.
- **ER diagram:** entity (rectangle), attribute (ellipse), relationship (diamond). Cardinality: 1:1, 1:N, M:N (M:N needs a junction table).

**Q11. Version control (Git)?** `git clone, add, commit, push, pull, branch, merge, rebase`. Merge conflict = same lines changed in two branches.

---

## 9. War Game and Simulation Concepts (job-specific)

The circular says: *"Analysis, design and development of War Game Simulation Systems as part of the development team, based on design and project requirements."* Expect 1–2 conceptual questions here.

**Q1. What is a war game?**
A war game is a simulation of a military operation, used for training commanders, testing plans and analyzing courses of action without real combat. It models forces, terrain, weather, logistics, and the rules of engagement.

**Q2. Types of war games / simulations?**
- **Live:** real people, real equipment (field exercise).
- **Virtual:** real people operating simulated systems (tank/flight simulator).
- **Constructive:** simulated people and systems; humans give orders, the computer resolves outcomes (computer-assisted war game, staff exercise).
- **LVC:** Live–Virtual–Constructive combined.
- By method: **Manual** (map, board, umpires) vs **Computer-assisted**.
- By sides: **One-sided, two-sided (Blue vs Red), multi-sided**.
- By level: Tactical, Operational, Strategic.

**Q3. Common war game terms:**
- **Blue force** = own force; **Red force** = enemy/opposing force (OPFOR).
- **White cell / Control cell** = umpires/controllers who run the game.
- **ORBAT** = Order of Battle (force structure).
- **COA** = Course of Action. **AAR** = After Action Review.
- **Fog of war** = each side sees only what its sensors/recce detect.
- **Combat power, attrition, casualties, logistics (fuel, ammunition)**.

**Q4. Discrete-event vs continuous vs time-stepped simulation?**
- **Time-stepped:** clock advances by fixed steps (e.g., every 1 second / 1 turn); all entities update each step. Simple, typical in games.
- **Discrete-event (DES):** clock jumps to the next scheduled event (priority queue ordered by time). Efficient when events are sparse.
- **Continuous:** state changes continuously (differential equations).

```csharp
// Simple time-stepped game loop
while (simulation.IsRunning)
{
    double dt = 1.0;                  // 1 time unit per step
    foreach (var unit in units)
    {
        unit.Move(dt);
        unit.DetectEnemies(units);
        unit.Engage(dt);
    }
    simulation.Clock += dt;
    simulation.CheckEndConditions();
}
```

```csharp
// Discrete-event simulation core
var events = new PriorityQueue<SimEvent, double>();    // ordered by event time
events.Enqueue(new SimEvent("Arrive", unitA), 5.0);
while (events.TryDequeue(out var ev, out double time))
{
    clock = time;
    ev.Execute(events);                // an event can schedule new events
}
```

**Q5. Deterministic vs stochastic simulation?**
Deterministic = same input always gives the same output. Stochastic = uses random numbers (hit probability, detection). **Monte Carlo method** = run a stochastic simulation many times and analyze the distribution of results (e.g., win probability of a COA).
```csharp
var rng = new Random(42);              // fixed seed = reproducible run
bool hit = rng.NextDouble() < 0.65;    // 65% hit probability
```
A fixed **seed** makes runs repeatable, which helps debugging and AAR replay.

**Q6. Lanchester's laws (combat attrition models)?**
- **Linear law** (ancient, one-to-one combat): strength proportional to number of troops.
- **Square law** (modern aimed fire): with A and B troops and effectiveness α, β:
  dA/dt = −β·B, dB/dt = −α·A.
  Fighting strength is proportional to **effectiveness × (number)²**. Side A wins if α·A² > β·B².
  Meaning: doubling troop numbers gives 4× fighting strength — this is why concentration of force matters.
```csharp
// Lanchester square law, time-stepped
double A = 1000, B = 800, alpha = 0.01, beta = 0.012, dt = 0.1;
while (A > 0 && B > 0)
{
    double dA = -beta * B * dt, dB = -alpha * A * dt;
    A += dA; B += dB;
}
Console.WriteLine(A > 0 ? $"Blue wins, {A:F0} left" : $"Red wins, {B:F0} left");
```

**Q7. Terrain modelling?** Grid / hex map (hexagons give equal distance to all six neighbours, standard in war games), DEM (Digital Elevation Model) for height, **line of sight (LOS)** calculation, movement cost by terrain type (road, forest, river, marsh). GIS formats: shapefile, GeoTIFF. Coordinates: lat/long, UTM, military grid reference (MGRS).

**Q8. Pathfinding for unit movement?** A\* on a grid/hex map, where edge cost = terrain movement cost. Heuristic = distance to target.

**Q9. Architecture of a computer war game system (good essay answer):**
1. **Presentation layer:** map display (2D/3D GIS), unit symbols (NATO APP-6 / MIL-STD-2525), dashboards for Blue, Red and White cells.
2. **Simulation engine:** clock, event scheduler, movement, detection, combat resolution, logistics models.
3. **Data layer:** ORBAT, weapon/equipment database, terrain, scenario files, results/logs (SQL for structured data, NoSQL for event logs).
4. **Communication layer:** client–server, multiplayer over LAN, message passing; standards like **HLA** (High Level Architecture) and **DIS** (Distributed Interactive Simulation) for linking simulators.
5. **AAR module:** record every event to replay and analyze the exercise.
6. **Security:** role-based access, isolated network, audit logs (classified data).

**Q10. How would you analyze requirements for a new war game module?**
Meet stakeholders (instructors, staff officers) → document use cases (e.g., "Commander issues move order") → define entities (Unit, Weapon, Terrain, Order, Event) and rules → define non-functional needs (number of units, real-time speed, security) → prototype UI → iterative development with user feedback → verify and **validate the model against real data / expert judgment (VV&A: Verification, Validation and Accreditation)**.

**Q11. Sample class design for a war game:**
```csharp
public enum Side { Blue, Red }
public enum UnitState { Idle, Moving, Engaged, Destroyed }

public class Position { public double X { get; set; } public double Y { get; set; } }

public class Weapon
{
    public string Name { get; set; }
    public double Range { get; set; }
    public double HitProbability { get; set; }
    public int Damage { get; set; }
}

public class MilitaryUnit
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Side Side { get; set; }
    public int Strength { get; set; }
    public Position Location { get; set; }
    public UnitState State { get; set; } = UnitState.Idle;
    public List<Weapon> Weapons { get; } = new();

    public double DistanceTo(MilitaryUnit other) =>
        Math.Sqrt(Math.Pow(Location.X - other.Location.X, 2) + Math.Pow(Location.Y - other.Location.Y, 2));

    public void Fire(MilitaryUnit target, Random rng)
    {
        foreach (var w in Weapons)
        {
            if (DistanceTo(target) <= w.Range && rng.NextDouble() < w.HitProbability)
            {
                target.Strength = Math.Max(0, target.Strength - w.Damage);
                if (target.Strength == 0) target.State = UnitState.Destroyed;
            }
        }
    }
}
```

---

## 10. Operating System, Networking, General CSE

**Operating Systems**
- **Process vs thread:** a process has its own memory space; threads share the memory of their process and are lighter.
- **Deadlock conditions (Coffman):** mutual exclusion, hold and wait, no preemption, circular wait. Prevent by breaking any one. Banker's algorithm = deadlock avoidance.
- **CPU scheduling:** FCFS, SJF, Priority, Round Robin (time quantum), Multilevel queue.
- **Semaphore vs mutex:** a mutex is a lock owned by one thread; a semaphore is a counter allowing N threads.
- **Paging:** memory split into fixed-size pages/frames; **page fault** when a page is not in RAM. Page replacement: FIFO, LRU, Optimal. **Thrashing** = too much paging.
- **Virtual memory:** uses disk to extend RAM.

**Networking**
- **OSI 7 layers:** Physical, Data Link, Network, Transport, Session, Presentation, Application ("Please Do Not Throw Sausage Pizza Away").
- **TCP/IP 4 layers:** Network Access, Internet, Transport, Application.
- **TCP vs UDP:** TCP is connection-oriented, reliable, ordered (HTTP, FTP, SSH). UDP is connectionless, fast, no guarantee (DNS, video streaming, real-time simulation/game updates).
- **Ports:** HTTP 80, HTTPS 443, FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, POP3 110, IMAP 143, RDP 3389, MS SQL 1433, MySQL 3306, Oracle 1521, MongoDB 27017.
- **IPv4** = 32 bit, **IPv6** = 128 bit. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.
- **Devices:** Hub (layer 1), Switch (layer 2, MAC), Router (layer 3, IP).
- **DNS** translates domain names to IP. **DHCP** assigns IP automatically.

**Security basics**
- Symmetric encryption (AES; same key) vs asymmetric (RSA; public/private key). Hashing (SHA-256) is one-way — store passwords as salted hashes (bcrypt/PBKDF2).
- Common attacks: SQL injection, XSS, CSRF, phishing, DoS. Firewall filters traffic.
- CIA triad: Confidentiality, Integrity, Availability.

**Number systems** (often asked)
- (25)₁₀ = (11001)₂ = (31)₈ = (19)₁₆
- (1010 1111)₂ = (AF)₁₆ = (175)₁₀
- 2's complement of 0101 = 1011.
- 1 KB = 1024 bytes, 1 byte = 8 bits.

---

## 11. MCQ Practice Set (answers at the end)

1. Which of these is a value type in C#? (a) string (b) class (c) struct (d) array
2. Which keyword prevents a class from being inherited? (a) static (b) sealed (c) abstract (d) private
3. Default access modifier of a class member in C#? (a) public (b) internal (c) private (d) protected
4. Which is used for run-time polymorphism? (a) overloading (b) overriding (c) constructor (d) static method
5. Which collection stores key–value pairs? (a) List (b) Queue (c) Dictionary (d) Stack
6. The JIT compiler converts: (a) C# to IL (b) IL to native code (c) native to IL (d) C# to native
7. A C# class can inherit from how many classes? (a) 0 (b) 1 (c) 2 (d) unlimited
8. `out` parameter must be: (a) initialized before call (b) assigned inside method (c) read-only (d) a value type
9. Which interface supports the `using` statement? (a) IEnumerable (b) IComparable (c) IDisposable (d) ICloneable
10. DI lifetime with one instance per HTTP request: (a) Transient (b) Scoped (c) Singleton (d) Static
11. Worst-case time of quick sort: (a) O(n) (b) O(n log n) (c) O(n²) (d) O(log n)
12. Binary search requires: (a) linked list (b) sorted data (c) hash table (d) stack
13. Data structure used in BFS: (a) stack (b) queue (c) heap (d) tree
14. Which SQL command is DDL? (a) INSERT (b) UPDATE (c) ALTER (d) GRANT
15. Filtering groups after aggregation uses: (a) WHERE (b) HAVING (c) ORDER BY (d) GROUP BY
16. How many clustered indexes can a table have? (a) 1 (b) 2 (c) 249 (d) unlimited
17. Removing transitive dependency gives: (a) 1NF (b) 2NF (c) 3NF (d) BCNF
18. In MongoDB, a "collection" is similar to a: (a) row (b) column (c) table (d) database
19. Default port of MongoDB: (a) 1433 (b) 3306 (c) 27017 (d) 1521
20. "A" in ACID stands for: (a) Availability (b) Atomicity (c) Accuracy (d) Authority
21. Oracle function to replace NULL: (a) ISNULL (b) IFNULL (c) NVL (d) COALESCE only
22. Which design pattern ensures only one instance? (a) Factory (b) Observer (c) Singleton (d) Adapter
23. Which SDLC model emphasizes risk analysis? (a) Waterfall (b) Spiral (c) V-model (d) Big Bang
24. Testing without knowledge of internal code: (a) white box (b) black box (c) unit (d) glass box
25. Lanchester square law: fighting strength is proportional to: (a) N (b) N² (c) √N (d) log N
26. Simulation where the clock jumps to the next event: (a) time-stepped (b) discrete-event (c) continuous (d) real-time
27. Simulators operated by real people (e.g., tank simulator) are: (a) live (b) virtual (c) constructive (d) manual
28. Transport-layer protocol used for fast real-time updates: (a) TCP (b) UDP (c) HTTP (d) FTP
29. Which is NOT a deadlock condition? (a) mutual exclusion (b) circular wait (c) preemption (d) hold and wait
30. Output of `Console.WriteLine(7 / 2);` (a) 3.5 (b) 3 (c) 4 (d) error

**Answers:** 1-c, 2-b, 3-c, 4-b, 5-c, 6-b, 7-b, 8-b, 9-c, 10-b, 11-c, 12-b, 13-b, 14-c, 15-b, 16-a, 17-c, 18-c, 19-c, 20-b, 21-c, 22-c, 23-b, 24-b, 25-b, 26-b, 27-b, 28-b, 29-c (the condition is **no** preemption), 30-b

---

## 12. General Knowledge, English, Math (possible small section)

### Bangladesh and Armed Forces GK (stable facts)
- Independence declared: **26 March 1971**. Victory Day: **16 December 1971**.
- Liberation War was divided into **11 sectors**.
- Commander-in-Chief of the Liberation Forces: **General M. A. G. Osmani**.
- **Armed Forces Day: 21 November** (joint operation of Army, Navy and Air Force in 1971).
- **7 Bir Sreshtho:** Captain Mohiuddin Jahangir, Sepoy Hamidur Rahman, Sepoy Mostafa Kamal, ERA Mohammad Ruhul Amin, Flight Lt Matiur Rahman, Lance Naik Munshi Abdur Rouf, Lance Naik Nur Mohammad Sheikh.
- Gallantry awards (high to low): Bir Sreshtho, Bir Uttom, Bir Bikrom, Bir Protik.
- **Bangladesh Military Academy (BMA):** Bhatiary, Chattogram. **National Defence College (NDC)** and **Defence Services Command and Staff College (DSCSC):** Mirpur, Dhaka.
- Bangladesh is one of the **top contributors to UN peacekeeping** missions.
- Army motto: **"সমরে আমরা শান্তিতে আমরা, সর্বত্র আমরা দেশের তরে"** (In war, in peace, we are everywhere for our country).
- The President is the Supreme Commander of the Armed Forces.

> Check current office holders (Chief of Army Staff, ministers, etc.) in the latest news before the exam; they change.

### English (likely: translation, correction, a short paragraph)
- Practice translating 3–4 Bangla sentences about technology to English.
- Common corrections: "He is senior **to** me" (not "than"); "one of the best **programmers**" (plural); "I look forward to **meeting** you"; "Each of the students **has**"; "Neither of them **is**".
- Be ready to write a short paragraph: *"Role of ICT in the modern military"* or *"Why I want to join AWGC"*. Mention: training without risk, cost saving, data-driven decisions, cyber security, simulation.

### Math / Aptitude
- Percentage: 40,000 increased by 15% = 46,000.
- Speed: 60 km/h for 2.5 h = 150 km.
- Average of 10, 20, 30, 40 = 25.
- Simple interest: SI = P × R × T / 100.
- Series: 2, 6, 12, 20, 30, **42** (differences 4, 6, 8, 10, 12).
- Probability of two heads in two coin tosses = 1/4.

---

## 13. Exam-Hall Strategy

1. Read the whole paper first (2–3 min). Mark questions you know well.
2. Answer easy ones first to secure marks. Divide time by marks.
3. For code questions: write clean, indented code, meaningful names, a 1-line comment, and the time complexity. Even if not perfect, logic earns partial marks.
4. For theory: definition → difference table → small example. Tables score well.
5. For SQL: write keywords in CAPITALS, align clauses.
6. For essay/design questions (war game): use headings — Requirements, Architecture (layers), Data model, Algorithms, Security, Testing.
7. Never leave a question blank. Write what you know.
8. Keep the last 10 minutes to check answers, roll number and question numbers.

**Viva follow-up (if shortlisted):** be ready to explain your final-year project and current job projects (what you built, which technology, your role, a problem you solved). Know your CV fully.

Good luck!
