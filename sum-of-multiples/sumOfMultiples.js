'use strict'
/*
If we list all the natural numbers below 10 that are multiples
 of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Create a function `sum` which returns the sum of all the multiples of 3
 or 5 below the number in argument.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// TODO your code:

function sumOfMultiples(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }

  module.exports = sumOfMultiples;