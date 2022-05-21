/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

 */

    function past(h, m, s){
        //parameters: hours, minutes, & seconds. either positve or zero
        //return total time in milliseconds
        //0,0,1 will return 61000 milliseconds
        //pseudocode:
        //multiple hours by 3,600,000
        //multiple minutes by 60,000
        //multiply seconds by 1,000
        //return total milliseconds
        let milsec = 0;
        milsec += (h * 3600000) + (m * 60000) + (s * 1000);
        return milsec;
        
      }   