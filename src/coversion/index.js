import toTime from './toTime';
import toUtcDateTimeBuilder from './toUtcDateTime';

const toUtcDateTime = toUtcDateTimeBuilder(toTime)
  .toUtcDateTime;

export {
  toUtcDateTimeBuilder,
  toTime,
  toUtcDateTime
};
