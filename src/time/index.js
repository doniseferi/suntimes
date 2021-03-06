import { getDateTimeUtcFactory } from './getDateTimeAtAngle';
import { getHourAngleFactory } from '../hourAngle/getHourAngle';
import { equationOfTime } from '../equationOfTime/index';
import { getDeclinationOfTheSun } from '../declination/index';
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

/**
* Gets the noon date and time in UTC expressed in an ISO 8601 format for date and longitude value.
* @example <caption>Example usage of getNoonDateTimeUtc</caption>
* // returns "2025-01-18T12:10:20.853Z"
* getNoonDateTimeUtc(new Date(2025, 0, 18), -0.010150);
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing noon date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
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

const sunriseAngle = -0.833333333;
const sunsetAngle = -0.833333333;
const epsilon = 0.000000000000002;
const civilAngle = -6;
const nauticalAngle = -12;
const astronomicalAngle = -18;

/**
* Gets the date and time in UTC expressed in an ISO 8601 format for an angle before noon for the angle, date, latitude and longitude value.
* @example <caption>Example usage of getDateTimeUtcOfAngleBeforeNoon</caption>
* // returns "2025-01-18T05:57:45.720Z"
* getDateTimeUtcOfAngleBeforeNoon(-18, new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getDateTimeUtcOfAngleBeforeNoon</caption>
* // returns "The sun's altitude does not drop to -18° on Wed Jun 18 2025 at latitude 51.47773 and longitude -0.01015"
* getDateTimeUtcOfAngleBeforeNoon(-18, new Date(2025, 5, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getDateTimeUtcOfAngleBeforeNoon</caption>
* // returns "The sun's altitude does not rise to 18° on Wed Jun 18 2025 at latitude -51.47773 and longitude -0.01015"
* getDateTimeUtcOfAngleBeforeNoon(18, new Date(2025, 5, 18), -51.477730, -0.010150);
* @param {number} angle - An angle value.
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string}  A string representing the time and date for an angle before noon in UTC, expressed in an ISO 8601 format.
* @function
*/
const getDateTimeUtcOfAngleBeforeNoon = (angle, date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, angle),
    sunAltitudeBelowErrorMessage(date, latitude, longitude, angle));

/**
* Gets the date and time in UTC expressed in an ISO 8601 format for an angle after noon for the angle, date, latitude and longitude value.
* @example <caption>Example usage of getDateTimeUtcOfAngleAfterNoon</caption>
* //returns "2025-06-18T14:33:42.689Z"
* getDateTimeUtcOfAngleAfterNoon(8, new Date(2025, 5, 18), -51.477730, -0.010150);
* @example <caption>Example usage of getDateTimeUtcOfAngleAfterNoon</caption>
* // returns "The sun's altitude does not drop to -18° on Sat Jan 18 2025 at latitude -51.47773 and longitude -0.01015"
* getDateTimeUtcOfAngleAfterNoon(-18, new Date(2025, 0, 18), -51.477730, -0.010150);
* @example <caption>Example usage of getDateTimeUtcOfAngleAfterNoon</caption>
* // returns "The sun's altitude does not rise to 18° on Wed Jun 18 2025 at latitude -51.47773 and longitude -0.01015"
* getDateTimeUtcOfAngleAfterNoon(18, new Date(2025, 5, 18), -51.477730, -0.010150);
* @param {number} angle - An angle value.
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.
* @function
*/
const getDateTimeUtcOfAngleAfterNoon = (angle, date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, angle),
    sunAltitudeBelowErrorMessage(date, latitude, longitude, angle));

