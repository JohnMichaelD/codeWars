//Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    x = x.toLowerCase();
  if( x === x.split('').reverse().join('')){
      return true;
    } else {
      return false;
    } 
  }
  
  