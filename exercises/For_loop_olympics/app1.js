// for( var i = 9; i >= 0; i--){
//     console.log(i);
// }

// for( var i = 0; i < 10; i++){
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i =0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// for(var i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruit1 = []

for(var i =0; i < fruit.length; i++){

    if(i % 2 === 1){
fruit1.push(fruit[i]);
    }
}

console.log(fruit1);

