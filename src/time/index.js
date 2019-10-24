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
const sunsetAngle = -0.833333333;
const horizon = -0.57;
const civilAngle = -6;
const nauticalAngle = -12;
const astronomicalAngle = -18;

const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);

const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude);

const getCivilDawnEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(horizon, date, latitude, longitude);

const getCivilDawnStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude);

const getNauticalDawnEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude);

const getNauticalDawnStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude);

const getAstronomicalDawnEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude);

const getAstronomicalDawnStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude);

const getAstronomicalDuskStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude);

const getAstronomicalDuskEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude);

const getNauticalDuskEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude);

const getNauticalDuskStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude);

const getCivilDuskEndDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(horizon, date, latitude, longitude);

const getCivilDuskStartDateTime = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude);

export {
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc,
  getCivilDawnEndDateTime,
  getCivilDawnStartDateTime,
  getNauticalDawnEndDateTime,
  getNauticalDawnStartDateTime,
  getAstronomicalDawnEndDateTime,
  getAstronomicalDawnStartDateTime,
  getAstronomicalDuskStartDateTime,
  getAstronomicalDuskEndDateTime,
  getNauticalDuskEndDateTime,
  getNauticalDuskStartDateTime,
  getCivilDuskEndDateTime,
  getCivilDuskStartDateTime
};
