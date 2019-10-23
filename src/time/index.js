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

const getDateTimeUtcOfAngleBeforeNoon = factory.getDateTimeUtcOfAngleBeforeNoon;
const getDateTimeUtcOfAngleAfterNoon = factory.getDateTimeUtcOfAngleAfterNoon;

const sunriseAngle = -0.833333333;
const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);

const sunsetAngle = -0.833333333;
const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude);

export {
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc
};
