// @ts-check
import getDeclinationOfTheSun from './declination/index';
import equationOfTime from './equationOfTime/index';
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
* @function
* @description
* An intrinsic object that provides basic astronomy functionality for any given date and location.
* @author Edonis Seferi <doni.seferi@gmail.com>
* @module suntimes
*/
const suntimes = Object.freeze({
  /**
* @function
* @description
* The angular distance of the sun north or south of the earth's equator.
* @example <caption>Example usage of getDeclinationOfTheSun.</caption>
* // returns -23.078780854838076
* suntimes.getDeclinationOfTheSun(new Date(2019, 0, 1));
* @param {Date} date - A date instance
* @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
*/
  getDeclinationOfTheSun: (date) => getDeclinationOfTheSun(date),

  /**
* @function
* @description
* The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes.
* @param {Date} date - A date instance.
* @return {number} A number whose value is the equation of time in minutes decimal time for the Date represented by date.
* @example
* // returns -10.306964615344999
* suntimes.equationOfTime(new Date(2025, 0, 18));
*/
  equationOfTime: (date) => equationOfTime(date),

  /**
* @function
* @description
* Gets the hour angle difference between noon and the angle value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} angle - An angle value.
* @returns {number} A number whose value represents the hour angle since noon for the date, latitude and angle value.
* @throws {RangeError} The sun altitude never elevates above the angle specified
* @throws {RangeError} The sun altitude never drops below the angle specified
* @example <caption>Example usage of getHourAngleSinceNoon</caption>
* // returns 5.54554469317797
* suntimes.suntimes.getHourAngleSinceNoon(new Date(2025, 0, 18), 51.477730, -12);
*/
  getHourAngleSinceNoon: (date, latitude, angle) => getHourAngleSinceNoon(date, latitude, angle),

  /**
* @function
* @description
* Gets the noon hour angle for the date and longitude value.
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {number} The noon hour angle expressed as a number between 0.00 and 23.9.
* @example <caption>Example usage of getNoonHourAngle</caption>
* // returns 12.17245941025575
* suntimes.getNoonHourAngle(new Date(2025, 0, 18), -0.010150);
*/
  getNoonHourAngle: (date, longitude) => getNoonHourAngle(date, longitude),

  /**
* @function
* @description
* Gets the noon date and time in UTC expressed in an ISO 8601 format for date and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing noon date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getNoonDateTimeUtc</caption>
* // returns "2025-01-18T08:44:23.762Z"
* suntimes.getNoonDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
*/
  getNoonDateTimeUtc: (date, longitude) => getNoonDateTimeUtc(date, longitude),

  /**
* @function
* @description
* Gets the date and time in UTC expressed in an ISO 8601 format for an angle before noon for the angle, date, latitude and longitude value.
*
* @param {number} angle - An angle value.
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude A longitude value in the range of -180 to 180.
* @returns {string}  A string representing the time and date for an angle before noon in UTC, expressed in an ISO 8601 format.
*/
  getDateTimeUtcOfAngleBeforeNoon: (angle, date, latitude, longitude) => getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude),

  /**
* @function
* @description
* Gets the date and time in UTC expressed in an ISO 8601 format for an angle after noon for the angle, date, latitude and longitude value.
*
* @param {number} angle - An angle value.
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude A longitude value in the range of -180 to 180.
* @returns {string} A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.
*/
  getDateTimeUtcOfAngleAfterNoon: (angle, date, latitude, longitude) => getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude),

  /**
* @function
* @description
* Gets the sunrise date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getSunriseDateTimeUtc</caption>
* // returns "2025-01-18T07:57:29.802Z"
* suntimes.getSunriseDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getSunriseDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* suntimes.getSunriseDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
*/
  getSunriseDateTimeUtc: (date, latitude, longitude) => getSunriseDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the sunset date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing sunset date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getSunsetDateTimeUtc</caption>
