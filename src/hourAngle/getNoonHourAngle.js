const getNoonHourAngleFactory = equationOfTime => {
  if (equationOfTime == null) {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for equationOfTime.
      This dependency takes in a Date
      and returns a Number`
    );
  }

  const getNoonHourAngle = (date, longitude) => {
    if (date == null) {
      throw new Error('Please provide a date: Date to get the hour angle');
    }
    if (longitude == null || isNaN(longitude)) {
      throw new Error(
        'Please provide the longitude: Number to get the noon hour angle'
      );
    }

    return (
      12 -
      (getHourDifference(longitude) +
        getEquationOfTimeInHours(equationOfTime, date))
    );
  };

  const getEquationOfTimeInHours = (equationOfTime, date) => equationOfTime(date) / 60;

  const getHourDifference = longitude => longitude / 15;

  return Object.freeze({
  /**
* Gets the noon hour angle for the date and longitude value.
* @example <caption>Example usage of getNoonHourAngle</caption>
* // returns 12.17245941025575
* getNoonHourAngle(new Date(2025, 0, 18), -0.010150);
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {number} The noon hour angle expressed as a number between 0.00 and 23.9.
* @function
*/
    getNoonHourAngle: (date, longitude) => getNoonHourAngle(date, longitude)
  });
};

export { getNoonHourAngleFactory };
