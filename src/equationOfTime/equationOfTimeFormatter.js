const equationOfTimeFormatter = eot => {
  if (!eot || isNaN(eot)) {
    throw new Error('Please provide the numeric value for the equation of time.');
  }
  return parseEoT(eot);
};

const parseEoT = eot => {
  const totalHours = eot / 60;
  const minutes = parseInt(eot);
  const secondsInOneMinute = 60;
  const seconds = Math.round(secondsInOneMinute * (eot % 1));
  const totalSeconds = Math.round(secondsInOneMinute * eot);
  return model(eot, totalHours, minutes, seconds, totalSeconds);
};

const model = (
  eot,
  totalHours,
  formattedMinutes,
  formattedSeconds,
  totalSeconds
) => {
  return {
    equationOfTime: eot,
    hours: totalHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    totalSeconds: totalSeconds
  };
};

export default equationOfTimeFormatter;
