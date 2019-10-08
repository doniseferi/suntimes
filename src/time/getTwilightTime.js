const getTwilightTimeBuilder = (
  getNoonDateTime,
  getHourAngle
) => {
  const raiseException = (dependency) => {
    throw new Error(`Please satisfy a dependecy for ${dependency}`);
  };

  if (!getNoonDateTime) {
    raiseException(getNoonDateTime);
  }
  if (!getHourAngle) {
    raiseException(getHourAngle);
  }

  const horizon = -0.57;
  const civilAngle = -6;
  const nauticalAngle = -12;
  const astronomicalAngle = -18;

  const getDateTimeUtc = (angle, date, latitude, longitude) => {
    const solarNoonUtc = getNoonDateTime(date, longitude);
    const twilightAngle = getHourAngle(date, latitude, angle);
    const inversedHourAngle = twilightAngle * -1;
    return addHours(solarNoonUtc, inversedHourAngle);
  };
  const addHours = (subject, scientificDecimalTime) => {
    const date = new Date();
    date.setTime(subject.getTime() + scientificDecimalTime * 60 * 60 * 1000);
    return date;
  };

  const getTwilightCivilEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(horizon, date, latitude, longitude);

  const getTwilightCivilStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(civilAngle, date, latitude, longitude);

  const getTwilightNauticalEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(civilAngle, date, latitude, longitude);

  const getTwilightNauticalStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(nauticalAngle, date, latitude, longitude);

  const getTwilightAstronomicalEndDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(nauticalAngle, date, latitude, longitude);

  const getTwilightAstronomicalStartDateTime = (date, latitude, longitude) =>
    getDateTimeUtc(astronomicalAngle, date, latitude, longitude);

  return Object.freeze({
    getTwilightCivilStartDateTime: (date, latitude, longitude) => getTwilightCivilStartDateTime(date, latitude, longitude),
    getTwilightCivilEndDateTime: (date, latitude, longitude) => getTwilightCivilEndDateTime(date, latitude, longitude),
    getTwilightNauticalStartDateTime: (date, latitude, longitude) => getTwilightNauticalStartDateTime(date, latitude, longitude),
    getTwilightNauticalEndDateTime: (date, latitude, longitude) => getTwilightNauticalEndDateTime(date, latitude, longitude),
    getTwilightAstronomicalStartDateTime: (date, latitude, longitude) => getTwilightAstronomicalStartDateTime(date, latitude, longitude),
    getTwilightAstronomicalEndDateTime: (date, latitude, longitude) => getTwilightAstronomicalEndDateTime(date, latitude, longitude)
  });
};

export default getTwilightTimeBuilder;
