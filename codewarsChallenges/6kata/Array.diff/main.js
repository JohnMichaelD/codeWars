/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++){
      for (let j = 0; j < a.length; j++){
        if( b[i] === a[j]){
          a.splice(j, 1, 'x');
        }
      }
    } 
      let finalArr = a.filter( num => num != 'x');
      return finalArr;
    }
