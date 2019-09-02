import equationOfTime from '../equationOfTime/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
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
const hourAngle = timeBuilder.hourAngle;
const getHourCircle = timeBuilder.getHourCircle;

const noonTimeBuilder = getNoonTimeBuilder(equationOfTime);
const getNoonTime = noonTimeBuilder.getNoonTime;
const getNoonDateTime = noonTimeBuilder.getNoonDateTime;

const getSunriseTime = getSunriseTimeBuilder(
  getNoonTime,
  getHourCircle,
  hourAngle
).getSunriseDateTime;

export {
  getNoonDateTime,
  getNoonTimeBuilder,
  getSunriseTime,
  getSunriseTimeBuilder
};
