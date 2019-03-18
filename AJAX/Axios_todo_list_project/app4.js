window.addEventListener("load", display)




function display(e){
    e.preventDefault()
    axios.get("https://api.vschool.io/bill/todo").then(function(response){
    
        // console.log(genHTTPOutput(response))
       genHTTPOutput(response.data);
       

}) .catch(function(error){
    console.log(error)
})

} 
var input = "input"
var label = "label"
var img = "img"
var div = "div"
var br = "br"
var a = "a"
var icon = "i"
function genHTTPOutput(response){
    response.forEach(function(todo,i){
        // var i = 1;
        // i++;
        var resultsElement = document.getElementById("results");
        var div1 = createElement(div);
        var div2 = createElement(div);
        var div3 = createElement(div);
        var div4 = createElement(div);
        var div5 = createElement(div);
        var div6 = createElement(div);
        var div7 = createElement(div);
        var div8 = createElement(div);
        var a1 = createElement(a);
        var icon1 = createElement(icon);
        var br1  = createElement(br);
        var img1 = createElement(img)
        var label1 = createElement(label)
        var input1 = createElement(input)
        var title = document.createTextNode(todo.title)
        var Description = document.createTextNode(todo.description)
        var Price = document.createTextNode(todo.price)
        var imgUrl = document.createTextNode(todo.imgUrl)
        var completed = document.createTextNode(todo.completed)
        var todoid = document.createTextNode(todo._id)
        console.log(todoid)
        var iconText = "clear"
        resultsElement.appendChild(div1);
        div1.className = "container"
        div1.appendChild(div2)
        div2.id= "test"
        div2.appendChild(div3)
        div3.appendChild(title)
        div3.id = "titlediv"
        div2.appendChild(div4)
        div4.appendChild(Description)
        div2.appendChild(div5)
        div5.appendChild(Price)
        div2.appendChild(div6)
        div6.appendChild(img1).src = todo.imgUrl
        div2.appendChild(div7)
        div7.appendChild(input1).id = "inpt1"
        div7.id = "inputdiv"
        input1.className = "input-field"
        input1.type = "checkbox"
        div7.appendChild(label1)
        label1.setAttribute("for", "inpt1")
        div2.appendChild(div8)
        div8.appendChild(a1).href = "#";
        a1.appendChild(icon1)
        icon1.className = "material-icons right"
        icon1.id = "clearbtn"
        icon1.innerHTML = iconText
        
        // for(var i =1; i < resultsElement.length; i++){
        //     div1.id = `results${i}`
        // }


})
// var resultsElement = document.getElementById("results2");
// console.log(resultsElement)

strikeThrough()
document.getElementById("clearbtn").addEventListener("click", deleteItems(todoid))
}

function pushDivId () {
    var resultsElement1 = document.getElementById("results").children;
    var childrenArr = []
    console.log(resultsElement1)
    // for( var i = 0; resultsElement1.length; i++){
    //     console.log(resultsElement1[i])
        // childrenArr.push(resultsElement1[i])
    }




function createElement (element) {
    var el1 =  document.createElement(element);
     return el1;
  }

  function strikeThrough(){
    var getInput1 = document.getElementById('inpt1')
    // console.log(getInput1)
   var textDiv = document.getElementById('titlediv')
//    console.log(textDiv)
   if(getInput1.checked === true){
    //    console.log(textDiv)
       textDiv.style.textDecoration = 'line-through'
   } else textDiv.style.textDecoration = 'none'
}

document.getElementById("submit").addEventListener("click", postman)

function postman(e){
    e.preventDefault()
    var item = {
        completed: false,
        title: ftitle,
        description: fdescription,
        price: fprice,
        imgUrl: fimage
    }

    var ftitle = document.getElementById("title").value;
    console.log(ftitle)
    var fdescription = document.getElementById("description").value
    console.log(fdescription)
    var fprice = document.getElementById("price").value;
    console.log(fprice)
    var fimage = document.getElementById("imgUrl").value;
    console.log(fimage)
    var completed = false;
    console.log("function postman running")
    
    axios.post("https://api.vschool.io/bill/todo", {

        completed: completed,
        title: ftitle,
        description: fdescription,
        price: fprice,
        imgUrl: fimage

    })

    .then(function(response){
       
    })
    .catch(function(error){
        console.log(error)
    })
}


  
  function deleteItems(e, id) {
    e.preventDefault();
    console.log("deleteItems is running")

        
    axios.delete("https://api.vschool.io/bill/todo/" + id)

    .then(function(response){
        console.log("Item deleted")
    })
    

}

  function resultsDiv () {
    
    var resultsElement = document.getElementById("results").children;
    var divArr = []
    // console.log(divArr)
    for(var i = 0; i < resultsElement.length; i++){
        divArr.push(resultsElement[i])
    }
    divArr.forEach(function (){
        var resultsElement = document.getElementById("results2")
        console.log(divArr)
        // console.log(resultsElement)
        var newElement = document.createElement('a')
        var newElement1 = document.createElement('i')
        resultsElement.appendChild(newElement)
        newElement.appendChild(newElement1)
        
    
})}



function pushDivId () {
    var resultsElement1 = document.getElementById("results").children;
    var childrenArr = []
    console.log(resultsElement1)
    // for( var i = 0; resultsElement1.length; i++){
    //     console.log(resultsElement1[i])
        // childrenArr.push(resultsElement1[i])
    }



    inputArr = [];
    getAllInputs = document.querySelectorAll('input')
    for(var i =1; i < getAllInputs.length; i++){
        inputArr.push(getAllInputs)
        console.log(inputArr)
    }