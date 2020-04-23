const toUtcDateTimeFactory = toTime => {
  if (!toTime) {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for toTime.
      This dependency takes in a scientific decimal time
      and returns an object with the following properties: hours: Number, minutes: Number, seconds: Number and milliseconds: Number`
    );
  }

  const toUtcDateTime = (date, hourAngle) => {
    if (date == null) {
      throw new Error(`Please provide the desired date 
      to convert to a Utc Date Time value`);
    }
    if (hourAngle == null || isNaN(hourAngle)) {
      throw new Error(
        `Please provide the hourAngle for the desired date 
        to convert to a Utc Date Time value`);
    }

    const offsetInDays = getUtcOffsetInDays(hourAngle);
    const scientificDecimalTime = getScientificDecimalTime(hourAngle, offsetInDays);
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

    return (offsetInDays !== 0)
      ? addDays(value, offsetInDays)
      : new Date(value);
  };

  const getUtcOffsetInDays = scientificDecimalTime =>
    (scientificDecimalTime < 0)
      ? -1
      : (scientificDecimalTime >= 24)
        ? 1
        : 0;

  const getScientificDecimalTime = (hourAngle, offsetInDays) =>
    (offsetInDays < 0)
      ? hourAngle + 24
      : hourAngle >= 24
        ? hourAngle - 24
        : hourAngle;

  const addDays = (subject, days) => {
    const date = new Date(subject.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return Object.freeze({
    toUtcDateTime
  });
};

export { toUtcDateTimeFactory };
