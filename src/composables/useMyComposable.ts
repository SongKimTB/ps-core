// src/composables/useMyComposable.ts
import { ref } from 'vue';

export function useMyComposable() {
  const message = ref("This is a composable from ps-core");
  return { message };
}
