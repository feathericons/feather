import classnames from 'classnames';

import DEFAULT_ATTRIBUTES from './default-attributes.json';

class Icon {
  constructor(name, contents, tags = []) {
    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attributes = {
      ...DEFAULT_ATTRIBUTES,
      ...{ class: `feather feather-${name}` },
    };
  }

  /**
   * Create an SVG string.
   * @param {Object} attributes
   */
  toSvg(attributes = {}) {
    const combinedAttributes = {
      ...this.attributes,
      ...attributes,
      ...{ class: classnames(this.attributes.class, attributes.class) },
    };

    return `<svg ${attributesToString(combinedAttributes)}>${
      this.contents
    }</svg>`;
  }
}

/**
 * Convert attributes object to string of html attributes.
 * @param {Object} attributes
 * @returns {string}
 */
function attributesToString(attributes) {
  return Object.keys(attributes)
    .map(key => `${key}="${attributes[key]}"`)
    .join(' ');
}

export default Icon;
