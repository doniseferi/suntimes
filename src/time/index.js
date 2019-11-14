import getDateTimeUtcFactory from './getDateTimeAtAngle';
import getHourAngleFactory from '../hourAngle/getHourAngle';
import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import { toUtcDateTime } from '../conversion/index';
import { getNoonHourAngleFactory } from '../hourAngle/index';

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;
/**
 * Gets the noon date and time in UTC for the date instance and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing noon date and time in UTC, expressed in an ISO 8601 format.
 */
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
const horizon = -0.57;
const civilAngle = -6;
const nauticalAngle = -12;
const astronomicalAngle = -18;

/**
 * Gets the sunrise date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.
 */
const getSunriseDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(sunriseAngle, date, latitude, longitude);

/**
 * Gets the sunset date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunset date and time in UTC, expressed in an ISO 8601 format.
 */
const getSunsetDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(sunsetAngle, date, latitude, longitude);

/**
 * Gets the end of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getCivilDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(horizon, date, latitude, longitude);

/**
 * Gets the start of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getCivilDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude);

/**
 * Gets the end of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getNauticalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(civilAngle, date, latitude, longitude);

/**
 * Gets the start of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getNauticalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude);

/**
 * Gets the end of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getAstronomicalDawnEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(nauticalAngle, date, latitude, longitude);

/**
 * Gets the start of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
const getAstronomicalDawnStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleBeforeNoon(astronomicalAngle, date, latitude, longitude);

/**
 * Gets the start of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getAstronomicalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(astronomicalAngle, date, latitude, longitude);

/**
 * Gets the end of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getAstronomicalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude);

/**
 * Gets the end of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getNauticalDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude);

/**
 * Gets the start of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getNauticalDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(nauticalAngle, date, latitude, longitude);

/**
 * Gets the end of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getCivilDuskEndDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(horizon, date, latitude, longitude);

/**
 * Gets the start of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
const getCivilDuskStartDateTimeUtc = (date, latitude, longitude) =>
  getDateTimeUtcOfAngleAfterNoon(civilAngle, date, latitude, longitude);

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
