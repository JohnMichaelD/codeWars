/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    
    if(bmi <= 18.5){
      return 'Underweight';
    } else if(bmi <= 25.0){
      return 'Normal';
    } else if (bmi <= 30.0){
      return 'Overweight';
    } else if (bmi > 30.0){
      return 'Obese';
    }
   
  }
//another users answer. couldn't get it to work, but was missing 'true' in switch case
  function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
      case formula <=18.5:
      return 'Underweight';
      case formula <=25.0:
      return 'Normal';
      case formula <=30:
      return 'Overweight';
      default:
      return 'Obese';
      
    }
  }