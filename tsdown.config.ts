import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/extension.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  deps: {
    neverBundle: ['vscode']
  }
});