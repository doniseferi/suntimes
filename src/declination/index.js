import { declinationOfTheSunFactory } from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../trigonometry/index';
import { getDayOfTheYear } from '../dayOfTheYear/index';

const getDeclinationOfTheSun = declinationOfTheSunFactory(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
).getDeclinationOfTheSun;

export { declinationOfTheSunFactory, getDeclinationOfTheSun };
