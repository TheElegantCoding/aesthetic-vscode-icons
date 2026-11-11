import fs from 'node:fs';
import path from 'node:path';

import { iconTheme } from '../const/icon_theme';
import { fileIcon } from '../module/file_icon';
import { changeSvgColor } from './change_svg_color';

import type { ThemeType } from '../type/theme_type';

const generateIcon = (extensionPath?: string, theme?: ThemeType) => {
  const OUTPUT_FILE = path.join(extensionPath ?? process.cwd(), 'dist/file_icons.json');

  fileIcon.forEach((icon) => {
    const definitionId = `file_${icon.name}`;

    const hasThemeSuffix = icon.themes && theme;
    const iconFileName = hasThemeSuffix && theme === 'light' ? `${icon.name}_light.svg` : `${icon.name}.svg`;

    iconTheme.iconDefinitions[definitionId] = {
      iconPath: `./asset/icon/${iconFileName}`
    };

    icon.fileExtensions?.forEach((extension) => {
      iconTheme.fileExtensions[extension] = definitionId;
    });

    icon.fileNames?.forEach((fileName) => {
      iconTheme.fileNames[fileName] = definitionId;
    });
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconTheme, null, 2), 'utf-8');
};

const changeIconTheme = (extensionPath: string, theme: ThemeType) => {
  const iconPath = path.join(extensionPath, 'dist/asset/icon');

  fileIcon
    .filter((icon) => { return icon.themes; })
    .forEach((icon) => {
      changeSvgColor(iconPath, icon.name, theme);
    });

  generateIcon(extensionPath, theme);
};

export { generateIcon, changeIconTheme };