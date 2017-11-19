import fs from 'fs';
import path from 'path';

import buildIconsObject from './build-icons-object';

const ICONS_DIR = path.resolve(__dirname, '../icons');
const OUT_FILE = path.resolve(__dirname, '../dist/icons.json');

const svgFiles = fs
  .readdirSync(ICONS_DIR)
  .filter(file => path.extname(file) === '.svg');

const getSvg = svgFile => fs.readFileSync(path.join(ICONS_DIR, svgFile));

const icons = buildIconsObject(svgFiles, getSvg);

fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
