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
 * @typedef {Object} suntimes
 * @property {getNoonDateTimeUtc} getNoonDateTimeUtc
 * @property {getDateTimeUtcOfAngleBeforeNoon} getDateTimeUtcOfAngleBeforeNoon
 * @property {getDateTimeUtcOfAngleAfterNoon} getDateTimeUtcOfAngleAfterNoon
 * @property {getSunriseDateTimeUtc} getSunriseDateTimeUtc
 * @property {getSunsetDateTimeUtc} getSunsetDateTimeUtc
 * @property {getCivilDawnEndDateTimeUtc} getCivilDawnEndDateTimeUtc
 * @property {getCivilDawnStartDateTimeUtc} getCivilDawnStartDateTimeUtc
 * @property {getNauticalDawnEndDateTimeUtc} getNauticalDawnEndDateTimeUtc
 * @property {getNauticalDawnStartDateTimeUtc} getNauticalDawnStartDateTimeUtc
 * @property {getAstronomicalDawnEndDateTimeUtc} getAstronomicalDawnEndDateTimeUtc
 * @property {getAstronomicalDawnStartDateTimeUtc} getAstronomicalDawnStartDateTimeUtc
 * @property {getAstronomicalDuskStartDateTimeUtc} getAstronomicalDuskStartDateTimeUtc
 * @property {getAstronomicalDuskEndDateTimeUtc} getAstronomicalDuskEndDateTimeUtc
 * @property {getNauticalDuskEndDateTimeUtc} getNauticalDuskEndDateTimeUtc
 * @property {getNauticalDuskStartDateTimeUtc} getNauticalDuskStartDateTimeUtc
 * @property {getCivilDuskEndDateTimeUtc} getCivilDuskEndDateTimeUtc
 * @property {getCivilDuskStartDateTimeUtc} getCivilDuskStartDateTimeUtc
 */
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
  suntimes,
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
