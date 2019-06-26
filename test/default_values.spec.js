import { expect } from "chai";

describe("default_value", () => {
  const greet = (greet = "Hello", name) => {
    return `${greet} ${name}`;
  };

  describe("greet is empty", () => {
    it("uses the default value", () => {
      expect(greet(undefined, "Robert")).to.equal("Hello Robert");
    });
  });

  describe("greet is null", () => {
    it("uses null as the parsed value", () => {
      expect(greet(null, "Bob")).to.equal("null Bob");
    });
  });

  describe("greet is not empty", () => {
    it("uses parsed value", () => {
      expect(greet("Goodbye", "Alex")).to.equal("Goodbye Alex");
    });
  });
});
