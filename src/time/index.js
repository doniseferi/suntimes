import equationOfTime from '../equationOfTime/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
import getSunsetTimeBuilder from './getSunsetTime';
import getDeclinationOfTheSun from '../declination/index';
import getHourCircleBuilder from './getHourAngle';
import {
  sine,
  cosine,
  arccosine
} from '../maths/index';

const timeBuilder = getHourCircleBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun);
const getHourCircle = timeBuilder.getHourCircle;

const noonTimeBuilder = getNoonTimeBuilder(equationOfTime);
const getNoonTime = noonTimeBuilder.getNoonTime;
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(
  getNoonTime,
  getHourCircle
).getSunriseDateTime;

const getSunsetTime = getSunsetTimeBuilder(
  getNoonTime,
  getHourCircle
).getSunsetDateTime;

export {
  getNoonDateTime,
  getNoonTimeBuilder,
  getSunriseTime,
  getSunriseTimeBuilder,
  getSunsetTime,
  getSunsetTimeBuilder
};
