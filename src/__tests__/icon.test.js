/* eslint-env jest */
import Icon from '../icon';

const testIcon = new Icon(
  'test',
  '<line x1="23" y1="1" x2="" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
  ['hello', 'world', 'foo', 'bar'],
);

test('constructs icon object correctly', () => {
  expect(testIcon).toMatchSnapshot();
});

test('toSvg() returns correct string', () => {
  expect(testIcon.toSvg()).toMatchSnapshot();
  expect(testIcon.toSvg({ 'stroke-width': 1, color: 'red' })).toMatchSnapshot();
  expect(testIcon.toSvg({ class: 'foo bar', color: 'red' })).toMatchSnapshot();
});
