/* eslint-disable import/no-namespace */
/* eslint-disable ts/no-empty-function */
// import { changeTheme } from './util/generate_icon';

import type * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
  console.log('✅ Extensión activada correctamente desde:', context.extensionPath);
  // context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((event) => {
  //  if (event.affectsConfiguration('aesthetic-icons.theme')) {
  //    const config = vscode.workspace.getConfiguration('aesthetic-icons');
  //    const selectedTheme = config.get('theme', 'dark');
  //    changeTheme(context.extensionPath, selectedTheme);
  //    vscode.window.showInformationMessage(`Aesthetic Icons: Theme changed to ${selectedTheme}`);
  //  }
  // }));
};

export const deactivate = () => {};