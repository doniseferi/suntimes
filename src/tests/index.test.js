import { suite, test } from 'mocha';
import { expect } from 'chai';
import {
  getDeclinationOfTheSun,
  equationOfTime,
  getHourAngleSinceNoon,
  getNoonHourAngle,
  getNoonDateTimeUtc,
  getDateTimeUtcOfAngleBeforeNoon,
  getDateTimeUtcOfAngleAfterNoon,
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc,
  getCivilDawnEndDateTimeUtc,
  getCivilDawnStartDateTimeUtc,
  getNauticalDawnEndDateTimeUtc,
  getNauticalDawnStartDateTimeUtc,
  getAstronomicalDawnEndDateTimeUtc,
  getAstronomicalDawnStartDateTimeUtc,
  getAstronomicalDuskStartDateTimeUtc,
  getAstronomicalDuskEndDateTimeUtc,
  getNauticalDuskEndDateTimeUtc,
  getNauticalDuskStartDateTimeUtc,
  getCivilDuskEndDateTimeUtc,
  getCivilDuskStartDateTimeUtc
} from '../index';

suite('Index', () => {
  test('all dates are returned in ISO 8601', () => {
    const { latitude, longitude, date, angle } = {
      latitude: 0,
      longitude: 0,
      date: new Date(Date.now()),
      angle: 0
    };
    const iso8601Regex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;
    expect(getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude)).to.match(iso8601Regex);
    expect(getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude)).to.match(iso8601Regex);
    expect(getSunriseDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getSunsetDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getCivilDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getCivilDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getNauticalDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getNauticalDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getNauticalDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getNauticalDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getCivilDuskEndDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getCivilDuskStartDateTimeUtc(date, latitude, longitude)).to.match(iso8601Regex);
    expect(getNoonDateTimeUtc(date, longitude)).to.match(iso8601Regex);
  });
  test('the suntimes object exports all methods', () => {
    const { lat, lng, date, angle } = {
      lat: 0,
      lng: 0,
      date: new Date(Date.now()),
      angle: 0
    };
    expect(() =>
      getDeclinationOfTheSun(date)
    ).to.not.be.null.and.not.throw();
    expect(() => equationOfTime(date)).to.not.be.null.and.not.throw();
    expect(() =>
      getHourAngleSinceNoon(date, lat, angle)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNoonHourAngle(date, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNoonDateTimeUtc(date, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getDateTimeUtcOfAngleBeforeNoon(angle, date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getDateTimeUtcOfAngleAfterNoon(angle, date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getSunriseDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getSunsetDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getCivilDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getCivilDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNauticalDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNauticalDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getAstronomicalDawnEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getAstronomicalDawnStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getAstronomicalDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getAstronomicalDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNauticalDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getNauticalDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getCivilDuskEndDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
    expect(() =>
      getCivilDuskStartDateTimeUtc(date, lat, lng)
    ).to.not.be.null.and.not.throw();
  });
});
