# ps-core Codebase & Structure Guideline

## Purpose

This package provides a reusable, maintainable core for Nuxt projects, leveraging Axios and a service/repository pattern. It standardizes business logic, composables, constants, enums, models, repositories, services, types and stores.

---

## Directory Structure

- **composables/**: Vue composables for shared logic (e.g., useAuth, useFetch).
- **constants/**: Application-wide constant values.
- **enums/**: Enumerations for fixed value sets.
- **models/**: TypeScript interfaces and classes for data models.
- **repositories/**: API/data access logic, wrapping Axios or other data sources.
- **services/**: Business logic, orchestration, and workflows.
- **types/**: Shared TypeScript types and utility types.
- **stores/**: State management (Pinia/Vuex) modules.

---

## Coding Standards

1. **Service/Repository Pattern**
   - Place all API/data-fetching logic in `repositories/`.
   - Place business logic and orchestration in `services/`.
   - Keep composables focused on UI-related logic.

2. **Type Safety**
   - Define all interfaces and types in `models/` or `types/`.
   - Use enums for all fixed sets of values.

3. **Reusability**
   - Avoid project-specific logic; keep code generic and reusable.
   - Utilities should be pure and side-effect free.

4. **Documentation**
   - Use JSDoc/TSDoc for all public functions, classes, and modules.
   - Update this guideline and the README when adding new patterns or modules.

5. **Testing**
   - Add unit tests for all utilities, services, and repositories.
   - Prefer test-driven development for new features.

---

## Installation

```bash
npm install @wl/ps-core
