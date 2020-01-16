// Type definitions for suntimes
// Project: suntimes
// Definitions by: Edonis Seferi https://github.com/doniseferi

export as namespace suntimes;

/**
 * The angular distance of the sun north or south of the earth's equator.
 *
 * @param {Date} date - A date instance
 * @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
 */
export function getDeclinationOfTheSun(date: Date): number;

/**
 * Gets the equation of time for the date instance. The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes (e.g. 5.5 equal 5 minutes and 30 seconds).
 *
 * @param {Date} date - A date instance.
 * @return {number} A number whose value is the equation of time in minutes decimal time for the Date represented by date.
 *
 */ 
export function equationOfTime(date: Date): number;

/**
 * Gets the day of the year for the date instance.
 *
 * @param {Date} date - A date instance.
 * @returns {number} The day of the year, expressed as a value between 1 and 366 for the Date instance represented by date.
 */
export function getDayOfTheYear(date: Date): number;

/**
   * Gets the hour angle difference between noon and the angle value.
   *
   * @param {Date} date - A date instance.
   * @param {number} latitude - A latitude value in the range of -90 to 90.
   * @param {number} angle - An angle value.
   * @returns {number} A number whose value represents the hour angle since noon for the date instance, latitude and angle value.
   */
export function getHourAngleSinceNoon(date: Date, latitude: number, angle: number): number;

/**
 * Gets the noon hour angle for the date instance and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {number} The noon hour angle expressed as a number between 0.00 and 23.9.
 */
export function getNoonHourAngle(date: Date, longitude: number): number;

/**
 * Gets the noon date and time in UTC for the date instance and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing noon date and time in UTC, expressed in an ISO 8601 format.
 */
export function getNoonDateTimeUtc(date: Date, longitude: number): string;

/**
 * Gets the date and time in UTC for an angle before noon for the angle value, date instance, latitude and longitude value.
 *
 * @param {number} angle - An angle value.
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude A longitude value in the range of -180 to 180.
 * @returns {string}  A string representing the time and date for an angle before noon in UTC, expressed in an ISO 8601 format.
 */
export function getDateTimeUtcOfAngleBeforeNoon(angle: number, date: Date, latitude: number, longitude: number): string;

/**
 * Gets the date and time in UTC for an angle after noon for the angle value, date instance, latitude and longitude value.
 *
 * @param {number} angle - An angle value.
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude A longitude value in the range of -180 to 180.
 * @returns {string}  A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.
 */
export function getDateTimeUtcOfAngleAfterNoon(angle: number, date: Date, latitude: number, longitude: number): string;

/**
 * Gets the sunrise date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.
 */
export function getSunriseDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the sunset date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing sunset date and time in UTC, expressed in an ISO 8601 format.
 */
export function getSunsetDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getCivilDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of civil dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getCivilDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getNauticalDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of nautical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getNauticalDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getAstronomicalDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.
 */
export function getAstronomicalDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getAstronomicalDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getAstronomicalDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getNauticalDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of nautical dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getNauticalDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the end of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getCivilDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
 * Gets the start of civil dusk date and time in UTC for the date instance, latitude and longitude value.
 *
 * @param {Date} date - A date instance.
 * @param {number} latitude - A latitude value in the range of -90 to 90.
 * @param {number} longitude - A longitude value in the range of -180 to 180.
 * @returns {string} A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.
 */
export function getCivilDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;