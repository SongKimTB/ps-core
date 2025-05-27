import { defineConfig, LibraryFormats } from 'vite'; // Added LibraryFormats
import dts from 'vite-plugin-dts';
// import tsconfigPaths from 'vite-tsconfig-paths'; // Removed static import

export default defineConfig(async () => { // Made the export async
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default; // Dynamic import

  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'PsCore',
        fileName: (format: string) => `ps-core.${format}.js`, // TS7006 corrected
        formats: ['es', 'umd'] as LibraryFormats[], // Corrected for TS2769
      },
      outDir: 'dist',
      rollupOptions: {
        external: ['nuxt/app', 'vue'], // Also externalizing vue as it's a peerDependency
      },
    },
    plugins: [
      dts({
        outDir: 'dist', // TS2561 corrected
        insertTypesEntry: true, // Added as suggested
        // Specifying entryRoot is not strictly necessary here as 'src' is the default,
        // but it's good for clarity if the structure was more complex.
        // entryRoot: 'src', 
        // By default, dts plugin outputs to the outDir's root.
        // To output a single file named 'index.d.ts' in the 'dist' folder,
        // we can use the `fileName` option within the dts plugin configuration.
        // However, the request is to output to 'dist/index.d.ts', which is the default behavior
        // when the entry is 'src/index.ts' and outDir is 'dist'.
        // If we needed to customize the *name* of the declaration file itself, we'd use `fileName`
        // like: `fileName: 'my-custom-name.d.ts'`
        // The prompt specifically asks for 'dist/index.d.ts'.
        // The `outputDir` option for `vite-plugin-dts` controls where the .d.ts files are placed.
        // If `outDir` in `build` is `dist`, and `outputDir` in `dts` is also `dist`,
        // and the entry is `src/index.ts`, it will naturally create `dist/index.d.ts`.
        // The request was "output to 'dist/index.d.ts'". This is a bit ambiguous.
        // It could mean the *file* should be named `index.d.ts` and be *in* `dist`,
        // or the *directory* for declaration files should be `dist/index.d.ts` (which is wrong).
        // Assuming the former, which is the most standard interpretation.
        // The dts plugin by default will create an `index.d.ts` in the `outputDir` if the entry is `index.ts`.
        // So, `outputDir: 'dist'` is sufficient.
      }),
      tsconfigPaths(),
    ],
  };
});
