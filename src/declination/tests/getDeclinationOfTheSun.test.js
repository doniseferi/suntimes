import { suite, test } from 'mocha';
import { assert } from 'chai';
import declinationOfTheSunTestData from './declinationOfTheSunTestData.json';
import getDeclinationOfTheSun, { declinationOfTheSunFactory } from '../index';

// const addMinutes = (date, minutes) => new Date(date.getTime() + minutes * 60000);

suite('Declination of the sun', () => {
  test('returns the correct value in degrees within +/- 0.4 degree accuracy', () => {
    declinationOfTheSunTestData.forEach(data => {
      const { date, declination } = data;
      const result = getDeclinationOfTheSun(new Date(date));
      const difference = result - declination;
      assert.closeTo(difference, 0, 0.4);
    });
  });
  test('throws an error if an invalid date is passed in', () => {
    const expectedErrorMessage = 'Please provide a valid date';
    assert.throws(() => getDeclinationOfTheSun(null), expectedErrorMessage);
    assert.throws(() => getDeclinationOfTheSun(undefined), expectedErrorMessage);
    assert.throws(() => getDeclinationOfTheSun(), expectedErrorMessage);
  });
});
suite('Declination Of The Sun Factory', () => {
  test('throws an exception if you do not pass in all parameters', () => {
    const stub = () => 1;
    assert.throws(() => declinationOfTheSunFactory(null, stub, stub, stub), 'Please provide a function for sine.');
    assert.throws(() => declinationOfTheSunFactory(stub, null, stub, stub), 'Please provide a function for cosine.');
    assert.throws(() => declinationOfTheSunFactory(stub, stub, null, stub), 'Please provide a function for arcsine.');
    assert.throws(() => declinationOfTheSunFactory(stub, stub, stub, null), 'Please provide a function for getDayOfTheYear.');
  });
  test('returns a get declination of the sun function', () => {
    const stub = () => 1;
    assert.typeOf(() => declinationOfTheSunFactory(stub, stub, stub, stub).getDeclinationOfTheSun, 'function');
  });
});
