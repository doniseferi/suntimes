import { suite, test } from 'mocha';
import { expect } from 'chai';
import { equationOfTime } from './index';
import equationOfTimeTestData from './equationOfTimeTestData.json';

suite('Equation of time', () => {
  test('returns the correct equation of time with a margin of error of +/- 4 seconds', () => {
    equationOfTimeTestData.forEach(expectedResult => {
      const { eot, date } = expectedResult;

      const expected = eot * 60;
      const actual = equationOfTime(new Date(date));
      const actualInSeconds = actual * 60;
      const set = [expected, actualInSeconds];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      expect(difference).to.be.within(0, 4);
    });
  });
  test('throws an exception when an invalid date is passed in', () => {
    expect(() => equationOfTime(null)).to.throw('Please provide a valid date');
    expect(() => equationOfTime(undefined)).to.throw('Please provide a valid date');
    expect(() => equationOfTime()).to.throw('Please provide a valid date');
  });
});
