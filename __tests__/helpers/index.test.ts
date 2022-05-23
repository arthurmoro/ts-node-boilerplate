import { generateUniqueId } from "../../src/helpers/index"

describe('GenerateUniqueId', () => {
  it("Should generate an ObjectId like string", () => {
    const uniqueId = generateUniqueId();
    expect(typeof uniqueId).toBe("string")
  })
})