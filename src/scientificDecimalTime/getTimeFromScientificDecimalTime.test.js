import { suite, test } from 'mocha';
import { assert } from 'chai';
import getTimeFromScientificDecimalTime from './getTimeFromScientificDecimalTime';

const onethirtyone = 1.51;

suite('Hours to time', () => {
  test('returns hours', () => {
    const value = getTimeFromScientificDecimalTime(onethirtyone);
    assert.equal(value.hours, 1);
  });

  test('returns minutes', () => {
    const value = getTimeFromScientificDecimalTime(onethirtyone);
    assert.equal(value.minutes, 30);
  });

  test('returns seconds', () => {
    const value = getTimeFromScientificDecimalTime(onethirtyone);
    assert.equal(value.seconds, 36);
  });

  test('returns miliseconds', () => {
    const value = getTimeFromScientificDecimalTime(onethirtyone);
    assert.equal(value.milliseconds, 8);
  });

  test('returns the complete every time unit', () => {
    const decimalTIme = 42.756;
    const actual = getTimeFromScientificDecimalTime(decimalTIme);
    assert.equal(actual.hours, 42);
    assert.equal(actual.minutes, 45);
    assert.equal(actual.seconds, 21);
    assert.equal(actual.milliseconds, 600);
  });
});
