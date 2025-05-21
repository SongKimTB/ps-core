// This is a conceptual example.
// For actual Vue reactivity, you'd import `ref` from 'vue'.
// Since 'vue' is not a direct dependency of this core lib,
// this composable demonstrates the structure.
// A consuming Nuxt/Vue app would handle Vue's reactivity.

export interface CounterOptions {
  initialValue?: number;
}

export interface CounterReturn {
  count: { value: number }; // Simplified representation of a ref
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (options?: CounterOptions): CounterReturn => {
  const count = { value: options?.initialValue || 0 };

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement,
  };
};