* // returns "2025-01-18T16:23:11.903Z"
* suntimes.getSunsetDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getSunsetDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* suntimes.getSunsetDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
*/
  getSunsetDateTimeUtc: (date, latitude, longitude) => getSunsetDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getCivilDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T07:59:31.616Z"
* suntimes.getCivilDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun is up all day on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getCivilDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example
* // returns "The sun is down all day on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* suntimes.getCivilDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);

*/
  getCivilDawnEndDateTimeUtc: (date, latitude, longitude) => getCivilDawnEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getCivilDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T07:19:15.781Z"
* suntimes.getCivilDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* suntimes.getCivilDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getCivilDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getCivilDawnStartDateTimeUtc: (date, latitude, longitude) => getCivilDawnStartDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getNauticalDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T07:19:15.781Z"
* suntimes.getNauticalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* suntimes.getNauticalDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getNauticalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getNauticalDawnEndDateTimeUtc: (date, latitude, longitude) => getNauticalDawnEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getNauticalDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T06:37:36.892Z"
* suntimes.getNauticalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getNauticalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
* @example
* // returns "The sun's altitude does not rise to -12° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45"
* suntimes.getNauticalDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
*/
  getNauticalDawnStartDateTimeUtc: (date, latitude, longitude) => getNauticalDawnStartDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getAstronomicalDawnEndDateTimeUtc</caption>
* // returns "2025-01-18T06:37:36.892Z"
* suntimes.getAstronomicalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getAstronomicalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getAstronomicalDawnEndDateTimeUtc: (date, latitude, longitude) => getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getAstronomicalDawnStartDateTimeUtc</caption>
* // returns "2025-01-18T05:57:45.720Z"
* suntimes.getAstronomicalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not drop to -18° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getAstronomicalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getAstronomicalDawnStartDateTimeUtc: (date, latitude, longitude) => getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getAstronomicalDuskStartDateTimeUtc</caption>
* // returns 1
* suntimes.getAstronomicalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getAstronomicalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);

*/
  getAstronomicalDuskStartDateTimeUtc: (date, latitude, longitude) => getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getAstronomicalDuskEndDateTimeUtc</caption>
* // returns 1
* suntimes.getAstronomicalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns "The sun's altitude does not drop to -18° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getAstronomicalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);

*/
  getAstronomicalDuskEndDateTimeUtc: (date, latitude, longitude) => getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getNauticalDuskEndDateTimeUtc</caption>
* // returns 1
* suntimes.getNauticalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns The sun's altitude does not rise to -12° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* suntimes.getNauticalDuskEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example
* // returns "The sun's altitude does not drop to -12° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getNauticalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getNauticalDuskEndDateTimeUtc: (date, latitude, longitude) => getNauticalDuskEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getNauticalDuskStartDateTimeUtc</caption>
* // returns 1
* suntimes.getNauticalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
* @example
* // returns The sun's altitude does not rise to -6° on Thu Jan 01 2032 at latitude 89.525 and longitude -30.45
* suntimes.getNauticalDuskStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
* @example
* // returns "The sun's altitude does not drop to -6° on Sun Aug 02 2037 at latitude 71.98007 and longitude 102.47427"
* suntimes.getNauticalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
*/
  getNauticalDuskStartDateTimeUtc: (date, latitude, longitude) => getNauticalDuskStartDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the end of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getCivilDuskEndDateTimeUtc</caption>
* // returns 1
* suntimes.getCivilDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
*/
  getCivilDuskEndDateTimeUtc: (date, latitude, longitude) => getCivilDuskEndDateTimeUtc(date, latitude, longitude),

  /**
* @function
* @description
* Gets the start of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
*
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.
* @example <caption>Example usage of getCivilDuskStartDateTimeUtc</caption>
* // returns 1
* suntimes.getCivilDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
*/
  getCivilDuskStartDateTimeUtc: (date, latitude, longitude) => getCivilDuskStartDateTimeUtc(date, latitude, longitude)
});

export default suntimes;
