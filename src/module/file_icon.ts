/* eslint-disable max-lines */
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
    theme: 'dark',
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
    fileName: [
      'package.json',
      'package-lock.json',
      '.nvmrc',
      '.esmrc',
      '.node-version'
    ],
    name: 'node'
  },
  {
    name: 'nodemon',
    fileName: ['nodemon.json', 'nodemon-debug.json']
  },

  {
    fileExtension: ['patch'],
    fileName: [
      '.git',
      '.gitignore',
      '.gitmessage',
      '.gitignore-global',
      '.gitignore_global',
      '.gitattributes',
      '.gitattributes-global',
      '.gitattributes_global',
      '.gitconfig',
      '.gitmodules',
      '.gitkeep',
      '.keep',
      '.gitpreserve',
      '.gitinclude',
      '.git-blame-ignore',
      '.git-blame-ignore-revs',
      '.git-for-windows-updater',
      'git-history',
      'COMMIT_EDITMSG',
      'MERGE_MSG',
      'git-rebase-todo'
    ],
    name: 'git'
  },
  {
    name: 'gitlab',
    fileName: ['gitlab-ci.yml']
  },
  {
    name: 'github_funding',
    fileName: ['.github/FUNDING.yml', '.github/FUNDING.yaml']
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
  },
  {
    name: 'editorconfig',
    fileName: [
      '.editorconfig',
      '.editorconfig-checker.json',
      '.ecrc'
    ]
  },
  {
    fileName: [
      '.huskyrc',
      '.huskyrc.json',
      '.huskyrc.js'
    ],
    name: 'husky'
  },
  {
    name: 'amplify',
    fileName: ['amplify.yml']
  },
  {
    name: 'oxlint',
    fileName: [
      '.oxlintrc.json',
      '.oxlintrc.jsonc',
      '.oxfmtrc.json',
      '.oxfmtrc.jsonc',
      'oxlint.config.ts',
      'oxfmt.config.ts'
    ]
  },
  {
    fileName: [
      '.prettierrc',
      '.prettierrc.json',
      '.prettierrc.yml',
      '.prettierrc.yaml',
      '.prettierrc.js',
      '.prettierrc.cjs',
      '.prettierrc.mjs',
      '.prettierrc.config.js',
      '.prettierrc.config.cjs',
      'prettier.config.js',
      'prettier.config.cjs',
      'prettier.config.mjs',
      '.prettierignore'
    ],
    name: 'prettier'
  },
  {
    fileName: [
      'webpack.config.js',
      'webpack.config.cjs',
      'webpack.config.mjs',
      'webpack.config.ts',
      'webpack.dev.js',
      'webpack.prod.js',
      'webpack.common.js'
    ],
    name: 'webpack'
  },
  {
    fileName: [
      '.graphqlrc',
      '.graphqlrc.json',
      '.graphqlrc.yml',
      '.graphqlrc.yaml',
      '.graphqlrc.js',
      '.graphqlrc.ts',
      'graphql.config.js',
      'graphql.config.ts'
    ],
    name: 'graphql'
  },
  {
    fileName: [
      'playwright.config.ts',
      'playwright.config.js',
      'playwright.config.mjs',
      'playwright.config.cjs'
    ],
    name: 'playwright'
  },
  {
    name: 'browserlist',
    fileName: ['browserslist', '.browserslistrc']
  },
  {
    name: 'rollup',
    fileName: [
      'rollup.config.js',
      'rollup.config.mjs',
      'rollup.config.ts',
      'rollup-config.js',
      'rollup-config.mjs',
      'rollup-config.ts',
      'rollup.config.common.js',
      'rollup.config.common.mjs',
      'rollup.config.common.ts',
      'rollup.config.base.js',
      'rollup.config.base.mjs',
      'rollup.config.base.ts',
      'rollup.config.prod.js',
      'rollup.config.prod.mjs',
      'rollup.config.prod.ts',
      'rollup.config.dev.js',
      'rollup.config.dev.mjs',
      'rollup.config.dev.ts',
      'rollup.config.prod.vendor.js',
      'rollup.config.prod.vendor.mjs',
      'rollup.config.prod.vendor.ts'
    ]
  },
  {
    name: 'next',
    fileName: [
      'next.config.js',
      'next.config.mjs',
      'next.config.ts',
      'next.config.mts'
    ]
  },
  {
    name: 'photoshop',
    fileExtension: [
      'psd',
      'psb',
      'psdt'
    ]
  },
  {
    name: 'illustrator',
    fileExtension: ['ai', 'ait']
  },
  {
    name: 'pdf',
    fileExtension: ['pdf']
  },
  {
    name: 'adobe_xd',
    fileExtension: ['xd']
  },
  {
    name: 'figma',
    fileExtension: ['fig']
  },
  {
    name: 'c',
    fileExtension: [
      'c',
      'i',
      'mi'
    ]
  },
  {
    name: 'cpp',
    fileExtension: [
      'cc',
      'cpp',
      'cxx',
      'c++',
      'cp',
      'mii',
      'ii',
      'cppm',
      'c++m',
      'ccm',
      'cxxm',
      'h.in',
      'hpp.in',
      'ipp',
      'ixx',
      'tpp',
      'txx'
    ]
  },
  {
    name: 'c_sharp',
    fileExtension: [
      'cs',
      'csx',
      'csharp'
    ]
  }
];

export { fileIcon };