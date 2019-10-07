const getNoonTimeBuilder = (equationOfTime, toUtcDateTime) => {
  const getNoonTime = (date, longitude, offset) => {
    let hour = 12 - (longitude / 15 + equationOfTime(date).hours);
    let offsetInDays = 0;
    if (hour < 0) {
      hour = hour + 24;
      offsetInDays = -1;
    }
    if (hour >= 24) {
      hour = hour - 24;
      offsetInDays = +1;
    }
    if (offset != null && offset && hour > 24) {
      console.log('');
    }
    if (offset != null && offset && hour > 24) {
      console.log('');
    }
    return {
      hour,
      offsetInDays
    };
  };

  return Object.freeze({
    getNoonDateTime: (date, longitude) =>
      toUtcDateTime(date, getNoonTime(date, longitude)),
    getNoonTime: (date, longitude) => getNoonTime(date, longitude)
  });
};

export default getNoonTimeBuilder;
