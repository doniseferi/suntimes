const perpetualEventHandler = (getIsoDateTime, sunAltitudeAboveAngleErrorMessage, sunAltitudeBelowAngleErrorMessage) => {
  try {
    return getIsoDateTime();
  } catch (err) {
    switch (err.message) {
      case 'The sun altitude never drops below the angle specified':
        return sunAltitudeAboveAngleErrorMessage;
      case 'The sun altitude never elevates above the angle specified':
        return sunAltitudeBelowAngleErrorMessage;
      default:
        throw err;
    }
  }
};

export { perpetualEventHandler };
