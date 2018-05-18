/**
 * @jest-environment node
 */

/* eslint-env jest */
import replace from '../replace';

test('throws an error when run in node environment', () => {
  expect(replace).toThrowErrorMatchingSnapshot();
});
