const degreesToRadians = degrees => degrees * (Math.PI / 180);
const radiansToDegrees = radians => radians * (180 / Math.PI);
const angleService = Object.freeze({
  degreesToRadians,
  radiansToDegrees
});
export { angleService, degreesToRadians, radiansToDegrees };
