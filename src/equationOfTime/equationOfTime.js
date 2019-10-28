// Fourier method for equation of time provided by Kevin Karney
// accuratacy of -/+ 3 seconds between 2000 to 2050
const equationOfTime = date => {
  if (!date) {
    throw new Error('Please provide a valid date');
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const timeZone = date.getTimezoneOffset() / 60;
  const aaa = 367 * year - 730531.5;
  const bbb = toNegativeInt((7 * toInt(year + (month + 9) / 12)) / 4);
  const ccc = toInt((275 * month) / 9) + day;
  const dToday = (hour + minutes / 60 - timeZone) / 24;
  const dDays2000 = aaa + bbb + ccc + dToday;
  const cycle = toInt(dDays2000 / 365.25);
  const oThetaRad = 0.0172024 * (dDays2000 - 365.25 * cycle);
  const ampMins1 = 7.36303 - cycle * 0.00009;
  const ampMins2 = 9.92465 - cycle * 0.00014;
  const pPhiRad1 = 3.07892 - cycle * 0.00019;
  const pPhiRad2 = -1.38995 + cycle * 0.00013;
  const eotMins1 = ampMins1 * Math.sin(1 * (oThetaRad + pPhiRad1));
  const eotMins2 = ampMins2 * Math.sin(2 * (oThetaRad + pPhiRad2));
  const eotMins3 = 0.3173 * Math.sin(3 * (oThetaRad - 0.94686));
  const eotMins4 = 0.21922 * Math.sin(4 * (oThetaRad - 0.60716));
  const eotMinutes = 0.00526 + eotMins1 + eotMins2 + eotMins3 + eotMins4;

  return eotMinutes;
};

const toNegativeInt = number => toInt(number * -1);
const toInt = number => Number.parseInt(number);

export default equationOfTime;
