import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { getUtcDateTimeFromScientificDecimalTime } from '../conversions/index';
import {
  sine,
  cosine,
  arccosine
} from '../maths/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
import getSunsetTimeBuilder from './getSunsetTime';
import getHourAngleBuilder from './getHourAngle';

const timeBuilder = getHourAngleBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun);
const getHourAngle = timeBuilder.getHourAngle;

const noonTimeBuilder = getNoonTimeBuilder(
  equationOfTime,
  getUtcDateTimeFromScientificDecimalTime
);
const noonTime = noonTimeBuilder.getNoonTime;
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(
  noonTime,
  getHourAngle,
  getUtcDateTimeFromScientificDecimalTime
).getSunriseDateTime;

const getSunsetTime = getSunsetTimeBuilder(
  noonTime,
  getHourAngle,
  getUtcDateTimeFromScientificDecimalTime
).getSunsetDateTime;

export {
  getNoonTimeBuilder,
  getSunriseTimeBuilder,
  getSunsetTimeBuilder,
  getNoonDateTime,
  getSunriseTime,
  getSunsetTime
};
