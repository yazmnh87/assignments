// for ( var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for ( var i = 9; i >= 0; i--) {
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < 1; i++) { console.log(fruit);}


var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  var peoples = []

  var occupations = []

//   for ( var i = 0; i < peopleArray.length; i++){
//       console.log(peopleArray[i]);
//   }

for(var i = 0; i < peopleArray.length; i++){
    if (i %2 === 0){
        peoples.push(peopleArray[i].name);
        console.log(peoples);
    } 
}

// else {
//     peoples.push(peopleArray[i].name);
//     console.log(peoples);
// }
// occupations.push(peopleArray[i].occupation);
// console.log(occupations);
