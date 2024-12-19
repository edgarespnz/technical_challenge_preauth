import { isValidInput } from "../utils/validations";

describe("isValidInput", () => {
  it("Return true for valid inputs", () => {
    expect(isValidInput([1, 2, 3], 10)).toBe(true);
  });

  it("Return false if M is not an array", () => {
    expect(isValidInput(123, 10)).toBe(false);
  });

  it("It should return false if some element of M is not a number", () => {
    expect(isValidInput([1, "2", 3], 10)).toBe(false);
  });

  it("Return false if N is not a number", () => {
    expect(isValidInput([1, 2, 3], "10")).toBe(false);
  });

  it("It should return true if M is empty but is still a valid array and N is a number", () => {
    expect(isValidInput([], 10)).toBe(true);
  });
});
