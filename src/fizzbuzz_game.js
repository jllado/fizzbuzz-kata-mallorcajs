'use strict';

function play(lenght) {
  var result = "";
  for (var i = 1; i <= lenght; i++) {
    if (i >= 2) {
      result += ", ";
    }
    result += applyFizzBuzz(i);
  }
  return result;
}
