import { suite, test } from 'mocha';
// import { assert } from 'chai';
import { getNoonTime } from './index';
import januaryNoonExpected from './januaryNoonExpected.json';
import fs from 'fs';

suite('Get sunrise', () => {
  test('returns the correct time for midday on january the 1st 2019', () => {
    const superSet = [];
    const passed = [];
    januaryNoonExpected.forEach(expected => {
      const { ExpectedTime, Longitude } = expected;
      const actual = getNoonTime(new Date(2019, 0, 1), Longitude);
      const expectedInHours = timeToHours(ExpectedTime.split(' ')[1]);
      const set = [actual, expectedInHours];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      if (difference > 0.1) {
        superSet.push(JSON.stringify({
          actual,
          expectedInHours,
          difference
        }));
      } else {
        passed.push(JSON.stringify([{
          actual,
          expectedInHours,
          difference
        }]));
      }
    });
    write(superSet, 'failed.json');
    write(passed, 'passed.json');
  });

  const write = (superSet, name) => fs.writeFile(name, superSet, (e) => console.log(e));

  const timeToHours = (time) => {
    const [h, m, s] = time.split(':');
    const hours = parseFloat(h);
    const minutes = parseFloat(m) * (1 / 60);
    const seconds = parseFloat(s) * (1 / 3600);

    return hours + minutes + seconds;
  };

  const time = (decimal) => {
    const minutesInPercentage = decimal % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const miliSecondsInPercentage = seconds % 1;
    const miliSeconds = miliSecondsInPercentage * 1000;

    return `${parseInt(decimal)}:${parseInt(minutes)}:${parseInt(seconds)}:${parseInt(miliSeconds)}`;
  };
});
