import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@tbostest/ps-core',
    configKey: 'psCore'
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    // Transpile runtime directory
    nuxt.options.build.transpile.push(runtimeDir)

    // Auto-import composables
    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})