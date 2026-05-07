# any vs unknown

### Question:

> Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

### Answer:

> **any** skips safety → faster to write, easier to break things.
> **unknown** enforces safety → requires checks, prevents runtime errors.
> **Type narrowing** means checking what a value really is before using it.
>
> > Use **unknown** for uncertain data, and only use **any** when you intentionally want to bypass the type system`
