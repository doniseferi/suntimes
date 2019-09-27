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

  test('Solar twilight + eot + offset offset = next day', () => {
    const problemLocation = {
      City: 'Waitangi',
      Latitude: -44.0263,
      Longitude: -176.3696,
      Offset: 13.75,
      ExpectedAstronomicalDawnUtc: '2021-12-31T13:42:00.000Z'
    };
    const result = getTwilightAstronomicalStartDateTime(
      new Date(2022, 0, 1),
      problemLocation.Latitude,
      problemLocation.Longitude
    );

    const expectedDate = new Date(problemLocation.ExpectedAstronomicalDawnUtc);

    const differenceInSeconds =
      expectedDate.getTime() - result.getTime() / 1000;

    assert.closeTo(differenceInSeconds, 0, 60);
  });
});
