import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../conversions/index';
import { sine, cosine, arccosine } from '../angles/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
import getSunsetTimeBuilder from './getSunsetTime';
import getHourAngleBuilder from './getHourAngle';
import getTwilightTimeBuilder from './getTwilightTime';

const timeBuilder = getHourAngleBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const getHourAngleSinceNoon = timeBuilder.getHourAngleSinceNoon;

const noonTimeBuilder = getNoonTimeBuilder(equationOfTime, toUtcDateTime);
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(getNoonDateTime, getHourAngleSinceNoon)
  .getSunriseDateTimeUtc;

const twilightTimeBuilder = getTwilightTimeBuilder(
  getNoonDateTime,
  getHourAngleSinceNoon
);

const getAstronomicalDawnStartDateTime =
  twilightTimeBuilder.getAstronomicalDawnStartDateTime;
const getAstronomicalDawnEndDateTime =
  twilightTimeBuilder.getAstronomicalDawnEndDateTime;
const getTwilightAstronomicalStartDecimalTime =
  twilightTimeBuilder.getTwilightAstronomicalStartTime;
const getTwilightAstronomicalEndDecimalTime =
  twilightTimeBuilder.getTwilightAstronomicalEndTime;
const getCivilDawnStartDateTime =
  twilightTimeBuilder.getCivilDawnStartDateTime;
const getCivilDawnEndDateTime =
  twilightTimeBuilder.getCivilDawnEndDateTime;
const getTwilightCivilStartDecimalTime =
  twilightTimeBuilder.getTwilightCivilStartTime;
const getTwilightCivilEndDecimalTime =
  twilightTimeBuilder.getTwilightCivilEndTime;
const getNauticalDawnStartDateTime =
  twilightTimeBuilder.getNauticalDawnStartDateTime;
const getNauticalDawnEndDateTime =
  twilightTimeBuilder.getNauticalDawnEndDateTime;
const getTwilightNauticalStartDecimalTime =
  twilightTimeBuilder.getTwilightNauticalStartTime;
const getTwilightNauticalEndDecimalTime =
  twilightTimeBuilder.getTwilightNauticalEndTime;
const getAstronomicalDuskStartDateTime =
  twilightTimeBuilder.getAstronomicalDuskStartDateTime;
const getAstronomicalDuskEndDateTime = twilightTimeBuilder.getAstronomicalDuskEndDateTime;
const getNauticalDuskEndDateTime =
  twilightTimeBuilder.getNauticalDuskEndDateTime;
const getNauticalDuskStartDateTime =
  twilightTimeBuilder.getNauticalDuskStartDateTime;
const getCivilDuskEndDateTime =
  twilightTimeBuilder.getCivilDuskEndDateTime;
const getCivilDuskStartDateTime =
  twilightTimeBuilder.getCivilDuskStartDateTime;

const getSunsetTime = getSunsetTimeBuilder(getNoonDateTime, getHourAngleSinceNoon)
  .getSunsetDateTimeUtc;

export {
  getHourAngleSinceNoon,
  getTwilightTimeBuilder,
  getSunriseTimeBuilder,
  getNoonTimeBuilder,
  getSunsetTimeBuilder,
  getAstronomicalDawnStartDateTime,
  getAstronomicalDawnEndDateTime,
  getTwilightAstronomicalStartDecimalTime,
  getTwilightAstronomicalEndDecimalTime,
  getCivilDawnStartDateTime,
  getCivilDawnEndDateTime,
  getTwilightCivilStartDecimalTime,
  getTwilightCivilEndDecimalTime,
  getNauticalDawnStartDateTime,
  getNauticalDawnEndDateTime,
  getTwilightNauticalStartDecimalTime,
  getTwilightNauticalEndDecimalTime,
  getSunriseTime,
  getNoonDateTime,
  getSunsetTime,
  getAstronomicalDuskStartDateTime,
  getAstronomicalDuskEndDateTime,
  getNauticalDuskEndDateTime,
  getNauticalDuskStartDateTime,
  getCivilDuskEndDateTime,
  getCivilDuskStartDateTime
};
