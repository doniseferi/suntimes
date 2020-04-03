import { describe, test } from 'mocha';
import { assert } from 'chai';
import suntimes from '../../index';

describe('Events that last all day/night', () => {
  test('returns the sun is up when the sun is above the horizon for the entire day', () => {
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
      assert.equal(suntimes.getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getAstronomicalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getAstronomicalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getAstronomicalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getAstronomicalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.equal(suntimes.getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
    });
  });
  test('returns the sun is down when the sun is below the horizon for the entire day', () => {
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
      assert.equal(suntimes.getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is down all day');
      assert.equal(suntimes.getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun does reach angle x°');
      assert.equal(suntimes.getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is down all day');
    });
  });
});
