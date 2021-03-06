//--- The sprite object

let spriteObject = {
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 32,
  sourceHeight: 32,
  width: 32,
  height: 32,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  
  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  },
};

let playerObject = Object.create(spriteObject);
playerObject.health = 100;
playerObject.strength = 150;
playerObject.weapon = "Sword";

let enemyObject = Object.create(spriteObject);
enemyObject.health = Math.floor((Math.random() * 75) + 1);
enemyObject.strength = Math.floor((Math.random() * 35) + 25);

function removeObject(objectToRemove,arr){
  let i = arr.indexOf(objectToRemove);
  if (i !== -1){
    arr.splice(i,1);
  }
}





//--- The monster object

// monsterObject = Object.create(spriteObject);
// monsterObject.sourceX = 128;

// //The monster's states
// monsterObject.NORMAL = [2,0];
// monsterObject.SCARED = [2,1];
// monsterObject.state = monsterObject.NORMAL;
   
// monsterObject.update = function() { 
//   this.sourceX = this.state[0] * this.width;
//   this.sourceY = this.state[1] * this.height;
// };


//The monster's allowed speed
// monsterObject.speed = 1;

//Properties to help the monster change direction

// monsterObject.NONE = 0;
// monsterObject.UP = 1;
// monsterObject.DOWN = 2;
// monsterObject.LEFT = 3;
// monsterObject.RIGHT = 4;
// monsterObject.validDirections = [];
// monsterObject.direction = monsterObject.NONE;
// monsterObject.hunt = true;