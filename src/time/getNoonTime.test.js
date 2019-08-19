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
      const differenceInMiliseconds = Math.abs(expectedTime - actualTime);
      const differenceInSeconds = Math.round(((differenceInMiliseconds % 86400000) % 3600000) / 60000);
      assert.closeTo(differenceInSeconds, 0, 60);
    });
  });
});
