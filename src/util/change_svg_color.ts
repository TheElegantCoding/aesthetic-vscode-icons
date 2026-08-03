import fs from 'node:fs';

import { color } from '../style/color';

const changeSvgColor = (path?: string, fileName?: string, newColor?: string) => {
  const svgFilePath = path && fileName ? `${path}/${fileName}` : undefined;
  let colorToUse = newColor ?? color.dark;

  if (!svgFilePath) {
    throw new Error('SVG file path is not provided.');
  }

  const svgContent = fs.readFileSync(svgFilePath, 'utf-8');

  if (newColor === 'dark') {
    colorToUse = color.light;
  } else if (newColor === 'light') {
    colorToUse = color.dark;
  }

  const updatedSvgContent = svgContent.replaceAll(/fill="[^"]*"/g, `fill="${colorToUse}"`);
  console.log(`Changed color of ${fileName} to ${colorToUse}`);
  console.log(updatedSvgContent);
  console.log(svgFilePath);

  fs.writeFileSync(svgFilePath, updatedSvgContent, 'utf-8');
};

export { changeSvgColor };