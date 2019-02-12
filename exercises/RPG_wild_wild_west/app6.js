var readline = require('readline-sync')
var playername = readline.question("What is your name? ");
function Enemy (name, weapon){
    this.name = name;
    this.hp = 100;
    this.weapon = weapon
}

var weapons = [
    {
        type: 'knife',
        hp: -30
    },{
        type: 'pistol',
        hp: -35
    },{
        type: 'M4',
        hp: -40
    }]

var enemyWeapons = [
    {
        weapon: 'Knife',
        hp: -30
    },
    {
        weapon: 'Pistol',
        hp: -35
    },
    {
        weapon: 'M4',
        hp: -40
    }
]

var inGame = true
var stepsTotal = 125;
var steps = [1, 3, 6, 8, 9, 15, 25];
var enemy1 = new Enemy ("Buckeye Bill", enemyWeapons[0])
var enemy2 = new Enemy ("GunSlinging Sam", enemyWeapons[1])
var enemy3 = new Enemy ("Chief Apache", enemyWeapons[2])

var enemies = [enemy1, enemy2, enemy3]
var mainChar = {
    name: "playername",
    HP: 100,
    weapon: [],
    stepsTaken: 0
  }


  function walk(){
    var walking = steps[Math.floor(Math.random()*steps.length)]
        if(mainChar.stepsTaken < stepsTotal){
            (mainChar.stepsTaken = mainChar.stepsTaken + walking)
            // console.log(`youve taken ${mainChar.stepsTaken} steps`)
        } else if (mainChar.stepsTaken = stepsTotal){
            console.log("You've reached Disney Land")
    
}}

function weaponSet () {
    var set =  weapons[Math.floor(Math.random()*weapons.length)]
    mainChar.weapon.push(set)

    }

weaponSet();

function randomEnemy () {
    var randomEnemy = Math.floor(Math.random() * enemies.length)
    var random = Math.floor((Math.random() * 3) + 1)
        return enemies[randomEnemy];
    }

    function damage(){
          
        return ((mainChar.HP) += parseInt(enemies[0].weapon.hp));
    }


    // console.log(randomEnemy())

   while(inGame){
       console.log(`${playername} You've started your journey`)
       walk()
        if(mainChar.stepsTaken == 20 || mainChar.stepsTaken <= 40){
            console.log(`youve taken ${mainChar.stepsTaken} steps`)
            var firstEnemy = randomEnemy();
            console.log(`youve encountered  ${firstEnemy.name}`)
            var action = readline.keyIn("Would you like to [r] Run or [f] Fight? ", {limit: 'rf'})
                if(action == "f"){
                    console.log(`you've chosen to fight ${firstEnemy.name}`)
                    var enemy1 = damage()
                        if(mainChar.HP <=65 || mainChar.HP <=75){
                            console.log(`you've defeated ${firstEnemy.name} `)
                            var action = readline.keyIn("Would you like to contine? [w] walk or [q] quit? ", {limit: 'wq'})
                            if (action == "w"){
                                console.log(mainChar)
                                console.log("you're a winner!")
                            } else if ( action == "q"){
                                inGame = false
                            }
                        } 
                    console.log(mainChar.HP)
                } else if (action == "r"){
                    var random = Math.floor((Math.random() * 3) + 1)
                    if(random == 1){
                        console.log("you almost got away, but the enemy caught you")
                        var enemy2 = damage()
                        console.log(mainChar.HP)
                        console.log("you werent strong enough")
                        inGame = false
                    } else {
                        console.log("phew, you got away")
                    }
                }
        }
   
        inGame = false
    }

    