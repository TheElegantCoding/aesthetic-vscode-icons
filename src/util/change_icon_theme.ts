// oxlint-disable typescript/return-await
import { color } from '@src/style/color';
import { changeSvgColor } from '@src/util/change_svg_color';

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { FileIconType } from '@src/type/file_icon_types';
import type { ThemeType } from '@src/type/theme_type';

type IconTheme = {
  iconDefinitions: Record<string, { iconPath: string }>;
};

const ICON_DIRECTORY = 'asset/icon';

const svgName = (icon: FileIconType, theme: ThemeType): string => {
  return theme === 'light' ? `${icon.name}_light.svg` : `${icon.name}.svg`;
};

const createLightSvg = async (icon: FileIconType, directory: string): Promise<void> => {
  const svg = await readFile(join(directory, svgName(icon, 'dark')), 'utf-8');
  const light = changeSvgColor(svg, color.dark, 'light-dark');

  await writeFile(join(directory, svgName(icon, 'light')), light, 'utf-8');
};

const pointToTheme = (iconTheme: IconTheme, icons: FileIconType[], theme: ThemeType): boolean => {
  const changes = icons.map((icon) => {
    const definition = iconTheme.iconDefinitions[`file_${icon.name}`];
    const iconPath = `./${ICON_DIRECTORY}/${svgName(icon, theme)}`;

    if (!definition || definition.iconPath === iconPath) {
      return false;
    }

    definition.iconPath = iconPath;
    return true;
  });

  return changes.some(Boolean);
};

const changeIconTheme = async (icons: FileIconType[], theme: ThemeType, dist: string): Promise<boolean> => {
  const lightIcons = icons.filter((icon) => {
    return icon.light;
  });

  if (theme === 'light') {
    const directory = join(dist, ICON_DIRECTORY);
    await Promise.all(
      lightIcons.map(async (icon) => {
        return await createLightSvg(icon, directory);
      })
    );
  }

  const jsonPath = join(dist, 'file_icons.json');
  const iconTheme = JSON.parse(await readFile(jsonPath, 'utf-8')) as IconTheme;

  if (!pointToTheme(iconTheme, lightIcons, theme)) {
    return false;
  }

  await writeFile(jsonPath, JSON.stringify(iconTheme), 'utf-8');
  return true;
};

export { changeIconTheme };