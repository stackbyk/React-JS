<h2>Refer this for React Fiber Architecture</h2>
https://github.com/acdlite/react-fiber-architecture

# React Fiber Architecture

## Introduction

React Fiber is the **reimplementation of React's core algorithm** introduced in React 16. It is responsible for rendering and updating the user interface efficiently.

The primary goal of Fiber is to make React applications **faster, smoother, and more responsive**.

---

## Why was Fiber Introduced?

Before Fiber, React updated the entire component tree in a single operation.

Problems with this approach:

* Large updates could block the browser.
* Animations became laggy.
* User interactions felt slow.

Fiber solves these problems by breaking rendering work into smaller units.

---

## What is a Fiber?

A **Fiber** is a JavaScript object that represents a component and its work.

Every React component has its own Fiber node.

Example:

```jsx
<App>
  <Header />
  <Counter />
  <Footer />
</App>
```

React creates Fiber nodes for:

* App
* Header
* Counter
* Footer

Together, they form a **Fiber Tree**.

---

## Key Features of Fiber

### 1. Incremental Rendering

Instead of completing all work at once, React performs rendering in small chunks.

Benefits:

* Better performance
* Smooth user experience
* Responsive UI

---

### 2. Scheduling

Fiber assigns priorities to tasks.

High-priority tasks:

* Button clicks
* Typing
* Animations

Low-priority tasks:

* Background rendering
* Data fetching updates

This ensures important tasks are completed first.

---

### 3. Pause and Resume Work

React can:

* Pause rendering
* Resume later
* Cancel unnecessary work
* Reuse previous work

This prevents the browser from freezing.

---

## Reconciliation

Reconciliation is the process of comparing:

```text
Old Virtual DOM
        VS
New Virtual DOM
```

React updates only the changed parts of the UI.

Example:

```jsx
<h1>Counter: 5</h1>
```

changes to

```jsx
<h1>Counter: 6</h1>
```

React updates only the number instead of reloading the entire page.

---

## Fiber Tree

Example:

```text
App
├── Navbar
├── Main
│   ├── Counter
│   └── Button
└── Footer
```

Each node in this tree is a Fiber object.

---

## Advantages of React Fiber

* Faster rendering
* Better responsiveness
* Efficient updates
* Prioritized tasks
* Improved user experience
* Foundation for Concurrent Rendering

---

## Real-Life Analogy

Imagine cleaning your room.

### Old React

Finish cleaning the entire room before doing anything else.

### React Fiber

Clean one section, take a break if needed, and continue later.

This makes the work more manageable and efficient.

---

## Conclusion

React Fiber is the internal engine that powers modern React. It breaks rendering into small tasks, prioritizes important updates, and keeps applications smooth and responsive.

> **In simple words:** React Fiber allows React to work smarter by splitting work into small pieces and updating the UI efficiently.
