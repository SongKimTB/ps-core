import { ref } from 'vue'
import { useRouter, navigateTo } from 'nuxt/app'

export function useMyComposable() {
  const router = useRouter()
  const message = ref("This is a composable from ps-core")

  const goTo = async (path: string) => {
    if (!path?.length) {
      console.log('No path provided')
      return
    }
    console.log('Navigating to:', path)
    
    try {
      await navigateTo(path)
    } catch (error) {
      console.error('Navigation error:', error)
      // Fallback to router.push if navigateTo fails
      await router.push(path)
    }
  }

  return { message, goTo }
}
