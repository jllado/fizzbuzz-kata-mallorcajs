'use strict';
/*
1 - 100 -> 1, 2, Fizz, 4, Buzz, ..., FizzBuzz
1 -> 1
2 -> 2
3 -> Fizz
5 -> Buzz
15 -> FizzBuzz
 */
describe('FizzBuzz', function () {
    it('should return number given number', function () {
      expect(1).toEqual(fizzbuzz(1));
      expect(2).toEqual(fizzbuzz(2));
    });
    it('should return Fizz given number multiple of three', function () {
      expect(fizzbuzz(3)).toEqual("Fizz");
    });
});
function fizzbuzz(number) {
  if (number % 3 === 0)
    return "Fizz";
  return number;
}
