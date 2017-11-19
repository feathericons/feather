/* eslint-env jest */
import buildIconsObject from '../build-icons-object';

const SVG_FILES = {
  'icon1.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" /></svg>',
  'icon2.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="11" /></svg>',
};

function getSvg(svgFile) {
  return SVG_FILES[svgFile];
}

test('builds object correctly', () => {
  expect(buildIconsObject(Object.keys(SVG_FILES), getSvg)).toMatchSnapshot();
});
