/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

 */

function XO(str) {
  
    //initialize count of x's and o's
    let xCount = 0;
    let oCount = 0;
    
    //run through string, counting for case sensitive x's and o's
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'x' || str[i] === 'X'){
        xCount++;
      } else if (str[i] === 'o' || str[i] === 'O'){
        oCount++;
      }
    }
    
    //compare count of x's and o's
    if(xCount === oCount){
      return true;
    } else{
      return false;
    }
  }