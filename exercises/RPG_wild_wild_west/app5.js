function Enemy (name, weapon){
    this.name = name;
    this.hp = 100;
    this.weapon = weapon
}

var mainChar = {
    name: "bill",
    HP: 100,
    weapon: [],
    stepsTaken: 0
  }

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

var enemy1 = new Enemy ("Buckeye Bill", enemyWeapons[0])
var enemy2 = new Enemy ("GunSlinging Sam", enemyWeapons[1])
var enemy3 = new Enemy ("Chief Apache", enemyWeapons[2])

var enemies = [enemy1, enemy2, enemy3]

var randomEnemy1 = Math.floor(Math.random() * enemies.length)

function randomEnemy () {
    var randomEnemy = Math.floor(Math.random() * enemies.length)
    var random = Math.floor((Math.random() * 3) + 1)

    return ((mainChar.HP) + parseInt(enemies[randomEnemy].weapon.hp)); 
   
    
    }



var dis = randomEnemy()


console.log(dis)

