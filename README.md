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
*Note: This library now includes Vue composables and has `vue` as a direct dependency.*

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

This library provides Vue composables. Ensure `vue` is installed in your project (it is a direct dependency of this library).

```typescript
import { useCounter } from 'core';
import { watch } from 'vue'; // For demonstrating reactivity

// Initialize the counter
const { count, increment, decrement } = useCounter({ initialValue: 10 });

// `count` is a Vue Ref, so it's reactive
console.log(count.value); // Output: 10

increment();
console.log(count.value); // Output: 11

decrement();
console.log(count.value); // Output: 10

// Example of watching the reactive count
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

increment(); // This will trigger the watcher
```

## Building from source

To build the library from source, clone the repository and run the following commands:

```bash
npm install
npm run build
```
