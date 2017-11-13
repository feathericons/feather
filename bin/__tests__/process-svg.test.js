/* eslint-env jest */
import processSvg from '../process-svg';

test('processes SVG correctly', () => {
  const SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Title</title><line x1="23" y1="1" x2="1" y2="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="1" y1="1" x2="23" y2="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';

  expect(processSvg(SVG)).resolves.toMatchSnapshot();
});

test('rejects when passed unparsable SVG string', () => {
  const UNPARSABLE_SVG = '<svg></svg';

  expect(processSvg(UNPARSABLE_SVG)).rejects.toMatchSnapshot();
});
