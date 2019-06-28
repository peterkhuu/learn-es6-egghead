import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('arrow function function', () => {
  // eslint-disable-next-line func-names
  const noArrowFunction = function (message, name) {
    return message + name;
  };

  const arrowFunction = (message, name) => message + name;

  it('is equal to using the function keyword', () => {
    const message = 'Hello';
    const name = 'Peter';
    expect(noArrowFunction(message, name)).to.equal(arrowFunction(message, name));
  });
});
