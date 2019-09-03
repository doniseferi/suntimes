import { suite, test } from 'mocha';
import { assert } from 'chai';
import hoursToTime from './hoursToTime';

const onethirtyone = 1.51;

suite('Hours to time', () => {
  test('returns hours', () => {
    const value = hoursToTime(onethirtyone);
    assert.equal(value.hours, 1);
  });
  test('returns minutes', () => {
    const value = hoursToTime(onethirtyone);
    assert.equal(value.minutes, 30);
  });
  test('returns seconds', () => {
    const value = hoursToTime(onethirtyone);
    assert.equal(value.minutes, 36);
  });
  test('returns miliseconds', () => {
    const value = hoursToTime(onethirtyone);
    assert.equal(value.minutes, 8);
  });
});
