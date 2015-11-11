'use strict';

function play(lenght) {

  var result = new Array();
  for (var i = 1; i <= lenght; i++) {
    result.push(fizzbuzz(i));
  }
  return result.join(", ");
}
