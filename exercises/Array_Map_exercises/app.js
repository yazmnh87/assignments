// function doubleNumbers(arr){
//     return arr.map(function(num){
//         return (num * 2); 
//     })
//   }

// const numbers = [1,2,3]

// numbers.map(number => {
//     return 2 * number;
// })

//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//     return arr.map(function(num){
//         return num.toString()
//     })
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// var arr = ["dog", "cat", "mouse", "frog"]

// function capitalizeNames(arr){
//     return arr.map((name) => {
//         return name[0].toUpperCase() + name.slice(1)
//     })}
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function makeStrings(arr){
    return arr.map(({name, age}) => {
       if (age < 18) return  console.log(`${name} + "you cant go"`); else return console.log(`${name} + "you can go to the movies"`) 
    })}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


//   function readyToPutInTheDOM(arr){
//     return arr.map(({name, age}) => '<h1>' + name + '</h1>' + '<h2>' + age + '</h2>')
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]