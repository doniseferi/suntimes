import equationOfTime from '../equationOfTime/index';
import getNoonTimeBuilder from './getNoonTime';
import getSunriseTimeBuilder from './getSunriseTime';
import getDeclinationOfTheSun from '../declination/index';
import {
  sine,
  cosine,
  arccosine
} from '../maths/index';
import timeSinceSolarNoonBuilder from './getTimeSinceSolarNoon';

const getTimeSinceSolarNoon = timeSinceSolarNoonBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun).timeSinceSolarNoon;
const getNoonTime = getNoonTimeBuilder(equationOfTime).getNoonTime;
const getNoonTimeInDecimal = getNoonTimeBuilder(equationOfTime).getNoonTimeInDecimal;
const getSunriseTime = getSunriseTimeBuilder(getTimeSinceSolarNoon, getNoonTimeInDecimal).getSunriseTime;

export {
  getNoonTime,
  getNoonTimeBuilder,
  getSunriseTime,
  getSunriseTimeBuilder
};
