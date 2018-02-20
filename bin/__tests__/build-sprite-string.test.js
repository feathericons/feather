/* eslint-env jest */
import buildSpriteString from '../build-sprite-string';

const icons = {
  icon1:
    '<line x1="23" y1="1" x2="1" y2="23"></line><line x1="1" y1="1" x2="23" y2="23"></line>',
  icon2: '<circle cx="12" cy="12" r="11"></circle>',
};

test('builds sprite correctly', () => {
  expect(buildSpriteString(icons)).toMatchSnapshot();
});
