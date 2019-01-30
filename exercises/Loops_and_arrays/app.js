var evenNums = [];

function createEvenArray(highestNum){
    for(var i = 1; i < highestNum; i++){
        if(i % 2 === 0){
            evenNums.push(i);
        }
    }
}

function addOdds(array){
    for(var i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        array.push([++i]);
    }
    }
}

createEvenArray(10);
addOdds(evenNums);
console.log(evenNums);