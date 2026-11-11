import fs from "node:fs";
import path from "node:path";

import { color } from "../style/color";

const changeSvgColor = (iconPath: string, baseFileName: string, theme: string) => {
  const templatePath = path.join(iconPath, `${baseFileName}.svg`);
  const fileName = theme === "dark" ? `${baseFileName}.svg` : `${baseFileName}_light.svg`;
  const colorToUse = theme === "dark" ? color.light : color.dark;
  let svgContent = fs.readFileSync(templatePath, "utf-8");
  const hasDataTheme = /data-theme\s*=/i.test(svgContent);

  svgContent = hasDataTheme
    ? svgContent.replaceAll(
        /<([a-z0-9]+)([^>]*data-change[^>]*)>/gi,
        (_match, tagName, attributes: string) => {
          let newAttributes = attributes;

          if (/fill\s*=/i.test(newAttributes)) {
            newAttributes = newAttributes.replace(
              /fill\s*=\s*(["'])(.*?)\1/i,
              `fill="${colorToUse}"`,
            );
          }

          if (!/fill\s*=/i.test(newAttributes)) {
            newAttributes = `${newAttributes} fill="${colorToUse}"`;
          }

          return `<${tagName}${newAttributes}>`;
        },
      )
    : svgContent.replaceAll(/fill="[^"]*"/g, `fill="${colorToUse}"`);

  fs.writeFileSync(path.join(iconPath, fileName), svgContent, "utf-8");

  return fileName;
};

export { changeSvgColor };
