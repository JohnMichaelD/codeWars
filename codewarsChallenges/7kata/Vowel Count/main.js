/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */


// my solution, not good, how can we simplify it
function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i].charCodeAt(0) === 97 || str[i].charCodeAt(0) === 101 || str[i].charCodeAt(0) === 105 || str[i].charCodeAt(0) === 111 || str[i].charCodeAt(0) === 117){
        vowelsCount++;
      }
    }
    
    return vowelsCount;
  }