import defaultAttrs from '../src/default-attrs.json';

/**
 * Renders a SVG symbol tag
 * @param {string} name The name of the icon
 * @param {string} contents The contents of the icon
 * @returns {string} the rendered SVG symbol
 */
function toSvgSymbol(name, contents) {
  return `    <symbol id="${name}" viewBox="${defaultAttrs.viewBox}">
      ${contents}
    </symbol>\n`;
}

const svgStartTag = `<svg xmlns="${defaultAttrs.xmlns}">
  <defs>\n`;

const svgEndTag = ' </defs>\n</svg>';

export default function buildSprite(icons) {
  const symbols = Object.keys(icons)
    .map(icon => toSvgSymbol(icon, icons[icon]))
    .reduce((spriteString, symbolString) => spriteString + symbolString, '');

  return svgStartTag + symbols + svgEndTag;
}
