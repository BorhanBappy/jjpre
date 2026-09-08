# C# Access Modifiers — Master Guide

> A complete guide to understanding `public`, `private`, `protected`, `internal`, `protected internal`, and `private protected` in C#.

---

## 📚 Table of Contents

1. [What Are Access Modifiers?](#1-what-are-access-modifiers)
2. [Why Do We Need Access Modifiers?](#2-why-do-we-need-access-modifiers)
3. [The Six Access Modifiers](#3-the-six-access-modifiers)
4. [`public`](#4-public)
5. [`private`](#5-private)
6. [`protected`](#6-protected)
7. [`internal`](#7-internal)
8. [`protected internal`](#8-protected-internal)
9. [`private protected`](#9-private-protected)
10. [Access Modifier Comparison](#10-access-modifier-comparison)
11. [Access Modifiers and Classes](#11-access-modifiers-and-classes)
12. [Access Modifiers and Methods](#12-access-modifiers-and-methods)
13. [Access Modifiers and Fields](#13-access-modifiers-and-fields)
14. [Access Modifiers and Properties](#14-access-modifiers-and-properties)
15. [Access Modifiers and Constructors](#15-access-modifiers-and-constructors)
16. [Access Modifiers and Inheritance](#16-access-modifiers-and-inheritance)
17. [Encapsulation](#17-encapsulation)
18. [Real-World Example](#18-real-world-example)
19. [Common Mistakes](#19-common-mistakes)
20. [Interview Questions](#20-interview-questions)
21. [Quick Revision](#21-quick-revision)
22. [Master-Level Mental Model](#22-master-level-mental-model)

---

# 1. What Are Access Modifiers?

Access modifiers are C# keywords that control the **accessibility and visibility** of types and their members.

They determine **who is allowed to access a particular class, method, field, property, constructor, etc.**

For example:

```csharp
public class Student
{
    public string Name;
    private int age;
}
```

Here:

```csharp
public string Name;
```

can be accessed from outside the class.

But:

```csharp
private int age;
```

can only be accessed inside `Student`.

Therefore:

> Access modifiers are a mechanism for controlling access to parts of a C# program.

---

# 2. Why Do We Need Access Modifiers?

Access modifiers are important because they provide:

- Encapsulation
- Data protection
- Controlled access
- Better code organization
- Reduced coupling
- Better API design
- Security boundaries
- Maintainability

Consider this bad design:

```csharp
class BankAccount
{
    public double balance;
}
```

Anyone can do:

```csharp
account.balance = -50000;
```

That is dangerous.

A better design is:

```csharp
class BankAccount
{
    private double balance;

    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
        }
    }

    public double GetBalance()
    {
        return balance;
    }
}
```

Now outside code cannot directly manipulate `balance`.

This is the basic idea behind:

> **Encapsulation = Hide internal data and expose controlled operations.**

---

# 3. The Six Access Modifiers

C# provides six main accessibility levels:

```text
1. public
2. private
3. protected
4. internal
5. protected internal
6. private protected
```

The four most important for beginners are:

```text
public
private
protected
internal
```

---

# 4. `public`

## Definition

`public` means the member is accessible from anywhere that can access the containing type.

Example:

```csharp
public class Student
{
    public string Name = "Rahim";

    public void Display()
    {
        Console.WriteLine(Name);
    }
}
```

Usage:

```csharp
Student student = new Student();

Console.WriteLine(student.Name);
student.Display();
```

Both operations are allowed.

---

## When should you use `public`?

Use `public` when something is intentionally part of the external API of your class.

For example:

```csharp
public void Deposit(decimal amount)
{
}
```

A consumer of your class should be able to call it.

---

# 5. `private`

## Definition

`private` means the member is accessible only within the containing type.

Example:

```csharp
class Student
{
    private int age = 20;

    public void DisplayAge()
    {
        Console.WriteLine(age);
    }
}
```

This works:

```csharp
Student student = new Student();

student.DisplayAge();
```

But this does not:

```csharp
Console.WriteLine(student.age);
```

because `age` is private.

---

## Why use `private`?

Private members are useful for implementation details.

Example:

```csharp
class Calculator
{
    private int AddNumbers(int a, int b)
    {
        return a + b;
    }

    public int Calculate(int x, int y)
    {
        return AddNumbers(x, y);
    }
}
```

The user only needs:

```csharp
calculator.Calculate(10, 20);
```

They don't need to know how the calculation is internally implemented.

---

# 6. `protected`

## Definition

`protected` allows access from:

1. The containing class
2. Derived classes

Example:

```csharp
class Animal
{
    protected string name = "Animal";

    protected void MakeSound()
    {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal
{
    public void Display()
    {
        Console.WriteLine(name);
        MakeSound();
    }
}
```

Usage:

```csharp
Dog dog = new Dog();

dog.Display();
```

Output:

```text
Animal
Animal sound
```

---

## Why can `Dog` access `name`?

Because:

```csharp
class Dog : Animal
```

means `Dog` derives from `Animal`.

Therefore:

```text
Animal
   ↑
   |
  Dog
```

`Dog` has access to the protected members inherited from `Animal`.

---

## Important

This is not allowed:

```csharp
Dog dog = new Dog();

Console.WriteLine(dog.name);
```

`protected` does **not** mean public.

It means:

```text
Containing class + derived classes
```

---

# 7. `internal`

## Definition

`internal` allows access from anywhere within the **same assembly**.

An assembly is generally the compiled output of a project, such as a `.dll` or `.exe`.

Example:

```csharp
internal class Student
{
    internal string Name = "Rahim";

    internal void Display()
    {
        Console.WriteLine(Name);
    }
}
```

Another class in the same assembly can access it:

```csharp
class Program
{
    static void Main()
    {
        Student student = new Student();

        Console.WriteLine(student.Name);
        student.Display();
    }
}
```

---

## Why use `internal`?

Suppose you are building a library.

You might have:

```text
MyLibrary
│
├── Public API
├── Internal Services
├── Internal Helpers
└── Internal Implementation
```

You may want other projects to use your public API but not your internal implementation.

That's where `internal` becomes useful.

---

# 8. `protected internal`

This modifier combines two accessibility rules:

```text
protected OR internal
```

A `protected internal` member is accessible when either:

1. The caller is in the same assembly, OR
2. The caller is in a derived class

Example:

```csharp
class Parent
{
    protected internal int number = 100;
}
```

A class in the same assembly can access it.

A derived class can also access it.

---

## Important Concept

Do NOT think:

```text
protected internal = more restrictive than protected
```

It is actually broader than either `protected` or `internal` alone.

Think:

```text
protected internal

        OR

Same Assembly
      ||
Derived Class
```

---

# 9. `private protected`

`private protected` is more restrictive.

It means:

> Accessible inside the containing class or by derived classes that are in the same assembly.

Example:

```csharp
class Parent
{
    private protected int number = 100;
}

class Child : Parent
{
    public void Display()
    {
        Console.WriteLine(number);
    }
}
```

This works because `Child`:

- derives from `Parent`
- belongs to the same assembly

A derived class in another assembly cannot access that member.

---

# 10. Access Modifier Comparison

## Master Table

| Modifier | Same Class | Derived Class | Same Assembly | Other Assembly |
|---|---:|---:|---:|---:|
| `public` | ✅ | ✅ | ✅ | ✅ |
| `private` | ✅ | ❌ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ❌* | ❌* |
| `internal` | ✅ | ✅ | ✅ | ❌ |
| `protected internal` | ✅ | ✅ | ✅ | ✅* |
| `private protected` | ✅ | ✅ | ✅ | ❌ |

`*` depends on the exact access context.

The key idea is:

```text
public
    ↓
Almost everywhere

private
    ↓
Containing type only

protected
    ↓
Containing type + derived types

internal
    ↓
Same assembly

protected internal
    ↓
Same assembly OR derived type

private protected
    ↓
Same assembly + derived type
```

---

# 11. Access Modifiers and Classes

Access modifiers can be applied to classes.

Example:

```csharp
public class PublicClass
{
}

internal class InternalClass
{
}
```

A top-level class can generally be:

```text
public
internal
```

A nested class can have more accessibility options.

Example:

```csharp
public class Outer
{
    private class Inner
    {
    }
}
```

Here `Inner` is accessible only within `Outer`.

---

# 12. Access Modifiers and Methods

Methods can use access modifiers.

```csharp
class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    private int Subtract(int a, int b)
    {
        return a - b;
    }
}
```

Outside code can call:

```csharp
calculator.Add(10, 5);
```

But cannot call:

```csharp
calculator.Subtract(10, 5);
```

because `Subtract()` is private.

---

# 13. Access Modifiers and Fields

Fields can also have access modifiers.

```csharp
class Student
{
    public string name;
    private int age;
    protected string school;
    internal string address;
}
```

However, exposing fields publicly is generally discouraged.

Prefer properties:

```csharp
public string Name { get; set; }
```

instead of:

```csharp
public string name;
```

---

# 14. Access Modifiers and Properties

Properties are commonly used to provide controlled access to data.

Example:

```csharp
class Student
{
    public string Name { get; set; }

    public int Age { get; private set; }

    public void SetAge(int age)
    {
        if (age >= 0)
        {
            Age = age;
        }
    }
}
```

Usage:

```csharp
Student student = new Student();

student.Name = "Rahim";

student.SetAge(20);

Console.WriteLine(student.Age);
```

But this is not allowed:

```csharp
student.Age = -10;
```

because the setter is private:

```csharp
public int Age { get; private set; }
```

---

## Very Important Pattern

This is extremely common in professional C#:

```csharp
public string Name { get; private set; }
```

It means:

```text
Anyone → Can read Name

Class itself → Can modify Name
```

This provides controlled mutation.

---

# 15. Access Modifiers and Constructors

Constructors can also have access modifiers.

## Public Constructor

```csharp
public class Student
{
    public Student()
    {
    }
}
```

Anyone who can access the class can create an object:

```csharp
Student student = new Student();
```

---

## Private Constructor

```csharp
class Singleton
{
    private Singleton()
    {
    }
}
```

External code cannot do:

```csharp
new Singleton();
```

Private constructors are commonly used in patterns such as Singleton implementations and classes that expose only static functionality.

---

# 16. Access Modifiers and Inheritance

Access modifiers are especially important when inheritance is involved.

Consider:

```csharp
class Parent
{
    public int A = 1;
    private int B = 2;
    protected int C = 3;
    internal int D = 4;
}
```

Now:

```csharp
class Child : Parent
{
    public void Display()
    {
        Console.WriteLine(A); // Allowed
        // Console.WriteLine(B); // Not allowed
        Console.WriteLine(C); // Allowed
        Console.WriteLine(D); // Allowed if same assembly
    }
}
```

The child class can access:

```text
public      ✅
private     ❌
protected   ✅
internal    ✅ same assembly
```

---

# 17. Encapsulation

Access modifiers are strongly connected to **encapsulation**.

Encapsulation means:

> Bundling data and behavior together while restricting direct access to internal implementation details.

Example:

```csharp
class BankAccount
{
    private decimal balance;

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            throw new ArgumentException("Amount must be positive.");
        }

        balance += amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}
```

The outside world does not directly control:

```csharp
balance
```

Instead, it must use:

```csharp
Deposit()
GetBalance()
```

This gives the class control over its state.

---

# 18. Real-World Example

Let's build a small banking example.

```csharp
public class BankAccount
{
    private decimal balance;

    public string AccountHolder { get; }

    public BankAccount(string accountHolder)
    {
        AccountHolder = accountHolder;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            throw new ArgumentException(
                "Deposit amount must be positive."
            );
        }

        balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0 || amount > balance)
        {
            return false;
        }

        balance -= amount;
        return true;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}
```

Usage:

```csharp
class Program
{
    static void Main()
    {
        BankAccount account =
            new BankAccount("Rahim");

        account.Deposit(5000);

        account.Withdraw(1000);

        Console.WriteLine(
            account.GetBalance()
        );
    }
}
```

Output:

```text
4000
```

Notice:

```csharp
private decimal balance;
```

The user cannot directly do:

```csharp
account.balance = -100000;
```

Instead, the class controls the balance.

This is a much better design.

---

# 19. Common Mistakes

## Mistake 1: Thinking protected means public

Wrong:

```text
protected = everyone can access
```

Correct:

```text
protected = containing class + derived classes
```

---

## Mistake 2: Thinking private means inaccessible everywhere

Wrong:

```text
private = nobody can access
```

Correct:

```text
private = only the containing type can access
```

The class itself can use its private members.

---

## Mistake 3: Confusing internal with private

`private`:

```text
Containing type only
```

`internal`:

```text
Entire assembly
```

Example:

```csharp
private int age;
```

Only the containing class can access it.

```csharp
internal int age;
```

Other classes in the same assembly can access it.

---

## Mistake 4: Making everything public

Avoid doing this:

```csharp
public class User
{
    public string name;
    public string password;
    public bool isAdmin;
}
```

It exposes too much implementation/state.

Prefer controlled access:

```csharp
public class User
{
    private string password;

    public string Name { get; set; }

    public void ChangePassword(string newPassword)
    {
        // validation
        password = newPassword;
    }
}
```

---

## Mistake 5: Confusing `protected internal`

Remember:

```text
protected internal
=
protected OR internal
```

Not:

```text
protected AND internal
```

---

## Mistake 6: Confusing `private protected`

Remember:

```text
private protected
=
protected + same assembly
```

It is narrower than `protected internal`.

---

# 20. Interview Questions

## Q1. What are access modifiers?

**Answer:**

Access modifiers are C# keywords that control the accessibility of classes and their members. They determine where a type or member can be accessed.

---

## Q2. What are the access modifiers in C#?

The six main accessibility keywords are:

```text
public
private
protected
internal
protected internal
private protected
```

---

## Q3. What is the difference between public and private?

`public` members can be accessed from outside the class.

`private` members can only be accessed within the containing type.

---

## Q4. What is the difference between private and protected?

```text
private
→ containing class only

protected
→ containing class + derived classes
```

---

## Q5. What is the difference between protected and internal?

`protected` is primarily inheritance-based.

```text
protected
→ containing type + derived types
```

`internal` is assembly-based.

```text
internal
→ same assembly
```

---

## Q6. What is `protected internal`?

It allows access when either condition is satisfied:

```text
same assembly
OR
derived class
```

---

## Q7. What is `private protected`?

It allows access to the containing type and derived types within the same assembly.

---

## Q8. Which access modifier provides the highest accessibility?

```text
public
```

---

## Q9. Which access modifier provides the most restrictive member accessibility?

For ordinary class members:

```text
private
```

`private protected` is also highly restrictive but has a different inheritance/assembly rule.

---

## Q10. Why should fields usually be private?

Private fields help maintain encapsulation and prevent external code from changing an object's internal state directly.

Example:

```csharp
private decimal balance;
```

Instead of:

```csharp
public decimal balance;
```

---

# 21. Quick Revision

## One-Line Definitions

```text
public
→ Accessible broadly, including from other assemblies.

private
→ Accessible only within the containing type.

protected
→ Accessible within the containing type and derived types.

internal
→ Accessible within the same assembly.

protected internal
→ Accessible within the same assembly OR through inheritance.

private protected
→ Accessible within the containing type or derived types in the same assembly.
```

---

## Memory Trick

Remember:

```text
PUBLIC
Everyone

PRIVATE
My class

PROTECTED
My class + Children

INTERNAL
My project

PROTECTED INTERNAL
My project OR Children

PRIVATE PROTECTED
My class + Children in my project
```

---

# 22. Master-Level Mental Model

The easiest way to understand access modifiers is to ask two questions:

### Question 1: Who is trying to access the member?

Possibilities:

```text
Same class?
Derived class?
Another class?
Another assembly?
```

### Question 2: What access modifier was used?

Then apply:

```text
public
    ↓
Almost everywhere

private
    ↓
Containing type only

protected
    ↓
Inheritance

internal
    ↓
Assembly boundary

protected internal
    ↓
Inheritance OR assembly

private protected
    ↓
Inheritance AND same assembly
```

---

# 🧠 Final Cheat Sheet

```text
                 ACCESS MODIFIERS
                        │
        ┌───────────────┼────────────────┐
        │               │                │
     public          private          protected
        │               │                │
   Everywhere      Same class       Class + Child
        │
        │
   ┌────┴─────────────────────┐
   │                          │
internal              protected internal
   │                          │
Same assembly          Same assembly OR
                       derived class
                              │
                              │
                       private protected
                              │
                       Same assembly +
                       derived class
```

---

# ⭐ Most Important Rules

### Rule 1

```csharp
private
```

means:

> "Only my containing type can access me."

### Rule 2

```csharp
protected
```

means:

> "My containing type and derived types can access me."

### Rule 3

```csharp
internal
```

means:

> "Code in my assembly can access me."

### Rule 4

```csharp
protected internal
```

means:

> "Same assembly OR derived type."

### Rule 5

```csharp
private protected
```

means:

> "Derived type, but only when it is in the same assembly."

### Rule 6

```csharp
public
```

means:

> "Make this part of the externally accessible API."

---

# 🎯 Recommended Default

When designing a C# class, don't automatically make everything public.

A good general approach is:

```csharp
public class BankAccount
{
    private decimal balance;

    public decimal Balance => balance;

    public void Deposit(decimal amount)
    {
        // Controlled operation
    }
}
```

Instead of:

```csharp
public class BankAccount
{
    public decimal balance;
}
```

The first design protects the object's internal state and gives the class control over how that state changes.

---

# 🚀 Final Summary

Access modifiers are fundamental to C# because they determine **what code can see and use**.

The core concepts are:

```text
public
    → Broad external access

private
    → Implementation hidden inside the type

protected
    → Access through inheritance

internal
    → Access within an assembly

protected internal
    → Assembly OR inheritance

private protected
    → Same assembly + inheritance
```

The most important principle is:

> **Expose only what other code needs and keep implementation details hidden whenever possible.**

This leads to better **encapsulation, maintainability, flexibility, and API design**.