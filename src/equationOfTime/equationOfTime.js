const equationOfTime = date => {
  const YYYY = date.getFullYear(),
    MM = date.getMonth() + 1,
    DD = date.getDate(),
    HH = date.getHours(),
    MMin = date.getMinutes(),
    TimeZone = date.getTimezoneOffset() / 60;
  const aaa = 367 * YYYY - 730531.5;
  const bbb = toNegativeInt((7 * toInt(YYYY + (MM + 9) / 12)) / 4);
  const ccc = toInt((275 * MM) / 9) + DD;
  const D_today = (HH + MMin / 60 - TimeZone) / 24;
  const D_days2000 = aaa + bbb + ccc + D_today;
  const Cycle = toInt(D_days2000 / 365.25);
  const o_theta_rad = 0.0172024 * (D_days2000 - 365.25 * Cycle);
  const Amp_mins_1 = 7.36303 - Cycle * 0.00009;
  const Amp_mins_2 = 9.92465 - Cycle * 0.00014;
  const p_phi_rad_1 = 3.07892 - Cycle * 0.00019;
  const p_phi_rad_2 = -1.38995 + Cycle * 0.00013;
  const EoT_mins_1 = Amp_mins_1 * Math.sin(1 * (o_theta_rad + p_phi_rad_1));
  const EoT_mins_2 = Amp_mins_2 * Math.sin(2 * (o_theta_rad + p_phi_rad_2));
  const EoT_mins_3 = 0.3173 * Math.sin(3 * (o_theta_rad - 0.94686));
  const EoT_mins_4 = 0.21922 * Math.sin(4 * (o_theta_rad - 0.60716));
  const EoT_mins = 0.00526 + EoT_mins_1 + EoT_mins_2 + EoT_mins_3 + EoT_mins_4;

  return EoT_mins;
};

const toNegativeInt = number => toInt(number * -1);
const toInt = number => Number.parseInt(number);

export default equationOfTime;
