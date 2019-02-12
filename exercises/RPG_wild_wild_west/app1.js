

var steps = [1, 3
    , 6, 8, 9, 15, 25];
var stepsTotal = 125;
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

function randomEnemy () {
    var randomEnemy = Math.floor(Math.random() * enemies.length)
    var random = Math.floor((Math.random() * 3) + 1)

    console.log(enemies[randomEnemy])      
    }



var enemies= [

    enemy1 = {
    name: "Buckeye Bill",
    HP: 100,
    weapon: enemyWeapons[0],
},

enemy2 = {
    name: "GunSlinging Sam",
    HP: 100,
    weapon: enemyWeapons[1],
},

enemy3 = {
    name: "Chief Apache",
    HP: 100,
    weapon: enemyWeapons[2],
}]

var mainChar = {
    name: "playername",
    HP: 100,
    weapon: [],
    stepsTaken: 0
}

// function damageEnemy1 () {

//     var random = Math.floor((Math.random() * 3) + 1)
//     for(var i = 0; i <= random; i++){
//         mainChar.HP - randomEnemy()
//     }
//  }
 

function walk(){
    var walking = steps[Math.floor(Math.random()*steps.length)]
        if(mainChar.stepsTaken < stepsTotal){
            (mainChar.stepsTaken = mainChar.stepsTaken + walking)
            console.log(mainChar.stepsTaken)
        } else if (mainChar.stepsTaken = stepsTotal){
            console.log("You've reached Disney Land")
    
}}

 

console.log(walk())

 




// function randomEnemy () {
//     var randomEnemy = Math.floor(Math.random() * enemies.length)
//     var random = Math.floor((Math.random() * 3) + 1)

//     for(var i = 0; i < random; i++){
        
//         while(i <= random){
//             console.log("You've been hit")
//             break;
//         }
        
//         return ((mainChar.HP) + parseInt(enemies[randomEnemy].weapon.hp))
//     }
// }