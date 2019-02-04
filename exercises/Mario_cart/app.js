

//     var obj = document.getElementById("input1");
//     var obj1 = document.getElementById("input2");
//     var obj2 = document.getElementById("input3");

//     var objval = parseInt(obj.value);
//     var objval1 = parseInt(obj1.value);
//     var objval2 =  parseInt(obj2.value);

// console.dir(obj)
// console.log(obj.value)
// console.log(objval)



document.getElementById("button").addEventListener("click", add1)

function add1(e){
    e.preventDefault();

    var obj = document.getElementById("input1");
    var obj1 = document.getElementById("input2");
    var obj2 = document.getElementById("input3");
    var results = document.getElementById("results");
    var results1 = document.getElementById("goobres");
    var results2= document.getElementById("bobres");
    var results3 = document.getElementById("cheapres");
    

    var objval = parseInt(obj.value);
    var objval1 = parseInt(obj1.value);
    var objval2 =  parseInt(obj2.value);
    var tot = ((objval * 5) + ( objval1 * 7) + (11 * objval2));
    var goob = (objval * 5);
    var bob = ( objval1 * 7)
    var cheap = (11 * objval2)
   
    //  console.dir(results);
    // console.log(tot);
    results1.innerHTML = goob; 
    results2.innerHTML = bob; 
    results3.innerHTML = cheap; 
    results.innerHTML = "<span>" + tot  + "</span>"; 
}

// // var obj1 = document.getElementsByClassName("input2");

// // var obj2 = document.getElementsByClassName("input3");

// / + ( objval1 * 7) + (11* objval2)


