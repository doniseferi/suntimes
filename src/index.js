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

const suntimes = Object.freeze({
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
});

export default suntimes;
export {
  getDeclinationOfTheSun,
  equationOfTime,
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
