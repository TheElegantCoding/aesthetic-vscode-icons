import { ConfigurationTarget, workspace } from 'vscode';

import { ICON_THEME_ID } from '@src/const/icon_theme';

const reloadIconTheme = async () => {
  const workbench = workspace.getConfiguration('workbench');
  const current = workbench.get<string>('iconTheme');
  if (current !== ICON_THEME_ID) {
    return;
  }

  await workbench.update('iconTheme', undefined, ConfigurationTarget.Global);
  await workbench.update('iconTheme', current, ConfigurationTarget.Global);
};

export { reloadIconTheme };