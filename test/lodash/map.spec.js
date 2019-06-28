import { expect } from 'chai';
import map from 'lodash/fp/map';

describe('map', () => {
  const square = number => {
    return number * number;
  };

  const collection = [1, 2, 8, 10];

  it('accepts a function and array and returns a new array where the function is iterated on each element of the array', () => {
    expect(map(square, collection)).to.deep.equal([1, 4, 64, 100]);
  });
});
