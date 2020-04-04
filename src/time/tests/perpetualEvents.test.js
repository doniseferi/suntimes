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
      assert.include(suntimes.getAstronomicalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -18°");
      assert.include(suntimes.getAstronomicalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -12°");

      assert.include(suntimes.getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -12°");
      assert.include(suntimes.getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -6°");

      assert.include(suntimes.getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -6°");
      assert.include(suntimes.getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');

      assert.include(suntimes.getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.include(suntimes.getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');

      assert.include(suntimes.getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), 'The sun is up all day');
      assert.include(suntimes.getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -6°");

      assert.include(suntimes.getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -6°");
      assert.include(suntimes.getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -12°");

      assert.include(suntimes.getAstronomicalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -12°");
      assert.include(suntimes.getAstronomicalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude), "The sun's altitude does not drop to -18°");
    });
  });
  test('returns the sun is down when the sun is below the horizon for the entire day', () => {
    [{
      latitude: 89.5250,
      longitude: -30.4500,
      date: new Date(Date.UTC(2042, 0, 1))
    }, {
      latitude: 82.518689,
      longitude: -62.273199,
      date: new Date(Date.UTC(2020, 0, 1))
    }, {
      latitude: -81.308327,
      longitude: 1.778737,
      date: new Date(Date.UTC(2037, 6, 2))
    }, {
      latitude: -84.530649,
      longitude: 148.240238,
      date: new Date(Date.UTC(2040, 6, 25))
    }].forEach(downAllDay => {
      assert.include(suntimes.getNauticalDawnStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -12°");
      assert.include(suntimes.getNauticalDawnEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -6°");

      assert.include(suntimes.getCivilDawnStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -6°");
      assert.include(suntimes.getCivilDawnEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), 'The sun is down all day');

      assert.include(suntimes.getSunriseDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), 'The sun is down all day');
      assert.include(suntimes.getSunsetDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), 'The sun is down all day');

      assert.include(suntimes.getCivilDuskStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), 'The sun is down all day');
      assert.include(suntimes.getCivilDuskEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -6°");

      assert.include(suntimes.getNauticalDuskStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -6°");
      assert.include(suntimes.getNauticalDuskEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude), "The sun's altitude does not rise to -12°");
    });
  });
});
