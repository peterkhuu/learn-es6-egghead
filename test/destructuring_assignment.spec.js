import { expect } from "chai";

describe("destructing_assignment", () => {
  const obj = {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward",
    age: 28
  };

  const { color, position, address } = obj;

  it("assigns properties to the variables", () => {
    expect(color).to.equal("blue");
    expect(position).to.equal("Forward");
  });

  it("does not assign properties to undefined variables", () => {
    expect(() => age).to.throw(ReferenceError);
  });

  it("returns undefined for destructed variables that don't exist in the object", () => {
    expect(address).to.equal(undefined);
  });
});
