import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonDateTimeUtc } from './index';
import januaryNoonExpected from './testData/utcJanNoon.json';
import julyNoonExpected from './testData/utcJulyNoon.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januaryNoonExpected.forEach(expected => {
      const targetDate = new Date(2019, 0, 1);
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const actualTime = getNoonDateTimeUtc(targetDate, expected.Longitude);
      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns noon time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julyNoonExpected.forEach(expected => {
      const targetDate = new Date(2019, 6, 1);
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const actualTime = getNoonDateTimeUtc(targetDate, expected.Longitude);

      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('East most location with a 12 hour offset returns correct noon datetime in utc', () => {
    const targetDate = new Date(2019, 9, 1);
    const anadyrRussia = {
      Latitude: 64.732857,
      Longitude: 177.507812,
      ExpectedTimeUtc: '2019-09-30T23:59:00.000Z',
      Offset: 12.0
    };

    const actual = getNoonDateTimeUtc(targetDate, anadyrRussia.Longitude);
    const expectedTime = new Date(anadyrRussia.ExpectedTimeUtc);

    const differenceInSeconds =
      (expectedTime.getTime() - actual.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });

  test('West most location with a 12 hour offset returns correct noon datetime in utc', () => {
    const targetDate = new Date(2019, 0, 1);
    const bakerIslandUsa = {
      Latitude: 0.193627,
      Longitude: -176.476913,
      ExpectedTimeUtc: '2019-01-01T23:49:00.000Z'
    };

    const actual = getNoonDateTimeUtc(targetDate, bakerIslandUsa.Longitude);
    const expectedTime = new Date(bakerIslandUsa.ExpectedTimeUtc);

    const differenceInSeconds =
      (expectedTime.getTime() - actual.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
});
