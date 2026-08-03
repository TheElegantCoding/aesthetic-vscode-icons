/* eslint-disable ts/no-empty-function */
import { workspace } from 'vscode';

import { changeIconTheme } from './util/generate_icon';

import type { ExtensionContext } from 'vscode';

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('aesthetic-icons.theme')) {
      const config = workspace.getConfiguration('aesthetic-icons');
      const selectedTheme = config.get('theme', 'dark');

      changeIconTheme(context.extensionPath, selectedTheme);
    }
  }));
};

export const deactivate = () => {};