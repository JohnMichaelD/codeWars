/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

// Not done:


function disemvowel(str) {
    for (let i = 0; i < str.length; i++) {
     if(str[i] === 'a' || str[i] === 'A'){
        str.splice(str[i]);
      } else if(str[i] === 'e' || str[i] === 'E'){
        str.splice(str[i]);
      } else if(str[i] === 'i' || str[i] === 'I'){
        str.splice(str[i]);
      } else if(str[i] === 'o' || str[i] === 'O'){
        str.splice(str[i]);
      } else if(str[i] === 'u' || str[i] === 'U'){
       str.splice(str[i]);
      } 
    return str;
  }
  }