import declinationOfTheSunBuilder from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../trigonometry/index';
import getDayOfTheYear from '../dayOfTheYear/index';

const getDeclinationOfTheSun = declinationOfTheSunBuilder(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
).getDeclinationOfTheSun;

export default getDeclinationOfTheSun;
export { declinationOfTheSunBuilder };
