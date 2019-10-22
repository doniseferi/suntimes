const getNoonTimeFactory = (equationOfTime, toUtcDateTime) => {
  const getNoonTime = (date, longitude) => {
    let hour = 12 - (getHourDifference(longitude) + getEquationOfTimeInHours(equationOfTime, date));
    let offsetInDays = 0;
    if (hour < 0) {
      hour = hour + 24;
      offsetInDays = -1;
    }
    if (hour >= 24) {
      hour = hour - 24;
      offsetInDays = +1;
    }
    return {
      hour,
      offsetInDays
    };
  };

  const getEquationOfTimeInHours = (equationOfTime, date) => equationOfTime(date) / 60;

  const getHourDifference = longitude => longitude / 15;

  return Object.freeze({
    getNoonDateTime: (date, longitude) =>
      toUtcDateTime(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeFactory;
