/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
 */

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    //parameters: take an array, of intergers, never empty, positive only
    //return values: average of the giver array, rounded down to its nearest interger
    //examples: [1,2,3,4,5] -> 3
    //pseudo code:
    
    // run through each array element, add to count
    let total = 0;
    for (let i = 0; i < marks.length; i++){
      total = total + marks[i];
    }
    
    //divide count by number of elements to get average
    let average = total / marks.length;
    
    // round down & return average
    return Math.floor(average);
  }