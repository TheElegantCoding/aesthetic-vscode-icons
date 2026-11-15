import type { FileIconType } from '@src/type/file_icon_types';

const ignoreIcons: FileIconType[] = [
  {
    name: 'git-ignore',
    fileNames: ['.gitignore', '.gitignore_global', '.gitignore-global', '.git-blame-ignore', '.git-blame-ignore-revs']
  },
  {
    name: 'docker-ignore',
    fileNames: ['.dockerignore', '.containerignore']
  },
  {
    name: 'dart-ignore',
    fileNames: ['.pubignore']
  },
  {
    name: 'npm-ignore',
    fileNames: ['.npmignore']
  },
  {
    name: 'eslint-ignore',
    fileNames: ['.eslintignore']
  },
  {
    name: 'terraform-ignore',
    fileNames: ['.terraformignore']
  },
  {
    name: 'helm-ignore',
    fileNames: ['.helmignore']
  },
  {
    name: 'markdownlint-ignore',
    fileNames: ['.markdownlintignore']
  },
  {
    name: 'vscode-ignore',
    fileNames: ['.vscodeignore']
  },
  {
    name: 'nuxt-ignore',
    fileNames: ['.nuxtignore']
  },
  {
    name: 'nix-ignore',
    fileNames: ['.nixignore']
  },
  {
    name: 'tauri-ignore',
    fileNames: ['.tauriignore']
  },
  {
    name: 'aws-ignore',
    fileNames: ['.ebignore']
  },
  {
    name: 'bazel-ignore',
    fileNames: ['.bazelignore']
  },
  {
    name: 'gcloud-ignore',
    fileNames: ['.gcloudignore']
  },
  {
    name: 'prettier-ignore',
    fileNames: ['.prettierignore']
  },
  {
    name: 'copilot-ignore',
    fileNames: ['.copilotignore']
  },
  {
    name: 'cursor-ignore',
    fileNames: ['.cursorignore', '.cursorindexingignore']
  },
  {
    name: 'expo-ignore',
    fileNames: ['.easignore']
  },
  {
    name: 'stylelint-ignore',
    fileNames: ['.stylelintignore']
  },
  {
    name: 'ansible-ignore',
    fileNames: ['.ansible-lint-ignore']
  },
  {
    name: 'vercel-ignore',
    fileNames: ['.vercelignore', '.nowignore']
  },
  {
    name: 'biome-ignore',
    fileNames: ['.biomeignore']
  },
  {
    name: 'gemini-ignore',
    fileNames: ['.geminiignore']
  },
  {
    name: 'heroku-ignore',
    fileNames: ['.slugignore']
  }
];

export { ignoreIcons };