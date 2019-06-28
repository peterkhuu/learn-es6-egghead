import { expect } from 'chai';
import filter from 'lodash/fp/filter';

describe('filter', () => {
  const shop = [
    { item: 'apple', price: 2.5 },
    { item: 'banana', price: 5 },
    { item: 'orange', price: 3 }
  ];

  it('returns a new array which satisfies the filter conditions', () => {
    expect(filter({ item: 'apple' }, shop)).to.deep.equal([
      { item: 'apple', price: 2.5 }
    ]);
  });
});
