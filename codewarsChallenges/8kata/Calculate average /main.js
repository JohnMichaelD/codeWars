/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

function find_average(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    
    let avg = sum / array.length;
    
    if(array.length === 0){
      return 0;
    } else {
      return avg;
    }
  }