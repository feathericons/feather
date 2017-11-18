import fs from 'fs';
import path from 'path';
import icons from '../src/icons';

Object.keys(icons).forEach(name => {
  const svg = icons[name].toSvg();

  fs.writeFileSync(path.resolve(__dirname, `../dist/icons/${name}.svg`), svg);
});
