import { test } from 'mocha';
import { assert } from 'chai';
import {
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc,
  getAstronomicalDawnStartDateTimeUtc,
  getNauticalDawnStartDateTimeUtc,
  getCivilDawnStartDateTimeUtc,
  getAstronomicalDuskStartDateTimeUtc,
  getNauticalDuskStartDateTimeUtc,
  getCivilDuskStartDateTimeUtc
} from '../../../index';
import januarySunriseExpected from './utcJanSunrise.json';
import julySunriseExpected from './utcJulySunrise.json';
import januarySunsetExpected from './utcJanSunset.json';
import julySunsetExpected from './utcJulySunset.json';
import januaryTwilightExpected from './utcJanTwilight.json';

const testGeneric = (targetDate, testData, functionUnderTest, name) => {
  testData.forEach(expected => {
    const { Latitude, Longitude } = expected;
    const expectedDateTimeUtc = expected[name];
    const expectedTime = new Date(expectedDateTimeUtc);
    const actualDateTime = functionUnderTest(targetDate, Latitude, Longitude);
    const differenceInSeconds =
      (expectedTime.getTime() - actualDateTime.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
};

const jan = new Date(2019, 0, 1);
const jul = new Date(2019, 6, 1);

const model = (date, set, expectedPropertyName, functionUnderTest) => ({
  date,
  expectedSet: set,
  expectedPropertyName,
  functionUnderTest
});

test('The correct date time utc of all points are returned with a +/- 60 second accuracy', () => {
  const testData = [
    model(
      jan,
      januarySunriseExpected,
      'ExpectedTimeUtc',
      getSunriseDateTimeUtc
    ),
    model(jul, julySunriseExpected, 'ExpectedTimeUtc', getSunriseDateTimeUtc),
    model(jan, januarySunsetExpected, 'ExpectedTimeUtc', getSunsetDateTimeUtc),
    model(jul, julySunsetExpected, 'ExpectedTimeUtc', getSunsetDateTimeUtc),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedAstronomicalDawnUtc',
      getAstronomicalDawnStartDateTimeUtc
    ),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedNauticalDawnUtc',
      getNauticalDawnStartDateTimeUtc
    ),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedCivilDawnUtc',
      getCivilDawnStartDateTimeUtc
    ),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedAstronomicalDuskUtc',
      getAstronomicalDuskStartDateTimeUtc
    ),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedNauticalDuskUtc',
      getNauticalDuskStartDateTimeUtc
    ),
    model(
      new Date(2022, 0, 1),
      januaryTwilightExpected,
      'ExpectedCivilDuskUtc',
      getCivilDuskStartDateTimeUtc
    )
  ];
  testData.forEach(set =>
    testGeneric(
      set.date,
      set.expectedSet,
      set.functionUnderTest,
      set.expectedPropertyName
    )
  );
});
