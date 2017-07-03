/**
 * @file Builds `icons.json` from `icons` directory.
 */

/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import RSVP from 'rsvp';
import Svgo from 'svgo';
import parse5 from 'parse5';

const svgFiles = fs.readdirSync(path.resolve(__dirname, '../icons'))
  .filter(file => path.extname(file) === '.svg');

buildIconsObject(svgFiles)
  .then(icons => {
    fs.writeFileSync(
      path.resolve(__dirname, '../dist/icons.json'),
      JSON.stringify(icons),
    );
  });

/**
 * Build an icons object in the format: `{ <icon name>: <svg content> }`.
 * @param {string[]} svgFiles - A list of file names.
 * @returns {RSVP.Promise<Object>}
 */
function buildIconsObject(svgFiles) {
  const icons = {};

  svgFiles.forEach(svgFile => {
    const svg = fs.readFileSync(path.resolve(__dirname, '../icons', svgFile), 'utf8');
    const key = path.basename(svgFile, '.svg');

    icons[key] = optimizeSvg(svg)
      .then(optimizedSvg => getSvgContent(optimizedSvg));
  });

  return RSVP.hash(icons);
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {RSVP.Promise<string>}
 */
function optimizeSvg(svg) {
  // configure svgo
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
    ],
  });

  return new RSVP.Promise(resolve => {
    svgo.optimize(svg, ({ data }) => resolve(data));
  });
}

/**
 * Get content between opening and closing `<svg>` tags.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function getSvgContent(svg) {
  const fragment = parse5.parseFragment(svg);
  const content = parse5.serialize(fragment.childNodes[0]);
  return content;
}
