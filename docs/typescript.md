##### `docs/typescript.md`
```markdown
---
id: typescript
title: TypeScript
sidebar_position: 3
---

## Overview

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Key Features

- Optional static typing
- Interfaces & generics
- Better tooling with editors
- Compile-time error checking

## Example

```ts
interface User {
  name: string;
  age: number;
}

const greet = (user: User) => {
  return `Hello, ${user.name}`;
};