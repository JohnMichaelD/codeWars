/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

 */

    function highAndLow(numbers){
        let numbersArray = numbers.split(" ");
        let numArr = [];
        
        
        for(let i = 0; i < numbersArray.length; i++){
          if (numbersArray[i] !== " "){
            numArr.push(numbersArray[i]);
          }
        }
        
        let max = Math.max(...numArr);
        let min = Math.min(...numArr);
        
        return `${max} ${min}`;
        
      }

    //way better way to do it.

    function highAndLow(numbers){
        numbers = numbers.split(' ');
        return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
      }