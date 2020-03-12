const trigonometryFactory = (degreesToRadians, radiansToDegrees, acos) => {
  if (degreesToRadians == null) {
    throw new Error('degrees to radians');
  }
  if (radiansToDegrees == null) {
    throw new Error('radians to degrees');
  }

  const sine = degrees => Math.sin(degreesToRadians(degrees));
  const cosine = degrees => Math.cos(degreesToRadians(degrees));
  const arcsine = x => radiansToDegrees(Math.asin(x));
  const arccosine = x => radiansToDegrees(acos(x));

  return Object.freeze({
    sine,
    cosine,
    arcsine,
    arccosine
  });
};

export default trigonometryFactory;
