const Student = require("../models");

const chai = require("chai");
const expect = chai.expect;

describe("Student Model", () => {
  before(() => {
    return Student.sync({ force: true });
  });
});
