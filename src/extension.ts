import { workspace } from 'vscode';

import { applyTheme } from '@src/util/apply_theme';

import { join } from 'node:path';

import type { ExtensionContext } from 'vscode';

const activate = async (context: ExtensionContext) => {
  const directory = join(context.extensionPath, 'dist');

  await applyTheme(directory);

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(async (event) => {
      if (event.affectsConfiguration('aesthetic-icons.theme')) {
        await applyTheme(directory);
      }
    })
  );
};

// oxlint-disable-next-line no-empty-function
const deactivate = () => {};

export { activate, deactivate };