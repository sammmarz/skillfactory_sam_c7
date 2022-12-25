import { reversedString } from "../index.js";

describe("test reversed String", () => {
  it("reversed String 1", () => {
    const result = reversedString("ber ber");
    expect(result).toBe("reb reb");
  }),
    it("reversed String 2", () => {
      const result = reversedString("Привет!");
      expect(result).toBe("!тевирП");
    });
    it("reversed String 3", () => {
      const result = reversedString("abc");
      expect(result).toBe("cba");
    });
});
