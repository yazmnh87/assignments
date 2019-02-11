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

    for(var i = 0; i < random; i++){
        
        return ((mainChar.HP) + parseInt(enemies[randomEnemy].weapon.hp))
        
    }
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
 



 

console.log(randomEnemy())

 

