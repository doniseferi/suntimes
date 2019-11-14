/**
 * Gets the day of the year for the date instance.
 *
 * @param {Date} date - A date instance.
 * @returns {number} The day of the year, expressed as a value between 1 and 366 for the Date instance represented by date.
 */
const getDayOfTheYear = date => {
  if (!date) {
    throw new Error('Please provide a valid date');
  }

  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export default getDayOfTheYear;
