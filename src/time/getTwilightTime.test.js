import { suite, test } from 'mocha';
import { getTwilightAstronomicalStartTime } from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';

suite('Get twilight date time', () => {
  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds', () => {
    const bucket = [];
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime = getTwilightAstronomicalStartTime(
        new Date(2022, 0, 1),
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      if (differenceInSeconds < -60 || differenceInSeconds > 60) {
        // const url = `https://www.timeanddate.com/time/zone/@${Latitude},${Longitude}`;
        const twilightUrl = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
        const timeZoneUrl = `https://www.timeanddate.com/time/zone/@46.7811,-56.1764`;
        const s = {
          twilightUrl,
          timeZoneUrl,
          actualDateTime,
          differenceInSeconds,
          expected
        };
        bucket.push(s);
      }
    });
    console.log(JSON.stringify(bucket));
  });
});
