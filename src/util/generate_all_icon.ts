import { iconTheme } from '@src/const/icon_theme';
import { fileIcon } from '@src/module/file_icon';

import fs from 'node:fs';
import path from 'node:path';

const generateAllIcon = (extensionPath?: string) => {
  const OUTPUT_FILE = path.join(extensionPath ?? process.cwd(), 'dist/file_icons.json');

  fileIcon.forEach((icon) => {
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