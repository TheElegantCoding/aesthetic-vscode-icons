import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/extension.ts'],
  format: ['cjs'],
  external: ['vscode'],
  dts: true,
  splitting: false,
  clean: true,
  minify: true
});