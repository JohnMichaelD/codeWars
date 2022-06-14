/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

function squareDigits(num){
    let numStr = num + "";
    let squaredStr = "";
    
    for(let i = 0; i < numStr.length; i++){
      squaredStr += (numStr[i] ** 2)
    }
    
    return Number(squaredStr);
  }

  // their solution, +num parses string into a number, .toString parses it into a string, .split splits the string at each number, .map goes through each number and multiplies it by itself, join then re joins the string together, and returns as a number with +num? 
  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

  //