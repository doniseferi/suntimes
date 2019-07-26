import { sine, cosine, arccosine } from '../maths/index';
import getDeclinationOfTheSun from '../declination/index';
import timeDifferenceBetweenSolarNoonBuilder from './timeDifferenceFromSolarNoon';

const builder = timeDifferenceBetweenSolarNoonBuilder(sine, cosine, arccosine, getDeclinationOfTheSun);
const timeDifferenceBetweenSolarNoon = builder.timeDifferenceBetweenSolarNoon;
export default timeDifferenceBetweenSolarNoon;
export { timeDifferenceBetweenSolarNoonBuilder };
