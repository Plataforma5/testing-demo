const { expect } = require("chai");
const add = require("../add");

describe("La función add", () => {
  it("Es una función", () => {
    expect(add).to.be.a("function");

    // if (typeof add === "function") {
    //   return true;
    // } else {
    //   throw new Error("Not a function");
    // }
  });

  it("Puede sumar 2 valores", () => {
    expect(add(1, 3)).to.equal(4);
  });

  it("Puede sumar 3 valores", () => {
    expect(add(1, 3, 9)).to.equal(13);
  });
});
