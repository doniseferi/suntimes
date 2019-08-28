import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getSunriseTime } from './index';
import januarySunriseExpected from './testData/utcJanSunrise.json';
import julySunriseExpected from './testData/utcJulySunrise.json';

suite('Get Sunrise Time', () => {
  test('returns sunrise time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januarySunriseExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 0, 1);
      const actualTime = getSunriseTime(targetDate, expected.Longitude);
      const differenceInSeconds =
                (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns noon time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julySunriseExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 6, 1);
      const actualTime = getSunriseTime(targetDate, expected.Longitude);
      const differenceInSeconds =
                (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
