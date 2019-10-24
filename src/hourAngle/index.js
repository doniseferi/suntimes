import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../coversion/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import getNoonHourAngleFactory from './getNoonHourAngle';
import getHourAngleFactory from './getHourAngle';

const hourAngleFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);

const getHourAngleSinceNoon = hourAngleFactory.getHourAngleSinceNoon;

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;
const getNoonDateTimeUtc = (date, longitude) =>
  toUtcDateTime(date, getNoonHourAngle(date, longitude));

export {
  getHourAngleFactory,
  getHourAngleSinceNoon,
  getNoonHourAngleFactory,
  getNoonHourAngle,
  getNoonDateTimeUtc
};
