import fs from 'fs';
import path from 'path';

import buildIconsObject from './build-icons-object';

const IN_DIRS = [
  {
    path: path.resolve(__dirname, '../icons'),
  },
  {
    path: path.resolve(__dirname, '../kontentino-icons'),
    prefix: 'kont-',
  },
];

const OUT_FILE = path.resolve(__dirname, '../dist/icons.json');

console.log(`Building ${OUT_FILE}...`);

function getSvgs(dir, prefix) {
  const svgFiles = fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.svg');

  const getSvg = svgFile => fs.readFileSync(path.join(dir, svgFile));

  return buildIconsObject(svgFiles, getSvg, prefix);
}

let icons = {};

IN_DIRS.forEach(({ path, prefix }) => {
  icons = {
    ...icons,
    ...getSvgs(path, prefix),
  };
});

fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
