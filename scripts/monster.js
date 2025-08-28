"use strict";

let MIN_DAMAGE = 5;
let MAX_DAMAGE = 10;

// Init health
let health = 100;
updateHealthMeter();

// Sounds
let audioAttack = new Audio("sounds/sword.mp3");
let audioExplosion = new Audio("sounds/explosion.mp3");
let audioVictory = new Audio("sounds/victory.mp3");

// Set title
document.getElementById("title").innerHTML = "Monster attacks!";

// Monster sprite
const monsterSprite = document.createElement('img');
monsterSprite.src = "images/mean_guy.png"
monsterSprite.width = 500;
monsterSprite.height = 500;
monsterSprite.style.margin = "0 auto;";
// Insert into document
monsterSprite.style = "position: absolute; z-index: 2;";
document.getElementById("imageContainer").appendChild(monsterSprite)

// Background for monster
const monsterBackground = document.createElement('img');
monsterBackground.src = "images/background.png";
monsterBackground.width = 500;
monsterBackground.height = 500;
monsterBackground.style.margin = "0 auto;";
// Insert behind monster sprite
monsterBackground.style = "position: relative; z-index: 1;";
document.getElementById("imageContainer").appendChild(monsterBackground)


// FUNCTIONS

// Update health meter
function updateHealthMeter()
{
    document.getElementById("healthBar").value = health;
    
    let healthMessage = "Health: " + String(health);
    document.getElementById("healthMeter").innerHTML = healthMessage;
}


// Deal damage
function dealDamage()
{
    if (health > 0)
    {
        let damage = getRandomInteger(MIN_DAMAGE, MAX_DAMAGE);
        health = health - damage;
        updateHealthMeter();
        checkIfDead();
    }
}


// Check if dead
function checkIfDead()
{
    if (health <= 0)
    {
        health = 0;
        updateHealthMeter();
        victory();
    }
    else
    {
        audioAttack.play();
    }
}


// You win!
async function victory()
{
    // Explosion visual effect
    audioExplosion.play();
    monsterSprite.src = "images/explosion.gif";
    // Delay for victory screen
    setTimeout(endScreen, 1000);
}


// This is a separate function just to have a delay
function endScreen()
{
    document.getElementById("title").innerHTML = "Your did it!";
    monsterSprite.src = "images/dead.png";
    audioVictory.play();
}


// Returns an int in a specified range for damage
function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
