/* eslint-env browser */
import replaceElement from './replace-element';

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace(attrs = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  const elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(element =>
    replaceElement(element, attrs),
  );
}

export default replace;
