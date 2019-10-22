import declinationOfTheSunBuilder from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../angles/index';
import getDayOfTheYear from '../date/index';

const getDeclinationOfTheSun = declinationOfTheSunBuilder(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
).getDeclinationOfTheSun;

export default getDeclinationOfTheSun;
export { declinationOfTheSunBuilder };
