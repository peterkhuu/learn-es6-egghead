import { expect } from "chai";
import "babel-polyfill";

describe("promises", () => {
  const promiseCreator = statement => {
    return new Promise((resolve, reject) => {
      if (statement) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  };

  it("returns success if statement is true", async () => {
    const promise = await promiseCreator(true);
    expect(promise).to.equal("success");
  });

  it("returns error if statement is false", async () => {
    const promise = promiseCreator(false);

    try {
      await promise;
    } catch (error) {
      return error;
    }
    expect(promise).to.equal("error");
  });
});
