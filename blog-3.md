The four pillars of OOP help organize code so large TypeScript projects stay easier to build, understand, and maintain.

---

# 1. Encapsulation

### “Keep related data and logic together”

Encapsulation means:

- putting properties and methods inside a class
- hiding internal details from the outside

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Here:

- `balance` cannot be changed directly
- users must use safe methods

### Why it helps

- prevents accidental changes
- protects important data
- makes debugging easier

---

# 2. Abstraction

### “Hide complexity and show only what matters”

Abstraction means exposing simple interfaces while hiding complicated logic.

```ts
class PaymentService {
  processPayment() {
    // complex payment logic hidden here
  }
}
```

Other developers only need:

```ts
payment.processPayment();
```

They don’t need to understand all internal steps.

### Why it helps

- reduces mental overload
- makes systems easier to use
- separates “what it does” from “how it works”

---

# 3. Inheritance

### “Reuse common logic”

Inheritance lets one class reuse another class’s behavior.

```ts
class Animal {
  move() {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}
```

`Dog` automatically gets `move()`.

### Why it helps

- reduces duplicate code
- shares common functionality
- creates organized class hierarchies

---

# 4. Polymorphism

### “One interface, many behaviors”

Polymorphism means different classes can be used in the same way.

```ts
class Bird {
  makeSound() {
    console.log("Chirp");
  }
}

class Dog {
  makeSound() {
    console.log("Woof");
  }
}
```

Both have `makeSound()`, but behave differently.

### Why it helps

- makes code flexible
- allows interchangeable components
- simplifies large systems

Example:

```ts
function playSound(animal: { makeSound(): void }) {
  animal.makeSound();
}
```
