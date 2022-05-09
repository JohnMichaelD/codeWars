/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

function abbrevName(name){

    let firstInitial = "";
    let secondInitial = "";
    
    //find 0th index  and it's element, and save to firstInitial
    //run through array and find second initial after space
    // save second initial
    // return FI "." SI in template literal 
    
    for(let i = 0; i < name.length; i++){
      if(i === 0){
        firstInitial = name[0].toUpperCase();
      } else if (name[i] === " "){
        secondInitial = name[i+1].toUpperCase();
      }
    } 
    
    
    return `${firstInitial}.${secondInitial}`;
  }