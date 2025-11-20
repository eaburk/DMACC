const { expect } = require('chai');

describe('Math Functions', function () {
  it('should add two number', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});