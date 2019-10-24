import { suite, test } from 'mocha';
import { assert } from 'chai';
import {
  getAstronomicalDawnStartDateTimeUtc,
  getNauticalDawnStartDateTimeUtc,
  getCivilDawnStartDateTimeUtc,
  getAstronomicalDuskStartDateTimeUtc,
  getNauticalDuskStartDateTimeUtc,
  getCivilDuskStartDateTimeUtc
} from '../time/index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';

const jan = new Date(2022, 0, 1);

suite('Get twilight dawn date time', () => {
  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime = getAstronomicalDawnStartDateTimeUtc(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns the nautical dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.filter(x => x.ExpectedCivilDawnUtc).forEach(expected => {
      const { ExpectedNauticalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedNauticalDawnUtc);

      const actualDateTime = getNauticalDawnStartDateTimeUtc(
        jan,
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

      const actualDateTime = getCivilDawnStartDateTimeUtc(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});

suite('Get twilight dusk date time', () => {
  test('returns the astronimcal dusk start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDuskUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDuskUtc);

      const actualDateTime = getAstronomicalDuskStartDateTimeUtc(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns the nautical dusk start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedNauticalDuskUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedNauticalDuskUtc);

      const actualDateTime = getNauticalDuskStartDateTimeUtc(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns the civil dusk start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedCivilDuskUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedCivilDuskUtc);

      const actualDateTime = getCivilDuskStartDateTimeUtc(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds = (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
