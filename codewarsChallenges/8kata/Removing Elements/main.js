/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */

// this one is tricky because your altering the array each time you remove an item. Originally I had the function to check for every other index using modulo, but I wasn't getting the results I expected. Again, because splice is changing the array each time your running it. When you remove an element from the array, it's also shortening the array by 1, and condensing it down. So you just need to keep removing the next item.

function removeEveryOther(arr){
    for(let i = 1; i < arr.length; i++){
        arr.splice(i, 1);
    } return arr;
  }