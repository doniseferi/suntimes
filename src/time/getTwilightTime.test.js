import { suite, test } from 'mocha';
import { assert } from 'chai';
import {
  getAstronomicalDawnStartDateTime,
  getNauticalDawnStartDateTime,
  getCivilDawnStartDateTime,
  getAstronomicalDuskStartDateTime,
  getNauticalDuskStartDateTime,
  getCivilDuskStartDateTime
} from './index';
import januaryTwilightExpected from './testData/utcJanTwilight.json';

const jan = new Date(2022, 0, 1);

suite('Get twilight dawn date time', () => {
  test('returns the astronimcal dawn start time with an accuracy of 60 +/- seconds for 01/01/2022', () => {
    januaryTwilightExpected.forEach(expected => {
      const { ExpectedAstronomicalDawnUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedAstronomicalDawnUtc);

      const actualDateTime = getAstronomicalDawnStartDateTime(
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

      const actualDateTime = getNauticalDawnStartDateTime(
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

      const actualDateTime = getCivilDawnStartDateTime(
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

      const actualDateTime = getAstronomicalDuskStartDateTime(
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

      const actualDateTime = getNauticalDuskStartDateTime(
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
    // const formatDate = date =>
    //   date.getFullYear() +
    //   ('0' + (date.getMonth() + 1)).slice(-2) +
    //   ('0' + date.getDate()).slice(-2) +
    //   'T' +
    //   (date.getHours() < 10 ? '0' : '') +
    //   date.getHours() +
    //   (date.getMinutes() < 10 ? '0' : '') +
    //   date.getMinutes() +
    //   (date.getSeconds() < 10 ? '0' : '') +
    //   date.getSeconds();

    januaryTwilightExpected.forEach(expected => {
      const { ExpectedCivilDuskUtc, Latitude, Longitude } = expected;
      const expectedDateTime = new Date(ExpectedCivilDuskUtc);

      const actualDateTime = getCivilDuskStartDateTime(
        jan,
        Latitude,
        Longitude
      );

      const differenceInSeconds = (expectedDateTime.getTime() - actualDateTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
      // if (differenceInSeconds > 60 || differenceInSeconds < -60) {
      //   const strDate = formatDate(actualDateTime);
      //   const utc = `https://www.timeanddate.com/worldclock/converter.html?iso=${strDate}00&p1=1440`;
      //   const url = `https://www.timeanddate.com/sun/@${Latitude},${Longitude}?month=1&year=2022`;
      //   x.push({
      //     url,
      //     utc,
      //     differenceInSeconds,
      //     actualDateTime,
      //     expected
      //   });
      // }
    });
  });
});
