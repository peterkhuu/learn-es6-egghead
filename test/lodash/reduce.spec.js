import { expect } from 'chai';
import reduce from 'lodash/fp/reduce';

describe('reduce', () => {
  const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  };

  const array = [2, 6, 8];

  it('returns a value after having the function iterate through the elements of the array', () => {
    expect(reduce(add, 2, array)).to.deep.equal(18);
  });
});
