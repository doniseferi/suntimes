import getDeclinationOfTheSun from './src/declination/index';
import equationOfTime from './src/equationOfTime/index';

const sun = () => Object.freeze({
  equationOfTime: (date) => equationOfTime(date),
  equationOfTimeValue: (date) => equationOfTime(date),
  getDeclinationOfTheSun: date => getDeclinationOfTheSun(date)
});

export default sun;
