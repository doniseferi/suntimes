import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getSunsetTime } from './index';
import januarySunsetExpected from './testData/utcJanSunset.json';
import julySunsetExpected from './testData/utcJulySunset.json';

suite('Get Sunset Time', () => {
  test('returns sunset time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januarySunsetExpected.forEach(expected => {
      const { ExpectedTimeUtc, Latitude, Longitude } = expected;
      const expectedTime = new Date(ExpectedTimeUtc);
      if (expected.City === 'Waitangi') {
        console.log('w');
      }
      const actualDateTime = getSunsetTime(
        new Date(2019, 0, 1),
        Latitude,
        Longitude
      );
      const differenceInSeconds =
        (expectedTime.getTime() - actualDateTime.getTime()) / 1000;

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        console.log(expected);
      }

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns sunset time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julySunsetExpected.forEach(expected => {
      const { ExpectedTimeUtc, Latitude, Longitude } = expected;
      const expectedTime = new Date(ExpectedTimeUtc);
      const actualTime = getSunsetTime(
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
