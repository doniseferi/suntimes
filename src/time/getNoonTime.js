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
    const dir = longitude < 0 ? -1 : 1;

    let posNo = Math.sqrt(Math.pow(longitude, 2));
    if (posNo <= 7.5) {
      return 0;
    }

    posNo -= 7.5;
    let offset = posNo / 15;
    if (posNo % 15 > 0) offset++;

    return dir * Math.floor(offset);
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
