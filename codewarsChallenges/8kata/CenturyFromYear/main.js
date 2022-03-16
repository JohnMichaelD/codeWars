/* Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */



function century(year) {
    let century = (year / 100);
    if (century % 1 != 0) {
      century = Math.floor(century + 1);
      return century;
    } else if (century % 1 == 0) {
      return century;
    }
    return;
  }