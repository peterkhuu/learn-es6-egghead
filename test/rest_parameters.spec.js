import { expect } from "chai";

describe("rest_parameters", () => {
  const aisle = {
    fruits: [],
    vegetables: []
  };

  const add = (category, ...items) => {
    aisle[category].push(...items);
  };

  const store = { aisle, add };

  it("returns the aisle", () => {
    store.add("fruits", "bananas", "apples");
    expect(store.aisle).to.deep.equal({
      fruits: ["bananas", "apples"],
      vegetables: []
    });
  });

  it("does not add items that belong to a category which is not in that aisle", () => {
    expect(() => store.add("electronics", "TV", "computer")).to.throw(
      TypeError
    );
  });
});
