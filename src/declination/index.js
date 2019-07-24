import declinationOfTheSunBuilder from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../maths/index';
import getDayOfTheYear from '../date/index';

const builder = declinationOfTheSunBuilder(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
);

const getDeclinationOfTheSun = builder.getDeclinationOfTheSun;

export default getDeclinationOfTheSun;
