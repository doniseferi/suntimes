const toTime = scientificDecimalTime => {
  if (!scientificDecimalTime || isNaN(scientificDecimalTime)) {
    throw new Error(
      'Value is either null, undefined or not a number.');
  }

  const sexagesimal = 60;
  const thousandth = 1000;
  const minutesInDecimal = toTimeUnit(scientificDecimalTime, sexagesimal);
  const secondsInDecimal = toTimeUnit(minutesInDecimal, sexagesimal);
  const millisecondInDecimal = toTimeUnit(secondsInDecimal, thousandth);

  const hours = parseInt(scientificDecimalTime);
  const minutes = parseInt(minutesInDecimal);
  const seconds = parseInt(secondsInDecimal);
  const milliseconds = parseInt(millisecondInDecimal);

  return { hours, minutes, seconds, milliseconds };
};

const toTimeUnit = (decimalValue, unitBase) => (decimalValue % 1) * unitBase;

export { toTime };
