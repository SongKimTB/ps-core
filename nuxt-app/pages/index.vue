<template>
  <div>
    <h1>Nuxt 3 Core Package Example</h1>

    <section>
      <h2>Constant Example</h2>
      <p>Max items: {{ MAX_ITEMS }}</p>
    </section>

    <section>
      <h2>Enum and Model Example</h2>
      <p>Admin user role: {{ adminRole }}</p>
      <p>Sample user: {{ sampleUser.name }} ({{ sampleUser.email }}) - Role: {{ sampleUser.role }}</p>
    </section>

    <section>
      <h2>Composable Example (Counter)</h2>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MAX_ITEMS } from '@core/constants';
import { UserRole } from '@core/enums';
import type { User } from '@core/models';
import { useCounter } from '@core/composables';

// Enum and Model Example
const adminRole = UserRole.ADMIN;
const sampleUser: User = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: UserRole.USER,
};

// Composable Example
const { count, increment, decrement } = useCounter();
</script>

<style scoped>
section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}
h2 {
  margin-top: 0;
}
button {
  margin-right: 5px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
