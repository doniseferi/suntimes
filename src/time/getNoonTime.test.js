import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getNoonTime } from './index';
import januaryNoonExpected from './januaryNoonExpected.json';

suite('Get Noon Time', () => {
  test('returns noon time within a +/- 1 minute accuracy', () => {
    januaryNoonExpected.forEach(expected => {
      const expectedTime = expected.ExpectedTime;
      const longitude = expected.Longitude;
      const actual = hoursToMiutes(getNoonTime(new Date(2019, 0, 1), longitude));
      const expectedInHours = hoursToMiutes(timeToHours(expectedTime.split(' ')[1]));
      const set = [actual, expectedInHours];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      assert.closeTo(difference, 0, 1);
    });
  });

  const timeToHours = (time) => {
    const [h, m, s] = time.split(':');
    const hours = parseFloat(h);
    const minutes = parseFloat(m) * (1 / 60);
    const seconds = parseFloat(s) * (1 / 3600);

    return hours + minutes + seconds;
  };

  const hoursToMiutes = (hours) => hours * 60;
});
