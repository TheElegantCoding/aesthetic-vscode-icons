import { iconTheme } from '@src/const/icon_theme';
import { applicationsIcon } from '@src/module/applications_icon';
import { documentIcon } from '@src/module/document_icon';
import { fileIcon } from '@src/module/file_icon';
import { osIcon } from '@src/module/os_icon';

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const generateAllIcon = (extensionPath?: string) => {
  const OUTPUT_FILE = path.join(extensionPath ?? process.cwd(), 'dist/file_icons.json');
  const icons = [...fileIcon, ...applicationsIcon, ...documentIcon, ...osIcon];

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