import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonTime } from './index';
import januaryNoonExpected from './testFiles/utcJanNoon.json';
import julyNoonExpected from './testFiles/utcJulyNoon.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy for the 01/01/2019', () => {
    januaryNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 0, 1);
      const actualTime = getNoonTime(targetDate, expected.Longitude);
      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });

  test('returns noon time within a +/- 1 minute accuracy for the 01/07/2019', () => {
    julyNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTimeUtc);
      const targetDate = new Date(2019, 6, 1);
      const actualTime = getNoonTime(targetDate, expected.Longitude);
      const differenceInSeconds =
        (expectedTime.getTime() - actualTime.getTime()) / 1000;
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
