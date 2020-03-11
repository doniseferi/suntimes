import { suite, test } from 'mocha';
import { expect } from 'chai';
import suntimes from '../index';

suite('Index', () => {
  test('', () => {
    const val = suntimes.getDateTimeUtcOfAngleAfterNoon(67.50783637406113, new Date(2027, 11, 25), -53.7860374, -67.7002243
    );
    expect(val).not.null();
  });
  test('exports the suntimes object', () => {
    expect(suntimes)
      .to.not.equal(null)
      .and.not.to.equal(undefined);
  });
  test('the suntimes object exports all methods', () => {
    const { lat, lng, date, angle } = {
      lat: 0,
      lng: 0,
      date: new Date(Date.now()),
      angle: 0
    };

    expect(() =>
      suntimes.getDeclinationOfTheSun(date)
    ).to.not.be.null.and.not.throw();
    expect(() => suntimes.equationOfTime(date)).to.not.be.null.and.not.throw();
    expect(() => suntimes.getDayOfTheYear(date)).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getHourAngleSinceNoon(date, lat, angle)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNoonHourAngle(date, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNoonDateTimeUtc(date, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getDateTimeUtcOfAngleBeforeNoon(angle, date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getDateTimeUtcOfAngleAfterNoon(angle, date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getSunriseDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getSunsetDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getCivilDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getCivilDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNauticalDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNauticalDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getAstronomicalDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getAstronomicalDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getAstronomicalDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getAstronomicalDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNauticalDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getNauticalDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getCivilDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      suntimes.getCivilDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
  });
});
