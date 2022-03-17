/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    const numbers = x.split('');
    let fakeBin = '';
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i] < 5){
        fakeBin += '0';
      } else if (numbers[i] >= 5){
        fakeBin += '1';
      }
    } return fakeBin;
    
  }