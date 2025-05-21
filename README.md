# Core Package for Nuxt 3 / Vue 3

This repository contains a "core" package intended for Nuxt 3 / Vue 3 applications. It's designed to store shared constants, enums, models, and composables.

## Core Package Structure

The `core` directory is structured as follows:

```
core/
├── constants/         # Stores constant values (e.g., API endpoints, global settings)
│   └── index.ts       # Example: export const MAX_ITEMS = 100;
├── enums/             # Stores enumerations
│   └── index.ts       # Example: export enum UserRole { ADMIN, USER }
├── models/            # Stores data models and interfaces
│   └── index.ts       # Example: export interface User { id: number; name: string; }
└── composables/       # Stores Vue 3 composables
    └── index.ts       # Example: export function useMyComposable() { ... }
```

## Usage

To use this `core` package in your Nuxt 3 or Vue 3 project:

1.  **Copy or Symlink**: You can copy the `core` directory into your project's source (e.g., under a `src` or `lib` directory) or use a symlink if you prefer to keep it as a separate local package.

2.  **Path Aliases (Recommended for Nuxt 3)**: If you're using Nuxt 3, it's highly recommended to set up a path alias in your `nuxt.config.ts` for easier imports. For example, if you place the `core` folder in your project root:

    ```typescript
    // nuxt.config.ts
    export default defineNuxtConfig({
      alias: {
        '@core': './core', // or the correct path to your core directory
      }
    })
    ```

3.  **Importing Components**: Once set up, you can import items from the `core` package:

    ```typescript
    // Example in a Vue component or other TypeScript file
    import { MAX_ITEMS } from '@core/constants';
    import { UserRole } from '@core/enums';
    import type { User } from '@core/models';
    import { useMyComposable } from '@core/composables';

    // Using the imported items
    console.log(MAX_ITEMS);
    const adminUserRole = UserRole.ADMIN;
    ```

## Contents

*   **`core/constants/index.ts`**: Central location for defining and exporting shared constant values.
*   **`core/enums/index.ts`**: For defining and exporting TypeScript enums used across the application.
*   **`core/models/index.ts`**: For defining data structures, interfaces, and types.
*   **`core/composables/index.ts`**: For creating and exporting reusable Vue 3 composables.

## Contributing

You can extend this `core` package by adding more specific subdirectories or files as needed for your project (e.g., `core/utils`, `core/services`).
