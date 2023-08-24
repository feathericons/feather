import Svgo from 'svgo';
import cheerio from 'cheerio';

import DEFAULT_ATTRS from '../src/default-attrs.json';

/**
 * Optimize SVG string.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimizeSvg(svg) {
  return svgo(svg).then(setAttrs);
}

/**
 * Run SVGO on SVG string.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function svgo(svg) {
  const s = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true },
    ],
  });

  return new Promise(resolve => {
    s.optimize(svg, ({ data }) => resolve(data));
  });
}

/**
 * Set default attributes on SVG.
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

export default optimizeSvg;
