function run (){
    var random = Math.floor(Math.random() * 4)
        
      if ( random > .5){
        console.log("The enemy caught you, you've got to fight now!")
        randomEnemy () 
      } else {
          console.log("phew you made away continue on your journey")
          walk()
      }
}



