/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import cheerio from 'cheerio';
import { minify } from 'html-minifier';

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of file names.
 * @param {Function} getSvg - A function that returns the contents of an SVG file.
 * @returns {Object}
 */
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map(svgFile => {
      const name = path.basename(svgFile, '.svg');
      const svg = getSvg(svgFile);
      const contents = getSvgContents(svg);
      return { name, contents };
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents;
      return icons;
    }, {});
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 */
function getSvgContents(svg) {
  const $ = cheerio.load(svg);
  return minify($('svg').html(), { collapseWhitespace: true });
}

export default buildIconsObject;
