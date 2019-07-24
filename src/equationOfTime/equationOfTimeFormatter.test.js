import { suite, test } from 'mocha';
import { assert } from 'chai';
import { equationOfTimeFormatter } from './index';
import testData from './equationOfTimeFormatterTestData';

suite('Equation of time formatter', () => {
  test('returns the expected hours value', () => {
    testData.forEach(data => {
      const result = equationOfTimeFormatter(data.input);
      assert.equal(result.hours, data.expectedHours);
    });
  });
  test('returns the expected minutes value', () => {
    testData.forEach(data => {
      const result = equationOfTimeFormatter(data.input);
      assert.equal(result.minutes, data.expectedMinutes);
    });
  });
  test('returns the expected seconds value', () => {
    testData.forEach(data => {
      const result = equationOfTimeFormatter(data.input);
      assert.equal(result.seconds, data.expectedSeconds);
    });
  });
  test('returns the expected total seconds value', () => {
    testData.forEach(data => {
      const result = equationOfTimeFormatter(data.input);
      assert.equal(result.totalSeconds, data.expectedTotalSeconds);
    });
  });
});
