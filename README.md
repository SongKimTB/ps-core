# Nuxt 3 Core Package Example

This repository demonstrates how to set up and use a "core" package with a Nuxt 3 application. The `core` package is intended to store shared constants, enums, models, and composables.

## Project Structure

```
.
├── core/                  # Shared package
│   ├── constants/         # Constants (e.g., API endpoints, global settings)
│   │   └── index.ts
│   ├── enums/             # Enumerations
│   │   └── index.ts
│   ├── models/            # Data models/interfaces
│   │   └── index.ts
│   └── composables/       # Vue 3 composables
│       └── index.ts
├── nuxt-app/              # Example Nuxt 3 application
│   ├── pages/
│   │   └── index.vue      # Example page using components from 'core'
│   ├── nuxt.config.ts     # Nuxt configuration with alias for '@core'
│   └── ...                # Other Nuxt app files
└── README.md
```

## Core Package

The `core` directory contains the following:

*   **`core/constants/index.ts`**: Exports shared constant values.
    *   Example: `MAX_ITEMS`
*   **`core/enums/index.ts`**: Exports TypeScript enums.
    *   Example: `UserRole`
*   **`core/models/index.ts`**: Exports data interfaces/types.
    *   Example: `User` interface
*   **`core/composables/index.ts`**: Exports Vue 3 composables.
    *   Example: `useCounter`

## Example Nuxt 3 Application (`nuxt-app`)

The `nuxt-app` directory contains a basic Nuxt 3 application that demonstrates how to import and use components from the `core` package.

### Running the Example

1.  **Navigate to the Nuxt app directory:**
    ```bash
    cd nuxt-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

### Using Core Components

The Nuxt application is configured with a path alias `@core` that points to the `../core` directory. This is set up in `nuxt-app/nuxt.config.ts`:

```typescript
// nuxt-app/nuxt.config.ts
export default defineNuxtConfig({
  alias: {
    '@core': '../core',
  },
  devtools: { enabled: true }
})
```

You can then import components from the `core` package in your Nuxt application like this:

```typescript
import { MAX_ITEMS } from '@core/constants';
import { UserRole } from '@core/enums';
import type { User } from '@core/models';
import { useCounter } from '@core/composables';
```

The `nuxt-app/pages/index.vue` file shows a practical example of how these components are used.

## Contributing

Feel free to expand on this example by adding more complex scenarios or additional types of shared utilities to the `core` package.
