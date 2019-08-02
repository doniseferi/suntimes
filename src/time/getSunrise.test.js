import { suite, test } from 'mocha';
import { assert } from 'chai';
import { getSunriseTime } from './index';

const model = (country, city, latitude, expectedSunrise, offsetAtSunrise) => {
  return {
    country,
    city,
    latitude,
    expectedSunrise,
    offsetAtSunrise
  };
};

const testData = [
  model('Niue', 'Alofi', -19.0167, '16:44:29', -11),
  model('French Polynesia', 'Papeete', -17.5334, '15:25:56', -10),
  model('United States', 'Kodiak', 57.7934, '18:53:56', -9),
  model('Pitcairn Islands', 'Adamstown', -25.0667, '13:52:38', -8),
  model('Mexico', 'Nacozari de Garcia', 30.42, '14:14:56', -7),
  model('Mexico', 'Mexico City', 19.4424, '13:09:52', -6),
  model('Panama', 'Panama City', 8.968, '11:32:24', -5),
  model('Saint Lucia', 'Castries', 14.002, '10:27:11', -4),
  model('Saint Pierre And Miquelon', 'Saint-Pierre', 46.7811, '11:29:32', -3),
  model('Brazil', 'Brasilia', -15.7833, '08:42:30', -2),
  model('Cabo Verde', 'Praia', 14.9167, '07:58:52', -1),
  model('Sri Lanka', 'Colombo', 6.932, '00:51:06', 0),
  model('United Kingdom', 'London', 51.5, '08:06:09', 0),
  model('Kosovo', 'Pristina', 42.6666, '06:05:14', 1),
  model('West Bank', 'Al Quds', 31.7764, '04:38:30', 2),
  model('Yemen', 'Sanaa', 15.3547, '03:28:42', 3),
  model('Mauritius', 'Port Louis', -20.1666, '01:32:10', 4),
  model('Maldives', 'Male', 4.1667, '01:11:47', 5),
  model('Kazakhstan', 'Astana', 51.1811, '03:18:23', 6),
  model('Laos', 'Vientiane', 17.9667, '23:40:55', 7),
  model('Mongolia', 'Ulaanbaatar', 47.9167, '00:41:42', 8),
  model('Palau', 'Ngerulmud', 7.5, '21:13:58', 9),
  model('Papua New Guinea', 'Port Moresby', -9.4647, '19:54:19', 10),
  model('New Caledonia', 'Noumea', -22.2625, '18:12:57', 11),
  model('Marshall Islands', 'Majuro', 7.103, '18:46:12', 12),
  model('New Zealand', 'Wellington', -41.3, '16:50:15', 13),
  model('Samoa', 'Apia', -13.8415, '17:01:37', 14)
];

suite('Get sunrise', () => {
  test('returns the correct time in hours for the 1st of January 2019', () => {
    testData.forEach(expected => {
      const { latitude, expectedSunrise } = expected;
      const result = getSunriseTime(new Date(2019, 0, 1), latitude);
      assert.equal(result, expectedSunrise);
    });
  });
});
