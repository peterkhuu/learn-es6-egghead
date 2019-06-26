import { expect } from "chai";

describe("parameter_object_destructuring", () => {
  const messageFunction = (name = requiredParameter(name)) => {
    return `Hello ${name}`;
  };

  const requiredParameter = name => {
    throw new Error(`Missing parameter "${name}"`);
  };

  it("returns an error if there is no name variable", () => {
    expect(() => messageFunction()).to.throw(Error);
  });

  it("does not return an error if there is a name variable", () => {
    expect(messageFunction("Peter")).to.equal("Hello Peter");
  });
});
