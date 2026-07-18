import fs from 'node:fs';
import path from 'node:path';

import { fileIcon } from '../module/file_icon';

const OUTPUT_FILE = path.join(process.cwd(), 'file_icons.json');

type IconDefinition = {
  iconPath?: string;
  file_default?: string;
  folder_default?: string;
};

const generateIcon = () => {
  const theme: {
    file: string;
    folder: string;
    folderExpanded: string;
    fileNames: Record<string, string>;
    fileExtensions: Record<string, string>;
    iconDefinitions: Record<string, IconDefinition>;
  } = {
    iconDefinitions: {
      file_default: {
        iconPath: './src/asset/icon/file.svg'
      },
      folder_default: {
        iconPath: './src/asset/folder/folder.svg'
      },
      folderExpanded: {
        iconPath: './src/asset/folder/folder.svg'
      }
    },
    file: 'file_default',
    folder: 'folder_default',
    folderExpanded: 'folder_default',
    fileExtensions: {},
    fileNames: {}
  };

  fileIcon.forEach((icon) => {
    const definitionId = `file_${icon.name}`;

    theme.iconDefinitions[definitionId] = {
      iconPath: `./src/asset/icon/${icon.name}.svg`
    };

    icon.fileExtension?.forEach((extension) => {
      theme.fileExtensions[extension] = definitionId;
    });

    icon.fileName?.forEach((fileName) => {
      theme.fileNames[fileName] = definitionId;
    });
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(theme, null, 2));
};

generateIcon();

export { generateIcon };