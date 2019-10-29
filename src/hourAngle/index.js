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

const getHourAngleSinceNoon = hourAngleFactory.getHourAngleSinceNoon;

const noonHourAngleFactory = getNoonHourAngleFactory(equationOfTime);
const getNoonHourAngle = noonHourAngleFactory.getNoonHourAngle;

export {
  getHourAngleFactory,
  getHourAngleSinceNoon,
  getNoonHourAngleFactory,
  getNoonHourAngle
};
