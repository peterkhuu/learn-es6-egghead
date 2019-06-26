import { expect } from "chai";

describe("object_enhancements", () => {
  const color = "red";
  const speed = 10;

  it("uses shorthand to create an object where the key is the variable name", () => {
    const car = { color, speed };
    expect(car.color).to.equal("red");
    expect(car.speed).to.equal(10);
  });

  it("uses shorthand to create an object where the key is the variable value", () => {
    const car = { [color]: color };
    expect(car.color).to.equal(undefined);
    expect(car.red).to.equal("red");
  });
});
