import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../coversion/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import getNoonTimeFactory from './getNoonTime';
import getHourAngleFactory from './getHourAngle';

const timeFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);

const getHourAngleSinceNoon = timeFactory.getHourAngleSinceNoon;

const noonTimeFactory = getNoonTimeFactory(equationOfTime, toUtcDateTime);
const getNoonDateTime = noonTimeFactory.getNoonDateTime;

export { getHourAngleSinceNoon, getNoonTimeFactory, getNoonDateTime };
