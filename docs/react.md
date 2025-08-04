##### `docs/react.md`
```markdown
---
id: react
title: React
sidebar_position: 2
---

## Overview

React is a JavaScript library for building user interfaces.

## Key Features

- Component-based architecture
- Hooks for state & lifecycle
- JSX syntax
- Virtual DOM for performance

## Example

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}