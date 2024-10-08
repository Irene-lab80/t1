import { pluralize } from "./pluralize";

describe("pluralize", () => {
  it("should pluralize noun correctly for count greater than 1", () => {
    expect(pluralize(2, "item")).toBe("2 items");
  });

  it("should return singular noun for count 1", () => {
    expect(pluralize(1, "item")).toBe("1 item");
  });
});
