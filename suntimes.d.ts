// Type definitions for suntimes
// Project: suntimes
// Definitions by: Edonis Seferi https://github.com/doniseferi

export as namespace suntimes;

/**
* The angular distance of the sun north or south of the earth's equator.
* @example <caption>Example usage of getDeclinationOfTheSun</caption>
* // returns -23.078780854838076
* getDeclinationOfTheSun(new Date(2019, 0, 1));
* @param {Date} date - A date instance
* @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
* @function
 */
export function getDeclinationOfTheSun(date: Date): number;

/**
* The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes.
* @example <caption>Example usage of equationOfTime</caption>
* // returns -10.306964615344999
* equationOfTime(new Date(2025, 0, 18));
* @param {Date} date - A date instance.
* @returns {number} A number whose value is the equation of time in minutes decimal time for the Date represented by date.
* @function
 */
export function equationOfTime(date: Date): number;

/**
* Gets the hour angle difference between noon and the angle value.
* @example <caption>Example usage of getHourAngleSinceNoon</caption>
* // returns 5.54554469317797
* getHourAngleSinceNoon(new Date(2025, 0, 18), 51.477730, -12);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} angle - An angle value.
* @throws {RangeError} The sun altitude never elevates above the angle specified.
* @throws {RangeError} The sun altitude never drops below the angle specified.
* @returns {number} A number whose value represents the hour angle since noon for the date, latitude and angle value.
* @function
 */
export function getHourAngleSinceNoon(date: Date, latitude: number, angle: number): number;

/**
* Gets the noon hour angle for the date and longitude value.
* @example <caption>Example usage of getNoonHourAngle</caption>
* // returns 12.17245941025575
* getNoonHourAngle(new Date(2025, 0, 18), -0.010150);
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {number} The noon hour angle expressed as a number between 0.00 and 23.9.
* @function
 */
export function getNoonHourAngle(date: Date, longitude: number): number;

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
export function getNoonDateTimeUtc(date: Date, longitude: number): string;

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
export function getDateTimeUtcOfAngleBeforeNoon(angle: number, date: Date, latitude: number, longitude: number): string;

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
export function getDateTimeUtcOfAngleAfterNoon(angle: number, date: Date, latitude: number, longitude: number): string;

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
export function getSunriseDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getSunsetDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getCivilDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getCivilDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getNauticalDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getNauticalDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getAstronomicalDawnEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getAstronomicalDawnStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getAstronomicalDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getAstronomicalDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getNauticalDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getNauticalDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getCivilDuskEndDateTimeUtc(date: Date, latitude: number, longitude: number): string;

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
export function getCivilDuskStartDateTimeUtc(date: Date, latitude: number, longitude: number): string;

