import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getMidday } from './index';

// const model = (latitude, timeZone, middayInHours) => {
//   return {
//     latitude,
//     date: new Date(2019, 6, 28),
//     timeZone,
//     middayInHours
//   };
// };

// const todaysTestData = [
//   model(-0.190554, 1, 13.12),
//   model(-47.921822, -3, 12.30),
//   model(149.131393, 10, 12.17),
//   model(10.752245, 2, 13.39)
// ];

const testData = [
  {
    country: 'United Kingdom',
    city: 'London',
    latitude: 51.5,
    longitude: -0.1167,
    timezone: 'Europe/London',
    offset1stJan2019: 0,
    offset1stJuly2019: 1,
    expectedSolarNoon1stJan2019: '2019-01-01T12:02:57.000Z',
    expectedSolarNoon1stJuly2019: '2019-07-01T12:04:17.000Z',
    expectedSunrise1stJan2019: '2019-01-01T08:06:09.000Z',
    expectedSunrise1stJuly2019: '2019-07-01T03:47:21.000Z',
    expectedSunset1stJan2019: '2019-01-01T15:59:54.000Z',
    expectedSunset1stJuly2019: '2019-07-01T20:20:53.000Z'
  }
];

suite('Get midday', () => {
  test('returns the correct time in hours for the 28/07/2019', () => {
    testData.forEach(expected => {
      const { longitude, expectedSolarNoon1stJuly2019, offset1stJuly2019 } = expected;
      const date = new Date(expectedSolarNoon1stJuly2019);
      const result = getMidday(longitude, date, offset1stJuly2019);
      assert.equal(date, result);
    });
  });
});
