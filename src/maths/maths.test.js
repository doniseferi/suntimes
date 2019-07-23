import { describe, test } from 'mocha';
import { assert } from 'chai';
import trigonometryBuilder, { sine, cosine, arcsine, arccosine } from './index';
import { degreesToRadians, radiansToDegrees } from './angleMaths';

const _1DegInRadians = 0.017453292519943295;
const _1RadInDegrees = 57.29577951308232;

describe('Trigonometry', () => {
  test('1 degree equals 0.01745rad', () => {
    assert.equal(degreesToRadians(1), _1DegInRadians);
  });
  test('1 radian equals 57.296Deg', () => {
    assert.equal(radiansToDegrees(1), _1RadInDegrees);
  });
});
describe('', () => {
  test('sine is equal to built in Math objects sin method', () => {
    const result = sine(1);
    const expected = Math.sin(_1DegInRadians);
    assert.equal(result, expected);
  });
  test('cosine is equal to built in Math objects cos method', () => {
    const result = cosine(1);
    const expected = Math.cos(_1DegInRadians);
    assert.equal(result, expected);
  });
  test('arcsine is equal to built in Math objects asin method', () => {
    const result = arcsine(_1DegInRadians);
    const resultInRadians = degreesToRadians(result);
    const expected = Math.asin(_1DegInRadians);
    assert.equal(resultInRadians, expected);
  });
  test('arccosine is equal to built in Math objects asin method', () => {
    const result = arccosine(_1DegInRadians);
    const resultInRadians = degreesToRadians(result);
    const expected = Math.acos(_1DegInRadians);
    assert.equal(resultInRadians, expected);
  });
});
describe('Builder', () => {
  test('accepts custom degrees converter', () => {
    const service = trigonometryBuilder(throwError, null);
    assert.throws(() => service.sine(1));
  });
  test('accepts custom radians converter', () => {
    const service = trigonometryBuilder(null, throwError);
    assert.throws(() => service.arcsine(1));
  });
});

const throwError = () => {
  throw new Error();
};
