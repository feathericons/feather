import fs from 'fs';
import path from 'path';

import processSvg from './process-svg';

const IN_DIRS = [];

IN_DIRS.push({
  path: path.resolve(__dirname, '../icons'),
  useDefaultAttrs: true,
});

IN_DIRS.push({
  path: path.resolve(__dirname, '../kontentino-icons'),
  useDefaultAttrs: true,
});

IN_DIRS.push({
  path: path.resolve(__dirname, '../kontentino-icon-images'),
  useDefaultAttrs: false,
});

function processSvgs(dir, useDefaultAttrs) {
  console.log(`Processing SVGs in ${dir}...`);

  fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.svg')
    .forEach(svgFile => {
      const svg = fs.readFileSync(path.join(dir, svgFile));
      processSvg(svg, useDefaultAttrs).then(svg =>
        fs.writeFileSync(path.join(dir, svgFile), svg),
      );
    });
}

IN_DIRS.forEach(({ path, useDefaultAttrs }) =>
  processSvgs(path, useDefaultAttrs),
);
