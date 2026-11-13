import type { FileIconType } from '@src/type/file_icon_types';

const osIcon: FileIconType[] = [
  {
    name: 'apple',
    fileExtensions: [
      'dmg',
      'pkg',
      'plist',
      'mobileconfig',
      'webloc',
      'scpt',
      'scptd',
      'applescript',
      'workflow',
      'shortcut',
      'entitlements',
      'mobileprovision',
      'provisionprofile',
      'ipa'
    ],
    fileNames: [
      '.DS_Store',
      '.localized',
      '.apdisk',
      '.VolumeIcon.icns',
      '.metadata_never_index',
      '.com.apple.timemachine.donotpresent'
    ]
  },
  {
    name: 'android',
    fileExtensions: ['apk', 'aab', 'apks', 'xapk', 'dex', 'aidl', 'smali'],
    fileNames: [
      'AndroidManifest.xml',
      'proguard-rules.pro',
      'proguard-project.txt',
      'proguard.cfg',
      'local.properties',
      'google-services.json',
      'lint.xml',
      'lint-baseline.xml'
    ]
  },
  {
    name: 'arch',
    fileExtensions: [
      'pkg.tar.zst',
      'pkg.tar.xz',
      'pkg.tar.gz',
      'pkg.tar.bz2',
      'pkg.tar',
      'install',
      'hook',
      'pacnew',
      'pacsave',
      'pacorig'
    ],
    fileNames: [
      'PKGBUILD',
      '.SRCINFO',
      '.PKGINFO',
      '.BUILDINFO',
      '.MTREE',
      '.INSTALL',
      'pacman.conf',
      'makepkg.conf',
      'mkinitcpio.conf',
      'mirrorlist',
      'paru.conf'
    ]
  },
  {
    name: 'freebsd',
    fileExtensions: [],
    fileNames: [
      'rc.conf',
      'rc.conf.local',
      'loader.conf',
      'loader.conf.local',
      'make.conf',
      'src.conf',
      'pkg.conf',
      'periodic.conf',
      'freebsd-update.conf',
      'portsnap.conf',
      'devd.conf',
      'jail.conf',
      'pf.conf',
      'devfs.rules',
      'pkg-plist',
      'pkg-descr',
      'pkg-message',
      'distinfo',
      '+MANIFEST',
      '+COMPACT_MANIFEST'
    ]
  },
  {
    name: 'nix',
    fileExtensions: ['nix', 'drv'],
    fileNames: ['flake.lock', 'nix.conf', 'devenv.lock', 'devenv.yaml', 'devenv.yml']
  }
];

export { osIcon };