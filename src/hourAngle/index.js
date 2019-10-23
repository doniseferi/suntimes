import equationOfTime from '../equationOfTime/index';
import getDeclinationOfTheSun from '../declination/index';
import { toUtcDateTime } from '../coversion/index';
import { sine, cosine, arccosine } from '../trigonometry/index';
import getNoonTimeFactory from './getNoonTime';
import getHourAngleFactory from './getHourAngle';
import getTwilightTimeFactory from './getTwilightTime';

const timeFactory = getHourAngleFactory(
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
);
const getHourAngleSinceNoon = timeFactory.getHourAngleSinceNoon;

const noonTimeFactory = getNoonTimeFactory(equationOfTime, toUtcDateTime);
const getNoonDateTime = noonTimeFactory.getNoonDateTime;

const twilightTimeFactory = getTwilightTimeFactory(
  getNoonDateTime,
  getHourAngleSinceNoon
);

const getAstronomicalDawnStartDateTime =
  twilightTimeFactory.getAstronomicalDawnStartDateTime;
const getAstronomicalDawnEndDateTime =
  twilightTimeFactory.getAstronomicalDawnEndDateTime;
const getTwilightAstronomicalStartDecimalTime =
  twilightTimeFactory.getTwilightAstronomicalStartTime;
const getTwilightAstronomicalEndDecimalTime =
  twilightTimeFactory.getTwilightAstronomicalEndTime;
const getCivilDawnStartDateTime =
  twilightTimeFactory.getCivilDawnStartDateTime;
const getCivilDawnEndDateTime =
  twilightTimeFactory.getCivilDawnEndDateTime;
const getTwilightCivilStartDecimalTime =
  twilightTimeFactory.getTwilightCivilStartTime;
const getTwilightCivilEndDecimalTime =
  twilightTimeFactory.getTwilightCivilEndTime;
const getNauticalDawnStartDateTime =
  twilightTimeFactory.getNauticalDawnStartDateTime;
const getNauticalDawnEndDateTime =
  twilightTimeFactory.getNauticalDawnEndDateTime;
const getTwilightNauticalStartDecimalTime =
  twilightTimeFactory.getTwilightNauticalStartTime;
const getTwilightNauticalEndDecimalTime =
  twilightTimeFactory.getTwilightNauticalEndTime;
const getAstronomicalDuskStartDateTime =
  twilightTimeFactory.getAstronomicalDuskStartDateTime;
const getAstronomicalDuskEndDateTime = twilightTimeFactory.getAstronomicalDuskEndDateTime;
const getNauticalDuskEndDateTime =
  twilightTimeFactory.getNauticalDuskEndDateTime;
const getNauticalDuskStartDateTime =
  twilightTimeFactory.getNauticalDuskStartDateTime;
const getCivilDuskEndDateTime =
  twilightTimeFactory.getCivilDuskEndDateTime;
const getCivilDuskStartDateTime =
  twilightTimeFactory.getCivilDuskStartDateTime;

export {
  getHourAngleSinceNoon,
  getTwilightTimeFactory,
  getNoonTimeFactory,
  getAstronomicalDawnStartDateTime,
  getAstronomicalDawnEndDateTime,
  getTwilightAstronomicalStartDecimalTime,
  getTwilightAstronomicalEndDecimalTime,
  getCivilDawnStartDateTime,
  getCivilDawnEndDateTime,
  getTwilightCivilStartDecimalTime,
  getTwilightCivilEndDecimalTime,
  getNauticalDawnStartDateTime,
  getNauticalDawnEndDateTime,
  getTwilightNauticalStartDecimalTime,
  getTwilightNauticalEndDecimalTime,
  getNoonDateTime,
  getAstronomicalDuskStartDateTime,
  getAstronomicalDuskEndDateTime,
  getNauticalDuskEndDateTime,
  getNauticalDuskStartDateTime,
  getCivilDuskEndDateTime,
  getCivilDuskStartDateTime
};
