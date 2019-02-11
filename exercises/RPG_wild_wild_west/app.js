var readline = require('readline-sync')


//variables needed
var inGame = true
var step = 1;
var steps = [1, 3, 6, 8, 9, 15, 25];
var stepsTotal = 125;
var healthreduce = 1;
var weapons = [
    {
        type: 'knife',
        hp: -5
    },{
        type: 'pistol',
        hp: -20
    },{
        type: 'M4',
        hp: -30
    }]

var enemyWeapons = [
    {
        weapon: 'Knife',
        hp: -2
    },
    {
        weapon: 'Pistol',
        hp: -15
    },
    {
        weapon: 'M4',
        hp: -25
    }
]

//start with random weapn

var mainChar = {
  name: playername,
  HP: 100,
  weapon: [],
  stepsTaken: 0
}


function Enemy (name, weapon){
    this.name = name;
    this.hp = 100;
    this.weapon = weapon
}

var enemy1 = new Enemy ("Buckeye Bill", enemyWeapons[0])
var enemy2 = new Enemy ("GunSlinging Sam", enemyWeapons[1])
var enemy3 = new Enemy ("Chief Apache", enemyWeapons[2])

var enemies = [enemy1, enemy2, enemy3]


var friends= [

    friend1 = {
    name: "Sqaw Hawk",
    HP: 100,
    gift: 
    {
        HP: 10
    }
},

 friend2 = {
    name: "Pistol Pete",
    gift: 
    {
        
        HP: 20
    }
},

 friend3 = {
    name: "Laura Ingalls",
    gift: 
    {
        HP: 25
    }
}]




console.log("Welcome to the Wild Wild West  \nYoull be venturing along the trail to reach Fort Utopia \nAlong your journey you may encounter saboteurs attempting to ruin your journey, \nYou may also meet some friends who will rescue you from the unfogiving trail.")

if (readline.keyInYN('Continue...')) {
    // 'Y' key was pressed.
    console.log('Lets begin your journey');
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Exiting journey');
    // Do something...
  }

  console.log('To start your journey, lets cover some circumstances \n Youre starting rested with full health, you have 1 weapon and along way to go to Disney Land \n As you travel you will lose HP if you are unable to prevail along the way')

  if (readline.keyInYN('Continue...')) {
    console.log('The Journey has begun');
  } else {
    console.log('Exiting journey, youll start over');
  }

//   prompt user for name
    var playername = readline.question("What is your name? ");
        
    if (readline.keyInYN(`Press W to walk ${playername} `)) {
        while (inGame){
            //walk until steps reach a certain amount and then encounter random friend or enemy and call associated function
            walk() 
            
            if (mainChar.steps >= 26) {
                console.log(mainChar.stepsTaken)
                var random btwn 1-4
                if random === 1{
                    encounter()
                }
            }
        } 


      } else {
        console.log('Exiting journey, youll start over');
      }

    

    

//   Walking
function walk(){
    var walking = steps[Math.floor(Math.random()*steps.length)]
    // mainChar.stepsTaken = function () {
        if(mainChar.stepsTaken < stepsTotal){
            mainChar.stepsTaken = mainChar.stepsTaken + walking
        } else if (mainChar.stepsTaken = stepsTotal){
            console.log("You've reached Disney Land")
        
    
}}

function encounter (){
    readline.keyInSelect["run", "fight"];
    if run {
        run()
    }else {
        fight()
    }
}

function run (){
    var random
        if random < .5 {
            damage
            console.log(Hey user you just lost ${damage} amount of hp)
        }else {
            got away
        }
}

//create function to inflict damage

//function to push random weapon to the user
function weaponSet () {
    var set =  weapons[Math.floor(Math.random()*weapons.length)]
    mainChar.weapon.push(set)

    }

weaponSet();

//create enemies


function randomEnemy () {
    var randomEnemy = Math.floor(Math.random() * enemies.length)
    var random = Math.floor((Math.random() * 3) + 1)

    for(var i = 0; i < random; i++){
        
        return ((mainChar.HP) + parseInt(enemies[randomEnemy].weapon.hp))
        
    }
}


//create friends

function encounterFriend (){
    var randomFriend = Math.floor(Math.random() * friends.length)
    var random = Math.floor((Math.random() * 3) + 1)
    
    for(var i = 0; i < random; i++){
        
        return ((mainChar.HP) + (friends[randomFriend].gift.HP))
        
    }
}




// console.log(weaponSet)
// console.log(enemy1)
// console.log(mainChar)
// walk()


//   console.log(mainChar.weapon[0][0])