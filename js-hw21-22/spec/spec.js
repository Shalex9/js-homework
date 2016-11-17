var pow = require('../pow.js');

describe("pow", function() {
  it("pow", function() {
    //prepare
      var result;
    //active
      result = pow.pow(2,3);
    //assert
    expect(result).toEqual(8);
  });

  // var app = require('../app.js');
  // it("say Hello method", function() {
  //   //prepare
  //     var result;
  //   //active
  //     result = app.sayHello('Vasya');
  //   //assert
  //   expect(result).toEqual('Hello, Vasya!');
  // });
  // it("sum method", function() {
  //   //prepare
  //     var result;
  //   //active
  //     result = app.sum(1, 2);
  //   //assert
  //   expect(result).toEqual(3);
  // });
  // it("message", function() {
  //   //prepare
  //     var message;
  //   //active
  //     message = "foo bar baz";
  //   //assert
  //   expect(message).toMatch("bar");
  // });
});
