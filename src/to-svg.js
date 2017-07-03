/**
 * @file Implements `toSvg` function.
 */

import icons from '../dist/icons.json';

const DEFAULT_OPTIONS = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

/**
 * Create an SVG string.
 * @param {string} key - Icon name.
 * @param {Object} options
 * @returns {string}
 */
export default function toSvg(key, options = {}) {
  if (!key) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!icons[key]) {
    throw new Error(`No icon matching '${key}'. See the complete list of icons at https://feathericons.com`);
  }

  const combinedOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  combinedOptions.class = addDefaultClassNames(combinedOptions.class, key);

  const attributes = optionsToAtrributes(combinedOptions);

  return `<svg ${attributes}>${icons[key]}</svg>`;
}

/**
 * Add default class names.
 * @param {string} classNames - One or more class names seperated by spaces.
 * @param {string} key - Icon name.
 * @returns {string}
 */
function addDefaultClassNames(classNames, key) {
  // convert class names string into an array
  const classNamesArray = classNames ? classNames.trim().split(/\s+/) : [];

  // use Set to avoid duplicate class names
  const classNamesSet = new Set(classNamesArray);

  // add default class names
  classNamesSet.add('feather').add(`feather-${key}`);

  return Array.from(classNamesSet).join(' ');
}

/**
 * Convert options object to string of html attributes.
 * @param {Object} options
 * @returns {string}
 */
function optionsToAtrributes(options) {
  const attributes = [];

  Object.keys(options).forEach(key => {
    attributes.push(`${key}="${options[key]}"`);
  });

  return attributes.join(' ');
}
