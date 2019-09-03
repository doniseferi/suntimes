const getNoonTimeBuilder = (equationOfTime) => {
  const getNoonTime = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  const toDate = (date, decimalHour) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hour = decimalHour;
    const minutesInPercentage = decimalHour % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const miliSecondsInPercentage = seconds % 1;
    const miliSeconds = miliSecondsInPercentage * 1000;

    return new Date(Date.UTC(year, month, day, hour, minutes, seconds, miliSeconds));
  };

  return Object.freeze({
    getNoonDateTime: (date, longitude) => toDate(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
