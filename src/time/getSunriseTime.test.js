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
      const actualDateTime = getSunriseTime(new Date(2019, 0, 1), Latitude, Longitude);
      const differenceInSeconds =
        (expectedTime.getTime() - actualDateTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('Elevtion of the point Test', () => {
    const expected = {
      Country: 'Samoa',
      City: 'Apia',
      Latitude: -13.8415,
      Longitude: -171.7386,
      ExpectedTimeUtc: '2019-01-01T17:01:37.000Z',
      ElevtionInMeters: 3
    };
    const actualTime = getSunriseTime(
      new Date(2019, 0, 1),
      expected.Latitude,
      expected.Longitude,
      expected.ElevtionInMeters
    );
    const expectedTime = new Date(expected.ExpectedTimeUtc);
    const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });

  test('returns noon time within a +/- 1 minute accuracy for the 01/07/2019', () => {
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

  test('Astana', () => {
    const expected = {
      Country: 'Kazakhstan',
      City: 'Astana',
      Latitude: 51.1811,
      Longitude: 71.4278,
      ExpectedTimeUtc: '2019-06-30T23:03:47.000Z',
      Offset: 6.0,
      ElevtionInMeters: 347
    };

    const actualTime = getSunriseTime(
      new Date(2019, 6, 1),
      expected.Latitude,
      expected.Longitude,
      expected.ExpectedTimeUtc
    );
    const expectedTime = new Date(expected.ExpectedTimeUtc);
    const differenceInSeconds =
      (expectedTime.getTime() - actualTime.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
});
