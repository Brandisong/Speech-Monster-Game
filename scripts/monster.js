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

// Monster sprite
const img = document.createElement('img');
img.src = "images/mean_guy.png"
img.width = 300;
img.height = 300;
// Insert into document
document.getElementById("imageContainer").appendChild(img)

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
function victory()
{
    // Explosion visual effect
    const explodeGif = document.createElement('img');
    explodeGif.src = "images/explosion.gif";
    explodeGif.width = 300;
    explodeGif.height = 300;
    document.getElementById("imageContainer").appendChild(explodeGif);

    // Replace image
    img.src = "images/dead.jpg"
    // Play sounds
    audioExplosion.play();
    audioVictory.play();
}


// Returns an int in a specified range for damage
function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
