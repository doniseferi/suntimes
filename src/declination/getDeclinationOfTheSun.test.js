import { suite, test } from "mocha";
import { expect } from "chai";
import declinationOfTheSunTestData from "./declinationOfTheSunTestData.json";
import declinationOfTheSun from "./index";

suite("Declination of the sun", () => {
  test("returns the correct value in degrees within +/- 0.4 degree accuracy", () => {
    declinationOfTheSunTestData.forEach(data => {
      const { date, declination } = data;
      const result = declinationOfTheSun(new Date(date));
      const set = [result, declination];
      const difference = Math.max.apply(null, set) - Math.min.apply(null, set);
      expect(difference).to.be.within(0, 0.4);
    });
  });
});
