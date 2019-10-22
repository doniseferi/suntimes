import { suite, test } from 'mocha';
import { assert } from 'chai';
import declinationOfTheSunTestData from './declinationOfTheSunTestData.json';
import getDeclinationOfTheSun, { declinationOfTheSunBuilder } from '../index';

suite('Declination of the sun', () => {
  test('returns the correct value in degrees within +/- 0.4 degree accuracy', () => {
    declinationOfTheSunTestData.forEach(data => {
      const { date, declination } = data;
      const result = getDeclinationOfTheSun(new Date(date));
      const difference = result - declination;
      assert.closeTo(difference, 0, 0.4);
    });
  });
  test('returns the number', () => {
    const value = getDeclinationOfTheSun(new Date(Date.now()));
    assert.typeOf(value, 'number');
  });
  test('throws an error if an ivnalid date is passed in', () => {
    const expectedErrorMessage = 'Please provide a valid date';
    assert.throws(() => getDeclinationOfTheSun(null), expectedErrorMessage);
    assert.throws(() => getDeclinationOfTheSun(undefined), expectedErrorMessage);
    assert.throws(() => getDeclinationOfTheSun(), expectedErrorMessage);
  });
});
suite('Declination Of The Sun Builder', () => {
  test('thows an exception if you do not pass in all parameters', () => {
    const stub = () => 1;
    assert.throws(() => declinationOfTheSunBuilder(null, stub, stub, stub), 'Please provide a function for sine.');
    assert.throws(() => declinationOfTheSunBuilder(stub, null, stub, stub), 'Please provide a function for cosine.');
    assert.throws(() => declinationOfTheSunBuilder(stub, stub, null, stub), 'Please provide a function for arcsine.');
    assert.throws(() => declinationOfTheSunBuilder(stub, stub, stub, null), 'Please provide a function for getDayOfTheYear.');
  });
  test('returns a get declination of the sun function', () => {
    const stub = () => 1;
    assert.typeOf(() => declinationOfTheSunBuilder(stub, stub, stub, stub).getDeclinationOfTheSun, 'function');
  });
});
