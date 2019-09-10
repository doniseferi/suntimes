const toUtcDateTimeBuilder = (toTime) => {
  const toUtcDateTime = (date, scientificDecimalTime) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const {
      hours,
      minutes,
      seconds,
      milliseconds
    } = toTime(scientificDecimalTime);

    return new Date(
      Date.UTC(year, month, day, hours, minutes, seconds, milliseconds)
    );
  };

  return Object.freeze({
    toUtcDateTime: (date, decimalTime) => toUtcDateTime(date, decimalTime)
  });
};

export default toUtcDateTimeBuilder;
