import fs from 'fs';
import path from 'path';
import icons from '../dist/icons.json';
import buildSpriteString from './build-sprite-string';

const OUT_FILE = path.resolve(__dirname, '../dist/feather-sprite.svg');

console.log(`Building ${OUT_FILE}...`);

fs.writeFileSync(OUT_FILE, buildSpriteString(icons));
