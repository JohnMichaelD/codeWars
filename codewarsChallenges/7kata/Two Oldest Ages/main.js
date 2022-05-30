/* The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
 */


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    //parameters: an array of at least two nums
    //return: an array, with the two highsest nums from first array, smallest first
    //ex: [1, 2, 10, 8] )  should return [8, 10]
    //psuedo:
    //sort array
    //push array.length-2 into new array, then push .length -1
    //return new array
    
    const newAges = ages.sort(function (a, b) {
      return a - b;
    });
    
    let agesOldest = [];
    agesOldest.push(newAges[newAges.length-2]);
    agesOldest.push(newAges[newAges.length-1]);
    
    return agesOldest;
  }