import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonDateTime } from './index';
import januaryNoonExpected from './testData/utcJanNoon.json';
import julyNoonExpected from './testData/utcJulyNoon.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januaryNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 0, 1);
      const actualTime = getNoonDateTime(targetDate, expected.Longitude);
      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns noon time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julyNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 6, 1);
      const actualTime = getNoonDateTime(targetDate, expected.Longitude);

      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;

      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('Solar noon + eot + offset offset = next day', () => {
    const russia = {
      Latitude: 64.732857,
      Longitude: 177.507812,
      ExpectedTimeUtc: '2019-09-30T23:59:00.000Z',
      Offset: 12.0
    };

    const actual = getNoonDateTime(new Date(2019, 9, 1), russia.Longitude);
    const expectedTime = new Date(russia.ExpectedTimeUtc);

    const differenceInSeconds =
      (expectedTime.getTime() - actual.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });

  test('America Midway Islands', () => {
    const midway = {
      Latitude: 6.41686,
      Longitude: -162.56024,
      _date: new Date(2019, 0, 1),
      expected: '2019-01-01T22:53:00.000Z',
      offset: -11
    };

    const actual = getNoonDateTime(midway._date, midway.Longitude);
    const expectedTime = new Date(midway.expected);

    const differenceInSeconds =
      (expectedTime.getTime() - actual.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
});
