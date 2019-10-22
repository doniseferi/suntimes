import { suite, test } from 'mocha';
import { assert } from 'chai';
import equationOfTime from '../index';
import equationOfTimeTestData from './equationOfTimeTestData.json';

suite('Equation of time', () => {
  test('returns the correct equation of time with a margin of error of +/- 4 seconds', () => {
    equationOfTimeTestData.forEach(expectedResult => {
      const { eot, date } = expectedResult;
      const actual = equationOfTime(new Date(date));
      const difference = (eot * 60) - (actual * 60);
      assert.closeTo(difference, 0, 3.99);
    });
  });
  test('throws an exception when an invalid date is passed in', () => {
    const expectedErrorMessage = 'Please provide a valid date';
    assert.throws(() => equationOfTime(null), expectedErrorMessage);
    assert.throws(() => equationOfTime(undefined), expectedErrorMessage);
    assert.throws(() => equationOfTime(), expectedErrorMessage);
  });
});
