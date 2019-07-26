import { suite, test } from 'mocha';
import { expect } from 'chai';
import declinationOfTheSunTestData from './declinationOfTheSunTestData.json';
import getDeclinationOfTheSun, { declinationOfTheSunBuilder } from './index';

suite('Declination of the sun', () => {
  test('returns the correct value in degrees within +/- 0.4 degree accuracy', () => {
    declinationOfTheSunTestData.forEach(data => {
      const { date, declination } = data;
      const result = getDeclinationOfTheSun(new Date(date));
      const set = [result, declination];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      expect(difference).to.be.within(0, 0.4);
    });
  });
  test('returns the number', () => {
    const value = getDeclinationOfTheSun(new Date(Date.now()));
    expect(value).to.be.a('number');
  });
  test('throws an error if an ivnalid date is passed in', () => {
    expect(() => getDeclinationOfTheSun(null)).to.throw('Please provide a valid date');
    expect(() => getDeclinationOfTheSun(undefined)).to.throw('Please provide a valid date');
    expect(() => getDeclinationOfTheSun()).to.throw('Please provide a valid date');
  });
});
suite('Declination Of The Sun Builder', () => {
  test('thows an exception if you do not pass in all parameters', () => {
    const stub = () => 1;
    expect(() => declinationOfTheSunBuilder(null, stub, stub, stub)).to.throw();
    expect(() => declinationOfTheSunBuilder(stub, null, stub, stub)).to.throw();
    expect(() => declinationOfTheSunBuilder(stub, stub, null, stub)).to.throw();
    expect(() => declinationOfTheSunBuilder(stub, stub, stub, null)).to.throw();
  });
  test('returns a get declination of the sun method', () => {
    const stub = () => 1;
    expect(() => declinationOfTheSunBuilder(stub, stub, stub, stub).getDeclinationOfTheSun).to.be.a('function');
  });
});
