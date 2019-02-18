window.addEventListener("load", display)

var getlabel1 = document.getElementsByClassName('label1')
// for(var i = 0; i < getlabel1.length; i++){
    // getlabel1.addEventListener("click", strikeThrough)





function display(e){
    e.preventDefault()
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
        var newElement1 = document.createElement('div')
        var newElement3 = document.createElement('a')
        var newElement2 = document.createElement('i')
        var imgResult = document.getElementById("results2")
        var divIcon = imgResult.appendChild(newElement3)
        var divIcon1 = divIcon.appendChild(newElement2)
        divIcon1.className = "material-icons right"
        // var iconSet = document.getElementsByClassName("material-icons right").textContent = "clear"
        var innerIconText = document.createTextNode("clear")
        divIcon1.appendChild(innerIconText) 
        var innerinnerDiv = innerDiv.appendChild(newElement1)
        innerinnerDiv.className = "strikend";
        var createNodeTitle = document.createTextNode(todo.title)
        innerinnerDiv.appendChild(createNodeTitle)
            innerDiv.appendChild(document.createElement('br'))
            var createNodeDescription = document.createTextNode(todo.description)
            innerDiv.appendChild(createNodeDescription)
            innerDiv.appendChild(document.createElement('br'))
            var createNodePrice = document.createTextNode(todo.price)
            innerDiv.appendChild(createNodePrice)
            innerDiv.appendChild(document.createElement('br'))

            var img = document.createElement('img')
            img.className = "img1"
            var imgResult = document.getElementById("results2")
            var imgElement = innerDiv.appendChild(img)
            innerDiv.appendChild(document.createElement('br'))
            var getImg = document.getElementsByClassName('img1')
            console.log(getImg)
            console.log(todo.imgUrl)
            for(var i =0; i < getImg.length; i++){
                getImg[i].setAttribute("src", `${todo.imgUrl}`)
            }
            var input = document.createElement('input')
            input.className = "input1 input-field"
            input.id = "inpt1"
            var imgElement1 = innerDiv.appendChild(input)
            var getInput = document.getElementsByClassName('input1')
            for(var j =0; j < getInput.length; j++){
                getInput[j].setAttribute("type", "checkbox")
            }
            var label = document.createElement('label')
            var imgElement2 = innerDiv.appendChild(label)
            label.className = "label1"
            var getlabel = document.getElementsByClassName('label1')
            for(var k = 0; k < getInput.length; k++){
                getInput[k].id = "inpt" + [k + 1];
                // console.log(getInput[k].checked);
                
            }
            
            var getlabel= document.getElementsByClassName('label1')
            for(var l =0; l < getlabel.length; l++){
               
                getlabel[l].setAttribute("for", 'inpt' + [l+1])
            }
            var createNodeImgUrl = document.createTextNode(todo.imgUrl)
       });
       var getInput2 = document.getElementById('inpt1')
        console.log(getInput2)
        getInput2.addEventListener("click", strikeThrough)
        console.count(strikeThrough)
    }
    


    function strikeThrough(){
        var getInput1 = document.getElementById('inpt1')
       var textDiv = document.getElementsByClassName('strikend')
       if(getInput1.checked === true){
        //    console.log(textDiv)
           textDiv[0].style.textDecoration = 'line-through'
       } else textDiv[0].style.textDecoration = 'none'
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

  
