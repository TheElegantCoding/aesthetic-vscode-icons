// oxlint-disable max-lines
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
  },
  {
    name: 'css-map',
    fileExtensions: ['css.map']
  },
  {
    name: 'css',
    fileExtensions: ['css']
  },
  {
    name: 'esbuild',
    fileExtensions: [],
    fileNames: [
      'esbuild.config.js',
      'esbuild.config.mjs',
      'esbuild.config.cjs',
      'esbuild.config.ts',
      'esbuild.config.mts',
      'esbuild.config.cts',
      'esbuild.js',
      'esbuild.mjs',
      'esbuild.cjs',
      'esbuild.ts'
    ]
  },
  {
    name: 'firebase',
    fileNames: ['firebase.config.js', 'firebase.json', '.firebaserc', 'firestore.rules', 'firestore.indexes.json']
  },
  {
    name: 'gradle',
    fileExtensions: ['gradle'],
    fileNames: ['gradle.properties', 'gradlew', 'gradle-wrapper.properties', 'gradlew.bat']
  },
  {
    name: 'javascript-map',
    fileExtensions: ['js.map', 'mjs.map', 'cjs.map']
  },
  {
    name: 'javascript',
    fileExtensions: ['esx', 'mjs', 'js', 'cjs', 'es6', 'pac'],
    fileNames: ['jakefile']
  },
  {
    name: 'json',
    fileExtensions: [
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
    fileNames: ['.jscsrc', '.jshintrc', '.jsbeautifyrc', '.esformatter', 'cdp.pid', '.whitesource']
  },
  {
    name: 'jupyter',
    fileExtensions: ['ipynb']
  },
  {
    name: 'less',
    fileExtensions: ['less']
  },
  {
    name: 'php',
    fileExtensions: ['php', 'php4', 'php5', 'phtml', 'ctp']
  },
  {
    name: 'stencil',
    fileNames: ['stencil.config.js', 'stencil.config.ts']
  },
  {
    name: 'typescript-def',
    fileExtensions: ['d.ts', 'd.cts', 'd.mts', 'd.ets']
  },
  {
    name: 'typescript',
    fileExtensions: ['ts', 'cts', 'mts']
  },
  {
    name: 'apollo',
    fileNames: ['apollo.config.js']
  },
  {
    name: 'assembly',
    fileExtensions: ['asm', 'a51', 'inc', 'nasm', 's', 'ms', 'agc', 'ags', 'aea', 'argus', 'mitigus', 'binsource']
  },
  {
    name: 'biome',
    fileNames: ['biome.json', 'biome.jsonc', '.biome.json', '.biome.jsonc']
  },
  {
    name: 'blazor',
    fileExtensions: ['razor', 'razor.cs', 'razor.css', 'razor.js'],
    fileNames: ['_Imports.razor', '_Host.cshtml']
  },
  {
    name: 'craco',
    fileExtensions: [],
    fileNames: [
      'craco.config.js',
      'craco.config.cjs',
      'craco.config.ts',
      '.cracorc',
      '.cracorc.js',
      '.cracorc.json',
      '.cracorc.yaml',
      '.cracorc.yml'
    ]
  },
  {
    name: 'django',
    fileExtensions: ['djt']
  },
  {
    name: 'elixir',
    fileExtensions: ['ex', 'exs', 'eex', 'leex', 'heex']
  },
  {
    name: 'nginx',
    fileNames: ['nginx.conf'],
    fileExtensions: ['nginx', 'nginxconf', 'nginxconfig']
  },
  {
    name: 'nuget',
    fileNames: ['nuget.config', '.nuspec', 'nuget.exe'],
    fileExtensions: ['nupkg', 'nuspec']
  },
  {
    name: 'nuxt',
    fileNames: ['nuxt.config.js', 'nuxt.config.ts', '.nuxtignore', '.nuxtrc']
  },
  {
    name: 'ocaml',
    fileExtensions: ['ml', 'mli', 'cmx']
  },
  {
    name: 'perl',
    fileExtensions: ['pm', 'raku', 'pod', 'psgi', 't']
  },
  {
    name: 'qml',
    fileExtensions: ['qml', 'qmltypes', 'qmlproject'],
    fileNames: ['qmldir']
  },
  {
    name: 'sass',
    fileExtensions: ['scss', 'sass']
  },
  {
    name: 'bitbucket',
    fileExtensions: [],
    fileNames: ['bitbucket-pipelines.yml', 'bitbucket-pipelines.yaml']
  },
  {
    name: 'claude',
    fileNames: ['CLAUDE.md', 'CLAUDE.local.md']
  },
  {
    name: 'cobol',
    fileExtensions: ['cob', 'cbl']
  },
  {
    name: 'cypress',
    fileExtensions: ['cy.js', 'cy.jsx', 'cy.ts', 'cy.tsx'],
    fileNames: [
      'cypress.config.js',
      'cypress.config.mjs',
      'cypress.config.cjs',
      'cypress.config.ts',
      'cypress.config.mts',
      'cypress.config.cts',
      'cypress.json',
      'cypress.env.json'
    ]
  },
  {
    name: 'docker',
    fileExtensions: [
      'dockerignore',
      'dockerfile',
      'docker-compose.yml',
      'docker-compose.yaml',
      'containerignore',
      'containerfile',
      'compose.yaml',
      'compose.yml'
    ],
    fileNames: [
      'dockerfile',
      'dockerfile.prod',
      'dockerfile.production',
      'dockerfile.alpha',
      'dockerfile.beta',
      'dockerfile.stage',
      'dockerfile.staging',
      'dockerfile.dev',
      'dockerfile.development',
      'dockerfile.local',
      'dockerfile.test',
      'dockerfile.testing',
      'dockerfile.ci',
      'dockerfile.web',
      'dockerfile.windows',
      'dockerfile.worker',

      'docker-compose.yml',
      'docker-compose.override.yml',
      'docker-compose.prod.yml',
      'docker-compose.production.yml',
      'docker-compose.alpha.yml',
      'docker-compose.beta.yml',
      'docker-compose.stage.yml',
      'docker-compose.staging.yml',
      'docker-compose.dev.yml',
      'docker-compose.development.yml',
      'docker-compose.local.yml',
      'docker-compose.test.yml',
      'docker-compose.testing.yml',
      'docker-compose.ci.yml',
      'docker-compose.web.yml',
      'docker-compose.worker.yml',

      'docker-compose.yaml',
      'docker-compose.override.yaml',
      'docker-compose.prod.yaml',
      'docker-compose.production.yaml',
      'docker-compose.alpha.yaml',
      'docker-compose.beta.yaml',
      'docker-compose.stage.yaml',
      'docker-compose.staging.yaml',
      'docker-compose.dev.yaml',
      'docker-compose.development.yaml',
      'docker-compose.local.yaml',
      'docker-compose.test.yaml',
      'docker-compose.testing.yaml',
      'docker-compose.ci.yaml',
      'docker-compose.web.yaml',
      'docker-compose.worker.yaml',

      'containerfile',
      'containerfile.prod',
      'containerfile.production',
      'containerfile.alpha',
      'containerfile.beta',
      'containerfile.stage',
      'containerfile.staging',
      'containerfile.dev',
      'containerfile.development',
      'containerfile.local',
      'containerfile.test',
      'containerfile.testing',
      'containerfile.ci',
      'containerfile.web',
      'containerfile.worker',

      'compose.yaml',
      'compose.override.yaml',
      'compose.prod.yaml',
      'compose.production.yaml',
      'compose.alpha.yaml',
      'compose.beta.yaml',
      'compose.stage.yaml',
      'compose.staging.yaml',
      'compose.dev.yaml',
      'compose.development.yaml',
      'compose.local.yaml',
      'compose.test.yaml',
      'compose.testing.yaml',
      'compose.ci.yaml',
      'compose.web.yaml',
      'compose.worker.yaml',

      'compose.yml',
      'compose.override.yml',
      'compose.prod.yml',
      'compose.production.yml',
      'compose.alpha.yml',
      'compose.beta.yml',
      'compose.stage.yml',
      'compose.staging.yml',
      'compose.dev.yml',
      'compose.development.yml',
      'compose.local.yml',
      'compose.test.yml',
      'compose.testing.yml',
      'compose.ci.yml',
      'compose.web.yml',
      'compose.worker.yml'
    ]
  },
  {
    name: 'drawio',
    fileExtensions: ['drawio', 'dio']
  },
  {
    name: 'drizzle',
    fileNames: [
      'drizzle.config.ts',
      'drizzle.config.dev.ts',
      'drizzle.config.prod.ts',
      'drizzle.config.js',
      'drizzle.config.dev.js',
      'drizzle.config.prod.js',
      'drizzle.config.json',
      'drizzle.config.dev.json',
      'drizzle.config.prod.json'
    ]
  },
  {
    name: 'ember',
    fileNames: ['.ember-cli', '.ember-cli.js', 'ember-cli-builds.js']
  },
  {
    name: 'erlang',
    fileExtensions: ['erl']
  },
  {
    name: 'graphql',
    fileExtensions: ['graphql', 'gql', 'graphqls'],
    fileNames: [
      'graphql.config.js',
      'graphql.config.cjs',
      'graphql.config.ts',
      'graphql.config.json',
      'graphql.config.yaml',
      'graphql.config.yml',
      '.graphqlrc',
      '.graphqlrc.js',
      '.graphqlrc.cjs',
      '.graphqlrc.ts',
      '.graphqlrc.json',
      '.graphqlrc.yaml',
      '.graphqlrc.yml',
      'codegen.ts',
      'codegen.yml',
      'codegen.yaml'
    ]
  },
  {
    name: 'latex',
    fileExtensions: ['tex', 'ltx', 'cls', 'clo', 'latex', 'aux', 'tikz', 'synctex', 'synctex.gz']
  },
  {
    name: 'react',
    fileExtensions: ['tsx']
  },
  {
    name: 'react-jsx',
    fileExtensions: ['jsx']
  },
  {
    name: 'lua',
    fileExtensions: ['lua'],
    fileNames: ['.luacheckrc']
  },
  {
    name: 'angular',
    fileNames: ['angular-cli.json', '.angular-cli.json', 'angular.json', 'ng-package.json']
  },
  {
    name: 'babel',
    fileExtensions: [],
    fileNames: [
      'babel.config.js',
      'babel.config.mjs',
      'babel.config.cjs',
      'babel.config.cts',
      'babel.config.ts',
      'babel.config.json',
      '.babelrc',
      '.babelrc.js',
      '.babelrc.mjs',
      '.babelrc.cjs',
      '.babelrc.cts',
      '.babelrc.json'
    ]
  },
  {
    name: 'ejs',
    fileExtensions: ['ejs']
  },
  {
    name: 'fortran',
    fileExtensions: ['f', 'f77', 'f90', 'f95', 'f03', 'f08']
  },
  {
    name: 'gamemaker',
    fileExtensions: ['gml', 'yy', 'yyp', 'yyz']
  },
  {
    name: 'gatsby',
    fileNames: [
      'gatsby-config.js',
      'gatsby-config.mjs',
      'gatsby-config.ts',
      'gatsby-node.js',
      'gatsby-node.mjs',
      'gatsby-node.ts',
      'gatsby-browser.js',
      'gatsby-browser.tsx',
      'gatsby-ssr.js',
      'gatsby-ssr.tsx'
    ]
  },
  {
    name: 'gitpod',
    fileNames: ['.gitpod.yml']
  },
  {
    name: 'go',
    fileExtensions: ['go']
  },
  {
    name: 'go-mod',
    fileNames: ['go.mod', 'go.work', 'go.work.sum']
  },
  {
    name: 'go-sum',
    fileNames: ['go.sum']
  },
  {
    name: 'handlebars',
    fileExtensions: ['hbs', 'mustache', 'handlebars', 'hjs']
  },
  {
    name: 'haskell',
    fileExtensions: ['hs', 'lhs']
  },
  {
    name: 'jest',
    fileNames: [
      'jest.config.js',
      'jest.config.cjs',
      'jest.config.mjs',
      'jest.config.ts',
      'jest.config.cts',
      'jest.config.mts',
      'jest.config.json',
      'jest.e2e.config.js',
      'jest.e2e.config.cjs',
      'jest.e2e.config.mjs',
      'jest.e2e.config.ts',
      'jest.e2e.config.cts',
      'jest.e2e.config.mts',
      'jest.e2e.config.json',
      'jest.e2e.json',
      'jest-unit.config.js',
      'jest-e2e.config.js',
      'jest-e2e.config.cjs',
      'jest-e2e.config.mjs',
      'jest-e2e.config.ts',
      'jest-e2e.config.cts',
      'jest-e2e.config.mts',
      'jest-e2e.config.json',
      'jest-e2e.json',
      'jest-github-actions-reporter.js',
      'jest.setup.js',
      'jest.setup.ts',
      'jest.json',
      '.jestrc',
      '.jestrc.js',
      '.jestrc.json',
      'jest.teardown.js',
      'jest-preset.json',
      'jest-preset.js',
      'jest-preset.cjs',
      'jest-preset.mjs',
      'jest.preset.js',
      'jest.preset.mjs',
      'jest.preset.cjs',
      'jest.preset.json'
    ]
  },
  {
    name: 'netlify',
    light: true,
    fileNames: ['netlify.json', 'netlify.yml', 'netlify.yaml', 'netlify.toml']
  },
  {
    name: 'nx',
    fileNames: ['nx.json', '.nxignore']
  },
  {
    name: 'powershell',
    fileExtensions: ['ps1', 'psm1', 'psd1', 'ps1xml', 'psc1', 'pssc', 'psrc']
  },
  {
    name: 'pytorch',
    fileExtensions: ['pt', 'pth', 'pwf']
  },
  {
    name: 'quasar',
    fileNames: ['quasar.conf.js', 'quasar.config.js', 'quasar.conf.ts', 'quasar.config.ts', 'quasar.config.cjs']
  },
  {
    name: 'rome',
    fileNames: ['rome.json']
  },
  {
    name: 'sentry',
    fileExtensions: [],
    fileNames: [
      '.sentryclirc',
      'sentry.properties',
      'sentry.config.js',
      'sentry.config.ts',
      'sentry.client.config.js',
      'sentry.client.config.ts',
      'sentry.server.config.js',
      'sentry.server.config.ts',
      'sentry.edge.config.js',
      'sentry.edge.config.ts'
    ]
  },
  {
    name: 'stylus',
    fileExtensions: ['styl']
  },
  {
    name: 'swift',
    fileExtensions: ['swift', 'xcplayground', 'swiftdeps', 'swiftdoc', 'swiftmodule', 'swiftsourceinfo'],
    fileNames: ['.swift-format', '.swift-version', '.swiftformat', '.xcode-version']
  },
  {
    name: 'symfony',
    fileExtensions: [],
    fileNames: [
      'symfony.lock',
      '.symfony.local.yaml',
      '.symfony.local.yml',
      '.symfony.cloud.yaml',
      '.symfony.cloud.yml'
    ]
  },
  {
    name: 'terraform',
    fileExtensions: ['tf', 'tf.json', 'tfvars', 'tfstate', 'tfbackend', 'terraformignore']
  },
  {
    name: 'terraform-vars',
    fileExtensions: ['tfvars']
  },
  {
    name: 'unity',
    fileExtensions: ['unity', 'unitypackage']
  },
  {
    name: 'vim',
    fileExtensions: ['vimrc', 'gvimrc', 'exrc', 'vim', 'viminfo']
  },
  {
    name: 'zig',
    fileExtensions: ['zig', 'zon']
  },
  {
    name: 'arduino',
    fileExtensions: ['ino']
  },
  {
    name: 'clojure',
    fileExtensions: ['clj', 'cljs', 'cljc', 'cljx', 'clojure', 'edn']
  },
  {
    name: 'elm',
    fileExtensions: ['elm']
  },
  {
    name: 'excalidraw',
    fileNames: ['excalidraw', 'excalidraw.json', 'excalidraw.svg', 'excalidraw.png'],
    fileExtensions: ['excalidraw', 'excalidraw.json', 'excalidraw.svg', 'excalidraw.png']
  },
  {
    name: 'gulp',
    fileNames: [
      'gulpfile.js',
      'gulpfile.mjs',
      'gulpfile.ts',
      'gulpfile.cts',
      'gulpfile.mts',
      'gulpfile.babel.js',
      'gulpfile.cjs'
    ]
  },
  {
    name: 'gemini',
    fileExtensions: ['gmi', 'gemini']
  },
  {
    name: 'ionic',
    fileNames: ['ionic.config.json', '.io-config.json']
  },
  {
    name: 'java',
    fileExtensions: ['java', 'jsp', 'jav']
  },
  {
    name: 'kotlin',
    fileExtensions: ['kt', 'kts']
  },
  {
    name: 'kubernetes',
    fileNames: ['k8s.yml', 'k8s.yaml', 'kubernetes.yml', 'kubernetes.yaml', '.k8s.yml', '.k8s.yaml']
  },
  {
    name: 'lighthouse',
    fileNames: [
      '.lighthouserc.js',
      'lighthouserc.js',
      '.lighthouserc.cjs',
      'lighthouserc.cjs',
      '.lighthouserc.json',
      'lighthouserc.json',
      '.lighthouserc.yml',
      'lighthouserc.yml',
      '.lighthouserc.yaml',
      'lighthouserc.yaml'
    ]
  },
  {
    name: 'mint',
    fileExtensions: ['mint']
  },
  {
    name: 'nest',
    fileNames: ['nest-cli.json', '.nest-cli.json', 'nestconfig.json', '.nestconfig.json']
  },
  {
    name: 'ruby',
    fileExtensions: ['rb', 'erb', 'rbs', 'gemspec', 'podspec', 'rake', 'rbi', 'rbx', 'rjs', 'ru'],
    fileNames: [
      '.ruby-version',
      'appraisals',
      'berksfile',
      'berksfile.lock',
      'brewfile',
      'capfile',
      'cheffile',
      'dangerfile',
      'deliverfile',
      'guardfile',
      'gymfile',
      'hobofile',
      'matchfile',
      'podfile',
      'puppetfile',
      'rakefile',
      'rantfile',
      'scanfile',
      'snapfile',
      'thorfile'
    ]
  },
  {
    name: 'scala',
    fileExtensions: ['scala', 'sc']
  },
  {
    name: 'sqlite',
    fileExtensions: [
      'sqlite',
      'sqlite3',
      'sqlitedb',
      'db3',
      's3db',
      'sl3',
      'sqlite-wal',
      'sqlite-shm',
      'sqlite-journal',
      'db-wal',
      'db-shm',
      'db-journal'
    ],
    fileNames: []
  },
  {
    name: 'stackblitz',
    fileNames: ['.stackblitzrc']
  },
  {
    name: 'storybook',
    fileExtensions: [
      'stories.js',
      'stories.jsx',
      'stories.mdx',
      'story.js',
      'story.jsx',
      'stories.ts',
      'stories.tsx',
      'story.ts',
      'story.tsx',
      'stories.svelte',
      'story.mdx',
      'stories.vue'
    ]
  },
  {
    name: 'sublime-text',
    fileExtensions: ['sublime-project', 'sublime-workspace']
  },
  {
    name: 'supabase',
    fileNames: ['supabase.js', 'supabase.ts', 'supabase.py']
  },
  {
    name: 'svelte',
    fileExtensions: ['svelte', 'svelte.js', 'svelte.ts']
  },
  {
    name: 'swc',
    fileExtensions: ['swcrc']
  },
  {
    name: 'tauri',
    fileNames: [
      'tauri.conf.json',
      'tauri.config.json',
      'tauri.linux.conf.json',
      'tauri.windows.conf.json',
      'tauri.macos.conf.json',
      '.taurignore'
    ],
    fileExtensions: ['tauri']
  },
  {
    name: 'toml',
    fileExtensions: ['toml', 'tosd'],
    light: true
  },
  {
    name: 'turbo',
    light: true,
    fileNames: ['turbo.json', 'turbo.jsonc']
  },
  {
    name: 'vlang',
    fileExtensions: ['v'],
    fileNames: ['vpkg.json', 'v.mod']
  },
  {
    name: 'vue',
    fileExtensions: ['vue']
  },
  {
    name: 'vuex-store',
    fileExtensions: ['store.js', 'store.ts'],
    fileNames: ['store.js', 'store.ts', 'vuex.js', 'vuex.ts', 'pinia.js', 'pinia.ts']
  },
  {
    name: 'aws',
    fileExtensions: [],
    fileNames: [
      'buildspec.yml',
      'buildspec.yaml',
      'appspec.yml',
      'appspec.yaml',
      'aws-exports.js',
      'aws-exports.ts',
      'samconfig.toml',
      'samconfig.yaml',
      'samconfig.yml',
      'cdk.json',
      'cdk.context.json',
      'Dockerrun.aws.json',
      '.ebignore'
    ]
  },
  {
    name: 'azure',
    fileExtensions: ['azcli']
  },
  {
    name: 'bash',
    fileExtensions: [
      'sh',
      'ksh',
      'csh',
      'tcsh',
      'zsh',
      'bash',
      'bat',
      'cmd',
      'awk',
      'fish',
      'exp',
      'nu',
      'xsh',
      'bash_aliases',
      'bash_login',
      'bash_logout',
      'bash_profile',
      'bashrc',
      'cshrc',
      'ebuild',
      'eclass',
      'profile',
      'tcshrc',
      'xprofile',
      'xsession',
      'xsessionrc',
      'yash_profile',
      'yashrc',
      'zlogin',
      'zlogout',
      'zprofile',
      'zsh-theme',
      'zshenv',
      'zshrc'
    ],
    fileNames: [
      'commit-msg',
      'pre-commit',
      'pre-push',
      'post-merge',
      '.envrc',
      '.hushlogin',
      'APKBUILD',
      'bashrc_Apple_Terminal',
      'zlogin',
      'zlogout',
      'zprofile',
      'zshenv',
      'zshrc',
      'zshrc_Apple_Terminal'
    ]
  },
  {
    name: 'bazel',
    fileExtensions: ['bzl', 'bazel'],
    fileNames: ['.bazelignore', '.bazelrc', '.bazelversion']
  },
  {
    name: 'bicep',
    fileExtensions: ['bicep']
  },
  {
    name: 'browserlist',
    fileNames: ['browserslist', '.browserslistrc']
  },
  {
    name: 'bun',
    fileNames: ['bunfig.toml', '.bun-version']
  },
  {
    name: 'csharp',
    fileExtensions: ['cs', 'csx', 'csharp']
  },
  {
    name: 'c',
    fileExtensions: ['c', 'i', 'mi']
  },
  {
    name: 'clangd',
    fileNames: ['.clangd']
  },
  {
    name: 'cmake',
    fileExtensions: ['cmake'],
    fileNames: ['cmakelists.txt', 'cmakecache.txt', 'CMakePresets.json']
  },
  {
    name: 'cpp',
    fileExtensions: [
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
    name: 'dart',
    fileExtensions: ['dart'],
    fileNames: ['.pubignore']
  },
  {
    name: 'dart-generated',
    fileExtensions: ['freezed.dart', 'g.dart']
  },
  {
    name: 'gcloud',
    fileExtensions: [],
    fileNames: [
      'app.yaml',
      'app.yml',
      'cloudbuild.yaml',
      'cloudbuild.yml',
      'cloudbuild.json',
      '.gcloudignore',
      'firestore.indexes.json',
      'storage.rules',
      'database.rules.json',
      'skaffold.yaml',
      'clouddeploy.yaml'
    ]
  },
  {
    name: 'godot',
    fileExtensions: ['gd']
  },
  {
    name: 'grunt',
    fileNames: [
      'gruntfile.js',
      'gruntfile.ts',
      'gruntfile.cjs',
      'gruntfile.cts',
      'gruntfile.coffee',
      'gruntfile.babel.js',
      'gruntfile.babel.ts',
      'gruntfile.babel.coffee'
    ]
  },
  {
    name: 'heroku',
    fileNames: ['procfile', 'procfile.windows']
  },
  {
    name: 'jenkins',
    fileNames: ['jenkinsfile'],
    fileExtensions: ['jenkinsfile', 'jenkins']
  },
  {
    name: 'julia',
    fileExtensions: ['jl']
  },
  {
    name: 'laravel',
    fileExtensions: ['blade.php', 'inky.php'],
    fileNames: ['artisan']
  },
  {
    name: 'makefile',
    fileExtensions: ['mk'],
    fileNames: ['makefile', 'gnumakefile', 'kbuild']
  },
  {
    name: 'markdown',
    fileExtensions: [
      'md',
      'markdown',
      'rst',
      'copilotmd',
      'litcoffee',
      'markdn',
      'mdown',
      'mdtext',
      'mdtxt',
      'mdwn',
      'mkd',
      'mkdn',
      'ronn',
      'workbook'
    ]
  },
  {
    name: 'matlab',
    fileExtensions: ['mat', 'mlx', 'mlapp', 'mexa64', 'mexw64', 'mexmaca64', 'slx', 'slxp']
  },
  {
    name: 'mdx',
    fileExtensions: ['mdx']
  },
  {
    name: 'neovim',
    fileNames: ['init.lua', 'init.vim', '.nvimrc', '.nvim.lua', 'lazy-lock.json']
  },
  {
    name: 'oxc',
    fileNames: [
      '.oxlintrc.json',
      '.oxlintrc.jsonc',
      '.oxfmtrc.json',
      '.oxfmtrc.jsonc',
      'oxlint.config.ts',
      'oxfmt.config.ts'
    ]
  },
  {
    name: 'playwright',
    fileNames: [
      'playwright.config.js',
      'playwright.config.cjs',
      'playwright.config.mjs',
      'playwright.config.ts',
      'playwright.config.cts',
      'playwright.config.mts',
      'playwright.config.base.js',
      'playwright.config.base.cjs',
      'playwright.config.base.mjs',
      'playwright.config.base.ts',
      'playwright.config.base.cts',
      'playwright.config.base.mts',
      'playwright-ct.config.js',
      'playwright-ct.config.cjs',
      'playwright-ct.config.mjs',
      'playwright-ct.config.ts',
      'playwright-ct.config.cts',
      'playwright-ct.config.mts'
    ]
  },
  {
    name: 'prettier',
    fileExtensions: [],
    fileNames: [
      'prettier.config.js',
      'prettier.config.mjs',
      'prettier.config.cjs',
      'prettier.config.ts',
      'prettier.config.mts',
      'prettier.config.cts',
      '.prettierrc',
      '.prettierrc.js',
      '.prettierrc.mjs',
      '.prettierrc.cjs',
      '.prettierrc.ts',
      '.prettierrc.mts',
      '.prettierrc.cts',
      '.prettierrc.json',
      '.prettierrc.json5',
      '.prettierrc.yaml',
      '.prettierrc.yml',
      '.prettierrc.toml',
      '.prettierignore'
    ]
  },
  {
    name: 'pug',
    fileExtensions: ['jade', 'pug'],
    fileNames: ['.pug-lintrc', '.pug-lintrc.js', '.pug-lintrc.json']
  },
  {
    name: 'python',
    fileExtensions: ['py', 'cpy', 'gyp', 'gypi', 'ipy', 'pyi', 'pyt', 'pyw', 'rpy']
  },
  // {
  //   name: 'qwik',
  //   fileExtensions: ['tsx']
  // },
  // {
  //   name: 'solid',
  //   fileExtensions: ['tsx']
  // },
  {
    name: 'redis',
    fileExtensions: ['rdb', 'aof'],
    fileNames: ['redis.conf', 'redis-stack.conf', 'redis.windows.conf', 'sentinel.conf', 'dump.rdb', 'appendonly.aof']
  },
  {
    name: 'rollup',
    fileNames: [
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
    name: 'uml',
    fileExtensions: ['iuml', 'pu', 'puml', 'plantuml', 'wsd']
  },
  {
    name: 'vanilla-extract',
    fileExtensions: ['css.ts', 'css.js', 'css.cjs', 'css.mjs', 'css.tsx', 'css.jsx']
  },
  {
    name: 'visual-studio',
    fileExtensions: [
      'csproj',
      'ruleset',
      'sln',
      'slnf',
      'slnx',
      'suo',
      'vb',
      'vbs',
      'vcxitems',
      'vcxitems.filters',
      'vcxproj',
      'vcxproj.filters',
      'wixproj',
      'bas',
      'vba'
    ],
    fileNames: ['.vsconfig']
  },
  {
    name: 'webassembly',
    fileExtensions: ['wat', 'wasm']
  },
  {
    name: 'webpack',
    fileNames: [
      'webpack.config.js',
      'webpack.config.mjs',
      'webpack.config.cjs',
      'webpack.config.ts',
      'webpack.config.mts',
      'webpack.config.cts',
      'webpack.common.js',
      'webpack.common.ts',
      'webpack.dev.js',
      'webpack.dev.ts',
      'webpack.prod.js',
      'webpack.prod.ts',
      'webpack.base.js',
      'webpack.base.ts',
      'webpack.server.js',
      'webpack.server.ts',
      'webpack.client.js',
      'webpack.client.ts'
    ]
  },
  {
    name: 'wrangler',
    fileNames: ['wrangler.toml', 'wrangler.json', 'wrangler.jsonc']
  },
  {
    name: 'astro',
    light: true,
    fileExtensions: ['astro']
  },
  {
    name: 'circleci',
    fileNames: ['circle.yml'],
    light: true
  },
  {
    name: 'copilot',
    fileNames: ['copilot-instructions.md', '.copilotignore'],
    light: true
  },
  {
    name: 'cursor',
    fileNames: ['.cursorignore', '.cursorindexingignore', '.cursorrules', '.cursor', '.cursor.json', '.cursorrc'],
    light: true
  },
  {
    name: 'deno',
    fileNames: ['deno.json', 'deno.jsonc', 'deno.lock'],
    light: true
  },
  {
    name: 'expo',
    fileNames: ['eas.json', '.easignore'],
    light: true
  },
  {
    name: 'jinja',
    fileExtensions: ['jinja', 'jinja2', 'j2', 'jinja-html'],
    light: true
  },
  {
    name: 'next',
    fileNames: ['next.config.js', 'next.config.mjs', 'next.config.ts', 'next.config.mts'],
    light: true
  },
  {
    name: 'prisma',
    fileExtensions: ['prisma'],
    light: true,
    fileNames: [
      'prisma.config.js',
      'prisma.config.mjs',
      'prisma.config.cjs',
      'prisma.config.ts',
      'prisma.config.mts',
      'prisma.config.cts'
    ]
  },
  {
    name: 'remix',
    fileNames: ['remix.config.js', 'remix.config.ts'],
    light: true
  },
  {
    name: 'stylelint',
    light: true,
    fileNames: [
      'stylelint.config.js',
      'stylelint.config.mjs',
      'stylelint.config.cjs',
      'stylelint.config.ts',
      'stylelint.config.mts',
      'stylelint.config.cts',
      '.stylelintrc',
      '.stylelintrc.js',
      '.stylelintrc.mjs',
      '.stylelintrc.cjs',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintignore',
      '.stylelintcache'
    ]
  }
];

export { fileIcon };