const trigonometryFactory = (degreesToRadians, radiansToDegrees) => {
  if (degreesToRadians == null) {
    throw new Error('degrees to radians');
  }
  if (radiansToDegrees == null) {
    throw new Error('radians to degrees');
  }

  const sine = degrees => Math.sin(degreesToRadians(degrees));
  const cosine = degrees => Math.cos(degreesToRadians(degrees));
  const arcsine = x => radiansToDegrees(Math.asin(x));
  const arccosine = x => radiansToDegrees(Math.acos(x));

  return Object.freeze({
    sine: degrees => sine(degrees),
    cosine: degrees => cosine(degrees),
    arcsine: x => arcsine(x),
    arccosine: x => arccosine(x)
  });
};

export default trigonometryFactory;
