const sunAltitudeAboveErrorMessage = (date, latitude, longitude, degrees) =>
    `The sun's altitude does not drop to ${degrees}° on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunAltitudeBelowErrorMessage = (date, latitude, longitude, degrees) =>
    `The sun's altitude does not rise to ${degrees}° on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunUpAllDayErrorMessage = (date, latitude, longitude) =>
    `The sun is up all day on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

const sunDownAllDayErrorMessage = (date, latitude, longitude) =>
    `The sun is down all day on ${date.toDateString()} at latitude ${latitude} and longitude ${longitude}`;

export {
  sunAltitudeAboveErrorMessage,
  sunAltitudeBelowErrorMessage,
  sunUpAllDayErrorMessage,
  sunDownAllDayErrorMessage
};
