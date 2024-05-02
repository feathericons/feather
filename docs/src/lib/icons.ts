import iconsJson from '../../../dist/icons.json';
import tagsJson from '../../../src/tags.json';

export const icons = Object.entries(iconsJson)
  .map(([name, svg]) => {
    const tags: Array<string> = tagsJson[name] || [];
    return { name, svg, tags };
  })
  .reduce((acc, icon) => {
    acc[icon.name] = icon;
    return acc;
  }, {} as Record<string, { name: string; svg: string; tags: Array<string> }>);
