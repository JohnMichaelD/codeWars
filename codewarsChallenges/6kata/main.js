/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

function likes(names) {
    // assign x two in array
    let x = names.length;
    // if zero, return no one likes
    // if one, return n likes it
    // if two, return n and n likes it
    // etc
    if(x == 0){
      return "no one likes this";
    } else if (x == 1){
      return `${names[0]} likes this`;
    } else if (x == 2){
      return `${names[0]} and ${names[1]} like this`;
    } else if (x == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (x > 3){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }