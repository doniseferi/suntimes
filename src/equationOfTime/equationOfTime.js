const equationOfTime = date => {
  const YYYY = date.getFullYear();

  const MM = date.getMonth() + 1;

  const DD = date.getDate();

  const HH = date.getHours();

  const MMin = date.getMinutes();

  const TimeZone = date.getTimezoneOffset() / 60;
  const aaa = 367 * YYYY - 730531.5;
  const bbb = toNegativeInt((7 * toInt(YYYY + (MM + 9) / 12)) / 4);
  const ccc = toInt((275 * MM) / 9) + DD;
  const dToday = (HH + MMin / 60 - TimeZone) / 24;
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
