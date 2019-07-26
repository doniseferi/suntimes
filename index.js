import getDeclinationOfTheSun from './src/declination/index';
import equationOfTimeFormatter, { equationOfTime } from './src/equationOfTime/index';

const sun = () => Object.freeze({
  equationOfTime: (date) => equationOfTimeFormatter(date),
  equationOfTimeValue: (date) => equationOfTime(date),
  getDeclinationOfTheSun: date => getDeclinationOfTheSun(date)
});

export default sun;
