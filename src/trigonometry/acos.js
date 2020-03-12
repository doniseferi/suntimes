const complex = (realAxis, imaginaryAxis) => ({
  realAxis,
  imaginaryAxis
});

const acos = (x) => (x >= -1 && x <= 1)
  ? Math.acos(x)
  : acosForComplexNumbers(x).imaginaryAxis;

const acosForComplexNumbers = (realAxis) => {
  const imaginaryAxis = 0;

  const t1 = complex(
    imaginaryAxis * imaginaryAxis - realAxis * realAxis + 1,
    -2 * realAxis * imaginaryAxis);

  const t2 = squareRoot(t1);

  const t3 = complex(
    t2.realAxis - imaginaryAxis,
    t2.imaginaryAxis + realAxis);

  const t4 = naturalLogarithm(t3);

  return complex(Math.PI / 2 - t4.imaginaryAxis, t4.realAxis);
};

const naturalLogarithm = (complexNumber) => {
  return complex(
    logHypot(complexNumber),
    Math.atan2(complexNumber.imaginaryAxis, complexNumber.realAxis));
};

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
};

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
};

const absolute = (complexNumber) => {
  let a = Math.abs(complexNumber.realAxis);
  let b = Math.abs(complexNumber.imaginaryAxis);

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

export default acos;
