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
    theme: 'dark',
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
  },
  {
    name: 'prisma',
    fileName: ['prisma.yml', 'prisma.config.ts'],
    fileExtension: ['prisma'],
    theme: 'dark'
  },
  {
    name: 'copilot',
    fileName: ['copilot-instructions.md', '.copilotignore'],
    theme: 'dark'
  },
  {
    name: 'assembly',
    fileExtension: [
      'asm',
      'a51',
      'inc',
      'nasm',
      's',
      'ms',
      'agc',
      'ags',
      'aea',
      'argus',
      'mitigus',
      'binsource'
    ]
  },
  {
    name: 'changelog',
    fileName: [
      'changelog',
      'changelog.md',
      'changelog.rst',
      'changelog.txt',
      'changes',
      'changes.md',
      'changes.rst',
      'changes.txt'
    ]
  },
  {
    name: 'favicon',
    fileName: ['favicon.ico']
  },
  {
    name: 'authors',
    fileName: [
      'authors.md',
      'authors.rst',
      'authors.txt',
      'authors',
      'contributors.md',
      'contributors.rst',
      'contributors.txt',
      'contributors'
    ]
  },
  {
    name: 'certificate',
    fileExtension: [
      'cer',
      'cert',
      'crt'
    ]
  },
  {
    name: 'codeowners',
    fileName: ['codeowners', 'OWNERS']
  },
  {
    name: 'conduct',
    fileName: [
      'code_of_conduct.md',
      'code_of_conduct.txt',
      'code_of_conduct'
    ]
  },
  {
    name: 'commitlint',
    fileName: ['.commitlint.yaml', '.commitlint.yml']
  },
  {
    name: 'commitlint',
    fileExtension: [
      'commitlintrc',
      'commitlintrc.json',
      'commitlintrc.yaml',
      'commitlintrc.yml',
      'commitlintrc.js',
      'commitlintrc.cjs',
      'commitlintrc.mjs',
      'commitlintrc.ts',
      'commitlintrc.cts'
    ],
    fileName: [
      '.commitlintrc',
      '.commitlintrc.json',
      '.commitlintrc.yaml',
      '.commitlintrc.yml',
      '.commitlintrc.js',
      '.commitlintrc.cjs',
      '.commitlintrc.mjs',
      '.commitlintrc.ts',
      '.commitlintrc.cts',
      'commitlint.config.js',
      'commitlint.config.cjs',
      'commitlint.config.mjs',
      'commitlint.config.ts',
      'commitlint.config.cts'
    ]
  },
  {
    name: 'commitizen',
    fileName: [
      '.czrc',
      '.cz.json',
      '.cz.toml',
      '.cz.yaml',
      '.cz.yml',
      'cz.json',
      'cz.toml',
      'cz.yaml',
      'cz.yml'
    ]
  },
  {
    name: 'gitlys',
    fileName: ['.gitlys.json']
  },
  {
    name: 'contributing',
    fileName: [
      'contributing.md',
      'contributing.rst',
      'contributing.txt',
      'contributing'
    ]
  },
  {
    name: 'kotlin',
    fileExtension: ['kt', 'kts']
  },
  {
    name: 'arch',
    fileExtension: ['pkgbuild']
  },
  {
    name: 'babel',
    fileExtension: [
      'babelrc',
      'babelrc.json',
      'babelrc.js',
      'babelrc.cjs',
      'babelrc.mjs',
      'babelrc.cts'
    ],
    fileName: [
      '.babelrc',
      '.babelrc.json',
      '.babelrc.js',
      '.babelrc.cjs',
      '.babelrc.mjs',
      '.babelrc.cts',
      'babel.config.js',
      'babel.config.json',
      'babel.config.cjs',
      'babel.config.mjs',
      'babel.config.ts',
      'babel.config.cts'
    ]
  },
  {
    name: 'aws',
    fileExtension: ['aws', 'cdk'],
    fileName: [
      '.aws',
      'aws.config',
      'aws.json',
      'aws-credentials',
      'aws-config'
    ]
  },
  {
    name: 'docker',
    fileExtension: [
      'dockerignore',
      'dockerfile',
      'docker-compose.yml',
      'docker-compose.yaml',
      'containerignore',
      'containerfile',
      'compose.yaml',
      'compose.yml'
    ],
    fileName: [
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
    name: 'markdown',
    fileExtension: [
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
    name: 'readme',
    fileName: [
      'readme.md',
      'readme.rst',
      'readme.txt',
      'readme'
    ]
  },
  {
    name: 'blender',
    fileExtension: [
      'blend',
      'blend1',
      'blend2'
    ]
  },
  {
    name: 'bash',
    fileExtension: [
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
    fileName: [
      'commit-msg',
      'pre-commit',
      'pre-push',
      'post-merge',
      '.envrc',
      '.hushlogin',
      'APKBUILD',
      'PKGBUILD',
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
    name: 'exe',
    fileExtension: ['exe', 'msi']
  },
  {
    name: 'image',
    fileExtension: [
      'png',
      'jpeg',
      'jpg',
      'gif',
      'ico',
      'tif',
      'tiff',
      'ami',
      'apx',
      'avif',
      'bmp',
      'bpg',
      'brk',
      'cur',
      'dds',
      'exr',
      'fpx',
      'gbr',
      'img',
      'jbig2',
      'jb2',
      'jng',
      'jxl',
      'jxr',
      'pgf',
      'pic',
      'raw',
      'webp',
      'eps',
      'afphoto',
      'ase',
      'aseprite',
      'clip',
      'cpt',
      'heif',
      'heic',
      'kra',
      'mdp',
      'ora',
      'pdn',
      'reb',
      'sai',
      'tga',
      'xcf',
      'jfif',
      'ppm',
      'pbm',
      'pgm',
      'pnm',
      'icns',
      '3fr',
      'ari',
      'arw',
      'bay',
      'braw',
      'crw',
      'cr2',
      'cr3',
      'cap',
      'data',
      'dcs',
      'dcr',
      'dng',
      'drf',
      'eip',
      'erf',
      'fff',
      'gpr',
      'iiq',
      'k25',
      'kdc',
      'mdc',
      'mef',
      'mos',
      'mrw',
      'nef',
      'nrw',
      'obm',
      'orf',
      'pef',
      'ptx',
      'pxn',
      'r3d',
      'raf',
      'rwl',
      'rw2',
      'rwz',
      'sr2',
      'srf',
      'srw',
      'x3f',
      'ktx',
      'ktx2'
    ]
  },
  {
    name: 'audio',
    fileExtension: [
      '8svx',
      'aa',
      'aac',
      'aax',
      'ac3',
      'aif',
      'aiff',
      'alac',
      'amr',
      'ape',
      'caf',
      'cda',
      'cdr',
      'dss',
      'ec3',
      'efs',
      'enc',
      'flac',
      'flp',
      'gp',
      'gsm',
      'it',
      'm3u',
      'm3u8',
      'm4a',
      'm4b',
      'm4p',
      'm4r',
      'mid',
      'mka',
      'mmf',
      'mod',
      'mp3',
      'mpc',
      'mscz',
      'mtm',
      'mui',
      'musx',
      'mxl',
      'nsa',
      'opus',
      'pkf',
      'qcp',
      'ra',
      'rf64',
      'rip',
      'sdt',
      'sesx',
      'sf2',
      'stap',
      'tg',
      'voc',
      'vqf',
      'wav',
      'weba',
      'wfp',
      'wma',
      'wpl',
      'wproj',
      'wv'
    ]
  },
  {
    name: 'video',
    fileExtension: [
      'webm',
      'mkv',
      'flv',
      'vob',
      'ogv',
      'ogg',
      'gifv',
      'avi',
      'mov',
      'qt',
      'wmv',
      'yuv',
      'rm',
      'rmvb',
      'mp4',
      'm4v',
      'mpg',
      'mp2',
      'mpeg',
      'mpe',
      'mpv',
      'm2v'
    ]
  }
];

export { fileIcon };