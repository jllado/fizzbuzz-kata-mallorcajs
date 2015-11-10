'use strict';
/*
1 -> 1
2 -> 1, 2
15 -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
*/
describe("FizzBuzz Game", function () {
  it("should return the proper string given lenght", function () {
    expect(play(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
  })
})
