import { suite, test } from 'mocha';
import { expect } from 'chai';
import suntimes from '../index';

suite('Index', () => {
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
  test('Returns correct response when the sun is up all day for that location', () => {
    [{
      latitude: 82.518689,
      longitude: -62.273199,
      date: new Date(Date.UTC(2020, 5, 15))
    }, {
      latitude: 71.980070,
      longitude: 102.474270,
      date: new Date(Date.UTC(2037, 7, 2))
    }, {
      latitude: 78.222379,
      longitude: 15.652313,
      date: new Date(Date.UTC(2040, 3, 25))
    }, {
      latitude: -75.100620,
      longitude: 123.354750,
      date: new Date(Date.UTC(2002, 0, 27))
    }].forEach(upAllDay => {
      expect(suntimes.getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getAstronomicalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getAstronomicalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getAstronomicalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getAstronomicalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
      expect(suntimes.getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is up all day');
    });
  });
  test('Returns correct response when the sun is down all day for that location', () => {
    [{
      latitude: 82.518689,
      longitude: -62.273199,
      date: new Date(Date.UTC(2020, 5, 15))
    }, {
      latitude: 71.980070,
      longitude: 102.474270,
      date: new Date(Date.UTC(2037, 7, 2))
    }, {
      latitude: 78.222379,
      longitude: 15.652313,
      date: new Date(Date.UTC(2040, 3, 25))
    }].forEach(upAllDay => {
      expect(suntimes.getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is down all day');
      expect(suntimes.getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun does reach angle x°');
      expect(suntimes.getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude)).to.equal('The sun is down all day');
    });
  });
});
