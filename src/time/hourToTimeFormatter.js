const hourToTimeFormatter = (decimal) => {
  const minutesInPercentage = decimal % 1;
  const minutes = minutesInPercentage * 60;
  const secondsInPercentage = minutes % 1;
  const seconds = secondsInPercentage * 60;
  const miliSecondsInPercentage = seconds % 1;
  const miliSeconds = miliSecondsInPercentage * 1000;

  return `
    ${parseInt(decimal)}:
    ${parseInt(minutes)}:
    ${parseInt(seconds)}:
    ${parseInt(miliSeconds)}`;
};

export default hourToTimeFormatter;
