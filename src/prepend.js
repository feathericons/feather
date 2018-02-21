/* eslint-env browser */
import icons from './icons';

const attributeSeletor = 'data-feather-prepend';

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function prepend(attrs = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`feather.prepend()` only works in a browser environment.');
  }

  const elementsToReplace = document.querySelectorAll(`[${attributeSeletor}]`);

  Array.from(elementsToReplace).forEach(element =>
    prependElement(element, attrs),
  );
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function prependElement(element, attrs = {}) {
  const elementAttrs = getAttrs(element);
  const name = elementAttrs[attributeSeletor];
  delete elementAttrs[attributeSeletor];

  element.removeAttribute(attributeSeletor);
  element.setAttribute(`${attributeSeletor}ed`, name);

  const svgString = icons[name].toSvg(attrs);
  const svgDocument = new DOMParser().parseFromString(
    svgString,
    'image/svg+xml',
  );
  const svgElement = svgDocument.querySelector('svg');

  if (element.firstChild) {
    element.insertBefore(svgElement, element.firstChild);
  } else {
    element.appendChild(svgElement);
  }
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

export default prepend;
