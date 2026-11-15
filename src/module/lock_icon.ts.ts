import type { FileIconType } from '@src/type/file_icon_types';

const lockIcons: FileIconType[] = [
  {
    name: 'bun-lock',
    fileNames: ['bun.lock', 'bun.lockb']
  },
  {
    name: 'cargo-lock',
    fileNames: ['Cargo.lock']
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
    name: 'dart-lock',
    fileNames: ['pubspec.lock']
  },
  {
    name: 'pnpm-lock',
    fileNames: ['pnpm-lock.yaml']
  },
  {
    name: 'ruby-lock',
    fileNames: ['Gemfile.lock']
  },
  {
    name: 'composer-lock',
    fileNames: ['composer.lock']
  },
  {
    name: 'deno-lock',
    light: true,
    fileNames: ['deno.lock']
  },
  {
    name: 'go-lock',
    fileNames: ['go.sum']
  }
];

export { lockIcons };