window.addEventListener("load", display)

function display(e){
    e.preventDefault()
    axios.get("https://api.vschool.io/bill/todo").then(function(response){
    
        // console.log(genHTTPOutput(response))
       genHTTPOutput(response.data);
       

}) .catch(function(error){
    console.log(error)
})}



function genHTTPOutput(response){
var results = document.getElementById('results')
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box1')
    response.forEach(todo => {
        box1.innerHTML = `${todo.title}${todo.description}${todo.price}${todo.imgUrl}${todo.id}`
        
    })};

