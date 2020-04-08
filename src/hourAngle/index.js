import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import getNoonHourAngleFactory from './getNoonHourAngle';
import getHourAngleFactory from './getHourAngle';

const hourAngleFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);

/**
* Gets the hour angle difference between noon and the angle value.
* @example <caption>Example usage of getHourAngleSinceNoon</caption>
* // returns 5.54554469317797
* ```suntimes.getHourAngleSinceNoon(new Date(2025, 0, 18), 51.477730, -12);```
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} angle - An angle value.
* @throws {RangeError} The sun altitude never elevates above the angle specified.
* @throws {RangeError} The sun altitude never drops below the angle specified.
* @returns {number} A number whose value represents the hour angle since noon for the date, latitude and angle value.
*/
const getHourAngleSinceNoon = hourAngleFactory.getHourAngleSinceNoon;

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;

export {
  getHourAngleFactory,
  getHourAngleSinceNoon,
  getNoonHourAngleFactory,
  getNoonHourAngle
};
