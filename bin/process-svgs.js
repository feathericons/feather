/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';

import processSvg from './process-svg';

const DIR = path.resolve(__dirname, '../icons');

fs
  .readdirSync(DIR)
  .filter(file => path.extname(file) === '.svg')
  .forEach(svgFile => {
    const svg = fs.readFileSync(path.join(DIR, svgFile));
    processSvg(svg).then(svg => fs.writeFileSync(path.join(DIR, svgFile), svg));
  });
