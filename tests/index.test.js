import { suite, test } from 'mocha';
import { assert } from 'chai';
import sun from '../index';

suite('Index', () => {
  test('exports the sun object', () => {
    assert.isNotNull(sun);
  });
  test('the sun object exports every method', () => {
    assert.isNotNull(sun.getDeclinationOfTheSun);
    assert.isNotNull(sun.equationOfTime);
    assert.isNotNull(sun.getDayOfTheYear);
    assert.isNotNull(sun.getHourAngleSinceNoon);
    assert.isNotNull(sun.getNoonHourAngle);
    assert.isNotNull(sun.getNoonDateTimeUtc);
    assert.isNotNull(sun.getDateTimeUtcOfAngleBeforeNoon);
    assert.isNotNull(sun.getDateTimeUtcOfAngleAfterNoon);
    assert.isNotNull(sun.getSunriseDateTimeUtc);
    assert.isNotNull(sun.getSunsetDateTimeUtc);
    assert.isNotNull(sun.getCivilDawnEndDateTimeUtc);
    assert.isNotNull(sun.getCivilDawnStartDateTimeUtc);
    assert.isNotNull(sun.getNauticalDawnEndDateTimeUtc);
    assert.isNotNull(sun.getNauticalDawnStartDateTimeUtc);
    assert.isNotNull(sun.getAstronomicalDawnEndDateTimeUtc);
    assert.isNotNull(sun.getAstronomicalDawnStartDateTimeUtc);
    assert.isNotNull(sun.getAstronomicalDuskStartDateTimeUtc);
    assert.isNotNull(sun.getAstronomicalDuskEndDateTimeUtc);
    assert.isNotNull(sun.getNauticalDuskEndDateTimeUtc);
    assert.isNotNull(sun.getNauticalDuskStartDateTimeUtc);
    assert.isNotNull(sun.getCivilDuskEndDateTimeUtc);
    assert.isNotNull(sun.getCivilDuskStartDateTimeUtc);
  });
});