/**
* Gets the sunrise date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getSunriseDateTimeUtc</caption>
* // returns "2025-01-18T07:57:29.802Z"
* getSunriseDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getSunriseDateTimeUtc</caption>
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getSunriseDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example <caption>Example usage of getSunriseDateTimeUtc</caption>
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getSunriseDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

/**
* Gets the sunset date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getSunsetDateTimeUtc</caption>
* // returns "2025-01-18T16:23:11.903Z"
* getSunsetDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getSunsetDateTimeUtc</caption>
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getSunsetDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example <caption>Example usage of getSunsetDateTimeUtc</caption>
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getSunsetDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing sunset date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

/**
* Gets the end of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getCivilDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T07:57:29.802Z"
* getCivilDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getCivilDawnEndDateTimeUtc</caption>
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getCivilDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example <caption>Example usage of getCivilDawnEndDateTimeUtc</caption>
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* getCivilDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getCivilDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude),
    sunUpAllDayErrorMessage(date, latitude, longitude),
    sunDownAllDayErrorMessage(date, latitude, longitude));

/**
* Gets the start of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getCivilDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T07:19:15.781Z"
* getCivilDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getCivilDawnStartDateTimeUtc</caption>
* // returns "The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getCivilDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example <caption>Example usage of getCivilDawnStartDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getCivilDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getCivilDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

/**
* Gets the end of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getNauticalDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T07:19:15.781Z"
* getNauticalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getNauticalDawnEndDateTimeUtc</caption>
* // returns "The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getNauticalDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example <caption>Example usage of getNauticalDawnEndDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getNauticalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getNauticalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

/**
* Gets the start of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getNauticalDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T06:37:36.892Z"
* getNauticalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getNauticalDawnStartDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getNauticalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example <caption>Example usage of getNauticalDawnStartDateTimeUtc</caption>
* // returns "The sun's altitude does not rise to -12° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getNauticalDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getNauticalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

/**
* Gets the end of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getAstronomicalDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T06:37:36.892Z"
* getAstronomicalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getAstronomicalDawnEndDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getAstronomicalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getAstronomicalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

/**
* Gets the start of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getAstronomicalDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T05:57:45.720Z"
* getAstronomicalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getAstronomicalDawnStartDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -18° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getAstronomicalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getAstronomicalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

/**
* Gets the start of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getAstronomicalDuskStartDateTimeUtc</caption>
* // returns "2025-01-18T17:43:04.813Z"
* getAstronomicalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getAstronomicalDuskStartDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getAstronomicalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getAstronomicalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(nauticalAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

/**
* Gets the end of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getAstronomicalDuskEndDateTimeUtc</caption>
* // returns "2025-01-18T18:22:55.985Z"
* getAstronomicalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getAstronomicalDuskEndDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -18° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getAstronomicalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getAstronomicalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, astronomicalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, astronomicalAngle));

/**
* Gets the end of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getNauticalDuskEndDateTimeUtc</caption>
* // returns "2025-01-18T17:43:04.813Z"
* getNauticalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getNauticalDuskEndDateTimeUtc</caption>
* // returns The sun's altitude does not rise to -12° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* getNauticalDuskEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example <caption>Example usage of getNauticalDuskEndDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getNauticalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getNauticalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, nauticalAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, nauticalAngle));

/**
* Gets the start of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getNauticalDuskStartDateTimeUtc</caption>
* // returns "2025-01-18T17:01:25.924Z"
* getNauticalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getNauticalDuskStartDateTimeUtc</caption>
* // returns The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* getNauticalDuskStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example <caption>Example usage of getNauticalDuskStartDateTimeUtc</caption>
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getNauticalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getNauticalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(civilAngle - epsilon, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

/**
* Gets the end of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getCivilDuskEndDateTimeUtc</caption>
* // returns "2025-01-18T17:01:25.924Z"
* getCivilDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getCivilDuskEndDateTimeUtc</caption>
* returns "The sun's altitude does not drop to -6° on Wed Jun 18 2025 at  latitude -75.100620 and longitude 123.354750"
* getCivilDuskEndDateTimeUtc(new Date(2002, 0, 27), -75.100620, 123.354750);
* @example <caption>Example usage of getNauticalDuskEndDateTimeUtc</caption>
* // returns The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* getCivilDuskEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.
* @function
*/
const getCivilDuskEndDateTimeUtc = (date, latitude, longitude) =>
  perpetualEventHandler(() => dateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude),
    sunAltitudeAboveErrorMessage(date, latitude, longitude, civilAngle), sunAltitudeBelowErrorMessage(date, latitude, longitude, civilAngle));

/**
* Gets the start of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getCivilDuskStartDateTimeUtc</caption>
* // returns "2025-01-18T16:23:11.903Z"
* getCivilDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example <caption>Example usage of getCivilDuskStartDateTimeUtc</caption>
* returns "The sun's altitude does not rise to -6° on Wed Jun 18 2025 at  latitude -75.100620 and longitude 123.354750"
* getCivilDuskStartDateTimeUtc(new Date(2002, 0, 27), -75.100620, 123.354750);
* @example <caption>Example usage of getCivilDuskStartDateTimeUtc</caption>
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* getCivilDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example <caption>Example usage of getCivilDuskStartDateTimeUtc</caption>
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* getCivilDuskStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @function
*/
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
