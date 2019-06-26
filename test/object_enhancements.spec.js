import { expect } from "chai";

describe("object_enhancements", () => {
  const color = "red";
  const speed = 10;

  it("the shorthand to create an object with key is variable name and value is variable value", () => {
    const car = { color, speed };
    expect(car.color).to.equal("red");
    expect(car.speed).to.equal(10);
  });

  it("can create an object with key is static string and value is variable vaue", () => {
    const car = { [color]: color };
    expect(car.color).to.equal(undefined);
    expect(car.red).to.equal("red");
  });

  it("can create an object with key is variable vaue and value is anything", () => {
    const car = { [color]: speed };
    expect(car.red).to.equal(10);
  });
});
