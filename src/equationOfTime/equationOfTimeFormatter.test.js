import { suite, test } from 'mocha';
import { assert } from 'chai';
import { equationOfTimeFormatter } from './index';
import testData from './equationOfTimeFormatterTestData';

suite('Equation of time formatter', () => {
  test('returns the expected hours value', () => {
    testData.forEach(data => {
      const eot = data.input;
      const result = equationOfTimeFormatter(eot);
      assert.equal(result.hours, data.expectedHours);
    });
  });
  test('returns the expected minutes value', () => {
    testData.forEach(data => {
      const eot = data.input;
      const result = equationOfTimeFormatter(eot);
      assert.equal(result.minutes, data.expectedMinutes);
    });
  });
  test('returns the expected seconds value', () => {
    testData.forEach(data => {
      const eot = data.input;
      const result = equationOfTimeFormatter(eot);
      assert.equal(result.seconds, data.expectedSeconds);
    });
  });
  test('returns the expected total seconds value', () => {
    testData.forEach(data => {
      const eot = data.input;
      const result = equationOfTimeFormatter(eot);
      assert.equal(result.totalSeconds, data.expectedTotalSeconds);
    });
  });
  test('throws an exception when a number is not passed', () => {
    assert.throws(() => equationOfTimeFormatter(null), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter(undefined), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter(), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter('l'), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter('l.1'), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter('one'), 'Please provide the numeric value for the equation of time.');
    assert.throws(() => equationOfTimeFormatter('one point one'), 'Please provide the numeric value for the equation of time.');
  });
});
