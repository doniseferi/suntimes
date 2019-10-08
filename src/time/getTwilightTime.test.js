import { suite, test } from 'mocha';
import { getTwilightAstronomicalStartDateTime, getTwilightNauticalStartDateTime, getTwilightCivilStartDateTime } from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';
import fs from 'fs';

const differenceInSeconds = (date1, date2) =>
  (date1.getTime() - date2.getTime()) / 1000;

suite('Get twilight date time', () => {
  test('kosovo', () => {
    const date = new Date(2022, 0, 1);
    const expected = {
      Country: 'Kosovo',
      City: 'Pristina',
      Latitude: 42.6666,
      Longitude: 21.1724,
      Offset: 1.0,
      ExpectedAstronomicalDawnUtc: new Date('2022-01-01T04:23:00.000Z'),
      ExpectedNauticalDawnUtc: new Date('2022-01-01T04:58:00.000Z'),
      ExpectedCivilDawnUtc: new Date('2022-01-01T05:33:00.000Z'),
      ExpectedAstronomicalDuskUtc: new Date('2022-01-01T16:54:00.000Z'),
      ExpectedNauticalDuskUtc: new Date('2022-01-01T16:19:00.000Z'),
      ExpectedCivilDuskUtc: new Date('2022-01-01T15:44:00.000Z')
    };
    const astro = getTwilightAstronomicalStartDateTime(date, expected.Latitude, expected.Longitude);
    const nautical = getTwilightNauticalStartDateTime(
      date,
      expected.Latitude,
      expected.Longitude
    );
    const civil = getTwilightCivilStartDateTime(
      date,
      expected.Latitude,
      expected.Longitude
    );

    const expectedAstro = differenceInSeconds(expected.ExpectedAstronomicalDawnUtc, astro);
    const expectedNautic = differenceInSeconds(expected.ExpectedNauticalDawnUtc, nautical);
    const epectedCivil = differenceInSeconds(
      expected.ExpectedCivilDawnUtc,
      civil
    );
    console.log(expectedAstro);
    console.log(expectedNautic);
    console.log(epectedCivil);
  });

  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    const accum = [];
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

  test('returns the civil dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    const accum = [];
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedCivilDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedCivilDawnUtc);

      const actualDateTime = getTwilightNauticalStartDateTime(
        new Date(2022, 0, 1),
        Latitude,
        Longitude
      );

      const differenceInSeconds =
        (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        const twilightUrl = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
        const timeZoneUrl = `https://www.timeanddate.com/time/zone/@${Latitude},${Longitude}`;
        accum.push(JSON.stringify({
          twilightUrl,
          timeZoneUrl,
          actualDateTime,
          differenceInSeconds,
          expected
        }));
      }
    });
    fs.writeFile('civil.json', accum, (e) => console.log(e));
  });
});
