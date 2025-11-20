const { expect } = require('chai');

describe('My Array', function () {

  it('should be empty when initialized', function () {
    const myArray = [];
    expect(myArray).to.have.lengthOf(0);
  });

  it('should be 1 when adding one occurrence to the array', function () {
    const myArray = [];
    myArray.push("foo");
    expect(myArray).to.have.lengthOf(1);
  });

});