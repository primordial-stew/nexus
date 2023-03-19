import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [
    svelte(),
    resolve({ browser: true })
  ]
}
