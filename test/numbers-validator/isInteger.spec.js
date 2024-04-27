const { describe, beforeEach, it, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

let expect;

describe('isInteger', () => {
  let validator;
  beforeEach(async () => {
    const chai = await import('chai');
    expect = chai.expect;
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with a number', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided with a not-number', () => {
    expect(() => {
      validator.isInteger('hi');
    }).to.throw('[hi] is not a number');
  });
});
