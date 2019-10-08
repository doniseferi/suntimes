import { suite, test } from 'mocha';
import { getTwilightAstronomicalStartDateTime, getTwilightNauticalStartDateTime, getTwilightCivilStartDateTime } from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';
import fs from 'fs';

const date = new Date(2022, 0, 1);

suite('Get twilight date time', () => {
  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    const accum = [];
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime = getTwilightAstronomicalStartDateTime(
        date,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        const twilightUrl = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
        const timeZoneUrl = `https://www.timeanddate.com/time/zone/@${Latitude},${Longitude}`;
        accum.push(
          JSON.stringify({
            twilightUrl,
            timeZoneUrl,
            actualDateTime,
            differenceInSeconds,
            expected
          })
        );
      }
    });
    fs.writeFile('twilight.json', accum, e => console.log(e));
  });

  test('returns the nautical dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    const accum = [];
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedNauticalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedNauticalDawnUtc);

      const actualDateTime = getTwilightNauticalStartDateTime(
        date,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        const twilightUrl = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
        const timeZoneUrl = `https://www.timeanddate.com/time/zone/@${Latitude},${Longitude}`;
        accum.push(
          JSON.stringify({
            twilightUrl,
            timeZoneUrl,
            actualDateTime,
            differenceInSeconds,
            expected
          })
        );
      }
    });
    fs.writeFile('nutical.json', accum, e => console.log(e));
  });

  test('returns the civil dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    const accum = [];
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedCivilDawnUtc, Latitude, Longitude } = expected;
      const _expectedDateTime = new Date(ExpectedCivilDawnUtc);

      const _actualDateTime = getTwilightCivilStartDateTime(
        date,
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (_expectedDateTime.getTime() - _actualDateTime.getTime()) / 1000;

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        const twilightUrl = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
        const timeZoneUrl = `https://www.timeanddate.com/time/zone/@${Latitude},${Longitude}`;
        const _ex = expected.ExpectedCivilDawnUtc;
        accum.push(JSON.stringify({
          twilightUrl,
          timeZoneUrl,
          _actualDateTime,
          _ex,
          ExpectedCivilDawnUtc,
          differenceInSeconds
        }));
      }
    });
    fs.writeFile('civil.json', accum, (e) => console.log(e));
  });
});
