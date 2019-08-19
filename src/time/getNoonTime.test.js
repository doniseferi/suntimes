import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonTime } from './index';
import januaryNoonExpected from './januaryNoonExpected.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy', () => {
    januaryNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTime);
      const targetDate = new Date(2019, 0, 1);
      const actualTime = getNoonTime(targetDate, expected.Longitude);
      const difference = Math.abs(expectedTime - actualTime);
      const differenceInMinutes = Math.round(((difference % 86400000) % 3600000) / 60000);
      assert.closeTo(differenceInMinutes, 0, 1);
    });
  });
});
