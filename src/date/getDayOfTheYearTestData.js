export default [
  {
    date: new Date(2010, 0, 1),
    expectedDayOfTheYear: 1
  },
  {
    date: new Date(2000, 0, 1),
    expectedDayOfTheYear: 1
  },
  {
    date: new Date(2018, 11, 31),
    expectedDayOfTheYear: 365
  },
  {
    date: new Date(2008, 11, 31),
    expectedDayOfTheYear: 366
  },
  {
    date: new Date(2010, 10, 20),
    expectedDayOfTheYear: 324
  },
  {
    date: new Date(2018, 10, 20),
    expectedDayOfTheYear: 324
  },
  {
    date: new Date(2020, 1, 29),
    expectedDayOfTheYear: 60
  }
];
