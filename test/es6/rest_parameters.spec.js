import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('rest_parameters', () => {
  const aisle = {
    fruits: [],
    vegetables: [],
  };

  const add = (category, ...items) => {
    aisle[category].push(...items);
  };

  it('adds the remaining parameters into the fruits array', () => {
    add('fruits', 'bananas', 'apples');
    expect(aisle.fruits).to.deep.equal(['bananas', 'apples']);
  });
});
