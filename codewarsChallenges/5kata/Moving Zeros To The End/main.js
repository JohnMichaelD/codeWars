/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a", */

function moveZeros(arr) {
    let zeroCount = 0;
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== 0){
          newArr.push(arr[i]);
      } else if (arr[i] === 0){
        zeroCount++;
      } 
    }
    
    for(let i = 0; i < zeroCount; i++){
      newArr.push(0);
    }
    
    return newArr;
  }