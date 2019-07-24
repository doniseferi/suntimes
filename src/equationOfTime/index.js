import equationOfTime from './equationOfTime';
import equationOfTimeFormatter from './equationOfTimeFormatter';

export default date => equationOfTimeFormatter(equationOfTime(date));
export { equationOfTime, equationOfTimeFormatter };
