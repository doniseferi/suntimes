const toUtcDateTimeBuilder = toTime => {
  const toUtcDateTime = (date, scientificDecimalTime) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const { hours, minutes, seconds, milliseconds } = toTime(
      scientificDecimalTime
    );

    const value = Date.UTC(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );

    // const offsetInDays = scientificDecimalTime.offsetInDays;

    // const alter = addDays(offsetInDays, value);

    return new Date(value);
  };

  // const addDays = (days, subject) => {
  //   const date = new Date(subject.valueOf());
  //   date.setDate(date.getDate() + days);
  //   return date;
  // };

  return Object.freeze({
    toUtcDateTime: (date, decimalTime) => toUtcDateTime(date, decimalTime)
  });
};

export default toUtcDateTimeBuilder;
