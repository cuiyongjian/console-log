import dir from '../src/dir'
var expect = require('chai').expect


describe('dir function', function () {

  it('dir is a function', function () {
    expect(dir).to.be.an.instanceof(Function);
  });

});
