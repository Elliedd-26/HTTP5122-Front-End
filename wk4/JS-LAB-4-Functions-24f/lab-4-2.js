//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageIt (num1, num2, num3, num4, num5){
  return ((num1 + num2 + num3 +num4 + num5)/5).toFixed(1)
}
console.log(averageIt(5, 10, 15, 20, 25));

let webDesign = 85;
let frontEndDev = 78;
let backEndDev = 90;
let interactionDesign = 65;
let dataBase = 72;

let gradeAverage = averageIt(webDesign, frontEndDev, backEndDev, interactionDesign, dataBase);



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if (gradeAverage >= 70){
  alert("You successfully passed the course with your average grade of " + gradeAverage + " !");
} else { alert("Review required! Your average grade is " + gradeAverage + " .")

}