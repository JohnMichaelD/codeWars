/*Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/

function opposite(number) {
    if (number > 0){
      let x = number * 2;
      return number - x;
    } else {
      let y = number * 2;
      return number - y;
    }
  }