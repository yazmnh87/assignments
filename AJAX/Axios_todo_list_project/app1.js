function display(){
    axios.get("https://api.vschool.io/bill/todo").then(function(response){
    
        // console.log(genHTTPOutput(response))
       genHTTPOutput(response.data);
}) .catch(function(error){
    console.log(error)
})
}   

function genHTTPOutput(response){
        // console.log(response)
       response.forEach(function(todo) {
        
        var newElement = document.createElement('div')
        var resultsElement = document.getElementById("results");
        var innerDiv = resultsElement.appendChild(newElement)
        innerDiv.id = "results2";
        var createNodeTitle = document.createTextNode(todo.title)
            innerDiv.appendChild(createNodeTitle)
            var createNodeDescription = document.createTextNode(todo.description)
            innerDiv.appendChild(createNodeDescription)

       });
    }


    function createNewDiv () {
        var newElement = document.createElement('div')
        var resultsElement = document.getElementById("results");
        var innerDiv = resultsElement.appendChild(newElement)
    }