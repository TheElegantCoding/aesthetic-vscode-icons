import fs from 'node:fs';
import path from 'node:path';

import { color } from '../style/color';

const changeSvgColor = (iconPath: string, baseFileName: string, theme: string) => {
  const templatePath = path.join(iconPath, `${baseFileName}.svg`);

  if (!fs.existsSync(templatePath)) {
    return `${baseFileName}.svg`;
  }

  const colorToUse = theme === 'dark' ? color.light : color.dark;

  const svgContent = fs.readFileSync(templatePath, 'utf-8');
  const updatedSvgContent = svgContent.replaceAll(/fill="[^"]*"/g, `fill="${colorToUse}"`);

  const newFileName = `${baseFileName}~${theme}.svg`;
  const targetPath = path.join(iconPath, newFileName);

  fs.writeFileSync(targetPath, updatedSvgContent, 'utf-8');

  return newFileName;
};

export { changeSvgColor };