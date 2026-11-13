import type { IconDefinition } from '../type/icon_definition';

const ICON_THEME_ID = 'aesthetic-icons';

const iconTheme: {
  file: string;
  folder: string;
  folderExpanded: string;
  fileNames: Record<string, string>;
  fileExtensions: Record<string, string>;
  iconDefinitions: Record<string, IconDefinition>;
} = {
  iconDefinitions: {
    file_default: {
      iconPath: './asset/icon/file.svg'
    },
    folder_default: {
      iconPath: './asset/folder/folder.svg'
    },
    folderExpanded: {
      iconPath: './asset/folder/folder.svg'
    }
  },
  file: 'file_default',
  folder: 'folder_default',
  folderExpanded: 'folder_default',
  fileExtensions: {},
  fileNames: {}
};

export { iconTheme, ICON_THEME_ID };