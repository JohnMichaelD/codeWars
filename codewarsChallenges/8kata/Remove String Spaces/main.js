/*Simple, remove the spaces from the string, 
then return the resultant string. */



//What i have so far:

/*
expected [ '8', 'j', '8', '', '', 'mBliB8g', '', 'imjB8B8', '', 'jl', '', 'B' ] to equal '8j8mBliB8gimjB8B8jlB'
*/


// I did not solve this solution, I tried:

 //take x as new string, turn into array of chars
 function noSpace(x){ 
 const arrChars = x.split('');
  
  //run through each array element
  for (let i = 0; i < arrChars.length; i++){
    //check if arr[i] is equal to a space
    if (arrChars[i] === ' ') {
      //remove that array element
      arrChars.splice(i, 1);
    }
  }
  //join array back into a string
  let newString = arrChars.join("");
  return newString;

}

//but it did not work. My problem was that splice alters the array, and I could only remove some of the spaces.

//Here on some solutions from codewars that makes sense and don't use regex.

// 

function noSpace(x){
  return x.split(' ').join('')
}

//or

function noSpace(x){
  var result = ""
  for(var i = 0; i < x.length; i++){
    if(x[i] !== " "){
      result += x[i];
    }
  }
  return result;
}