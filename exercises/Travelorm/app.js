document.getElementById("submit").addEventListener("click", displayInfo);

//create variables to grab travform, firstname, lastname, age, male, female, cbveg, cbglu, cbkos, cbnone

var short = document.travform
var firstName = short.firstname.value;
var lastName = short.lastname.value; 
var age= short.age.value; 

function displayInfo(e){

    console.dir(short);
    console.log(firstName);
    
    // window.alert(`${firstName}  ${lastName}  ${age}`);
    e.preventDefault();
}

