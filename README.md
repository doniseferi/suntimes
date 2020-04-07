<p align="center" background-color="white">
<img src="https://raw.githubusercontent.com/doniseferi/suntimes/master/logo.svg?sanitize=true" width="250px" />
</p>

# [![Build Status](https://travis-ci.com/doniseferi/suntimes.svg?branch=master)](https://travis-ci.com/doniseferi/suntimes) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de579f6fc84188ba0aac2601ec05f0)](https://www.codacy.com/manual/doniseferi/suntimes?utm_source=github.com&utm_medium=referral&utm_content=doniseferi/suntimes&utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/doniseferi/suntimes) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/doniseferi/suntimes) ![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/suntimes) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/doniseferi/suntimes) ![GitHub last commit](https://img.shields.io/github/last-commit/doniseferi/suntimes) ![Coveralls github](https://img.shields.io/coveralls/github/doniseferi/suntimes) [![GitHub issues](https://img.shields.io/github/issues/doniseferi/suntimes)](https://github.com/doniseferi/suntimes/issues)

A tiny library to get the exact date and time in [utc](https://en.wikipedia.org/wiki/ISO_8601) for certain points of the day for any desired location and date.

## Install

```npm install suntimes```

## Api Reference

## Objects

<dl>
<dt><a href="#suntimes">suntimes</a> : <code>object</code></dt>
<dd><p>An object that provides basic astronomy functionality for any given date and location.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getDeclinationOfTheSun">getDeclinationOfTheSun(date)</a> ⇒ <code>number</code></dt>
<dd><p>The angular distance of the sun north or south of the earth&#39;s equator.</p>
</dd>
<dt><a href="#equationOfTime">equationOfTime(date)</a> ⇒ <code>number</code></dt>
<dd><p>The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes.</p>
</dd>
<dt><a href="#getHourAngleSinceNoon">getHourAngleSinceNoon(date, latitude, angle)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the hour angle difference between noon and the angle value.</p>
</dd>
<dt><a href="#getNoonHourAngle">getNoonHourAngle(date, longitude)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the noon hour angle for the date and longitude value.</p>
</dd>
<dt><a href="#getNoonDateTimeUtc">getNoonDateTimeUtc(date, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the noon date and time in UTC expressed in an ISO 8601 format for date and longitude value.</p>
</dd>
<dt><a href="#getDateTimeUtcOfAngleBeforeNoon">getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time in UTC expressed in an ISO 8601 format for an angle before noon for the angle, date, latitude and longitude value.</p>
</dd>
<dt><a href="#getDateTimeUtcOfAngleAfterNoon">getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time in UTC expressed in an ISO 8601 format for an angle after noon for the angle, date, latitude and longitude value.</p>
</dd>
<dt><a href="#getSunriseDateTimeUtc">getSunriseDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the sunrise date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getSunsetDateTimeUtc">getSunsetDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the sunset date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDawnEndDateTimeUtc">getCivilDawnEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDawnStartDateTimeUtc">getCivilDawnStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDawnEndDateTimeUtc">getNauticalDawnEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDawnStartDateTimeUtc">getNauticalDawnStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDawnEndDateTimeUtc">getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDawnStartDateTimeUtc">getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDuskStartDateTimeUtc">getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDuskEndDateTimeUtc">getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDuskEndDateTimeUtc">getNauticalDuskEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDuskStartDateTimeUtc">getNauticalDuskStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDuskEndDateTimeUtc">getCivilDuskEndDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDuskStartDateTimeUtc">getCivilDuskStartDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
</dl>

<a name="suntimes"></a>

## suntimes : <code>object</code>
An object that provides basic astronomy functionality for any given date and location.

**Kind**: global namespace
**Author**: Edonis Seferi <doni.seferi@gmail.com>
<a name="getDeclinationOfTheSun"></a>

## getDeclinationOfTheSun(date) ⇒ <code>number</code>
The angular distance of the sun north or south of the earth's equator.

**Kind**: global function
**Returns**: <code>number</code> - The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance |

**Example**
```js
suntimes.getDeclinationOfTheSun(new Date(2019, 0, 1));
```
<a name="equationOfTime"></a>

## equationOfTime(date) ⇒ <code>number</code>
The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes.

**Kind**: global function
**Returns**: <code>number</code> - A number whose value is the equation of time in minutes decimal time for the Date represented by date.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |

**Example**
```js
suntimes.equationOfTime(new Date(2025, 0, 18));
```
<a name="getHourAngleSinceNoon"></a>

## getHourAngleSinceNoon(date, latitude, angle) ⇒ <code>number</code>
Gets the hour angle difference between noon and the angle value.

**Kind**: global function
**Returns**: <code>number</code> - A number whose value represents the hour angle since noon for the date, latitude and angle value.
**Throws**:

- <code>RangeError</code> The sun altitude never elevates above the angle specified
- <code>RangeError</code> The sun altitude never drops below the angle specified


| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| angle | <code>number</code> | An angle value. |

**Example** *(Example usage of getHourAngleSinceNoon)*
```js
// returns 5.54554469317797
suntimes.suntimes.getHourAngleSinceNoon(new Date(2025, 0, 18), 51.477730, -12);
```
<a name="getNoonHourAngle"></a>

## getNoonHourAngle(date, longitude) ⇒ <code>number</code>
Gets the noon hour angle for the date and longitude value.

**Kind**: global function
**Returns**: <code>number</code> - The noon hour angle expressed as a number between 0.00 and 23.9.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNoonHourAngle)*
```js
// returns 12.17245941025575
suntimes.getNoonHourAngle(new Date(2025, 0, 18), -0.010150);
```
<a name="getNoonDateTimeUtc"></a>

## getNoonDateTimeUtc(date, longitude) ⇒ <code>string</code>
Gets the noon date and time in UTC expressed in an ISO 8601 format for date and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing noon date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNoonDateTimeUtc)*
```js
// returns "2025-01-18T12:10:20.853Z"
suntimes.getNoonDateTimeUtc(new Date(2025, 0, 18), -0.010150);
```
<a name="getDateTimeUtcOfAngleBeforeNoon"></a>

## getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude) ⇒ <code>string</code>
Gets the date and time in UTC expressed in an ISO 8601 format for an angle before noon for the angle, date, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the time and date for an angle before noon in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | An angle value. |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getDateTimeUtcOfAngleBeforeNoon)*
```js
// returns "2025-01-18T05:57:45.720Z"
suntimes.getDateTimeUtcOfAngleBeforeNoon(-18, new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getDateTimeUtcOfAngleBeforeNoon(-18, new Date(2025, 5, 18), 51.477730, -0.010150)73 and longitude -0.01015"
```
**Example**
```js
suntimes.getDateTimeUtcOfAngleBeforeNoon(18, new Date(2025, 5, 18), -51.477730, -0.010150);3 and longitude -0.01015"
```
<a name="getDateTimeUtcOfAngleAfterNoon"></a>

## getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude) ⇒ <code>string</code>
Gets the date and time in UTC expressed in an ISO 8601 format for an angle after noon for the angle, date, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | An angle value. |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**
```js
suntimes.getDateTimeUtcOfAngleAfterNoon(-18, new Date(2025, 0, 18), -51.477730, -0.010150)773 and longitude -0.01015"
```
**Example**
```js
suntimes.getDateTimeUtcOfAngleAfterNoon(18, new Date(2025, 5, 18), -51.477730, -0.010150);73 and longitude -0.01015"
```
<a name="getSunriseDateTimeUtc"></a>

## getSunriseDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the sunrise date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getSunriseDateTimeUtc)*
```js
// returns "2025-01-18T07:57:29.802Z"
suntimes.getSunriseDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getSunriseDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);d longitude 102.47427"
```
**Example**
```js
suntimes.getSunriseDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);5 and longitude -30.45"
```
<a name="getSunsetDateTimeUtc"></a>

## getSunsetDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the sunset date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing sunset date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getSunsetDateTimeUtc)*
```js
// returns "2025-01-18T16:23:11.903Z"
suntimes.getSunsetDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getSunsetDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);nd longitude 102.47427"
```
**Example**
```js
suntimes.getSunsetDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);25 and longitude -30.45"
```
<a name="getCivilDawnEndDateTimeUtc"></a>

## getCivilDawnEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getCivilDawnEndDateTimeUtc)*
```js
// returns "2025-01-18T07:57:29.802Z"
suntimes.getCivilDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getCivilDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);gitude 102.47427"
```
**Example**
```js
suntimes.getCivilDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500); longitude -30.45
```
<a name="getCivilDawnStartDateTimeUtc"></a>

## getCivilDawnStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of civil dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getCivilDawnStartDateTimeUtc)*
```js
// returns "2025-01-18T07:19:15.781Z"
suntimes.getCivilDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getCivilDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);ude 89.525 and longitude -30.45"
```
**Example**
```js
suntimes.getCivilDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);71.98007 and longitude 102.47427"
```
<a name="getNauticalDawnEndDateTimeUtc"></a>

## getNauticalDawnEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNauticalDawnEndDateTimeUtc)*
```js
// returns "2025-01-18T07:19:15.781Z"
suntimes.getNauticalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getNauticalDawnEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);de 89.525 and longitude -30.45"
```
**Example**
```js
suntimes.getNauticalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);1.98007 and longitude 102.47427"
```
<a name="getNauticalDawnStartDateTimeUtc"></a>

## getNauticalDawnStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of nautical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNauticalDawnStartDateTimeUtc)*
```js
// returns "2025-01-18T06:37:36.892Z"
suntimes.getNauticalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getNauticalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);.98007 and longitude 102.47427"
```
**Example**
```js
suntimes.getNauticalDawnStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);e 89.525 and longitude -30.45"
```
<a name="getAstronomicalDawnEndDateTimeUtc"></a>

## getAstronomicalDawnEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getAstronomicalDawnEndDateTimeUtc)*
```js
// returns "2025-01-18T06:37:36.892Z"
suntimes.getAstronomicalDawnEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getAstronomicalDawnEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);8007 and longitude 102.47427"
```
<a name="getAstronomicalDawnStartDateTimeUtc"></a>

## getAstronomicalDawnStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of astronomical dawn date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getAstronomicalDawnStartDateTimeUtc)*
```js
// returns "2025-01-18T05:57:45.720Z"
suntimes.getAstronomicalDawnStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getAstronomicalDawnStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);07 and longitude 102.47427"
```
<a name="getAstronomicalDuskStartDateTimeUtc"></a>

## getAstronomicalDuskStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getAstronomicalDuskStartDateTimeUtc)*
```js
// returns "2025-01-18T17:43:04.813Z"
suntimes.getAstronomicalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getAstronomicalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);07 and longitude 102.47427"
```
<a name="getAstronomicalDuskEndDateTimeUtc"></a>

## getAstronomicalDuskEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of astronomical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getAstronomicalDuskEndDateTimeUtc)*
```js
// returns "2025-01-18T18:22:55.985Z"
suntimes.getAstronomicalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getAstronomicalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);8007 and longitude 102.47427"
```
<a name="getNauticalDuskEndDateTimeUtc"></a>

## getNauticalDuskEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNauticalDuskEndDateTimeUtc)*
```js
// returns "2025-01-18T17:43:04.813Z"
suntimes.getNauticalDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getNauticalDuskEndDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);de 89.525 and longitude -30.45
```
**Example**
```js
suntimes.getNauticalDuskEndDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);71.98007 and longitude 102.47427"
```
<a name="getNauticalDuskStartDateTimeUtc"></a>

## getNauticalDuskStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of nautical dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getNauticalDuskStartDateTimeUtc)*
```js
// returns "2025-01-18T17:01:25.924Z"
suntimes.getNauticalDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
**Example**
```js
suntimes.getNauticalDuskStartDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);89.525 and longitude -30.45
```
**Example**
```js
suntimes.getNauticalDuskStartDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);98007 and longitude 102.47427"
```
<a name="getCivilDuskEndDateTimeUtc"></a>

## getCivilDuskEndDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the end of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getCivilDuskEndDateTimeUtc)*
```js
// returns "2025-01-18T17:01:25.924Z"
suntimes.getCivilDuskEndDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```
<a name="getCivilDuskStartDateTimeUtc"></a>

## getCivilDuskStartDateTimeUtc(date, latitude, longitude) ⇒ <code>string</code>
Gets the start of civil dusk date and time in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**Kind**: global function
**Returns**: <code>string</code> - A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A date instance. |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example** *(Example usage of getCivilDuskStartDateTimeUtc)*
```js
// returns "2025-01-18T16:23:11.903Z"
suntimes.getCivilDuskStartDateTimeUtc(new Date(2025, 0, 18), 51.477730, -0.010150);
```