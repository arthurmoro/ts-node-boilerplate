import { getLocaleDate } from "../../src/helpers/date";

describe('Date Helper', () => {

  it("Should get a valid string date", () => {
    const date = new Date("2022-05-01");
    const stringDate = getLocaleDate(date);
    expect(stringDate).toBe("01/05/2022")
  });

  it("Should throw not valid date", () => {
    const date = new Date("2022nc-05-01");
    const stringDate = getLocaleDate(date);
    expect(stringDate).toBe("Invalid Date")
  });
})