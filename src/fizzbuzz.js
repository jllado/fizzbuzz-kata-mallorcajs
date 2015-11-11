'use strict';

function isMultipleOf(number, divisor) {
  return number % divisor === 0;
}
function isMultipleOfThree(number) {
  return isMultipleOf(number, 3);
}

function isMultipleOfFive(number) {
  return isMultipleOf(number, 5);
}

function fizzbuzz(number) {
  if (isMultipleOfThree(number) && isMultipleOfFive(number))
    return "FizzBuzz";
  if (isMultipleOfThree(number))
    return "Fizz";
  if (isMultipleOfFive(number))
    return "Buzz";
  return number.toString();
}

