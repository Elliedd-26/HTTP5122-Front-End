//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.

//2. Add the required properties to your object.
var aCustomer = {
  lastName: "Dong",
  branchNumber: "0001",
  accountBalance: 500.25,
  interestRate: 1.03
}
//3. Add your first method and test it. Remember, the methods will change the properties of the object.last
  aCustomer.makeDeposit= function(aCustomer, amount) {
    aCustomer.accountBalance = aCustomer.accountBalance + amount;
    return "Thank you, your current balance is now $" + aCustomer.accountBalance.toFixed(2);
}
//4. Add your second method and test it.
  aCustomer.makeWithdrawal = function(aCustomer, amount) {
  aCustomer.accountBalance = aCustomer.accountBalance - amount;
  return "Thank you, your current balance is now $" + aCustomer.accountBalance.toFixed(2);
}


//5. Create the required output to complete steps 6-10 of the lab:

//step6: Output the account starting balance to the console.
console.log(aCustomer.accountBalance)

//step 7-8: Deposit $200 then Output the new balance to the console:
//console.log(aCustomer.makeDeposit(aCustomer, 200)); 
//step 9-10: Withdraw $75, then Output the new balance to the console:
//console.log(aCustomer.makeWithdrawal(aCustomer, 75));



//6. Once everything is working, tackle the Stretch Goal!

// 7. STRETCH GOAL: 计算利息
// 设置 multipleAccounts
aCustomer.multipleAccounts = false;

// 8. 添加利息计算方法（修复 `function` 语法 & `newRate` 作用域问题）

// set the multiple accounts:
aCustomer.multipleAccounts = true;
aCustomer.addInterest = function() {
  var newRate = aCustomer.interestRate; 

  if (aCustomer.multipleAccounts === true) {
      newRate = aCustomer.interestRate  + 0.005; }
  else {newRate = aCustomer.interestRate;
  }
  aCustomer.accountBalance = aCustomer.accountBalance * newRate;
  return "Thank you, your current balance is now $" + aCustomer.accountBalance.toFixed(2);
}


console.log(aCustomer.makeDeposit(aCustomer, 200)); 
console.log(aCustomer.makeWithdrawal(aCustomer, 75));
console.log(aCustomer.addInterest())