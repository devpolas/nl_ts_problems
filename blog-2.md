# any vs unknown

### Question:

> How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

### Answer:

Main Interface:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

#### Using `Pick`

`Pick` selects only needed properties

```ts
type PublicUser = Pick<User, "id" | "name">;
```

Result:

```ts
{
  id: number;
  name: string;
}
```

Didn’t rewrite those fields manually.

#### Using `Omit`

`Omit` removes properties don’t need.

```ts
type SafeUser = Omit<User, "password">;
```

Result:

```ts
{
  id: number;
  name: string;
  email: string;
}
```

Again, no duplication.
