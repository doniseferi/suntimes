import { sine, cosine, arccosine } from '../maths/index';
import getDeclinationOfTheSun from '../declination/index';
import equationOfTime from '../equationOfTime/index';
import timeDifferenceBetweenSolarNoonBuilder from './timeDifferenceFromSolarNoon';
import getMiddayBuilder from './getMidday';

const timeDifferenceBuilder = timeDifferenceBetweenSolarNoonBuilder(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const timeDifferenceBetweenSolarNoon =
  timeDifferenceBuilder.timeDifferenceBetweenSolarNoon;

const middayBuilder = getMiddayBuilder(equationOfTime);
const getMidday = middayBuilder.getMidday;

export {
  timeDifferenceBetweenSolarNoonBuilder,
  timeDifferenceBetweenSolarNoon,
  middayBuilder,
  getMidday
};
