import classnames from 'classnames/dedupe';

import DEFAULT_ATTRS from './default-attrs.json';

class Icon {
  constructor(name, contents, tags = []) {
    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `feather feather-${name}` },
    };
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */
  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    };

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`;
  }

  /**
   * Return string representation of an `Icon`.
   *
   * Added for backward compatibility. If old code expects `feather.icons.<name>`
   * to be a string, `toString()` will get implicitly called.
   *
   * @returns {string}
   */
  toString() {
    return this.contents;
  }
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');
}

export default Icon;
