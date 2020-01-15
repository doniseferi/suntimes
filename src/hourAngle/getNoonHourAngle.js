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
    getNoonHourAngle
  });
};

export default getNoonHourAngleFactory;
