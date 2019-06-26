import { expect } from "chai";

describe("arrow function function", () => {
  const no_arrow_function = function(message, name) {
    return message + name;
  };

  const arrow_function = (message, name) => message + name;

  it("is equal", () => {
    let message = "Hello";
    let name = "Peter";
    expect(no_arrow_function(message, name)).to.equal(
      arrow_function(message, name)
    );
  });
});
