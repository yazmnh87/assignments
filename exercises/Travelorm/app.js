document.getElementById("submit").addEventListener("click", displayInfo);

//create variables to grab travform, firstname, lastname, age, male, female, cbveg, cbglu, cbkos, cbnone

var short = document.travform;
var firstName = short.firstname;
var lastName = short.lastname; 
var age= short.age; 
var gender = short.gender;
var selection = document.getElementById("sel")
// var selected = selection.options[selection.selectedIndex];






function displayInfo(e){
    e.preventDefault();
    var checkedval = []

    var checked1 = document.travform.diet
    
    for(var i = 0; i < checked1.length; i++){
        if(checked1[i].checked == true){
        checkedval.push(checked1[i].value)
        }
    }


    alert("Firstname: " + firstname.value + " Lastname: " + lastName.value + "\n Age: " + age.value + "\nSex: " + gender.value + "\nLocation: " + selection.value + "\nDietary Restriction: " + checkedval);
    
   
}

