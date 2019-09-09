const getNoonTimeBuilder = (equationOfTime, decimalTimeToUtcDateTime) => {
  const getNoonTime = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  return Object.freeze({
    getNoonDateTime: (date, longitude) =>
      decimalTimeToUtcDateTime(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
