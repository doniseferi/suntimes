import { test } from 'mocha';
import { assert } from 'chai';
import {
  getNoonDateTimeUtc,
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc,
  getCivilDawnStartDateTimeUtc,
  getNauticalDawnStartDateTimeUtc,
  getAstronomicalDawnStartDateTimeUtc,
  getAstronomicalDuskStartDateTimeUtc,
  getNauticalDuskStartDateTimeUtc,
  getCivilDuskStartDateTimeUtc
} from '../../index';
import januarySunriseExpected from './utcJanSunrise.json';
import julySunriseExpected from './utcJulySunrise.json';
import januarySunsetExpected from './utcJanSunset.json';
import julySunsetExpected from './utcJulySunset.json';
import januaryTwilightExpected from './utcJanTwilight.json';
import januaryNoonExpected from './utcJanNoon.json';
import julyNoonExpected from './utcJulyNoon.json';

const assertTimesAreCloseToDelta = testModel => {
  testModel.expectedSet.forEach(expected => {
    const { Latitude, Longitude } = expected;
    const expectedDateTimeUtc = new Date(
      expected[testModel.expectedPropertyName]
    );
    const actualDateTimeUtc = testModel.functionUnderTest(
      testModel.date,
      Latitude,
      Longitude
    );
    const differenceInSeconds =
      (expectedDateTimeUtc.getTime() - new Date(actualDateTimeUtc).getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
};

// eslint-disable-next-line no-unused-vars
const noonWrapper = (targetDate, latitude, longitude) =>
  getNoonDateTimeUtc(targetDate, longitude);
const testModel = (
  date,
  expectedSet,
  functionUnderTest,
  expectedPropertyName = 'ExpectedTimeUtc'
) => ({
  date,
  expectedSet,
  functionUnderTest,
  expectedPropertyName
});

test('The correct date time utc of all expected points of a date are returned with a +/- 60 second accuracy', () => {
  [
    testModel(new Date(2019, 0, 1), januaryNoonExpected, noonWrapper),
    testModel(new Date(2019, 6, 1), julyNoonExpected, noonWrapper),
    testModel(
      new Date(2019, 0, 1),
      januarySunriseExpected,
      getSunriseDateTimeUtc
    ),
    testModel(new Date(2019, 6, 1), julySunriseExpected, getSunriseDateTimeUtc),
    testModel(
      new Date(2019, 0, 1),
      januarySunsetExpected,
      getSunsetDateTimeUtc
    ),
    testModel(new Date(2019, 6, 1), julySunsetExpected, getSunsetDateTimeUtc),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getAstronomicalDawnStartDateTimeUtc,
      'ExpectedAstronomicalDawnUtc'
    ),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getNauticalDawnStartDateTimeUtc,
      'ExpectedNauticalDawnUtc'
    ),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getCivilDawnStartDateTimeUtc,
      'ExpectedCivilDawnUtc'
    ),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getAstronomicalDuskStartDateTimeUtc,
      'ExpectedAstronomicalDuskUtc'
    ),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getNauticalDuskStartDateTimeUtc,
      'ExpectedNauticalDuskUtc'
    ),
    testModel(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      getCivilDuskStartDateTimeUtc,
      'ExpectedCivilDuskUtc'
    )
  ].forEach(testModel => assertTimesAreCloseToDelta(testModel));
});
