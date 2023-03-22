/* eslint-env browser */
import classnames from 'classnames/dedupe';

import icons from './icons';

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element, attrs = {}) {
  const elementAttrs = getAttrs(element);
  const name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  const svgString = icons[name].toSvg({
    ...attrs,
    ...elementAttrs,
    ...{ class: classnames(attrs.class, elementAttrs.class) },
  });
  const svgDocument = new DOMParser().parseFromString(
    svgString,
    'image/svg+xml',
  );
  const svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
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

export default replaceElement;
