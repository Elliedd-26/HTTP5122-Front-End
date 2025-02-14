//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION

//This function will...
//wrong:
//function checkTemp (currentTemp){
  //if (currentTemp >30) {
   //return false;
 // }
  //else return true;
//}
//

// Function: users can input a number as the tempreature, 
//if hoter than 30 or colder than -10, this will return false message.

function checkTemp(currentTemp) {
  if (currentTemp > 30 || currentTemp < -10) {
      return false; // Too hot and too code
  } else {
      return true; // Safe to walk
  }
}

//It expects to receive...
let userTemp = prompt("Enter the current temperature:");
//It will return...
if (checkTemp(userTemp) === false){
  alert ("Yikes! This is not the weather for dog walking!")
} else {
  alert("You’re good, have a nice walk!")
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
