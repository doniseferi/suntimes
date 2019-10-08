import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getTwilightAstronomicalStartDateTime, getTwilightCivilStartDateTime } from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';

suite('Get twilight date time', () => {
  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime = getTwilightAstronomicalStartDateTime(
        new Date(2022, 0, 1),
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
  test('returns the civil dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedCivilDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedCivilDawnUtc);

      const actualDateTime = getTwilightCivilStartDateTime(
        new Date(2022, 0, 1),
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
