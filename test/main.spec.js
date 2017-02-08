import main from '../src/main'
import {expect} from 'chai'


describe('类型方面的测试', function () {

  it('main is a object', function () {
    expect(main).to.be.an.instanceof(Object);
  });

});


describe('方法方面的测试', function () {

  it('main.log is a function', function () {
    expect(main.log).to.be.an.instanceof(Function);
  });

  it('main.dir is a function', function () {
    expect(main.dir).to.be.an.instanceof(Function);
  });

});
