'use strict';
/*
1 -> 1
2 -> 1, 2
15 -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, Fizz, FizzBuzz
 */

describe("FizzBuzz Game", function () {
  it("should return the proper string given a lenght", function () {
    expect("1").toEqual(play(1));
    expect("1, 2").toEqual(play(2));
    expect("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz").toEqual(play(15));
  })
});
