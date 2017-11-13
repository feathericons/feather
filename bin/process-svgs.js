/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';

import processSvg from './process-svg';

const ICONS_DIR = path.resolve(__dirname, '../icons');

fs
  .readdirSync(ICONS_DIR)
  .filter(file => path.extname(file) === '.svg')
  .forEach(svgFile => {
    const svg = fs.readFileSync(path.join(ICONS_DIR, svgFile));
    processSvg(svg).then(svg => fs.writeFileSync(path.join(ICONS_DIR, svgFile), svg));
  });
