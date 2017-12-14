/* eslint-env jest */
import toSvg from '../to-svg';

jest.mock('../../dist/icons.json', () => ({
  icon1:
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
}));

test('returns correct string', () => {
  expect(toSvg('icon1')).toMatchSnapshot();
  expect(toSvg('icon1', { 'stroke-width': 1, color: 'red' })).toMatchSnapshot();
  expect(toSvg('icon1', { class: 'foo bar', color: 'red' })).toMatchSnapshot();
});

test('throws error when `name` parameter is undefined', () => {
  expect(() => toSvg()).toThrow();
});

test('throws error when passed unknown icon name', () => {
  expect(() => toSvg('foo')).toThrow();
});
