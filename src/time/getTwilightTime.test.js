import { suite, test } from 'mocha';
import { getTwilightTime } from './index';

suite('', () => {
  test('', () => {
    const latitude = 51.522079;
    const longitude = -0.19138;

    const date = new Date(2019, 8, 10);

    // const prLat = 42.662914;
    // const prLon = 21.165503;
    const twilight = getTwilightTime(date, latitude, longitude);

    console.log({ twilight });
  });
});
