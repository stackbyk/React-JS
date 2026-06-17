# React Hooks - useState Counter App

## Objective

Learn how React's `useState` hook works for managing state in functional components.

---

## What is a Hook?

Hooks are special functions in React that allow functional components to use React features such as state and lifecycle methods.

Example:

```jsx
import { useState } from "react";
```

---

## useState Hook Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Explanation

- **state** → Current value of the state variable.
- **setState** → Function used to update the state.
- **initialValue** → Initial value assigned to the state.

Example:

```jsx
const [counter, setCounter] = useState(15);
```

Here:

- `counter` = current counter value
- `setCounter()` = updates the counter value
- Initial value = `15`

---

## Updating State

### Increment Counter

```jsx
const addValue = () => {
  setCounter(counter + 1);
};
```

When the button is clicked:

1. React updates the state.
2. Component re-renders.
3. Updated value appears on the screen.

---

### Decrement Counter

```jsx
const removeValue = () => {
  setCounter(counter - 1);
};
```

This decreases the counter value by 1.

---

## Event Handling in React

Buttons use the `onClick` event:

```jsx
<button onClick={addValue}>Add Value</button>
```

```jsx
<button onClick={removeValue}>Remove Value</button>
```

When clicked, the corresponding function executes.

---

## JSX Rendering

React automatically updates all places where the state variable is used.

Example:

```jsx
<h2>Counter value: {counter}</h2>
<p>Footer: {counter}</p>
```

If `counter` changes, both elements update instantly.

---

## Important Notes

### ❌ Incorrect Approach

```jsx
counter = counter + 1;
```

State variables should never be modified directly.

### ✅ Correct Approach

```jsx
setCounter(counter + 1);
```

Always use the setter function provided by `useState`.

---

## Better Practice

When state depends on the previous value:

```jsx
setCounter((prev) => prev + 1);
```

```jsx
setCounter((prev) => prev - 1);
```

This avoids issues with asynchronous state updates.

---

## Key Concepts Learned

- Functional Components
- JSX
- React Hooks
- `useState`
- Event Handling
- State Management
- Component Re-rendering

---

## Output

The application displays:

- Current counter value
- Add button
- Remove button
- Footer showing updated counter value

Every button click automatically updates the UI without refreshing the page.
