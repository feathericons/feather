/**
 * @file Builds `dist/icons` directory.
 */

import fs from 'fs';
import path from 'path';
import { icons, toSvg } from '../src';

Object.keys(icons).forEach(icon => {
  const svg = toSvg(icon);

  fs.writeFileSync(path.resolve(__dirname, `../dist/icons/${icon}.svg`), svg);
});
