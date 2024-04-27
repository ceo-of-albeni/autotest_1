const { describe, beforeEach, it, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

let expect;

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(async () => {
    const chai = await import('chai');
    expect = chai.expect;
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an even number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
