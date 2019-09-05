const getUtcDateTimeFromScientificDecimalTimeBuilder = (getTimeFromScientificDecimalTime) => {
  const toUtcDateTime = (date, decimalTime) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const {
      hours,
      minutes,
      seconds,
      miliSeconds
    } = getTimeFromScientificDecimalTime(decimalTime);

    return new Date(
      Date.UTC(year, month, day, hours, minutes, seconds, miliSeconds)
    );
  };

  return Object.freeze({
    getUtcDateTimeFromScientificDecimalTime: (date, decimalTime) => toUtcDateTime(date, decimalTime)
  });
};

export default getUtcDateTimeFromScientificDecimalTimeBuilder;
