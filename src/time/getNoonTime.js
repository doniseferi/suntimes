const getNoonTimeBuilder = (equationOfTime) => {
  const getNoonTimeInHours = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  const toDate = (date, decimalTimeInHours) => {
    const hour = decimalTimeInHours;
    const minutesInPercentage = decimalTimeInHours % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return new Date(year, month, day, hour, minutes, seconds);
  };

  return Object.freeze({
    getNoonTime: (date, longitude) => toDate(date, getNoonTimeInHours(date, longitude))
  });
};

export default getNoonTimeBuilder;
