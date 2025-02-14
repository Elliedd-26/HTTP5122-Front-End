//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var cart = [];
var total = [];
var itemPrice = prompt("Enter item price:");
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

while (total < 35) {
	//GET ITEM COST FROM USER
	var itemPrice = prompt("Enter item price:");
	
	//CONVERT USER INPUT TO A NUMBER
	cart[cart.length] = itemPrice;
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = total + Number(itemPrice);
}
	
	//PUSH ITEM COST TO CART ARRAY
	var itemList = "Item prices: ";
for (var i = 0; i < cart.length; i++) {
    itemList = itemList + cart[i]; 
    if (i < cart.length - 1) {
        itemList = itemList + " | "; 
    }
}
	
	


//SEND POPUP MESSAGE TO USER
if (total >= 35) {
	alert("Your shipping for this order will be free!");
}

//SEND OUTPUT TO CONSOLE
console.log(itemList);
