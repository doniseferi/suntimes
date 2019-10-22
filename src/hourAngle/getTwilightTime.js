const getTwilightTimeBuilder = (
  getNoonDateTime,
  getHourAngleSinceNoon
) => {
  const raiseException = (dependency) => {
    throw new Error(`Please satisfy a dependecy for ${dependency}`);
  };

  if (!getNoonDateTime) {
    raiseException(getNoonDateTime);
  }
  if (!getHourAngleSinceNoon) {
    raiseException(getHourAngleSinceNoon);
  }

  const horizon = -0.57;
  const civilAngle = -6;
  const nauticalAngle = -12;
  const astronomicalAngle = -18;

  const getDateTimeUtc = (angle, date, latitude, longitude, non = null) => {
    const solarNoonUtc = getNoonDateTime(date, longitude);
    const twilightAngle = getHourAngleSinceNoon(date, latitude, angle);
    const inversedHourAngle = twilightAngle * -1;
    return addHours(solarNoonUtc, inversedHourAngle);
  };
  const getDateTimeUtc2 = (angle, date, latitude, longitude, non = null) => {
    const solarNoonUtc = getNoonDateTime(date, longitude);
    const twilightAngle = getHourAngleSinceNoon(date, latitude, angle);
    return addHours(solarNoonUtc, twilightAngle);
  };
  const addHours = (subject, scientificDecimalTime) => {
    const date = new Date();
    date.setTime(subject.getTime() + scientificDecimalTime * 60 * 60 * 1000);
    return date;
  };

  const getCivilDawnEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(horizon, date, latitude, longitude);

  const getCivilDawnStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(civilAngle, date, latitude, longitude);

  const getNauticalDawnEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(civilAngle, date, latitude, longitude);

  const getNauticalDawnStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(nauticalAngle, date, latitude, longitude);

  const getAstronomicalDawnEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(nauticalAngle, date, latitude, longitude);

  const getAstronomicalDawnStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(astronomicalAngle, date, latitude, longitude);

  const getAstronomicalDuskStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(astronomicalAngle, date, latitude, longitude);

  const getAstronomicalDuskEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(nauticalAngle, date, latitude, longitude);

  const getNauticalDuskEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(civilAngle, date, latitude, longitude);

  const getNauticalDuskStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(nauticalAngle, date, latitude, longitude);

  const getCivilDuskEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(horizon, date, latitude, longitude);

  const getCivilDuskStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc2(civilAngle, date, latitude, longitude);

  return Object.freeze({
    getCivilDawnStartDateTime: (date, latitude, longitude) =>
      getCivilDawnStartDateTime(date, latitude, longitude),
    getCivilDawnEndDateTime: (date, latitude, longitude) =>
      getCivilDawnEndDateTime(date, latitude, longitude),
    getNauticalDawnStartDateTime: (date, latitude, longitude) =>
      getNauticalDawnStartDateTime(date, latitude, longitude),
    getNauticalDawnEndDateTime: (date, latitude, longitude) =>
      getNauticalDawnEndDateTime(date, latitude, longitude),
    getAstronomicalDawnStartDateTime: (date, latitude, longitude) =>
      getAstronomicalDawnStartDateTime(date, latitude, longitude),
    getAstronomicalDawnEndDateTime: (date, latitude, longitude) =>
      getAstronomicalDawnEndDateTime(date, latitude, longitude),
    getAstronomicalDuskStartDateTime: (date, latitude, longitude) =>
      getAstronomicalDuskStartDateTime(date, latitude, longitude),
    getAstronomicalDuskEndDateTime: (date, latitude, longitude) =>
      getAstronomicalDuskEndDateTime(date, latitude, longitude),
    getNauticalDuskStartDateTime: (date, latitude, longitude) =>
      getNauticalDuskStartDateTime(date, latitude, longitude),
    getNauticaluskEndDateTime: (date, latitude, longitude) =>
      getNauticalDuskEndDateTime(date, latitude, longitude),
    getCivilDuskStartDateTime: (date, latitude, longitude) =>
      getCivilDuskStartDateTime(date, latitude, longitude),
    getCivilDuskEndDateTime: (date, latitude, longitude) =>
      getCivilDuskEndDateTime(date, latitude, longitude)
  });
};

export default getTwilightTimeBuilder;
