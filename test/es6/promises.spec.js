import { expect } from 'chai';
import { describe, it } from 'mocha';
import 'babel-polyfill';

describe('promises', () => {
  const promiseError = new Error('error');
  const promiseCreator = statement => new Promise((resolve, reject) => {
    if (statement) {
      resolve('success');
    } else {
      reject(promiseError);
    }
  });

  it('returns success if statement is true', async () => {
    const promise = await promiseCreator(true);
    expect(promise).to.equal('success');
  });

  it('returns error if statement is false', async () => {
    const promise = promiseCreator(false);

    try {
      await promise;
    } catch (error) {
      expect(error).to.deep.equal(promiseError);
    }
  });
});
