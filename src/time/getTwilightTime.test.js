import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getTwilightAstronomicalStartTime } from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';

suite('Get astronomical dawn date time', () => {
  test('returns with an accuracy of x +/- seconds', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime =
        getTwilightAstronomicalStartTime(new Date(2022, 0, 1), Latitude, Longitude);

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
