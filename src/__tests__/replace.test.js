/* eslint-env jest, browser */
import replace from '../replace';

jest.mock('../../dist/icons.json', () => ({
  icon1:
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
  icon2: '<circle cx="12" cy="12" r="11" />',
}));

test('replaces [data-feather] elements with SVG markup', () => {
  document.body.innerHTML =
    '<i data-feather="icon1"></i><span data-feather="icon2"></i>';
  expect(document.body.innerHTML).toMatchSnapshot();
  replace();
  expect(document.body.innerHTML).toMatchSnapshot();
});

test('copies placeholder element attributes to <svg> tag', () => {
  document.body.innerHTML =
    '<i data-feather="icon1" id="test" class="foo bar" stroke-width="1"></i>';
  expect(document.body.innerHTML).toMatchSnapshot();
  replace();
  expect(document.body.innerHTML).toMatchSnapshot();
});

test('sets attributes passed as parameters', () => {
  document.body.innerHTML =
    '<i data-feather="icon1" id="test" class="foo bar" stroke-width="1"></i>';
  expect(document.body.innerHTML).toMatchSnapshot();
  replace({ class: 'foo bar hello', 'stroke-width': 1.5, color: 'salmon' });
  expect(document.body.innerHTML).toMatchSnapshot();
});
