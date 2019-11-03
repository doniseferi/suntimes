import { test } from 'mocha';
import { assert } from 'chai';
import {
  getSunriseDateTimeUtc,
  getSunsetDateTimeUtc
} from '../../../index';
import januarySunriseExpected from './utcJanSunrise.json';
import julySunriseExpected from './utcJulySunrise.json';
import januarySunsetExpected from './utcJanSunset.json';
import julySunsetExpected from './utcJulySunset.json';

const testGeneric = (targetDate, testData, functionUnderTest) => {
  testData.forEach(expected => {
    const { ExpectedTimeUtc, Latitude, Longitude } = expected;
    const expectedTime = new Date(ExpectedTimeUtc);
    const actualDateTime = functionUnderTest(targetDate, Latitude, Longitude);
    const differenceInSeconds =
      (expectedTime.getTime() - actualDateTime.getTime()) / 1000;
    assert.closeTo(differenceInSeconds, 0, 60);
  });
};

const januaryTestModel = (set, functionUnderTest) =>
  model(new Date(2019, 0, 1), set, functionUnderTest);
const julyTestModel = (set, functionUnderTest) =>
  model(new Date(2019, 6, 1), set, functionUnderTest);
const model = (date, set, functionUnderTest) => ({
  date,
  expectedSet: set,
  functionUnderTest
});

test('returns times time within a +/- 1 minute accuracy', () => {
  const testData = [
    januaryTestModel(januarySunriseExpected, getSunriseDateTimeUtc),
    julyTestModel(julySunriseExpected, getSunriseDateTimeUtc),
    januaryTestModel(januarySunsetExpected, getSunsetDateTimeUtc),
    julyTestModel(julySunsetExpected, getSunsetDateTimeUtc)
  ];
  testData.forEach(set =>
    testGeneric(set.date, set.expectedSet, set.functionUnderTest)
  );
});
