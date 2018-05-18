import fs from 'fs';
import path from 'path';

import buildIconsObject from './build-icons-object';

const IN_DIR = path.resolve(__dirname, '../icons');
const OUT_FILE = path.resolve(__dirname, '../dist/icons.json');

console.log(`Building ${OUT_FILE}...`);

const svgFiles = fs
  .readdirSync(IN_DIR)
  .filter(file => path.extname(file) === '.svg');

const getSvg = svgFile => fs.readFileSync(path.join(IN_DIR, svgFile));

const icons = buildIconsObject(svgFiles, getSvg);

fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
