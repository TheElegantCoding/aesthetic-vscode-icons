const COLOR_ATTRIBUTE = /\b(fill|stroke|stop-color)="[^"]*"/gi;

const escapeRegExp = (value: string): string => {
  return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
};

const recolor = (markup: string, color: string): string => {
  return markup.replaceAll(COLOR_ATTRIBUTE, (_match, attribute: string) => {
    return `${attribute}="${color}"`;
  });
};

const changeSvgColor = (svg: string, color: string, classIdentifier?: string): string => {
  if (!classIdentifier) {
    return recolor(svg, color);
  }

  const tagWithClass = new RegExp(
    `<[a-z0-9]+\\b[^>]*\\bclass=["'][^"']*(?<![\\w-])${escapeRegExp(classIdentifier)}(?![\\w-])[^"']*["'][^>]*>`,
    'gi'
  );

  return svg.replaceAll(tagWithClass, (tag) => {
    return recolor(tag, color);
  });
};

export { changeSvgColor };