import { calculateDiscountedPrice } from "./calculateDiscountedPrice.ts";

describe("calculateDiscountedPrice", () => {
  it("should calculate discounted price correctly", () => {
    const price = 100;
    const discount = 10;
    const expectedDiscountedPrice = 90;
    expect(calculateDiscountedPrice(price, discount)).toBe(
      expectedDiscountedPrice
    );
  });

  it("should round the discounted price to two decimal places", () => {
    const price = 100.5;
    const discount = 25;
    const expectedDiscountedPrice = 75.38;
    expect(calculateDiscountedPrice(price, discount)).toBe(
      expectedDiscountedPrice
    );
  });
});
