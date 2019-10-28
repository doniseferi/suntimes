const getNoonHourAngleFactory = (equationOfTime) => {
  if (equationOfTime == null) {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for equationOfTime.
      This dependency takes in a Date
      and returns a Number`);
  }

  const getNoonHourAngle = (date, longitude) => {
    let hour =
      12 -
      (getHourDifference(longitude) +
        getEquationOfTimeInHours(equationOfTime, date));
    let offsetInDays = 0;
    if (hour < 0) {
      hour = hour + 24;
      offsetInDays = -1;
    }
    if (hour >= 24) {
      hour = hour - 24;
      offsetInDays = +1;
    }
    return {
      hour,
      offsetInDays
    };
  };

  const getEquationOfTimeInHours = (equationOfTime, date) => equationOfTime(date) / 60;

  const getHourDifference = longitude => longitude / 15;

  return Object.freeze({
    getNoonHourAngle: (date, longitude) => getNoonHourAngle(date, longitude)
  });
};

export default getNoonHourAngleFactory;
