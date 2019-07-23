const getAllDatesForYear = year =>
  getAllDatesBetweenDates(new Date(year, 0, 1), new Date(year, 11, 31));

const getAllDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  let comperand = startDate;

  while (comperand <= endDate) {
    dates.push(comperand);
    comperand = addDays(comperand, 1);
  }
  return dates;
};

const addDays = (date, days) => {
  let newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export default getAllDatesForYear;
