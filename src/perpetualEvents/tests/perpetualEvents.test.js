import { describe, test } from 'mocha';
import { assert } from 'chai';
import {
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
} from '../../index';

describe('Perptual events', () => {
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
      assert.include(
        getAstronomicalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -18°");
      assert.include(
        getAstronomicalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -12°");
      assert.include(
        getNauticalDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -12°");
      assert.include(
        getNauticalDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -6°");
      assert.include(
        getCivilDawnStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -6°");
      assert.include(
        getCivilDawnEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        'The sun is up all day');
      assert.include(
        getSunriseDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        'The sun is up all day');
      assert.include(
        getSunsetDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        'The sun is up all day');
      assert.include(
        getCivilDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        'The sun is up all day');
      assert.include(
        getCivilDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -6°");
      assert.include(
        getNauticalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -6°");
      assert.include(
        getNauticalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -12°");
      assert.include(
        getAstronomicalDuskStartDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -12°");
      assert.include(
        getAstronomicalDuskEndDateTimeUtc(upAllDay.date, upAllDay.latitude, upAllDay.longitude),
        "The sun's altitude does not drop to -18°");
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
      assert.include(
        getNauticalDawnStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -12°");
      assert.include(
        getNauticalDawnEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -6°");

      assert.include(
        getCivilDawnStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -6°");
      assert.include(
        getCivilDawnEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        'The sun is down all day');

      assert.include(
        getSunriseDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        'The sun is down all day');
      assert.include(
        getSunsetDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        'The sun is down all day');

      assert.include(
        getCivilDuskStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        'The sun is down all day');
      assert.include(
        getCivilDuskEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -6°");

      assert.include(
        getNauticalDuskStartDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -6°");
      assert.include(
        getNauticalDuskEndDateTimeUtc(downAllDay.date, downAllDay.latitude, downAllDay.longitude),
        "The sun's altitude does not rise to -12°");
    });
  });
  test('Angle based methods detail sun doesnt arrive at the specified point', () => {
    const latitude = 71.980070;
    const longitude = 102.474270;
    const date = new Date(2037, 7, 2);
    assert.include(getDateTimeUtcOfAngleBeforeNoon(-6, date, latitude, longitude), "The sun's altitude does not drop to -6°");
    assert.include(getDateTimeUtcOfAngleAfterNoon(-6, date, latitude, longitude), "The sun's altitude does not drop to -6°");
  });
  test('Angle based methods detail sun doesnt arrive at the specified point', () => {
    const latitude = 82.518689;
    const longitude = -62.273199;
    const date = new Date(2020, 0, 1);
    assert.include(getDateTimeUtcOfAngleBeforeNoon(-6, date, latitude, longitude), "The sun's altitude does not rise to -6°");
    assert.include(getDateTimeUtcOfAngleAfterNoon(-6, date, latitude, longitude), "The sun's altitude does not rise to -6°");
  });
});
