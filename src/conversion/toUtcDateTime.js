const toUtcDateTimeFactory = toTime => {
  if (!toTime) {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for toTime.
      This dependency takes in a scientific decimal time
      and returns an object with the following properties: hours: Number, minutes: Number, seconds: Number and miliseconds: Number`
    );
  }

  const toUtcDateTime = (date, timeInformation) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const { hours, minutes, seconds, milliseconds } = toTime(
      timeInformation.hour
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

    const offsetInDays = timeInformation.offsetInDays;

    return offsetInDays !== 0 ? addDays(offsetInDays, value) : new Date(value);
  };

  const addDays = (days, subject) => {
    const date = new Date(subject.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return Object.freeze({
    toUtcDateTime: (date, decimalTime) => toUtcDateTime(date, decimalTime)
  });
};

export default toUtcDateTimeFactory;
