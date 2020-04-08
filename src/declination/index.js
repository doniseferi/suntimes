import declinationOfTheSunFactory from './getDeclinationOfTheSun';
import { sine, cosine, arcsine } from '../trigonometry/index';
import getDayOfTheYear from '../dayOfTheYear/index';

/**
* The angular distance of the sun north or south of the earth's equator.
* @example <caption>Example usage of getDeclinationOfTheSun.</caption>
* // returns -23.078780854838076
* ```suntimes.getDeclinationOfTheSun(new Date(2019, 0, 1));```
* @param {Date} date - A date instance
* @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
*/
const getDeclinationOfTheSun = declinationOfTheSunFactory(
  sine,
  cosine,
  arcsine,
  getDayOfTheYear
).getDeclinationOfTheSun;

export default getDeclinationOfTheSun;
export { declinationOfTheSunFactory };
