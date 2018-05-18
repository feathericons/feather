/* eslint-env jest */
import feather from '../index';

test('has correct properties', () => {
  expect(feather).toHaveProperty('icons');
  expect(feather).toHaveProperty('toSvg');
  expect(feather).toHaveProperty('replace');
});
