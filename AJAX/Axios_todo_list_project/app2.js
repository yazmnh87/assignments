var input = "input"
var label = "label"
var img = "img"
var div = "div"
var br = "br"
var getlabel = document.getElementsByClassName('label1')
var getInput = document.getElementsByClassName('input1')
var resultsElement = document.getElementById("results")

window.addEventListener("load", display)

function display(){
    axios.get("https://api.vschool.io/bill/todo").then(function(response){
    
        // console.log(genHTTPOutput(response))
       genHTTPOutput(response.data);
}) .catch(function(error){
    console.log(error)
})
}
function genHTTPOutput(response){
    response.forEach(function(todo){
    var div1 = createElement(div);
    var innerDiv = appendChild1(resultsElement, div1);
    innerDiv.className = "results2"
    // bodyDiv = document.getElementById("results2")
    var title = createTxtNode(todo.title)
    // console.log(bodyDiv)
    innerDiv.appendChild(title)
    // var br1 = createElement(br)
    // var break1 = appendChild1(bodyDiv, br1)





})}


function createElement (element) {
  var el1 =  document.createElement(element);
   return el1;
}

function appendChild1(var1,element){
    var ap1 = var1.appendChild(element)
return ap1;
}

function cascadeInputVal(arr){

    // arr.map(function(var1){
    //     var1[i].id = "inpt" + [i + 1];
    // })
    for(var i = 0; i < var1.length; i++){
        var1[i].id = "inpt" + [i + 1];
}}

function SetAttribute(arr){
    
    // arr.map(function(var1){
    //     var1[i].setAttribute("type", "checkbox")
    // })
    for(var i =0; j < var1.length; i++){
        var1[i].setAttribute("type", "checkbox")
    }
}

function createTxtNode(var1){
    var textNode = document.createTextNode(var1)
    return textNode;

}


function setAttribute1(var1){
    for(var i =0; i< var1.length; i++){
               
        var1[i].setAttribute("for", 'inpt' + [i+1])
    }
}