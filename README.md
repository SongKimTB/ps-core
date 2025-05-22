# @tbostest/ps-core

Core package for ps-core containing models, enums, types, constants, composables, and API repositories for Nuxt 3 applications.

## Installation

```bash
npm install @tbostest/ps-core
# or
yarn add @tbostest/ps-core
# or
pnpm add @tbostest/ps-core
```

## Usage

You can import components, types, and utilities from this package:

```typescript
import { MyExampleType, MY_CONSTANT, useMyComposable } from '@tbostest/ps-core';

// Example usage of the composable
const { message } = useMyComposable();
console.log(message.value);

// Example usage of the constant
console.log(MY_CONSTANT);

// Example usage of the type
const myVar: MyExampleType = { name: "Test", count: 1 };
console.log(myVar);

// The package also exports examples for models, enums, constants, and repository interfaces:
import { User, Status, APP_NAME, type IUserRepository, type ApiResponse } from '@tbostest/ps-core';

// Example of using the User model (interface)
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  createdAt: new Date()
};
console.log(user);

// Example of using the Status enum
const currentStatus: Status = Status.Active;
console.log(currentStatus);

// Example of using a constant
console.log(APP_NAME);

// Example of declaring a repository (interface)
let userRepository: IUserRepository; 
// userRepository = new ConcreteUserRepositoryImplementation(); // Actual implementation would be in the consuming app

// Example of using the ApiResponse type
const response: ApiResponse<User> = {
  success: true,
  data: user,
  statusCode: 200
};
console.log(response);
```

## Project Structure

The `src` directory is organized into feature-specific subdirectories (e.g., `models`, `enums`, `composables`), each with an `index.ts` file for barrel exporting. The main `src/index.ts` then aggregates these exports for the final package.
