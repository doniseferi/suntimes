const getAllDatesForYear = year =>
  getAllDatesBetweenDates(new Date(year, 0, 1), new Date(year, 11, 31));

const getAllDatesBetweenDates = (startDate, endDate) => {
  const dates = [];
  let comparand = startDate;

  while (comparand <= endDate) {
    dates.push(comparand);
    comparand = addDays(comparand, 1);
  }
  return dates;
};

const addDays = (date, days) => {
  const newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export { getAllDatesForYear };
