const { describe, beforeEach, it, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

let expect;

describe('isAllNumbers positive tests', () => {
  let validator;
  beforeEach(async () => {
    const chai = await import('chai');
    expect = chai.expect;
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided array contains only numbers', () => {
    const arrayOfAllNumbers = [5, 2, 6, 11, 22];
    const validationResults = validator.isAllNumbers(arrayOfAllNumbers);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided array contains not only numbers', () => {
    const arrayOfAllNumbers = [5, '2', 6, 11, 22];
    const validationResults = validator.isAllNumbers(arrayOfAllNumbers);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided with not-array', () => {
    const notArray = true;
    expect(() => {
      validator.isAllNumbers(notArray);
    }).to.throw('[true] is not an array');
  });
});
