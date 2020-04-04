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

const longPersistingEventsHandler = (command, sunAltitudeAboveAngleErrorMessage, sunAltitudeBelowAngleErrorMessage) => {
  try {
    return command();
  } catch (err) {
    if (err.message === 'The sun altitude never drops below the angle specified') {
      return sunAltitudeAboveAngleErrorMessage;
    } else if (err.message === 'The sun altitude never elevates above the angle specified') {
      return sunAltitudeBelowAngleErrorMessage;
    } else {
      throw err;
    }
  }
};

const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getCivilDawnEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const getCivilDawnStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getNauticalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getNauticalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

const getAstronomicalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getAstronomicalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

const getNauticalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

const getNauticalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getCivilDuskEndDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

const getCivilDuskStartDateTimeUtc = (date, latitude, longitude) =>
  longPersistingEventsHandler(() => getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

const sunAltitudeAboveErrorMessage = (date, latitude, longitude, degrees) => `The sun's altitude does not drop to ${degrees}° on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunAltitudeBelowErrorMessage = (date, latitude, longitude, degrees) => `The sun's altitude does not rise to ${degrees}° on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunUpAllDayErrorMessage = (date, latitude, longitude) => `The sun is up all day on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunDownAllDayErrorMessage = (date, latitude, longitude) => `The sun is down all day on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

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
