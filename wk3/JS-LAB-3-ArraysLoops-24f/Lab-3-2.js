//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var teamarray = ["Ellie", "Candice", "Qianyi", "Peijun", "MJ"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console. log("the initial team: ", teamarray)

//REMOVE LAST MEMBER
var newteamarray = [];
for (var i = 0; i < teamarray.length-1; i++){
  newteamarray[i] = teamarray[i];
}
console.log("after remobing the last member: ", newteamarray);

//ADD SEAN TO FRONT OF ARRAY
var newmemberarray = ["Sean","Ellie", "Candice", "Qianyi", "Peijun"];
for (var i=0; i< newteamarray; i++){
  newmemberarray[i + 1] = newteamarray [i];
}
console.log("after Sean join us: ", newmemberarray);

//REARRANGE THE ARRAY ALPHABETICALLY
newmemberarray.sort();
console.log ("sorted team: ", newmemberarray);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("we have "+ newmemberarray.length + " people in our group.")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 0; i < newmemberarray.length; i++){
  console.log(newmemberarray[i]+ " is " + (i+1));
}