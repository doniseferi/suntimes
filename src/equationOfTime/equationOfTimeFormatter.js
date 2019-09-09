const equationOfTimeFormatter = eot => {
  if (isNaN(eot) || typeof eot !== 'number') {
    throw new Error('Please provide the numeric value for the equation of time.');
  }
  return format(eot);
};

const format = eot => {
  const sexagesimalBase = 60;
  const hours = eot / sexagesimalBase;
  const minutes = parseInt(eot);
  const seconds = Math.round(sexagesimalBase * (eot % 1));
  const totalSeconds = Math.round(sexagesimalBase * eot);

  return model(eot, hours, minutes, seconds, totalSeconds);
};

const model = (
  eot,
  hours,
  minutes,
  seconds,
  totalInSeconds
) => {
  return {
    equationOfTime: eot,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    totalSeconds: totalInSeconds
  };
};

export default equationOfTimeFormatter;
