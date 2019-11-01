import { suite, test } from 'mocha';
import { assert } from 'chai';
import { toTime } from '../index';

suite('Scientific decimal time to time', () => {
  test('returns hours', () => {
    assert.equal(toTime(1).hours, 1);
    assert.equal(toTime(10).hours, 10);
    assert.equal(toTime(100).hours, 100);
    assert.equal(toTime(100.9).hours, 100);
    assert.equal(toTime(10.9).hours, 10);
    assert.equal(toTime(1.9).hours, 1);
  });

  test('returns minutes', () => {
    assert.equal(toTime(0.0166667).minutes, 1);
    assert.equal(toTime(0.1666667).minutes, 10);
    assert.equal(toTime(0.1666667).minutes, 10);
    assert.equal(toTime(0.5).minutes, 30);
    assert.equal(toTime(0.983335).minutes, 59);
  });

  test('returns seconds', () => {
    assert.equal(toTime(0.000277778).seconds, 1);
    assert.equal(toTime(0.00277778).seconds, 10);
    assert.equal(toTime(0.008333361).seconds, 30);
    assert.equal(toTime(0.0138889).seconds, 50);
    assert.equal(toTime(0.0163889).seconds, 59);
    assert.equal(toTime(0.0166667).seconds, 0);
  });

  test('returns milliseconds', () => {
    assert.equal(
      toTime(0.0002775).milliseconds,
      999
    );
    assert.equal(
      toTime(0.000100278).milliseconds,
      361
    );
    assert.equal(
      toTime(0.000277778).milliseconds,
      0
    );
    assert.equal(
      toTime(0.000234167).milliseconds,
      843
    );
  });

  test('returns the complete every time unit', () => {
    const decimalTime = 23.756;
    const actual = toTime(decimalTime);
    assert.equal(actual.hours, 23);
    assert.equal(actual.minutes, 45);
    assert.equal(actual.seconds, 21);
    assert.equal(actual.milliseconds, 600);
  });

  test('throws an exception when the value is null, undefined or not a number', () => {
    assert.throws(() => toTime(null));
    assert.throws(() => toTime(undefined));
    assert.throws(() => toTime('One'));
    assert.throws(() => toTime(''));
  });
});
