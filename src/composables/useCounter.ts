import { ref, Ref } from 'vue';

export interface CounterOptions {
  initialValue?: number;
}

export interface CounterReturn {
  count: Ref<number>;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (options?: CounterOptions): CounterReturn => {
  const count = ref(options?.initialValue || 0);

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
