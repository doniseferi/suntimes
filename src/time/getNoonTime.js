const getNoonTimeBuilder = (equationOfTime, toUtcDateTime) => {
  const getNoonTime = (date, longitude) =>
    (12 - (longitude / 15 + equationOfTime(date).hours));

  return Object.freeze({
    getNoonDateTime: (date, longitude) =>
      toUtcDateTime(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
