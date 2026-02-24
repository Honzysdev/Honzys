/*
#This code is written by Honzys

Copyright (c) 2026 Honzys.

All rights reserved.
*/


const playerSentences = {
    Nightblade: [
        "I love you Nightblade! Oh no thats gay! I mean I love to ragebait you Nightblade!",
        "Nightblade is a guy that I really like to leave on read and ignore him in game!",
        "Nightblade is a guy that I really like to leave on cliff hangers!",
        'Nightblade says I leave him on cliff hangers but actually he is the one to say "nvm" everytime hahah!',
        "Lmao Nightblade u are so ez to ragebait!",
        "Do you want to know how to ragebait, Nightblade? Well wait a few weeks and find out!😂"
    ],

    Kenza: [
        "I am Kenza hehe",
        "you stink hehe",
        "Kenza is menace"
    ],

    Light: [
        "Light thinks he is him",
        "Certified Light moment"
    ],

    Tumtum: [
        "Tumtum translation arc",
        "Tumtum cooking something"
    ],

    Anthony: ["Anthony file classified.",
            "Tumtum translation arc",
            "Tumtum cooking something",
    ],
    Meda: ["Meda file classified."],
    Kingmemo47: ["Memo watching you.",
        "very steadily",
        "like he is not blind :joy:"
    ],
    Honzys: ["Self report detected.",
        "nooob is not me",
        "you stink - wait thats me :sob:"
    ]
};

let lastsentence = "";
let selectedPlayer = "";
let currentPage = "mainmenu";

const filesButtons = document.querySelectorAll('.filesButton');
const filesContainerAll = document.querySelectorAll('.filesContainerAll');
const outputs = document.querySelectorAll('output');

const playerBtns = document.querySelectorAll('.playerBtns');
const playerPages = document.querySelectorAll('.container[id$="Page"]');

const gobackBtn = document.querySelectorAll('.gobackBtn');
const showFilesBtn = document.getElementById('showFilesBtn');
const mainmenucontainer = document.getElementById('mainmenucontainer');
const listContainer = document.getElementById('listContainer');

const realCross = document.getElementById('realCross');
realCross.onclick = function () {
    filesContainerAll.forEach(c => c.style.display = "none")
}
const fakeCross = document.getElementById('fakeCross');
fakeCross.onclick = function () {
    window.alert("Lmao you thought you could close the file? Think again and focus your eyes to find the real close button! Hint: its within the same field but less visible :)");
}

const realCrossBtn = document.querySelectorAll('.realCrossBtn');
realCrossBtn.forEach(btn => {
    btn.onclick = function () {
        filesContainerAll.forEach(c => c.style.display = "none")
    }
});

filesButtons.forEach(button => {
    button.onclick = function () {
        filesContainerAll.forEach(container => {
            container.style.display = "block";
        });
        const sentences = playerSentences[selectedPlayer];
        if (!sentences) return;
        let newsentence;
        do {
            newsentence = sentences[Math.floor(Math.random() * sentences.length)];
        } while (newsentence === lastsentence && sentences.length > 1);
        outputs.forEach(out => {
            out.textContent = newsentence;
        });
        lastsentence = newsentence;
    };
});

function getPlayer(name) {
    selectedPlayer = name;
    filesButtons.forEach(button => {
        button.textContent = `Show secret files of ${name}`;
    });
    const playerTitles = document.querySelectorAll('.title1');
    playerTitles.forEach(title => {
        title.textContent = `Welcome to ${name}'s Agma Files!`;
    });
}

showFilesBtn.onclick = function () {
    mainmenucontainer.style.display = "none";
    listContainer.style.display = "block";
    currentPage = "list";
    updateMainMenu();
};

playerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const divId = btn.dataset.playerDiv;

        playerPages.forEach(p => p.style.display = "none");
        document.getElementById(divId).style.display = "block";
        listContainer.style.display = "none";

        currentPage = "playerName";
        updateMainMenu();
    });
});

gobackBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        if (currentPage === "playerName") {
            playerPages.forEach(p => p.style.display = "none");
            listContainer.style.display = "block";
            currentPage = "list";
        } else if (currentPage === "list") {
            listContainer.style.display = "none";
            mainmenucontainer.style.display = "flex";
            currentPage = "mainmenu";
        }
        if (currentPage !== "playerName") {
            const playerTitles = document.querySelectorAll('.title1');
            playerTitles.forEach(title => {
                title.textContent = "Choose which player's file to view.";
            });
        }

        updateMainMenu();
    });
});

function updateMainMenu() {
    const filesButtons = document.querySelectorAll('.filesButton');
    const goBackBtns = document.querySelectorAll('.gobackBtn');
    const filesContainers = document.querySelectorAll('.filesContainerAll');

    if (currentPage === "playerName") {
        filesButtons.forEach(btn => btn.style.display = "block");
        goBackBtns.forEach(btn => btn.style.display = "block");
    } else {
        filesButtons.forEach(btn => btn.style.display = "none");
        goBackBtns.forEach(btn => btn.style.display = "block");
        filesContainers.forEach(c => c.style.display = "none");
    }
}

updateMainMenu();

const LogInandRegisterBtns = document.querySelectorAll('.LogInandRegisterBtns');
const panels = document.querySelectorAll('.panel');

LogInandRegisterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        LogInandRegisterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        LogInandRegisterBtns.forEach(b => {
            if (b.dataset.target === btn.dataset.target) {
                b.classList.add('active');
            }
        });
        panels.forEach(panel => panel.classList.remove('active'));
        const target = btn.dataset.target;
        document.getElementById(target).classList.add('active');
    });
});

const _u = [
    ["SG9uenlz", "YWRtaW5kZXY="],                    //Honzys
    ["TmlnaHRibGFkZQ==", "Y2xpZmZoYW5nZWQ="],       //Nightblade
    ["S2VuemE=", "dGhlbWVuYWNl"],                   //Kenza               //more in notesblock
    ["QW50aG9ueQ==", "dGhlYmVzdG1vZA=="],           //Anthony
    ["TGlnaHQ=", "bW9zdGFjdGl2ZW1vZA=="],           //Light
    ["VHVtdHVt", "c2tpbmRlc2lnbmVy"]                //Tumtum
];

const _d = s => atob(s);

document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const u = document.getElementById("usernameLogin").value.trim().toLowerCase();
    const p = document.getElementById("passwordLogin").value.trim();

    if (!u || !p) {
        alert("Please fill in both fields");
        return;
    }

    const ok = _u.find(x =>
        _d(x[0]).toLowerCase() === u &&
        _d(x[1]) === p
    );

    if (ok) {
        document.getElementById("mainmenucontainer").style.display = "flex";
        document.getElementById("loginPageHide").style.display = "none"
    }
    else {
        window.alert('Password is incorrect. Please try again')
    }
});
