import getDateTimeUtcFactory from './getDateTimeAtAngle';
import getHourAngleFactory from '../hourAngle/getHourAngle';
import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import { toUtcDateTime } from '../coversion/index';
import { getNoonTimeFactory } from '../hourAngle/index';

const noonTimeFactory = getNoonTimeFactory(equationOfTime, toUtcDateTime);
const getNoonDateTime = noonTimeFactory.getNoonDateTime;

const hourAngleFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const getHourAngleFromNoon = hourAngleFactory.getHourAngleSinceNoon;

const factory = getDateTimeUtcFactory(getNoonDateTime, getHourAngleFromNoon);

const sunriseAngle = -0.833333333;

export default (date, latitude, longitude) =>
  factory.getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);
