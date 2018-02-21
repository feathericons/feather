import fs from 'fs';
import path from 'path';
import icons from '../dist/icons.json';
import buildSpriteString from './build-sprite-string';

const sprite = buildSpriteString(icons);

const OUT_FILE = path.resolve(__dirname, '../dist/feather-sprite.svg');

console.log(`Building ${OUT_FILE}`); // eslint-disable-line no-console

fs.writeFile(OUT_FILE, sprite, err => {
  if (err) throw err;
});
