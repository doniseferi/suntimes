import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonTime } from './index';
import januaryNoonExpected from './januaryNoonExpected.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy', () => {
    januaryNoonExpected.forEach(expected => {
      const expectedTime = new Date(expected.ExpectedTime).toLocaleTimeString('en-GB', { timeZone: 'UTC' });
      const actualTime = getNoonTime(new Date(2019, 0, 1), expected.Longitude);
      const actualTimeInMinutes = hoursToMiutes(actualTime);
      const expectedTimeInMinutes = hoursToMiutes(timeToHours(expectedTime));
      const set = [actualTimeInMinutes, expectedTimeInMinutes];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      assert.closeTo(difference, 0, 1);
    });
  });
});
