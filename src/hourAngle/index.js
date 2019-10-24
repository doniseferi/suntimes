import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../coversion/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import getNoonHourAngleFactory from './getNoonHourAngle';
import getHourAngleFactory from './getHourAngle';

const timeFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);

const getHourAngleSinceNoon = timeFactory.getHourAngleSinceNoon;

const noonTimeFactory = getNoonHourAngleFactory(equationOfTime, toUtcDateTime);
const getNoonDateTimeUtc = noonTimeFactory.getNoonDateTimeUtc;

export { getHourAngleSinceNoon, getNoonHourAngleFactory, getNoonDateTimeUtc };
