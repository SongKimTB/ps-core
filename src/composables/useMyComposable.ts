// src/composables/useMyComposable.ts
import { ref } from 'vue';
import { useRouter } from 'nuxt/app';

export function useMyComposable() {
  const router = useRouter();
  const message = ref("This is a composable from ps-core");

  const goTo = (path: string) => {
    if (!path.length) return;
    router.push(path);
  }
  return { message, goTo };
}
