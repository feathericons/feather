import Svgo from 'svgo';
import cheerio from 'cheerio';
import { format } from 'prettier';

import DEFAULT_ATTRS from '../src/default-attrs.json';

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
function processSvg(svg) {
  return (
    optimize(svg)
      .then(setAttrs)
      .then(format)
      // remove semicolon inserted by prettier
      // because prettier thinks it's formatting JSX not HTML
      .then(svg => svg.replace(/;/g, ''))
  );
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true },
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
function setAttrs(svg) {
  const $ = cheerio.load(svg);

  Object.keys(DEFAULT_ATTRS).forEach(key =>
    $('svg').attr(key, DEFAULT_ATTRS[key]),
  );

  return $('body').html();
}

export default processSvg;
