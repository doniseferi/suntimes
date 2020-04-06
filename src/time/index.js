import getDateTimeUtcFactory from './getDateTimeAtAngle';
import getHourAngleFactory from '../hourAngle/getHourAngle';
import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import { toUtcDateTime } from '../conversion/index';
import { getNoonHourAngleFactory } from '../hourAngle/index';
import {
  perpetualEventHandler,
  sunAltitudeAboveErrorMessage,
  sunAltitudeBelowErrorMessage,
  sunUpAllDayErrorMessage,
  sunDownAllDayErrorMessage
} from '../perpetualEvents/index';

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;
const getNoonDateTimeUtc = (date, longitude) =>
  toUtcDateTime(date, getNoonHourAngle(date, longitude)).toISOString();

const hourAngleFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const getHourAngleFromNoon = hourAngleFactory.getHourAngleSinceNoon;

const factory = getDateTimeUtcFactory(getNoonDateTimeUtc, getHourAngleFromNoon);

const dateTimeUtcOfAngleBeforeNoon = factory.getDateTimeUtcOfAngleBeforeNoon;
const dateTimeUtcOfAngleAfterNoon = factory.getDateTimeUtcOfAngleAfterNoon;

const sunriseAndSunsetAngle = -0.833333333;
const sunsetAngle = -0.833333333;
const epsilon = 0.000000000000002;
const civilAngle = -6;
const nauticalAngle = -12;
const astronomicalAngle = -18;

const getDateTimeUtcOfAngleBeforeNoon = (angle, date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, angle),
    sunAltitudeBelowErrorMessage(date, latitude, longitude, angle));

const getDateTimeUtcOfAngleAfterNoon = (angle, date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, angle),
    sunAltitudeBelowErrorMessage(date, latitude, longitude, angle));

const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(sunriseAndSunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getCivilDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(sunriseAndSunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getCivilDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getNauticalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getNauticalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

const getAstronomicalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

const getNauticalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getNauticalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getCivilDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getCivilDuskStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

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
