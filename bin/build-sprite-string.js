import defaultAttrs from '../src/default-attrs.json';

const svgStartTag = `<svg xmlns="${defaultAttrs.xmlns}">\n<defs>\n`;
const svgEndTag = '</defs>\n</svg>';

/**
 * Renders the inner sprites as SVG Symbols
 * @param {object} icons the icons object
 * @returns {string} the rendered string with SVG symbols
 */
function buildSpriteString(icons) {
  const symbols = Object.keys(icons)
    .map(icon => toSvgSymbol(icon, icons[icon]))
    .join('');

  return svgStartTag + symbols + svgEndTag;
}

/**
 * Renders a SVG symbol tag
 * @param {string} name The name of the icon
 * @param {string} contents The contents of the icon
 * @returns {string} the rendered SVG symbol
 */
function toSvgSymbol(name, contents) {
  return `<symbol id="${name}" viewBox="${defaultAttrs.viewBox}">
${contents}\n</symbol>\n`;
}

export default buildSpriteString;
