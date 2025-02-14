
//vars:
var userInPutNumber = prompt ("What is the team number you belong to?", "plases enter a number between 1-6");
var correctTeamNumber = "6";
var correctFirstName1 = "Anna";
var correctLastName1 = "Charbadze";
var correctFirstName2 = "Qianyi"
var correctLastName2 = "Dong"
var correctFirstName3 = "Sean"
var correctLastName3 = "Doyle"
var correctFirstName4 = "Fadel"
var correctLastName4 = "Matar"


//logics:
if (userInPutNumber === null || userInPutNumber === "" ||userInPutNumber === "plases enter a number between 1-6" || isNaN(userInPutNumber) || userInPutNumber !== correctTeamNumber) {
  alert ("You need to enter a valid number.")
}
else {
var userInPutFirstName = prompt("What is your first name?", "Enter your first name");
if (userInPutFirstName === null || userInPutFirstName=== "" || userInPutFirstName === "Enter your first name"){ //userInPutFirstName !== correctFirstName1|| userInPutFirstName !== correctFirstName2 || userInPutFirstName !== correctFirstName3 || userInPutFirstName !== correctFirstName4);{
  alert("You must enter a valid first name.");}
  else{
    switch (userInPutFirstName){
      case correctFirstName1:
        alert("Welcome, " + correctFirstName1 + " " + correctLastName1 + "!");
        break;

      case correctFirstName2:
        alert("Welcome, " + correctFirstName2 + " " + correctLastName2 + "!");
        break;

      case correctFirstName3:
        alert("Welcome, " + correctFirstName3 + " " + correctLastName3 + "!");
        break;

      case correctFirstName4:
        alert("Welcome, " + correctFirstName4 + " " + correctLastName4 + "!");
        break;

      default:
        alert("You are not invited;P");
        break;
    }
  }
}