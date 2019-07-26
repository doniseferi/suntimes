import { suite, test } from 'mocha';
import timeDifferenceBetweenSolarNoon from './index';

suite('Time difference from solar noon', () => {
  test('returns the differente between solar noon and the angle', () => {
    const s = timeDifferenceBetweenSolarNoon(0, 0, new Date(Date.now()));
    console.log(s);
  });
});
