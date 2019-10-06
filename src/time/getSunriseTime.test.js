import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getSunriseTime } from './index';
import januarySunriseExpected from './testData/utcJanSunrise.json';
import julySunriseExpected from './testData/utcJulySunrise.json';

suite('Get Sunrise Time', () => {
  test('returns sunrise time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januarySunriseExpected.forEach(expected => {
      const { ExpectedTimeUtc, Latitude, Longitude } = expected;
      const expectedTime = new Date(ExpectedTimeUtc);
      const actualDateTime = getSunriseTime(
        new Date(2019, 0, 1),
        Latitude,
        Longitude
      );
      const differenceInSeconds =
        (expectedTime.getTime() - actualDateTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns sunset time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julySunriseExpected.forEach(expected => {
      const { ExpectedTimeUtc, Latitude, Longitude } = expected;
      const expectedTime = new Date(ExpectedTimeUtc);
      const actualTime = getSunriseTime(
        new Date(2019, 6, 1),
        Latitude,
        Longitude
      );
      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
