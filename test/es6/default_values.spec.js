import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('default_value', () => {
  const greet = (greeting = 'Hello', name) => `${greeting} ${name}`;

  describe('greeting is empty', () => {
    it('uses the default value', () => {
      expect(greet(undefined, 'Robert')).to.equal('Hello Robert');
    });
  });

  describe('greeting is null', () => {
    it('uses null as the parsed value', () => {
      expect(greet(null, 'Bob')).to.equal('null Bob');
    });
  });

  describe('greeting is not empty', () => {
    it('uses parsed value', () => {
      expect(greet('Goodbye', 'Alex')).to.equal('Goodbye Alex');
    });
  });
});
