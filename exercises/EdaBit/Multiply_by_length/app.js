// Create a function to multiply all values in an array by the amount of values in that array.
// Examples
// MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// Notes
// All values are numbers.
// All arrays will have at least one element.

var arr = [2, 3, 1, 0]

function multiPly(num){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr.length*arr[i]);
    }
    return newarr;
}

console.log(multiPly());

