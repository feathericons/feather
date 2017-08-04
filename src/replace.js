/**
 * @file Implements `replace` function.
 */

/* global document, DOMParser */

import icons from '../dist/icons.json';
import toSvg from './to-svg';

/**
 * Replace all elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} options
 */
export default function replace(options = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  const elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(element => replaceElement(element, options));
}

/**
 * Replace single element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Element} element
 * @param {Object} options
 */
function replaceElement(element, options) {
  const key = element.getAttribute('data-feather');

  if (!key) {
    console.error('The required `data-feather` attribute has no value.');
    return;
  }

  if (!icons[key]) {
    console.error(`No icon matching '${key}'. See the complete list of icons at https://feathericons.com`);
    return;
  }

  const elementClassAttr = element.getAttribute('class') || '';
  const classNames = (
    options.class ? `${options.class} ${elementClassAttr}` : elementClassAttr
  );

  const svgString = toSvg(key, Object.assign({}, options, { class: classNames }));
  const svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  const svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}
