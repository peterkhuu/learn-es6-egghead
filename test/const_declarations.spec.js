import { expect } from "chai";

describe("const delcarations", () => {
  it("is immutable", () => {
    const VAR = "FIRST";

    expect(() => (VAR = "SECOND")).to.throw(`"VAR" is read-only`);
  });

  it("adheres to block scope", () => {
    const VAR = "FIRST";
    {
      const VAR = "SECOND";
    }

    expect(VAR).to.equal("FIRST");
  });
});
