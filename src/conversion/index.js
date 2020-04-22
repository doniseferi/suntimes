import { toTime } from './toTime';
import { toUtcDateTimeFactory } from './toUtcDateTime';

const toUtcDateTime = toUtcDateTimeFactory(toTime)
  .toUtcDateTime;

export {
  toUtcDateTimeFactory,
  toTime,
  toUtcDateTime
};
