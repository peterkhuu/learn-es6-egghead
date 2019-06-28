import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('spread_operator with arrays', () => {
  const firstArray = [1, 2, 3];
  const secondArray = [4, 5, 6];
  const combinedArray = [...firstArray, ...secondArray];
  it('concats all elements in the arrays into a single array', () => {
    expect(combinedArray).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});

describe('spread_operator with objects', () => {
  const firstObject = {
    name: 'Rob',
    age: 29,
  };

  describe('there is a conflict in the keys', () => {
    const secondObject = {
      name: 'Alex',
      position: 'forward',
    };

    const combinedObject = { ...firstObject, ...secondObject };
    it('overrides the conflicted key when merging the properities into a single object', () => {
      expect(combinedObject).to.deep.equal({
        name: 'Alex',
        age: 29,
        position: 'forward',
      });
    });
  });

  describe('there is a no conflict in the keys', () => {
    const secondObject = {
      colour: 'blue',
      position: 'forward',
    };

    const combinedObject = { ...firstObject, ...secondObject };
    it('merges all properties into a single object', () => {
      expect(combinedObject).to.deep.equal({
        name: 'Rob',
        age: 29,
        position: 'forward',
        colour: 'blue',
      });
    });
  });
});
