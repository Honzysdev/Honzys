/*
#This code is written by Honzys

Copyright (c) 2026 Honzys. All rights reserved.

This source code is the property of Honzys and is protected by copyright law.
Unauthorized copying, modification, distribution, or use of this code,
via any medium, is strictly prohibited without prior written permission
from Honzys. 
*/

let lastsentence = "";

document.getElementById('ragebaitButton').addEventListener('click', function() {
    const ragebaitContainer = document.getElementById('ragebaitContainer');
    const output = document.getElementById('output');
    output.textContent = sentences[Math.floor(Math.random() * sentences.length)];
    let newsentence;
    do {
        newsentence = sentences[Math.floor(Math.random() * sentences.length)];
    } while (newsentence === lastsentence);
    output.textContent = newsentence;
    lastsentence = newsentence;
    ragebaitContainer.style.display = "block";
});

const sentences = [
    "I love you Nightblade! Oh no thats gay! I mean I love to ragebait you Nightblade!",
    "Nightblade is a guy thatI really like to leave on read and ignore him in game!",
    "Nightblade is a guy that I really like to leave on cliff hangers!",
    'Nightblade says I leave him on cliff hangers but actually he is the one to say "nvm" everytime hahah!',
    "Lmao Nightblade u are so ez to ragebait!", 
    "Do you want to know how to ragebait, Nightblade? Well wait a few weeks and find out!😂",

]

const fakeCrossBtn = document.getElementById('fakeCrossBtn');
const realCrossBtn = document.getElementById('realCrossBtn');

fakeCrossBtn.onclick = function() {
    window.alert("Lmao you thought you could close the ragebait? Think again and focus your eyes to find the real close button!");
}

realCrossBtn.onclick = function() {
    const ragebaitContainer = document.getElementById('ragebaitContainer');
    ragebaitContainer.style.display = "none";
}

const showFilesBtn = document.getElementById('showFilesBtn');
const mainmenucontainer = document.getElementById('mainmenucontainer');
const listContainer = document.getElementById('listContainer');
showFilesBtn.onclick = function() {
    mainmenucontainer.style.display = "none";
    listContainer.style.display = "block";
    
}