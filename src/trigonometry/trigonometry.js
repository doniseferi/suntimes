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
  // const arccosine = x => radiansToDegrees(Math.acos(x));
  const arccosine = x => {
      if (x >= -1 && x <= 1) {
        return radiansToDegrees(Math.acos(x))
      } else {
        return radiansToDegrees(complexCos(x).imaginaryAxis)
      }
    }
  
const complex = (realAxis, imaginaryAxis) => ({
  realAxis,
  imaginaryAxis
});

const complexCos = (realAxis) => {

  const imaginaryAxis = 0;

  const t1 = complex(
    imaginaryAxis * imaginaryAxis - realAxis * realAxis + 1,
    -2 * realAxis * imaginaryAxis);

  const t2 = squareRoot(t1);

  const t3 = complex(
    t2.realAxis - imaginaryAxis,
    t2.imaginaryAxis + realAxis);

  const t4 = log(t3);

  return complex(Math.PI / 2 - t4.imaginaryAxis, t4.realAxis);
}

/**
 * COMPLETE
     * Calculate the natural log
     *
     * @returns {Complex}
     */
const log = (complexNumber) => {
  return complex(
    logHypot(complexNumber),
    Math.atan2(complexNumber.imaginaryAxis, complexNumber.realAxis));
}

//complete
const logHypot = (complexNumber) => {

  const a = Math.abs(complexNumber.realAxis);
  const b = Math.abs(complexNumber.imaginaryAxis);

  if (complexNumber.realAxis === 0) {
    return Math.log(b);
  }

  if (complexNumber.imaginaryAxis === 0) {
    return Math.log(a);
  }

  if (a < 3000 && b < 3000) {
    return Math.log(complexNumber.realAxis * complexNumber.realAxis + complexNumber.imaginaryAxis * complexNumber.imaginaryAxis) * 0.5;
  }

  return Math.log(complexNumber.realAxis / Math.cos(Math.atan2(complexNumber.imaginaryAxis, complexNumber.realAxis)));
}

// COMPLETE
const squareRoot = (complexNumber) => {

  const absoluteNumber = absolute(complexNumber);

  let re;
  let im;

  if (complexNumber.realAxis >= 0) {

    if (complexNumber.imaginaryAxis === 0) {
      return complex(Math.sqrt(complexNumber.realAxis), 0);
    }

    re = 0.5 * Math.sqrt(2.0 * (absoluteNumber + complexNumber.realAxis));
  } else {
    re = Math.abs(complexNumber.imaginaryAxis) / Math.sqrt(2 * (absoluteNumber - complexNumber.realAxis));
  }

  if (complexNumber.realAxis <= 0) {
    im = 0.5 * Math.sqrt(2.0 * (absoluteNumber - complexNumber.realAxis));
  } else {
    im = Math.abs(complexNumber.imaginaryAxis) / Math.sqrt(2 * (absoluteNumber + complexNumber.realAxis));
  }

  return complex(re, complexNumber.imaginaryAxis < 0 ? -im : im);
}
/**
 * COMPLETE
 * Calculate the magnitude of the complex number
 *
 * @returns {number}
 */
const absolute = (complexNumber) => {

  const a = Math.abs(complexNumber.realAxis);
  const b = Math.abs(complexNumber.imaginaryAxis);

  if (a < 3000 && b < 3000) {
    return Math.sqrt(a * a + b * b);
  }

  if (a < b) {
    a = b;
    b = complexNumber.realAxis / complexNumber.imaginaryAxis;
  } else {
    b = complexNumber.imaginaryAxis / complexNumber.realAxis;
  }
  return a * Math.sqrt(1 + b * b);
};

  return Object.freeze({
    sine,
    cosine,
    arcsine,
    arccosine
  });
}

export default trigonometryFactory;
