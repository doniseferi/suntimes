const getNoonTimeBuilder = (equationOfTime, toUtcDateTime) => {
  const getNoonTime = (
    date,
    longitude,
    utcOffset = GetUtcOffset(longitude)
  ) => {
    const hour = 12 - (longitude / 15 + equationOfTime(date).hours);

    let offsetInDays = 0;
    const offset = hour + utcOffset;
    if (offset >= 23.99) offsetInDays = 1;
    else if (offset < 0) offsetInDays = -1;
    return {
      hour,
      offsetInDays
    };
  };

  const GetUtcOffset = longitude => {
    console.log(longitude);
    return 0;
  };

  return Object.freeze({
    getNoonDateTime: (date, longitude) =>
      toUtcDateTime(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
/*
MAX NOON AT -179 23.658288259
MAX NOON AT 179
*/
