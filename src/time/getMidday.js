const getMiddayBuilder = equationOfTime => {
  const getMidday = (longitude, date, timeZone) => {
    const midday = 12 + timeZone - (longitude / 15 + equationOfTime(date).hours);
    return Number.parseFloat(midday).toFixed(2);
  };

  return Object.freeze({
    getMidday: (longitude, date, timeZone) => getMidday(longitude, date, timeZone)
  });
};

export default getMiddayBuilder;
