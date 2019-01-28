// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(var i = 0; i < officeItems.length; i++){
//     console.log(officeItems[i]);
// }

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " are not old enough");
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you can see the movie");
      }
  }



// function toggleSwitch(switches){
//     var on = false;

//     for( var i = 0; i < switches.length; i++){
//         for(var j = 0; j < switches[i]; i++){
//             on = !on;
//         }
//     }

//     if (on) {
//         return "The Light is On";
//     } else {
//         return "The Light is Off";
//     }
// }

// console.log(toggleSwitch([2, 5, 435, 4, 3]))
// console.log(toggleSwitch([1, 1, 1, 1, 3]))
// console.log(toggleSwitch([9, 3, 4, 2]))