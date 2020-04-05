// @ts-check
import getDeclinationOfTheSun from './declination/index';
import equationOfTime from './equationOfTime/index';
import getDayOfTheYear from './dayOfTheYear/index';
import { getHourAngleSinceNoon, getNoonHourAngle } from './hourAngle/index';
import {
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
} from './time/index';

/**
 * An intrinsic object that provides basic astronomy functionality for any given date and location.
 * @author Edonis Seferi <doni.seferi@gmail.com>
 * @module suntimes
 * @namespace suntimes
 */
const suntimes = Object.freeze({
/**
 * The angular distance of the sun north or south of the earth's equator.
 *
 * @param {Date} date - A date instance
 * @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
 */
  getDeclinationOfTheSun,

  /**
 * Gets the equation of time for the date instance. The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes (e.g. 5.5 equal 5 minutes and 30 seconds).
 *
 * @param {Date} date - A date instance.
 * @return {number} A number whose value is the equation of time in minutes decimal time for the Date represented by date.
 *
 */
  equationOfTime,

  /**
 * Gets the day of the year for the date instance.
 *
 * @param {Date} date - A date instance.
 * @returns {number} The day of the year, expressed as a value between 1 and 366 for the Date instance represented by date.
 */
  getDayOfTheYear,

  /**
   * Gets the hour angle difference between noon and the angle value.
   *
   * @param {Date} date - A date instance.
   * @param {number} latitude - A latitude value in the range of -90 to 90.
   * @param {number} angle - An angle value.
   * @returns {number} A number whose value represents the hour angle since noon for the date instance, latitude and angle value.
   */
  getHourAngleSinceNoon,

  /**
 * Gets the noon hour angle for the date instance and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {number} The noon hour angle expressed as a number between 0.00 and 23.9.
 */
  getNoonHourAngle,

  /**
 * Gets the noon date and time in UTC for the date instance and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing noon date and time in UTC, expressed in an ISO 8601 format.
 */
  getNoonDateTimeUtc,
  /**
 * Gets the date and time in UTC for an angle before noon for the angle value, date instance, latitude and longitude value.
 *
 * @param {number} angle - An angle value.
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude A longitude value in the range of -180 to 180.
 * @returns {string}  A string representing the time and date for an angle before noon in UTC, expressed in an ISO 8601 format.
 */
  getDateTimeUtcOfAngleBeforeNoon,
  /**
 * Gets the date and time in UTC for an angle after noon for the angle value, date instance, latitude and longitude value.
 *
 * @param {number} angle - An angle value.
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude A longitude value in the range of -180 to 180.
 * @returns {string}  A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.
 */
  getDateTimeUtcOfAngleAfterNoon,
  /**
 * Gets the sunrise date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.
 */
  getSunriseDateTimeUtc,
  /**
 * Gets the sunset date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunset date and time in UTC, expressed in an ISO 8601 format.
 */
  getSunsetDateTimeUtc,

  /**
 * Gets the end of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getCivilDawnEndDateTimeUtc,

  /**
 * Gets the start of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getCivilDawnStartDateTimeUtc,
  /**
 * Gets the end of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getNauticalDawnEndDateTimeUtc,
  /**
 * Gets the start of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getNauticalDawnStartDateTimeUtc,
  /**
 * Gets the end of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getAstronomicalDawnEndDateTimeUtc,
  /**
 * Gets the start of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
  getAstronomicalDawnStartDateTimeUtc,
  /**
 * Gets the start of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getAstronomicalDuskStartDateTimeUtc,
  /**
 * Gets the end of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getAstronomicalDuskEndDateTimeUtc,
  /**
 * Gets the end of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getNauticalDuskEndDateTimeUtc,
  /**
 * Gets the start of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getNauticalDuskStartDateTimeUtc,
  /**
 * Gets the end of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getCivilDuskEndDateTimeUtc,
  /**
 * Gets the start of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
  getCivilDuskStartDateTimeUtc
});

export default suntimes;
