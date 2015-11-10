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
    it('should return 1 given 1', function () {
      expect(1).toEqual(fizzbuzz(1));
    });
    it('should return 2 given 2', function () {
      expect(2).toEqual(fizzbuzz(2));
    });
});
function fizzbuzz(number) {
  return 1;
}
