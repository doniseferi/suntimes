import { describe, test } from 'mocha';
import { assert } from 'chai';
import {
  sine,
  cosine,
  arcsine,
  arccosine,
  degreesToRadians,
  radiansToDegrees
} from '../index';

const _1DegInRadians = 0.017453292519943295;
const _1RadInDegrees = 57.29577951308232;

describe('Trigonometry objects', () => {
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

describe('Angle conversions', () => {
  test('converts 1 degree to 0.01745rad', () => {
    assert.equal(degreesToRadians(1), _1DegInRadians);
  });
  test('converts 1 radian to 57.296deg', () => {
    assert.equal(radiansToDegrees(1), _1RadInDegrees);
  });
});
describe('Complex numbers', () => {
  test('arccosine can handle complex numbers outside of the -1 to 1 range', () => {
    assert.isNotNaN(arccosine(1.001));
  });
});
