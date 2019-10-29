import getDeclinationOfTheSun from './src/declination/index';
import equationOfTime from './src/equationOfTime/index';
import getDayOfTheYear from './src/dayOfTheYear/index';
import { getHourAngleSinceNoon, getNoonHourAngle } from './src/hourAngle/index';
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
} from './src/time/index';

const sun =
  Object.freeze({
    equationOfTime: date => equationOfTime(date),
    equationOfTimeValue: date => equationOfTime(date),
    getDeclinationOfTheSun: date => getDeclinationOfTheSun(date),
    getDayOfTheYear: date => getDayOfTheYear(date),
    getHourAngleSinceNoon: (date, latitude, angle) =>
      getHourAngleSinceNoon(date, latitude, angle),
    getNoonHourAngle: (date, longitude) => getNoonHourAngle(date, longitude),
    getNoonDateTimeUtc: (date, longitude) =>
      getNoonDateTimeUtc(date, longitude),
    getDateTimeUtcOfAngleBeforeNoon: (angle, date, latitude, longitude) =>
      getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude),
    getDateTimeUtcOfAngleAfterNoon: (angle, date, latitude, longitude) =>
      getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude),
    getSunriseDateTimeUtc: (date, latitude, longitude) =>
      getSunriseDateTimeUtc(date, latitude, longitude),
    getSunsetDateTimeUtc: (date, latitude, longitude) =>
      getSunsetDateTimeUtc(date, latitude, longitude),
    getCivilDawnEndDateTimeUtc: (date, latitude, longitude) =>
      getCivilDawnEndDateTimeUtc(date, latitude, longitude),
    getCivilDawnStartDateTimeUtc: (date, latitude, longitude) =>
      getCivilDawnStartDateTimeUtc(date, latitude, longitude),
    getNauticalDawnEndDateTimeUtc: (date, latitude, longitude) =>
      getNauticalDawnEndDateTimeUtc(date, latitude, longitude),
    getNauticalDawnStartDateTimeUtc: (date, latitude, longitude) =>
      getNauticalDawnStartDateTimeUtc(date, latitude, longitude),
    getAstronomicalDawnEndDateTimeUtc: (date, latitude, longitude) =>
      getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude),
    getAstronomicalDawnStartDateTimeUtc: (date, latitude, longitude) =>
      getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude),
    getAstronomicalDuskStartDateTimeUtc: (date, latitude, longitude) =>
      getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude),
    getAstronomicalDuskEndDateTimeUtc: (date, latitude, longitude) =>
      getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude),
    getNauticalDuskEndDateTimeUtc: (date, latitude, longitude) =>
      getNauticalDuskEndDateTimeUtc(date, latitude, longitude),
    getNauticalDuskStartDateTimeUtc: (date, latitude, longitude) =>
      getNauticalDuskStartDateTimeUtc(date, latitude, longitude),
    getCivilDuskEndDateTimeUtc: (date, latitude, longitude) =>
      getCivilDuskEndDateTimeUtc(date, latitude, longitude),
    getCivilDuskStartDateTimeUtc: (date, latitude, longitude) =>
      getCivilDuskStartDateTimeUtc(date, latitude, longitude)
  });

export default sun;
export {
  getDeclinationOfTheSun,
  equationOfTime,
  getDayOfTheYear,
  getHourAngleSinceNoon,
  getNoonHourAngle,
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
