/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import Svgo from 'svgo';
import cheerio from 'cheerio';
import { format } from 'prettier';

import DEFAULT_ATTRIBUTES from '../src/default-attributes.json';

/**
 * Process all SVGs in directory.
 * @param {Object} fs - File system.
 * @param {string} dir - A path to a directory containing SVGs to be processed.
 */
function processSvgs(fs, dir) {
  fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.svg')
    .forEach(svgFile => {
      const svg = fs.readFileSync(path.resolve(__dirname, dir, svgFile));

      optimize(svg)
        .then(setAttributes)
        .then(format)
        // remove semicolon inserted by prettier
        // because prettier thinks it's formatting JSX not HTML
        .then(svg => svg.replace(/;/g, ''))
        .then(svg =>
          fs.writeFileSync(path.resolve(__dirname, dir, svgFile), svg),
        );
    });
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {RSVP.Promise<string>}
 */
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
    ],
  });

  return new Promise(resolve => {
    svgo.optimize(svg, ({ data }) => resolve(data));
  });
}

/**
 * Set default attibutes on SVG.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function setAttributes(svg) {
  const $ = cheerio.load(svg);

  Object.keys(DEFAULT_ATTRIBUTES).forEach(key =>
    $('svg').attr(key, DEFAULT_ATTRIBUTES[key]),
  );

  return $('body').html();
}

export default processSvgs;
