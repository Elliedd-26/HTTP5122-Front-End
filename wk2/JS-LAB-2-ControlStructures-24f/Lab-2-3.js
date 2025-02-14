//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userWantsJoin;
var userEmail;
var defaultText = "me@example.com";

//==== LOGIC =============
userWantsJoin = confirm("Would you like to join our mailing list?");


if (userWantsJoin === true) {
    userEmail = prompt("Please enter your email address:", defaultText);

    if (userEmail === null || userEmail.trim() === "" || userEmail === defaultText) {alert("Thank you, but your email was not valid.");
    } 
    else {alert("Thank you, our next newsletter will be sent to " + userEmail + " .");
    }
} 


else {
  
    alert("Thank you, we will not bother you again.");
}
