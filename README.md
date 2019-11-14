<p align="center" background-color="white">
<img src="./logo.svg" alt="suntimes" width="180">
</p>

# [![Build Status](https://travis-ci.com/doniseferi/suntimes.svg?branch=master)](https://travis-ci.com/doniseferi/suntimes) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de579f6fc84188ba0aac2601ec05f0)](https://www.codacy.com/manual/doniseferi/suntimes?utm_source=github.com&utm_medium=referral&utm_content=doniseferi/suntimes&utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/doniseferi/suntimes) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/doniseferi/suntimes) ![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/suntimes) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/doniseferi/suntimes) ![GitHub last commit](https://img.shields.io/github/last-commit/doniseferi/suntimes) ![Coveralls github](https://img.shields.io/coveralls/github/doniseferi/suntimes)

A simple library to get the exact date and time in [utc](https://en.wikipedia.org/wiki/ISO_8601) for certain points of the day for any desired location and date.

For any desired location and date you are able to retrieve the time in [utc](https://en.wikipedia.org/wiki/ISO_8601) for sunrise, sunset, solar noon, civil, twilight and astronomical dawn and dusk. Other non utc related information availble is the equation of time (in an hour angle format) and the declination of the sun (in degrees).

# Install

npm install suntimes

# Api Reference

The following methods are all available on the suntimes object however they are also all named exported too if you're using the ECMAScript 6 modules as opposed to CommonJS modules.

## Members

<dl>
<dt><a href="#getDeclinationOfTheSun">getDeclinationOfTheSun</a> ⇒ <code>number</code></dt>
<dd><p>The angular distance of the sun north or south of the earth&#39;s equator.</p>
</dd>
<dt><a href="#equationOfTime">equationOfTime</a> ⇒ <code>number</code></dt>
<dd><p>Gets the equation of time for the date instance. The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes (e.g. 5.5 equal 5 minutes and 30 seconds).</p>
</dd>
<dt><a href="#getDayOfTheYear">getDayOfTheYear</a> ⇒ <code>number</code></dt>
<dd><p>Gets the day of the year for the date instance.</p>
</dd>
<dt><a href="#getHourAngleSinceNoon">getHourAngleSinceNoon</a> ⇒ <code>number</code></dt>
<dd><p>Gets the hour angle difference between noon and the angle value.</p>
</dd>
<dt><a href="#getNoonHourAngle">getNoonHourAngle</a> ⇒ <code>number</code></dt>
<dd><p>Gets the noon hour angle for the date instance and longitude value.</p>
</dd>
<dt><a href="#getNoonDateTimeUtc">getNoonDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the noon date and time in UTC for the date instance and longitude value.</p>
</dd>
<dt><a href="#getDateTimeUtcOfAngleBeforeNoon">getDateTimeUtcOfAngleBeforeNoon</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time at an angle before noon for the angle value, date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getDateTimeUtcOfAngleAfterNoon">getDateTimeUtcOfAngleAfterNoon</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time at an angle after noon for the angle value, date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getSunriseDateTimeUtc">getSunriseDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the sunrise date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getSunsetDateTimeUtc">getSunsetDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the sunset date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDawnEndDateTimeUtc">getCivilDawnEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of civil dawn date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDawnStartDateTimeUtc">getCivilDawnStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of civil dawn date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDawnEndDateTimeUtc">getNauticalDawnEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of nautical dawn date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDawnStartDateTimeUtc">getNauticalDawnStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of nautical dawn date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDawnEndDateTimeUtc">getAstronomicalDawnEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of astronomical dawn date and time in UTC for the date instance, latitude and longitude
value.</p>
</dd>
<dt><a href="#getAstronomicalDawnStartDateTimeUtc">getAstronomicalDawnStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDuskStartDateTimeUtc">getAstronomicalDuskStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getAstronomicalDuskEndDateTimeUtc">getAstronomicalDuskEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of astronomical dusk date and time in UTC for the date instance, latitude and longitude
value.</p>
</dd>
<dt><a href="#getNauticalDuskEndDateTimeUtc">getNauticalDuskEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of nautical dusk date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getNauticalDuskStartDateTimeUtc">getNauticalDuskStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of nautical dusk date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDuskEndDateTimeUtc">getCivilDuskEndDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the end of civil dusk date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#getCivilDuskStartDateTimeUtc">getCivilDuskStartDateTimeUtc</a> ⇒ <code>string</code></dt>
<dd><p>Gets the start of civil dusk date and time in UTC for the date instance, latitude and longitude value.</p>
</dd>
</dl>

<a name="getDeclinationOfTheSun"></a>

## getDeclinationOfTheSun ⇒ <code>number</code>

The angular distance of the sun north or south of the earth's equator.

**Kind**: global variable
**Returns**: <code>number</code> - The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.

| Param | Type              | Description     |
| ----- | ----------------- | --------------- |
| date  | <code>Date</code> | A date instance |

**Example**

```js
suntimes.getDeclinationOfTheSun(new Date(2019, 0, 1));
```

<a name="equationOfTime"></a>

## equationOfTime ⇒ <code>number</code>

Gets the equation of time for the date instance. The correction between standard clock time and the time based on the exact position of the sun in the sky represented as decimal time in minutes (e.g. 5.5 equal 5 minutes and 30 seconds).

**Kind**: global variable
**Returns**: <code>number</code> - A number whose value is the equation of time in minutes decimal time for
the Date represented by date.

| Param | Type              | Description      |
| ----- | ----------------- | ---------------- |
| date  | <code>Date</code> | A date instance. |

**Example**

```js
suntimes.equationOfTime(new Date(2019, 0, 1));
```

<a name="getDayOfTheYear"></a>

## getDayOfTheYear ⇒ <code>number</code>

Gets the day of the year for the date instance.

**Kind**: global variable
**Returns**: <code>number</code> - The day of the year, expressed as a value between 1 and 366 for the Date
instance represented by date.

| Param | Type              | Description      |
| ----- | ----------------- | ---------------- |
| date  | <code>Date</code> | A date instance. |

**Example**

```js
suntimes.getDayOfTheYear(new Date(2019, 0, 1));
```

<a name="getHourAngleSinceNoon"></a>

## getHourAngleSinceNoon ⇒ <code>number</code>

Gets the hour angle difference between noon and the angle value.

**Kind**: global variable
**Returns**: <code>number</code> - A number whose value represents the hour angle since noon for the date instance, latitude and angle value.

| Param    | Type                | Description                                 |
| -------- | ------------------- | ------------------------------------------- |
| date     | <code>Date</code>   | A date instance.                            |
| latitude | <code>number</code> | A latitude value in the range of -90 to 90. |
| angle    | <code>number</code> | An angle value.                             |

**Example**

```js
suntimes.getHourAngleSinceNoon(new Date(2019, 0, 1), 51.476852, -0.833);
```

<a name="getNoonHourAngle"></a>

## getNoonHourAngle ⇒ <code>number</code>

Gets the noon hour angle for the date instance and longitude value.

**Kind**: global variable
**Returns**: <code>number</code> - The noon hour angle expressed as a number between 0.00 and 23.9.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNoonHourAngle(new Date(2019, 0, 1), -0.0005);
```

<a name="getNoonDateTimeUtc"></a>

## getNoonDateTimeUtc ⇒ <code>string</code>

Gets the noon date and time in UTC for the date instance and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing noon date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNoonDateTimeUtc(new Date(2019, 0, 1), -0.0005);
```

<a name="getDateTimeUtcOfAngleBeforeNoon"></a>

## getDateTimeUtcOfAngleBeforeNoon ⇒ <code>string</code>

Gets the date and time at an angle before noon for the angle value, date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the time and date for an angle before noon in UTC,
expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| angle     | <code>number</code> | An angle value.                                |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getDateTimeUtcOfAngleBeforeNoon(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getDateTimeUtcOfAngleAfterNoon"></a>

## getDateTimeUtcOfAngleAfterNoon ⇒ <code>string</code>

Gets the date and time at an angle after noon for the angle value, date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the time and date for an angle after noon in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| angle     | <code>number</code> | An angle value.                                |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getDateTimeUtcOfAngleAfterNoon(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getSunriseDateTimeUtc"></a>

## getSunriseDateTimeUtc ⇒ <code>string</code>

Gets the sunrise date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing sunrise date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getSunriseDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```

<a name="getSunsetDateTimeUtc"></a>

## getSunsetDateTimeUtc ⇒ <code>string</code>

Gets the sunset date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing sunset date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getSunsetDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```

<a name="getCivilDawnEndDateTimeUtc"></a>

## getCivilDawnEndDateTimeUtc ⇒ <code>string</code>

Gets the end of civil dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of civil dawn date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getCivilDawnEndDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```

<a name="getCivilDawnStartDateTimeUtc"></a>

## getCivilDawnStartDateTimeUtc ⇒ <code>string</code>

Gets the start of civil dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of civil dawn date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getCivilDawnStartDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```

<a name="getNauticalDawnEndDateTimeUtc"></a>

## getNauticalDawnEndDateTimeUtc ⇒ <code>string</code>

Gets the end of nautical dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of nautical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNauticalDawnEndDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getNauticalDawnStartDateTimeUtc"></a>

## getNauticalDawnStartDateTimeUtc ⇒ <code>string</code>

Gets the start of nautical dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of nautical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNauticalDawnStartDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getAstronomicalDawnEndDateTimeUtc"></a>

## getAstronomicalDawnEndDateTimeUtc ⇒ <code>string</code>

Gets the end of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of astronomical dawn date and time in UTC,
expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getAstronomicalDawnEndDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getAstronomicalDawnStartDateTimeUtc"></a>

## getAstronomicalDawnStartDateTimeUtc ⇒ <code>string</code>

Gets the start of astronomical dawn date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of astronomical dawn date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getAstronomicalDawnStartDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getAstronomicalDuskStartDateTimeUtc"></a>

## getAstronomicalDuskStartDateTimeUtc ⇒ <code>string</code>

Gets the start of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of astronomical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getAstronomicalDuskStartDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getAstronomicalDuskEndDateTimeUtc"></a>

## getAstronomicalDuskEndDateTimeUtc ⇒ <code>string</code>

Gets the end of astronomical dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of astronomical dusk date and time in UTC,
expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getAstronomicalDuskEndDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getNauticalDuskEndDateTimeUtc"></a>

## getNauticalDuskEndDateTimeUtc ⇒ <code>string</code>

Gets the end of nautical dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of nautical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNauticalDuskEndDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getNauticalDuskStartDateTimeUtc"></a>

## getNauticalDuskStartDateTimeUtc ⇒ <code>string</code>

Gets the start of nautical dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of nautical dusk date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getNauticalDuskStartDateTimeUtc(
  new Date(2019, 0, 1),
  51.476852,
  -0.0005
);
```

<a name="getCivilDuskEndDateTimeUtc"></a>

## getCivilDuskEndDateTimeUtc ⇒ <code>string</code>

Gets the end of civil dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the end of civil dusk date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getCivilDuskEndDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```

<a name="getCivilDuskStartDateTimeUtc"></a>

## getCivilDuskStartDateTimeUtc ⇒ <code>string</code>

Gets the start of civil dusk date and time in UTC for the date instance, latitude and longitude value.

**Kind**: global variable
**Returns**: <code>string</code> - A string representing the start of civil dusk date and time in UTC, expressed in an ISO 8601 format.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| date      | <code>Date</code>   | A date instance.                               |
| latitude  | <code>number</code> | A latitude value in the range of -90 to 90.    |
| longitude | <code>number</code> | A longitude value in the range of -180 to 180. |

**Example**

```js
suntimes.getCivilDuskStartDateTimeUtc(new Date(2019, 0, 1), 51.476852, -0.0005);
```
