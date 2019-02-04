    var obj = document.getElementsByClassName("input1");
    var obj1 = document.getElementsByClassName("input2");
    var obj2 = document.getElementsByClassName("input3");

    var objval = parseInt(obj.value);
    var objval1 = parseInt(obj1.value);
    var objval2 =  parseInt(obj2.value);

console.dir(obj)
console.log(obj.value)
console.log(objval)

document.getElementById("button").addEventListener("click", add1)


function add1(e){
    e.preventDefault();

    var obj = document.getElementsByClassName("input1")[0];
    var obj1 = document.getElementsByClassName("input2")[0];
    var obj2 = document.getElementsByClassName("input3")[0];
    var results = document.getElementsByClassName("results")[0];

    var objval = parseInt(obj.value);
    var objval1 = parseInt(obj1.value);
    var objval2 =  parseInt(obj2.value);
    var tot = ((objval * 5) + ( objval1 * 7) + (11 * objval2));
   
    //  console.dir(results);
    // console.log(tot);

    results.innerHTML = "<span>" + tot  + "</span>"; 
}