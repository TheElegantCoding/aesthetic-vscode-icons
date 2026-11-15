import type { FileIconType } from '@src/type/file_icon_types';

const configIcons: FileIconType[] = [
  {
    name: 'python-config',
    fileNames: [
      'pyproject.toml',
      'setup.py',
      'setup.cfg',
      'requirements.txt',
      'requirements-dev.txt',
      'Pipfile',
      'poetry.lock',
      'uv.lock',
      'tox.ini',
      'pytest.ini',
      'conftest.py',
      'MANIFEST.in',
      '.python-version'
    ],
    fileExtensions: ['pyc']
  },
  {
    name: 'git-config',
    fileNames: ['.gitconfig']
  },
  {
    name: 'git-attributes',
    fileNames: ['.gitattributes']
  },
  {
    name: 'git-modules',
    fileNames: ['.gitmodules']
  },
  {
    name: 'astro-config',
    fileNames: [
      'astro.config.js',
      'astro.config.mjs',
      'astro.config.cjs',
      'astro.config.ts',
      'astro.config.mts',
      'astro.config.cts'
    ]
  },
  {
    name: 'vue-config',
    fileNames: ['vue.config.js', 'vue.config.mjs', 'vue.config.cjs', 'vue.config.ts']
  },
  {
    name: 'js-config',
    fileNames: ['jsconfig.json']
  },
  {
    name: 'svelte-config',
    fileNames: ['svelte.config.js', 'svelte.config.mjs', 'svelte.config.cjs', 'svelte.config.ts']
  },
  {
    name: 'markdoc-config',
    fileExtensions: [],
    fileNames: [
      'markdoc.config.js',
      'markdoc.config.mjs',
      'markdoc.config.cjs',
      'markdoc.config.ts',
      'markdoc.config.mts',
      'markdoc.config.cts'
    ]
  },
  {
    name: 'bicep-config',
    fileNames: ['bicepconfig.json']
  },
  {
    name: 'ts-config',
    fileNames: [
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.editor.json',
      'tsconfig.spec.json',
      'tsconfig.base.json',
      'tsconfig.build.json',
      'tsconfig.eslint.json',
      'tsconfig.lib.json',
      'tsconfig.lib.prod.json',
      'tsconfig.node.json',
      'tsconfig.test.json',
      'tsconfig.e2e.json',
      'tsconfig.web.json',
      'tsconfig.webworker.json',
      'tsconfig.worker.json',
      'tsconfig.config.json',
      'tsconfig.vitest.json',
      'tsconfig.cjs.json',
      'tsconfig.esm.json',
      'tsconfig.mjs.json',
      'tsconfig.doc.json',
      'tsconfig.paths.json',
      'tsconfig.main.json',
      'tsconfig.renderer.json',
      'tsconfig.server.json',
      'tsconfig.client.json',
      'tsconfig.declaration.json',
      'tsconfig.dev.json',
      'tsconfig.prod.json'
    ],
    fileExtensions: ['tsconfig.json']
  },
  {
    name: 'mjml-config',
    fileNames: ['.mjmlconfig']
  }
];

export { configIcons };