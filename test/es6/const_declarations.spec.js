import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('const delcarations', () => {
  const VAR = 'FIRST';
  it('is immutable', () => {
    const errorFunction = () => {
      try {
        // eslint-disable-next-line no-const-assign
        VAR = 'SECOND';
      } catch (error) {
        expect(error).to.throw();
      }
    };

    expect(errorFunction).to.throw(Error);

    expect(VAR).to.equal('FIRST');
  });

  it('adheres to block scope', () => {
    {
      // eslint-disable-next-line no-shadow
      const VAR = 'SECOND';
      expect(VAR).to.equal('SECOND');
    }
  });
});
