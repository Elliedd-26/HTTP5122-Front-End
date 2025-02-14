//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var myObject = {
  name: "Qianyi",
    age: 25,
    hobby: "Dancing",
    city: "Toronto"
}

//PART 2:  console log
console.log(myObject.name);

//PART 3:  popup a sentence
alert("My name is " + myObject.name + " and I love " + myObject.hobby + ".");

//PART 4:  create function
myObject.funFact = function () {
alert("My name is " + myObject.name + " and I love " + myObject.hobby + ".")
}


//PART 5:  call this method
myObject.funFact ();