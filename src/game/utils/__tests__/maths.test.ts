import { getRandomInt } from "../maths.ts";

describe("Test du maths utils", () => {
    let int: number;

    beforeEach(() => {
        int = getRandomInt(10, 20);
    });

    it("should be integer", () => {
        expect(int % 1).toEqual(0);
    });

    it("should be greater than min", () => {
        expect(int).toBeGreaterThanOrEqual(10);
    });

    it("should be less than max", () => {
        expect(int).toBeLessThanOrEqual(20);
    });
});
