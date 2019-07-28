import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getMidday } from './index';

const model = (latitude, timeZone, middayInHours) => {
  return {
    latitude,
    date: new Date(2019, 6, 28),
    timeZone,
    middayInHours
  };
};

const todaysTestData = [
  model(-0.190554, 1, 13.12),
  model(-47.921822, -3, 12.30),
  model(149.131393, 10, 12.17),
  model(10.752245, 2, 13.39),
  model(21.165319, 2, 13.70)
];

suite('Get midday', () => {
  test('returns the correct time in hours for London, England on 28/07/2019', () => {
    todaysTestData.forEach(expected => {
      const { latitude, date, timeZone, middayInHours } = expected;
      const midday = getMidday(latitude, date, timeZone);
      assert.equal(midday, middayInHours);
    });
  });
});
