import equationOfTime from '../equationOfTime/index';
import getNoonTimeBuilder from './getNoonTime';

const getNoonTime = getNoonTimeBuilder(equationOfTime).getNoonTime;

export {
  getNoonTime,
  getNoonTimeBuilder
};
