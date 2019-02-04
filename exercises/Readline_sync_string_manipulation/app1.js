var readlineSync = require('readline-sync');


//Ask the User a question
// var dayOfWeek = readlineSync.question('What day of the week is it? ')
// var result = dayOfWeek.toUpperCase()
// console.log('it\'s ' + dayOfWeek.toUpperCase() + '!')

// var nflTeam= readlineSync.question('What is your favorite NFL team? ')
// console.log('My favorite NFL team is the ' + nflTeam.length)

// var str = readlineSync.question("Please provide a string: ")
// var str1 = readlineSync.question("Please provide a string: ")
// console.log(str.concat(" " + str1))

var longStr = readlineSync.question("Please provide a msg longer than 20 chars: ")
    function half(){
        return (longStr.length / 2)
    }
console.log(half(longStr.slice())

