/* eslint-env jest */
import buildIconsObject from '../build-icons-object';

const SVG_FILES = {
  'icon1.svg':
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n>\n  <line x1="23" y1="1" x2="1" y2="23" />\n  <line x1="1" y1="1" x2="23" y2="23" />\n</svg>',
  'icon2.svg':
    '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n>\n  <circle cx="12" cy="12" r="11" />\n</svg>',
};

function getSvg(svgFile) {
  return SVG_FILES[svgFile];
}

test('builds object correctly', () => {
  expect(buildIconsObject(Object.keys(SVG_FILES), getSvg)).toMatchSnapshot();
});
