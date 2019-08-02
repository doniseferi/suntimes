import { sine, cosine, arccosine } from '../maths/index';
import getDeclinationOfTheSun from '../declination/index';
import sunriseAndSunsetBuilder from './sunriseAndSunset';

const sunriseSunsetBuilder = sunriseAndSunsetBuilder(sine, cosine, arccosine, getDeclinationOfTheSun);
const getSunriseTime = sunriseSunsetBuilder.sunrise;
const getSunsetTime = sunriseSunsetBuilder.sunset;

export {
  getSunriseTime,
  getSunsetTime
};
