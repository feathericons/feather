import DEFAULT_ATTRS from '../src/default-attrs.json';

/**
 * Build an SVG sprite string containing SVG symbols.
 * @param {Object} icons
 * @returns {string}
 */
function buildSpriteString(icons) {
  const symbols = Object.keys(icons)
    .map(icon => toSvgSymbol(icon, icons[icon]))
    .join('');

  return `<svg xmlns="${DEFAULT_ATTRS.xmlns}"><defs>${symbols}</defs></svg>`;
}

/**
 * Create an SVG symbol string.
 * @param {string} name - Icon name
 * @param {string} contents - SVG contents
 * @returns {string}
 */
function toSvgSymbol(name, contents) {
  return `<symbol id="${name}" viewBox="${DEFAULT_ATTRS.viewBox}">${
    contents
  }</symbol>`;
}

export default buildSpriteString;
