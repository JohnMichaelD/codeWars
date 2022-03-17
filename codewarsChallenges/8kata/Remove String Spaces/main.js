/*Simple, remove the spaces from the string, 
then return the resultant string. */



//What i have so far:

/*
expected [ '8', 'j', '8', '', '', 'mBliB8g', '', 'imjB8B8', '', 'jl', '', 'B' ] to equal '8j8mBliB8gimjB8B8jlB'
*/

function noSpace(x){
  const array = x.split(" ");
 
  for (let i = 0; i < array.length; i++ ){
    if (array[i] == " "){
      array.splice(i,1);
      array += array[i];
    }
  } return array;
  
}