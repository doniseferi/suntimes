const getNoonTimeBuilder = (equationOfTime) => {
  const getNoonTime = (date, longitude) => {
    return 12 - (longitude / 15 + equationOfTime(date).hours);
  };

  return Object.freeze({
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
