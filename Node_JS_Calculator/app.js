var readlineSync = require('readline-sync');

var num1 = readlineSync.question('Please provide a number: ');
var num2 = readlineSync.question('Please provide another number: ');
var quest = readlineSync.question('Please let me know what you\'d like to do "add", "sub", "div", "mul"? ')

if(quest == "add"){
    console.log(add1(num1, num2))
} else if(quest == "sub"){
    console.log(sub1(num1, num2))
} else if (quest == "div"){
    console.log(div1(num1, num2))
} else if (quest == "mul"){
    console.log(mul1(num1, num2))
} else 
    console.log('you\re and idiot');


function add1 (num1, num2){
    
    return +num1 + +num2;

}

function mul1 (num1, num2){
    
    return +num1 * +num2;

}

function div1 (num1, num2){
    
    return +num1 / +num2;

}

function sub1 (num1, num2){
    
    return +num1 - +num2;

}
// console.log(add1(3, 5));
// console.log(add1(num1, num2));
// console.log(mul1(num1, num2));
// console.log(div1(num1, num2));
// console.log(sub1(num1, num2));