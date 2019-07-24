import { suite, test } from 'mocha';
import { assert } from 'chai';
import getDayOfTheYear from './index';
import getAllDatesForYear from './dateTestUtilities';
import testData from './getDayOfTheYearTestData';

suite('Get day of the year', () => {
  test('returns the correct day of the year', () => {
    testData.forEach(data => {
      const { date, expectedDayOfTheYear } = data;
      const actualDayOfTheYearResult = getDayOfTheYear(date);
      assert.equal(actualDayOfTheYearResult, expectedDayOfTheYear);
    });
  });
  test('returns day of the year for every day on a leap year', () => {
    const allDaysOnALeapYear = getAllDatesForYear(1944);
    allDaysOnALeapYear.forEach(date => {
      const expectedDayOfTheYear = allDaysOnALeapYear.indexOf(date) + 1;
      const actualDayOfTheYear = getDayOfTheYear(date);
      assert.equal(actualDayOfTheYear, expectedDayOfTheYear);
    });
  });
  test('returns day of the year for every day on non leap year', () => {
    const allDaysOnALeapYear = getAllDatesForYear(2017);
    allDaysOnALeapYear.forEach(date => {
      const expectedDayOfTheYear = allDaysOnALeapYear.indexOf(date) + 1;
      const actualDayOfTheYear = getDayOfTheYear(date);
      assert.equal(actualDayOfTheYear, expectedDayOfTheYear);
    });
  });
  test('throws exception when an invalid date is passed', () => {
    assert.throw(() => getDayOfTheYear(undefined));
    assert.throw(() => getDayOfTheYear(null));
    assert.throw(() => getDayOfTheYear());
  });
});
