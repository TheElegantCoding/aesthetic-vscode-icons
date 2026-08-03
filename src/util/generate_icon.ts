import fs from 'node:fs';
import path from 'node:path';

import { iconTheme } from '../const/icon_theme';
import { fileIcon } from '../module/file_icon';
import { changeSvgColor } from './change_svg_color';

import type { ThemeType } from '../type/theme_type';

const OUTPUT_FILE = path.join(process.cwd(), 'dist/file_icons.json');

const generateIcon = () => {
  fileIcon.forEach((icon) => {
    const definitionId = `file_${icon.name}`;

    iconTheme.iconDefinitions[definitionId] = {
      iconPath: `./asset/icon/${icon.name}.svg`
    };

    icon.fileExtension?.forEach((extension) => {
      iconTheme.fileExtensions[extension] = definitionId;
    });

    icon.fileName?.forEach((fileName) => {
      iconTheme.fileNames[fileName] = definitionId;
    });
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconTheme, null, 2));
};

const changeTheme = (iconPath: string, theme: ThemeType) => {
  fileIcon.filter((icon) => { return icon.theme; }).forEach((icon) => {
    changeSvgColor(path.join(iconPath, 'dist/asset/icon'), `${icon.name}.svg`, theme);
  });
};

generateIcon();

export { changeTheme, generateIcon };