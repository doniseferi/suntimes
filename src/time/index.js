import { sine, cosine, arccosine } from '../maths/index';
import getDeclinationOfTheSun from '../declination/index';
import sunriseAndSunsetBuilder from './sunriseAndSunset';
import equationOfTime from '../equationOfTime/index';

const sunriseSunsetBuilder = sunriseAndSunsetBuilder(sine, cosine, arccosine, getDeclinationOfTheSun, equationOfTime);
const getSunriseTime = sunriseSunsetBuilder.sunrise;
const getSunsetTime = sunriseSunsetBuilder.sunset;
const getNoonTime = sunriseSunsetBuilder.solarNoon;

export {
  getSunriseTime,
  getSunsetTime,
  getNoonTime
};
