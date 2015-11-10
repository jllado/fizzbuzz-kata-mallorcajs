'use strict';

function isMultipleOfThree(number) {
  return number % 3 === 0;
}

function isMultipleOfFive(number) {
  return number % 5 === 0;
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

