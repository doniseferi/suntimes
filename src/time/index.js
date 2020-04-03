import getDateTimeUtcFactory from './getDateTimeAtAngle';
import getHourAngleFactory from '../hourAngle/getHourAngle';
import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import { toUtcDateTime } from '../conversion/index';
import { getNoonHourAngleFactory } from '../hourAngle/index';

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;
const getNoonDateTimeUtc = (date, longitude) =>
  toUtcDateTime(date, getNoonHourAngle(date, longitude));

const hourAngleFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const getHourAngleFromNoon = hourAngleFactory.getHourAngleSinceNoon;

const factory = getDateTimeUtcFactory(getNoonDateTimeUtc, getHourAngleFromNoon);

const getDateTimeUtcOfAngleBeforeNoon = factory.getDateTimeUtcOfAngleBeforeNoon;
const getDateTimeUtcOfAngleAfterNoon = factory.getDateTimeUtcOfAngleAfterNoon;

const sunriseAngle = -0.833333333;
const sunsetAngle = -0.833333333;
const epsilon = 0.000000000000002;
const civilAngle = -6;
const nauticalAngle = -12;
const astronomicalAngle = -18;

const getSunriseDateTimeUtc = (date, latitude, longitude) => {
  try {
    const result = getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);
    return result;
  } catch (err) {
    if (err.message === 'The sun altitude never drops below the angle specified') {
      return 'The sun is up all day';
    } else if (err.message === 'The sun altitude never elevates above the angle specified') {
      return 'The sun is down all day';
    }
  }
};

const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude);

const getCivilDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);

const getCivilDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude);

const getNauticalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle - epsilon, date, latitude, longitude);

const getNauticalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude);

const getAstronomicalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle - epsilon, date, latitude, longitude);

const getAstronomicalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude);

const getAstronomicalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle - epsilon, date, latitude, longitude);

const getAstronomicalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude);

const getNauticalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude);

const getNauticalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle - epsilon, date, latitude, longitude);

const getCivilDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude);

const getCivilDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude);

export {
  getNoonDateTimeUtc,
  getDateTimeUtcOfAngleBeforeNoon,
  getDateTimeUtcOfAngleAfterNoon,
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc,
  getCivilDawnEndDateTimeUtc,
  getCivilDawnStartDateTimeUtc,
  getNauticalDawnEndDateTimeUtc,
  getNauticalDawnStartDateTimeUtc,
  getAstronomicalDawnEndDateTimeUtc,
  getAstronomicalDawnStartDateTimeUtc,
  getAstronomicalDuskStartDateTimeUtc,
  getAstronomicalDuskEndDateTimeUtc,
  getNauticalDuskEndDateTimeUtc,
  getNauticalDuskStartDateTimeUtc,
  getCivilDuskEndDateTimeUtc,
  getCivilDuskStartDateTimeUtc
};
