import type { FileIconType } from '../type/file_icon_types';

const fileIcon: FileIconType[] = [
  {
    fileExtension: ['astro'],
    name: 'astro'
  },
  {
    fileExtension: ['html'],
    name: 'html'
  },
  {
    fileExtension: [
      'js',
      'cjs',
      'mjs',
      'es6',
      'pac',
      'esx'
    ],
    fileName: ['jakefile.js'],
    name: 'javascript'
  },
  {
    fileExtension: [
      'ts',
      'cts',
      'mts'
    ],
    name: 'typescript'
  },
  {
    fileExtension: ['css'],
    name: 'css'
  },
  {
    fileExtension: ['css.map'],
    name: 'css_map'
  },
  {
    fileExtension: ['scss', 'sass'],
    name: 'sass'
  },
  {
    fileName: [
      'postcss.config.js',
      'postcss.config.cjs',
      'postcss.config.mjs',
      'postcss.config.ts',
      '.postcssrc',
      '.postcssrc.js',
      '.postcssrc.json',
      '.postcssrc.yml'
    ],
    fileExtension: ['postcss', 'pcss'],
    name: 'postcss'
  },
  {
    fileName: ['.npmignore', '.npmrc'],
    name: 'npm'
  },
  {
    fileName: [
      'pnpm-workspace.yaml',
      '.pnpmfile.cjs',
      'pnpm-lock.yaml'
    ],
    name: 'pnpm'
  },
  {
    fileName: [
      '.yarnrc',
      'yarn.lock',
      '.yarnclean',
      '.yarn-integrity',
      'yarn-error.log',
      '.yarnrc.yml',
      '.yarnrc.yaml'
    ],
    name: 'yarn'
  },
  {
    fileName: [
      'bun.lockb',
      'bunfig.toml',
      '.bun-version',
      'bun.lock'
    ],
    name: 'bun'
  },
  {
    fileName: [
      'eslint.config.js',
      'eslint.config.cjs',
      'eslint.config.mjs',
      '.eslintrc.json',
      '.eslintrc.js',
      '.eslintignore',
      '.eslintcache'
    ],
    name: 'eslint'
  },
  {
    fileName: [
      'stylelint.config.js',
      'stylelint.config.cjs',
      '.stylelintrc.json',
      '.stylelintrc.js',
      '.stylelintignore',
      '.stylelintcache'
    ],
    name: 'stylelint'
  },
  {
    fileExtension: [
      'json',
      'jsonc',
      'tsbuildinfo',
      'json5',
      'jsonl',
      'ndjson',
      'geojson',
      'har',
      'jsonld',
      'webmanifest',
      'ts.map'
    ],
    fileName: [
      '.jscsrc',
      '.jshintrc',
      'composer.lock',
      '.jsbeautifyrc',
      '.esformatter',
      'cdp.pid',
      '.whitesource'
    ],
    name: 'json'
  },
  {
    fileName: ['package.json'],
    name: 'node'
  },
  {
    fileExtension: [
      'gitignore',
      'gitattributes',
      'gitmodules'
    ],
    name: 'git'
  },
  {
    fileExtension: ['jsx', 'tsx'],
    name: 'react'
  },
  {
    fileExtension: ['jsx'],
    name: 'react_jsx'
  },
  {
    fileName: ['solid.config.ts', 'solid.config.js'],
    name: 'solid'
  },
  {
    fileName: [
      'qwik.config.ts',
      'qwik.config.js',
      'root.tsx',
      'entry.ssr.tsx'
    ],
    name: 'qwik'
  },
  {
    fileExtension: ['svelte'],
    fileName: ['svelte.config.js', 'svelte.config.ts'],
    name: 'svelte'
  },
  {
    fileExtension: ['code-snippets', 'vsix'],
    fileName: [
      'extensions.json',
      'launch.json',
      'settings.json',
      'tasks.json'
    ],
    name: 'vscode'
  },
  {
    fileName: [
      'tailwind.js',
      'tailwind.ts',
      'tailwind.config.js',
      'tailwind.config.cjs',
      'tailwind.config.mjs',
      'tailwind.config.ts',
      'tailwind.config.cts',
      'tailwind.config.mts'
    ],
    name: 'tailwind'
  },
  {
    name: 'unocss',
    fileName: [
      'uno.config.js',
      'uno.config.mjs',
      'uno.config.ts',
      'uno.config.mts',
      'unocss.config.js',
      'unocss.config.mjs',
      'unocss.config.ts',
      'unocss.config.mts'
    ]
  },
  {
    name: 'vanilla_extract',
    fileExtension: [
      'css.ts',
      'css.js',
      'css.cjs',
      'css.mjs',
      'css.tsx',
      'css.jsx'
    ]
  },
  {
    fileName: [
      'vite.config.ts',
      'vite.config.js',
      'vite.config.mts',
      'vite.config.cts'
    ],
    name: 'vite'
  },
  {
    fileName: [
      'vitest.config.ts',
      'vitest.config.js',
      'vitest.config.mts',
      'vitest.config.cts'
    ],
    name: 'vitest'
  },
  {
    fileExtension: ['apk', 'aab'],
    name: 'android'
  },
  {
    fileExtension: ['mjml'],
    name: 'mjml'
  },
  {
    fileExtension: ['lua'],
    name: 'lua'
  },
  {
    fileExtension: ['rs'],
    name: 'rust'
  }
];

export { fileIcon };