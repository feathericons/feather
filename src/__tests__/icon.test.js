/* eslint-env jest */
import Icon from '../icon';

const icon1 = new Icon(
  'test',
  '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
  ['hello', 'world', 'foo', 'bar'],
);

const icon2 = new Icon(
  'test',
  '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
);

test('constructs icon object correctly', () => {
  expect(icon1).toMatchSnapshot();
  expect(icon2).toMatchSnapshot();
});

test('toSvg() returns correct string', () => {
  expect(icon1.toSvg()).toMatchSnapshot();
  expect(icon1.toSvg({ 'stroke-width': 1, color: 'red' })).toMatchSnapshot();
  expect(icon1.toSvg({ class: 'foo bar', color: 'red' })).toMatchSnapshot();
});

test('toString() returns correct string', () => {
  expect(icon1.toString()).toMatchSnapshot();
});
