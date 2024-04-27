const { describe, beforeEach, it, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

let expect;

describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(async () => {
    const chai = await import('chai');
    expect = chai.expect;
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 6, 22]);
  });

  it('hould throw an error if array is not full pf numbers', () => {
    const arrayOfValues = [5, '2', 6, 11, 22];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5,2,6,11,22] is not an array of "Numbers');
  });
});
