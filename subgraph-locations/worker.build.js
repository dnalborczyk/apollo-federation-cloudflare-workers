import { env, exit } from 'node:process'
import { build } from 'esbuild'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

const isProd = env.NODE_ENV === 'production'

try {
  await build({
    bundle: true,
    entryPoints: ['./src/index.ts'],
    format: 'esm',
    minify: isProd,
    outdir: 'dist',
    plugins: [
      NodeGlobalsPolyfillPlugin({
        buffer: true,
      }),
      NodeModulesPolyfillPlugin(),
    ],
    sourcemap: true,
  })
} catch {
  exit(1)
}
