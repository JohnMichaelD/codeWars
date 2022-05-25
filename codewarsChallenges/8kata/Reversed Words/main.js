/* Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

 */

function reverseWords(str){
    //use .split to split the string up into an array at each space
    let words = str.split(' ');

    // use .reverse to reverse the order of the array elements
    let reversedArray = words.reverse();

    //use .join to combine the array elements back into a string, with spaces
    let newStr = reversedArray.join(' ');
    return newStr; 
  }

  //but this also works:

  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }