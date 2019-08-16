const getNoonTimeBuilder = (equationOfTime) => {
  const getNoonTimeInHours = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  const toUtcDate = (date, decimalTimeInHours) => {
    const minutesInPercentage = decimal % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const day = date.get

    const date = new Date()
  };

  return Object.freeze({
    getNoonTime: (date, longitude) => getNoonTimeInHours(date, longitude)
  });
};

export default getNoonTimeBuilder;
