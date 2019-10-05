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

      if (differenceInSeconds > 60 || differenceInSeconds < -60) {
        console.log(expected);
      }

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

    const noonNow = getNoonDateTime(new Date(2019, 9, 1), russia.Longitude);
    const expectedTime = new Date(russia.ExpectedTimeUtc);

    const differenceInSeconds =
      (expectedTime.getTime() - noonNow.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });

  test('algorithm to fix solar noon: offset = direction * longitude * 24 / 360', () => {
    // where direction is 1 for east, -1 for west, and longitude is in (-180,180)
    // sing East = +0 = West = -0
    // https://stackoverflow.com/questions/1058342/rough-estimate-of-the-time-offset-from-gmt-from-latitude-longitude
    assert.isTrue(
      false
    );
  });
});
