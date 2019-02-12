//RPG function layout

if (readline.keyInYN(`Press W to walk ${playername} `)) {
    while (inGame){
        //walk until steps reach a certain amount and then encounter random friend or enemy and call associated function
        walk() 
        
        if (mainChar.steps >= 26) {
            console.log(mainChar.stepsTaken)
            var random = Math.floor((Math.random() * 4)+1)
            if random === 1{
                encounter()
            }
        }
    } 


  } else {
    console.log('Exiting journey, youll start over');
  }