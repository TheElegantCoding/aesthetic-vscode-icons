// oxlint-disable max-lines
const documentIcon = [
  {
    name: 'authors',
    fileNames: [
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
    fileExtensions: ['cer', 'cert', 'crt', 'license'],
    fileNames: [
      'copying',
      'copying.md',
      'copying.rst',
      'copying.txt',
      'copyright',
      'copyright.md',
      'copyright.rst',
      'copyright.txt',
      'license',
      'license-agpl',
      'license-apache',
      'license-bsd',
      'license-mit',
      'license-gpl',
      'license-lgpl',
      'license.md',
      'license.rst',
      'license.txt',
      'licence',
      'licence-agpl',
      'licence-apache',
      'licence-bsd',
      'licence-mit',
      'licence-gpl',
      'licence-lgpl',
      'licence.md',
      'licence.rst',
      'licence.txt'
    ]
  },
  {
    name: 'changelog',
    fileNames: [
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
    name: 'codeowners',
    fileNames: ['codeowners', 'OWNERS']
  },
  {
    name: 'commitizen',
    fileNames: ['.czrc', '.cz.json', '.cz.toml', '.cz.yaml', '.cz.yml', 'cz.json', 'cz.toml', 'cz.yaml', 'cz.yml']
  },
  {
    name: 'commitlint',
    fileExtensions: [],
    fileNames: [
      'commitlint.config.js',
      'commitlint.config.mjs',
      'commitlint.config.cjs',
      'commitlint.config.ts',
      'commitlint.config.mts',
      'commitlint.config.cts',
      '.commitlintrc',
      '.commitlintrc.js',
      '.commitlintrc.mjs',
      '.commitlintrc.cjs',
      '.commitlintrc.ts',
      '.commitlintrc.cts',
      '.commitlintrc.json',
      '.commitlintrc.yaml',
      '.commitlintrc.yml'
    ]
  },
  {
    name: 'conduct',
    fileNames: ['code_of_conduct.md', 'code_of_conduct.txt', 'code_of_conduct']
  },
  {
    name: 'contributing',
    fileNames: ['contributing.md', 'contributing.rst', 'contributing.txt', 'contributing']
  },
  {
    name: 'dependabot',
    fileNames: ['dependabot.yml', 'dependabot.yaml']
  },
  {
    name: 'exe',
    fileExtensions: ['exe', 'msi']
  },
  {
    name: 'favicon',
    fileNames: ['favicon.ico']
  },
  {
    name: 'github-funding',
    fileNames: ['.github/FUNDING.yml', '.github/FUNDING.yaml']
  },
  {
    name: 'gitlys',
    fileNames: ['.gitlys.json']
  },
  {
    name: 'htaccess',
    fileNames: ['.htaccess']
  },
  {
    name: 'install',
    fileNames: ['install', 'installation']
  },
  {
    name: 'readme',
    fileNames: ['readme.md', 'readme.rst', 'readme.txt', 'readme']
  },
  {
    name: 'renovate',
    fileNames: ['.renovaterc', '.renovaterc.json', 'renovate-config.json', 'renovate.json', 'renovate.json5']
  },
  {
    name: 'robots',
    fileNames: ['robots.txt']
  },
  {
    name: 'routing',
    fileExtensions: [
      'routing.ts',
      'routing.tsx',
      'routing.js',
      'routing.jsx',
      'route.ts',
      'route.tsx',
      'route.js',
      'route.jsx',
      'routes.ts',
      'routes.tsx',
      'routes.js',
      'routes.jsx'
    ],
    fileNames: [
      'router.js',
      'router.jsx',
      'router.ts',
      'router.tsx',
      'route.js',
      'route.jsx',
      'route.ts',
      'route.tsx',
      'routes.js',
      'routes.jsx',
      'routes.ts',
      'routes.tsx'
    ]
  },
  {
    name: 'test-ts',
    fileExtensions: [
      'spec.ts',
      'spec.cts',
      'spec.mts',
      'cy.ts',
      'e2e-spec.ts',
      'e2e-spec.cts',
      'e2e-spec.mts',
      'test.ts',
      'test.cts',
      'test.mts',
      'ts.snap',
      'cts.snap',
      'mts.snap',
      'spec-d.ts',
      'test-d.ts'
    ]
  },
  {
    name: 'test-tsx',
    fileExtensions: [
      'spec.tsx',
      'test.tsx',
      'tsx.snap',
      'spec.jsx',
      'test.jsx',
      'jsx.snap',
      'cy.jsx',
      'cy.tsx',
      'spec-d.tsx',
      'test-d.tsx'
    ]
  },
  {
    name: 'test',
    fileExtensions: [
      'spec.js',
      'spec.cjs',
      'spec.mjs',
      'e2e-spec.js',
      'e2e-spec.cjs',
      'e2e-spec.mjs',
      'test.js',
      'test.cjs',
      'test.mjs',
      'js.snap',
      'cjs.snap',
      'mjs.snap',
      'cy.js'
    ]
  },
  {
    name: 'zip',
    fileExtensions: [
      'zip',
      'z',
      'tar',
      'gz',
      'xz',
      'lz',
      'liz',
      'lzma',
      'lzma2',
      'lz4',
      'lz5',
      'lzh',
      'lha',
      'br',
      'bz2',
      'bzip2',
      'gzip',
      'brotli',
      '7z',
      '001',
      'rar',
      'far',
      'tz',
      'taz',
      'tlz',
      'txz',
      'tgz',
      'tpz',
      'tbz',
      'tbz2',
      'zst',
      'zstd',
      'tzst',
      'tzstd',
      'cab',
      'cpio',
      'rpm',
      'deb',
      'arj',
      'wim',
      'swm',
      'esd',
      'fat',
      'xar',
      'ntfs',
      'hfs',
      'squashfs',
      'apfs'
    ]
  },
  {
    name: 'database',
    fileExtensions: [
      'pdb',
      'sql',
      'pks',
      'pkb',
      'accdb',
      'mdb',
      'sqlite',
      'sqlite3',
      'pgsql',
      'postgres',
      'plpgsql',
      'psql',
      'db',
      'db3',
      'dblite',
      'dblite3',
      'debugsymbols',
      'odb',
      'accde',
      'adp',
      'bak',
      'bdb',
      'dbf',
      'fdb',
      'feather',
      'gdb',
      'ibd',
      'mdf',
      'mde',
      'myd',
      'myi',
      'ndf',
      'orc',
      'parquet',
      'sdf',
      'ldf',
      'frm',
      'kdbx',
      'dsql'
    ]
  },
  {
    name: 'email',
    fileExtensions: ['edb', 'eml', 'emlx', 'ics', 'mbox', 'msg', 'oft', 'olm', 'ost', 'p7s', 'pst', 'rpmsg', 'tnef'],
    fileNames: ['.mailmap']
  },
  {
    name: 'github-action',
    fileNames: ['action.yml', 'action.yaml']
  },
  {
    name: 'hash',
    fileExtensions: [
      'md5',
      'sha1',
      'sha224',
      'sha256',
      'sha384',
      'sha512',
      'sha256sum',
      'sha512sum',
      'md5sum',
      'checksum'
    ],
    fileNames: ['MD5SUMS', 'SHA1SUMS', 'SHA256SUMS', 'SHA512SUMS', 'CHECKSUMS', 'checksums.txt', 'checksum.txt']
  },
  {
    name: 'http',
    fileExtensions: ['http', 'rest', 'har'],
    fileNames: ['.curlrc', '_curlrc', 'http-client.env.json', 'http-client.private.env.json']
  },
  {
    name: 'i18n',
    fileExtensions: ['pot', 'po', 'mo', 'lang', 'xlf']
  },
  {
    name: 'key',
    fileExtensions: ['pub', 'key', 'pem', 'asc', 'gpg', 'passwd', 'secret'],
    fileNames: ['.htpasswd', '.secrets']
  },
  {
    name: 'lock',
    fileExtensions: ['lock'],
    fileNames: ['security.md', 'security.txt', 'security']
  },
  {
    name: 'log',
    fileExtensions: ['log']
  },
  {
    name: 'todo',
    fileExtensions: ['todo'],
    fileNames: ['todo.md', 'todos.md']
  },
  {
    name: 'verified',
    fileExtensions: ['sigstore.json']
  },
  {
    name: 'virtual',
    fileExtensions: ['vdi', 'vbox', 'vbox-prev']
  },
  {
    name: 'font-woff',
    fileExtensions: ['woff', 'woff2']
  },
  {
    name: 'font-ttf',
    fileExtensions: ['ttf', 'ttc']
  },
  {
    name: 'font-otf',
    fileExtensions: ['otf', 'otc']
  },
  {
    name: 'font-eot',
    fileExtensions: ['eot']
  },
  {
    name: 'font',
    fileExtensions: ['fnt', 'fon', 'dfont', 'pfb', 'pfm', 'pfa', 'afm', 'bdf', 'pcf', 'psf', 'sfd']
  },
  {
    name: 'svg',
    fileExtensions: ['svg']
  },
  {
    name: 'image-avif',
    fileExtensions: ['avif', 'avifs']
  },
  {
    name: 'image-gif',
    fileExtensions: ['gif']
  },
  {
    name: 'image-jpg',
    fileExtensions: ['jpg', 'jpeg', 'jpe', 'jfif']
  },
  {
    name: 'image-png',
    fileExtensions: ['png', 'apng']
  },
  {
    name: 'image-webp',
    fileExtensions: ['webp']
  },
  {
    name: 'image',
    fileExtensions: [
      'bmp',
      'dib',
      'ico',
      'cur',
      'icns',
      'tif',
      'tiff',
      'heic',
      'heif',
      'jxl',
      'jp2',
      'j2k',
      'tga',
      'dds',
      'hdr',
      'exr',
      'pbm',
      'pgm',
      'ppm',
      'pnm',
      'xbm',
      'xpm',
      'raw',
      'dng',
      'cr2',
      'nef',
      'arw'
    ]
  }
];

export { documentIcon };