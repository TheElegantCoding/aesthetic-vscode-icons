import { workspace } from 'vscode';

import { fileIcon } from '@src/module/file_icon';
import { changeIconTheme } from '@src/util/change_icon_theme';
import { reloadIconTheme } from '@src/util/reload_icons';

import type { ThemeType } from '@src/type/theme_type';

const applyTheme = async (directory: string): Promise<void> => {
  const theme = workspace.getConfiguration('aesthetic-icons').get<ThemeType>('theme', 'dark');
  await changeIconTheme(fileIcon, theme, directory);
  await reloadIconTheme();
};

export { applyTheme };