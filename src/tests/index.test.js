import { suite, test } from 'mocha';
import { expect } from 'chai';
import suntimes from '../index';

suite('Index', () => {
  test('exports the suntimes object', () => {
    expect(suntimes)
      .to.not.equal(null)
      .and.not.to.equal(undefined);
  });
  test('all dates are returned in ISO 8601', () => {
    const { latitude, longitude, date, angle } = {
      latitude: 0,
      longitude: 0,
      date: new Date(Date.now()),
      angle: 0
    };
    const iso8601Regex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;
    expect(suntimes.getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getSunriseDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getSunsetDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getCivilDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getCivilDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getNauticalDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getNauticalDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getNauticalDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getNauticalDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getCivilDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getCivilDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(suntimes.getNoonDateTimeUtc(date, longitude)).to.match(iso8601Regex);
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
