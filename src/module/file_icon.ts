/* eslint-disable max-lines */
import type { FileIconType } from '../type/file_icon_types';

const fileIcon: FileIconType[] = [
  {
    name: 'xml',
    fileExtensions: [
      'xml',
      'plist',
      'xsd',
      'dtd',
      'xsl',
      'xslt',
      'resx',
      'iml',
      'xquery',
      'tmLanguage',
      'manifest',
      'project',
      'xml.dist',
      'xml.dist.sample',
      'dmn',
      'jrxml',
      'xmp',
      'ascx',
      'atom',
      'axaml',
      'axml',
      'bpmn',
      'csl',
      'csproj.user',
      'dita',
      'ditamap',
      'dtml',
      'ent',
      'fxml',
      'isml',
      'jmx',
      'launch',
      'menu',
      'opml',
      'owl',
      'proj',
      'publishsettings',
      'pubxml',
      'pubxml.user',
      'rdf',
      'rng',
      'rss',
      'shproj',
      'storyboard',
      'targets',
      'tld',
      'tmx',
      'vbproj',
      'vbproj.user',
      'wsdl',
      'wxi',
      'wxl',
      'wxs',
      'xbl',
      'xib',
      'xliff',
      'xoml',
      'xpdl',
      'xul'
    ]
  },
  {
    name: 'yaml',
    fileExtensions: [
      'yml.dist',
      'yaml.dist',
      'YAML-tmLanguage',
      'yaml',
      'yml',
      'cff',
      'eyaml',
      'eyml',
      'winget',
      'yaml-tmpreferences',
      'yaml-tmtheme'
    ]
  },
  {
    name: 'xaml',
    fileExtensions: ['xaml'],
    fileNames: ['XamlStyler.json']
  },
  {
    name: 'flutter',
    fileNames: ['.flutter-plugins', '.fvmrc']
  },
  {
    name: 'dart-lock',
    fileNames: ['pubspec.lock']
  },
  {
    name: 'editorconfig',
    fileNames: ['.editorconfig', '.editorconfig-checker.json', '.ecrc']
  },
  {
    name: 'npm',
    fileNames: ['.npmignore', '.npmrc']
  },
  {
    name: 'pnpm',
    fileNames: ['pnpm-workspace.yaml', '.pnpmfile.cjs']
  },
  {
    name: 'pnpm-lock',
    fileNames: ['pnpm-lock.yaml']
  },
  {
    name: 'tailwind',
    fileNames: [
      'tailwind.config.js',
      'tailwind.config.cjs',
      'tailwind.config.mjs',
      'tailwind.config.ts',
      'tailwind.config.cts',
      'tailwind.config.mts'
    ]
  },
  {
    name: 'travis',
    fileNames: ['.travis.yml']
  },
  {
    name: 'tsdown',
    fileNames: [
      'tsdown.config.ts',
      'tsdown.config.mts',
      'tsdown.config.cts',
      'tsdown.config.js',
      'tsdown.config.mjs',
      'tsdown.config.cjs',
      'tsdown.config.json',
      'tsdown.config'
    ]
  },
  {
    name: 'vite',
    fileNames: [
      'vite.config.js',
      'vite.config.mjs',
      'vite.config.cjs',
      'vite.config.ts',
      'vite.config.mts',
      'vite.config.cts'
    ]
  },
  {
    name: 'vitest',
    fileNames: [
      'vitest.config.js',
      'vitest.config.mjs',
      'vitest.config.cjs',
      'vitest.config.ts',
      'vitest.config.mts',
      'vitest.config.cts',
      'vitest.workspace.ts',
      'vitest.workspace.js'
    ]
  },
  {
    name: 'bun-lock',
    fileNames: ['bun.lock']
  },
  {
    name: 'cargo-lock',
    fileNames: ['Cargo.lock', 'cargo.lock']
  },
  {
    name: 'node-lock',
    fileNames: ['package-lock.json']
  },
  {
    name: 'yarn-lock',
    fileNames: ['yarn.lock']
  },
  {
    name: 'terraform-lock',
    fileNames: ['.terraform.lock.hcl']
  },
  {
    name: 'lua-lock',
    fileNames: ['lazy-lock.json']
  },
  {
    name: 'vscode',
    fileExtensions: [
      'vscodeignore',
      'vsixmanifest',
      'vsix',
      'code-workplace',
      'code-workspace',
      'code-profile',
      'code-snippets'
    ]
  },
  {
    name: 'amplify',
    fileNames: ['amplify.yml']
  },
  {
    name: 'eslint',
    fileNames: [
      'eslint.config.js',
      'eslint.config.mjs',
      'eslint.config.cjs',
      'eslint.config.ts',
      'eslint.config.mts',
      'eslint.config.cts',
      '.eslintrc',
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.json',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintignore'
    ]
  },
  {
    name: 'git',
    fileExtensions: ['patch'],
    fileNames: [
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
    ]
  },
  {
    name: 'html',
    fileExtensions: ['htm', 'xhtml', 'html_vm', 'asp', 'html', 'aspx', 'jshtm', 'rhtml', 'shtml', 'volt', 'xht']
  },
  {
    name: 'husky',
    fileExtensions: [],
    fileNames: [
      '.huskyrc',
      '.huskyrc.js',
      '.huskyrc.cjs',
      '.huskyrc.json',
      '.huskyrc.yaml',
      '.huskyrc.yml',
      'husky.config.js'
    ]
  },
  {
    name: 'mjml',
    fileExtensions: ['mjml']
  },
  {
    name: 'mjml-config',
    fileNames: ['.mjmlconfig']
  },
  {
    name: 'node-json',
    fileNames: ['package.json']
  },
  {
    name: 'node',
    fileNames: ['.nvmrc', '.esmrc', '.node-version']
  },
  {
    name: 'nodemon',
    fileNames: ['nodemon.json', 'nodemon-debug.json']
  },
  {
    name: 'postcss',
    fileExtensions: ['pcss', 'postcss'],
    fileNames: [
      'postcss.config.js',
      'postcss.config.mjs',
      'postcss.config.cjs',
      'postcss.config.ts',
      'postcss.config.mts',
      'postcss.config.cts',
      '.postcssrc',
      '.postcssrc.js',
      '.postcssrc.cjs',
      '.postcssrc.mjs',
      '.postcssrc.ts',
      '.postcssrc.json',
      '.postcssrc.yaml',
      '.postcssrc.yml'
    ]
  },
  {
    name: 'rust',
    fileExtensions: ['rs', 'ron']
  },
  {
    name: 'unocss',
    fileNames: [
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
    name: 'yarn',
    fileNames: ['.yarnrc', '.yarnclean', '.yarn-integrity', 'yarn-error.log', '.yarnrc.yml', '.yarnrc.yaml']
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
    name: 'python-misc',
    fileExtensions: [],
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
    ]
  },
  {
    name: 'js-config',
    fileExtensions: [],
    fileNames: ['jsconfig.json']
  },
  {
    name: 'svelte-config',
    fileExtensions: [],
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
    fileExtensions: [],
    fileNames: ['bicepconfig.json']
  },
  {
    name: 'gitlab',
    fileExtensions: ['gitlab-ci.yml']
  }
];

export { fileIcon };