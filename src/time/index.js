import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../conversions/index';
import { sine, cosine, arccosine } from '../maths/index';
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
const getHourAngle = timeBuilder.getHourAngle;

const noonTimeBuilder = getNoonTimeBuilder(equationOfTime, toUtcDateTime);
const noonTime = noonTimeBuilder.getNoonTime;
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(getNoonDateTime, getHourAngle)
  .getSunriseDateTimeUtc;

const twilightTimeBuilder = getTwilightTimeBuilder(
  noonTime,
  getHourAngle,
  toUtcDateTime
);

const getTwilightAstronomicalStartDateTime =
  twilightTimeBuilder.getTwilightAstronomicalStartDateTime;
const getTwilightAstronomicalEndDateTime =
  twilightTimeBuilder.getTwilightAstronomicalEndDateTime;
const getTwilightAstronomicalStartDecimalTime =
  twilightTimeBuilder.getTwilightAstronomicalStartTime;
const getTwilightAstronomicalEndDecimalTime =
  twilightTimeBuilder.getTwilightAstronomicalEndTime;
const getTwilightCivilStartDateTime =
  twilightTimeBuilder.getTwilightCivilStartDateTime;
const getTwilightCivilEndDateTime =
  twilightTimeBuilder.getTwilightCivilEndDateTime;
const getTwilightCivilStartDecimalTime =
  twilightTimeBuilder.getTwilightCivilStartTime;
const getTwilightCivilEndDecimalTime =
  twilightTimeBuilder.getTwilightCivilEndTime;
const getTwilightNauticalStartDateTime =
  twilightTimeBuilder.getTwilightNauticalStartDateTime;
const getTwilightNauticalEndDateTime =
  twilightTimeBuilder.getTwilightNauticalEndDateTime;
const getTwilightNauticalStartDecimalTime =
  twilightTimeBuilder.getTwilightNauticalStartTime;
const getTwilightNauticalEndDecimalTime =
  twilightTimeBuilder.getTwilightNauticalEndTime;

const getSunsetTime = getSunsetTimeBuilder(getNoonDateTime, getHourAngle)
  .getSunsetDateTimeUtc;

export {
  getHourAngle,
  getTwilightTimeBuilder,
  getSunriseTimeBuilder,
  getNoonTimeBuilder,
  getSunsetTimeBuilder,
  getTwilightAstronomicalStartDateTime,
  getTwilightAstronomicalEndDateTime,
  getTwilightAstronomicalStartDecimalTime,
  getTwilightAstronomicalEndDecimalTime,
  getTwilightCivilStartDateTime,
  getTwilightCivilEndDateTime,
  getTwilightCivilStartDecimalTime,
  getTwilightCivilEndDecimalTime,
  getTwilightNauticalStartDateTime,
  getTwilightNauticalEndDateTime,
  getTwilightNauticalStartDecimalTime,
  getTwilightNauticalEndDecimalTime,
  getSunriseTime,
  getNoonDateTime,
  getSunsetTime
};
