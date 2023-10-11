// import { createRequire } from 'node:module'
// import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// const requireThis = createRequire(import.meta.url)
// const pkg = requireThis('./package.json')

// const makeExternalPredicate = (externalArr: any) => {
//   if (externalArr.length === 0) {
//     return () => false
//   }
//   const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
//   return (id: string) => pattern.test(id)
// }

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({ include: ['src/App.ts', 'src/@types/**'] }),
  ],
  // build: {
  //   ssr: true,
  //   ssrManifest: true,
  //   manifest: true,
  //   emptyOutDir: true,
  //   reportCompressedSize: true,
  //   lib: {
  //     entry: resolve(__dirname, 'src/App.tsx'),
  //     name: 'collisions',
  //     formats: ['es'],
  //     fileName: 'index',
  //   },
  //   rollupOptions: {
  //     external: makeExternalPredicate([
  //       ...Object.keys(pkg.dependencies || {}),
  //       ...Object.keys(pkg.peerDependencies || {}),
  //     ]),
  //     output: {
  //       dir: 'dist',
  //       format: 'esm',
  //       exports: 'named',
  //       preserveModules: true,
  //       preserveModulesRoot: 'src',
  //       interop: 'auto',
  //       sourcemap: true,
  //       inlineDynamicImports: false,
  //     },
  //   },
  // },
})

