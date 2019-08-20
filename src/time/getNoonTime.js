const getNoonTimeBuilder = (equationOfTime) => {
  const getNoonTimeInHours = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  const toDate = (date, decimalTimeInHours) => {
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const hour = decimalTimeInHours;
    const minutesInPercentage = decimalTimeInHours % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const miliSecondsInPercentage = seconds % 1;
    const miliSeconds = miliSecondsInPercentage * 1000;

    return new Date(Date.UTC(year, month, day, hour, minutes, seconds, miliSeconds));
  };

  return Object.freeze({
    getNoonTime: (date, longitude) => toDate(date, getNoonTimeInHours(date, longitude))
  });
};

export default getNoonTimeBuilder;
