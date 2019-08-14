import declinationOfTheSunBuilder from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../maths/index';
import getDayOfTheYear from '../date/index';

const getDeclinationOfTheSun = declinationOfTheSunBuilder(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
).getDeclinationOfTheSun;

export default getDeclinationOfTheSun;
export { declinationOfTheSunBuilder };
