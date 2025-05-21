# Core Library

A core library for Nuxt 3/Vue applications.

## Installation

Install the package using npm:

```bash
npm install core
```

Or using yarn:

```bash
yarn add core
```

## Usage

Import functions and types from the library in your project:

### Basic Function

```typescript
import { add } from 'core';

const result = add(2, 3);
console.log(result); // Output: 5
```

### Enums

```typescript
import { Status } from 'core';

const currentStatus: Status = Status.Pending;
console.log(currentStatus); // Output: 'pending'

if (currentStatus === Status.Completed) {
  console.log('Task is done!');
}
```

### Models (Interfaces/Types)

```typescript
import { User } from 'core';

const myUser: User = {
  id: 'user-123',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  createdAt: new Date(),
};
console.log(myUser.name);
```

### Composables

The composables in this library are designed to be framework-agnostic but are easily integrable with Vue's reactivity system.

```typescript
import { useCounter } from 'core';
// In a Vue component, you would typically wrap the count in a ref:
// import { ref } from 'vue';

const { count, increment, decrement } = useCounter({ initialValue: 10 });

// Example of how you might use it conceptually (Vue specific parts commented out)
// const reactiveCount = ref(count.value); // Vue's reactivity

console.log(count.value); // Output: 10 (or initial value)
increment();
console.log(count.value); // Output: 11
decrement();
console.log(count.value); // Output: 10

// To make count reactive in Vue:
// watch(count, (newVal) => { reactiveCount.value = newVal });
// or more directly if useCounter was adapted to use Vue's ref internally.
```
*Note: The `useCounter` example shows conceptual usage. In a Vue application, you would typically use Vue's `ref` for reactive state management within the composable itself, or when consuming it.*


## Building from source

To build the library from source, clone the repository and run the following commands:

```bash
npm install
npm run build
```
