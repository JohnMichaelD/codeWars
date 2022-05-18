/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

 */

// return masked string
function maskify(cc) {
    //parameters: a string of characters, 
    //return: a string of characters with all but the last four changed to #
    //example: "1" to "1", "12345" to "#2345"
    
    //psuedo:
    //run through the length of the string
    //if string.length =< 4, return orginal string
    //else for each char where string.length [i] < string.length - 5
    //add # to new masked string, then add last 4 char's
    //return new masked string
    
    let maskedString = '';
    
    if (cc.length <= 4){
      return cc;
    } else {
      for (let i = 0; i < cc.length; i++){
        if(i <= cc.length - 5){
          maskedString = maskedString + '#';
        }else {
          maskedString = maskedString + cc[i];
        }
    }  
    } return maskedString;
  }
  