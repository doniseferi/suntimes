import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getAllDatesForYear } from './dateTestUtilities';

suite('Get all dates for a year', () => {
  test('returns every distinct date for a non leap year', () => {
    const expectedYear = 2001;
    const allDates = getAllDatesForYear(expectedYear);
    const distinctDates = allDates
      .map(s => s.toString())
      .filter((s, i, a) => a.indexOf(s) === i)
      .map(s => new Date(s));

    const uniqueYears = [...new Set(allDates.map(x => x.getFullYear()))];
    const expectedNumberOfUniqueYears = 1;

    assert.equal(allDates.length, distinctDates.length);
    assert.equal(uniqueYears.length, expectedNumberOfUniqueYears);
    assert.equal(uniqueYears[0], expectedYear);
  });
  test('returns every distinct date for a leap year', () => {
    const expectedYear = 2000;
    const allDates = getAllDatesForYear(expectedYear);
    const distinctDates = allDates
      .map(s => s.toString())
      .filter((s, i, a) => a.indexOf(s) === i)
      .map(s => new Date(s));

    const uniqueYears = [...new Set(allDates.map(x => x.getFullYear()))];
    const expectedNumberOfUniqueYears = 1;

    assert.equal(allDates.length, distinctDates.length);
    assert.equal(uniqueYears.length, expectedNumberOfUniqueYears);
    assert.equal(uniqueYears[0], expectedYear);
  });
});
