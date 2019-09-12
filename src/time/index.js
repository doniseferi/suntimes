import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../conversions/index';
import {
  sine,
  cosine,
  arccosine
} from '../maths/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
import getSunsetTimeBuilder from './getSunsetTime';
import getHourAngleBuilder from './getHourAngle';
import getTwilightTimeBuilder from './getTwilightTime';

const timeBuilder = getHourAngleBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun);
const getHourAngle = timeBuilder.getHourAngle;

const noonTimeBuilder = getNoonTimeBuilder(
  equationOfTime,
  toUtcDateTime
);
const noonTime = noonTimeBuilder.getNoonTime;
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(
  noonTime,
  getHourAngle,
  toUtcDateTime
).getSunriseDateTime;

const twilightTimeBuilder = getTwilightTimeBuilder(
  noonTime,
  getHourAngle,
  toUtcDateTime
);

const getTwilightAstronomicalStartTime = twilightTimeBuilder.getTwilightAstronomicalStartDateTime;
const getTwilightAstronomicalEndTime = twilightTimeBuilder.getTwilightAstronomicalEndDateTime;

const getSunsetTime = getSunsetTimeBuilder(
  noonTime,
  getHourAngle,
  toUtcDateTime
).getSunsetDateTime;

export {
  getHourAngle,
  getTwilightTimeBuilder,
  getSunriseTimeBuilder,
  getNoonTimeBuilder,
  getSunsetTimeBuilder,
  getTwilightAstronomicalStartTime,
  getTwilightAstronomicalEndTime,
  getSunriseTime,
  getNoonDateTime,
  getSunsetTime
};
