import { iconTheme } from '@src/const/icon_theme';
import { applicationsIcon } from '@src/module/applications_icon';
import { configIcons } from '@src/module/config_icon';
import { documentIcon } from '@src/module/document_icon';
import { fileIcons } from '@src/module/file_icon';
import { ignoreIcons } from '@src/module/ignore_icon';
import { lockIcons } from '@src/module/lock_icon.ts';
import { osIcon } from '@src/module/os_icon';

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const generateAllIcon = (extensionPath?: string) => {
  const OUTPUT_FILE = path.join(extensionPath ?? process.cwd(), 'dist/file_icons.json');
  const icons = [
    ...fileIcons,
    ...applicationsIcon,
    ...documentIcon,
    ...osIcon,
    ...configIcons,
    ...ignoreIcons,
    ...lockIcons
  ];

  icons.forEach((icon) => {
    const definitionId = `file_${icon.name}`;

    iconTheme.iconDefinitions[definitionId] = {
      iconPath: `./asset/icon/${icon.name}.svg`
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

export { generateAllIcon };