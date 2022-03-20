/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    // grab number // find sqrt of number
    let sqOfNumber = Math.sqrt(sq);
    // find if number is whole using math.floor or modulo
    if (sqOfNumber % 1 == 0){
      // if it is, return that number, plus one, ^2
      let newNumber = ((sqOfNumber + 1) ** 2);
      return newNumber;
    } //if not, return -1
    return -1;
  }

