const myPet = {
  name: "Luna",
  age: 1,
  breed: "Poodle Mix",
  energyLevel: "Moderate",
  favoriteToy: "Gingerbread Toy",
  play: function () {
    alert("Luna played a while, her current energy level is: " + myPet.energyLevel);
  }
};
console.log(myPet);

//log Luna's initial info
console.log(myPet);

//first popup: user can update Luna's current age
myPet.age = prompt("Please enter the current age of Luna:", myPet.age);

//second popup: Luna has her new favorite toy "Snoopy Toy", user can update it
myPet.favoriteToy = prompt("Luna has a new favorite toy! Please enter the updated favorite toy:", myPet.favoriteToy);

// Update Luna's energy Level
myPet.energyLevel = prompt("Luna played too much! Please enter Luna's updated energy level:", myPet.energyLevel);

//user can play with Luna and update her energy level
myPet.play();

//show Luna's updated info all together
console.log("Updated Luna's info:", myPet);
