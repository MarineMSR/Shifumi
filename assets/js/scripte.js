// bouton jouer
document.querySelector(".play").addEventListener("click", openModal)
function openModal() {
    event.preventDefault();
    document.querySelector("#id01").style.display = "table";
    document.querySelector("#id01").style.position = "absolute";
}

// bouton entrer
document.querySelector("#enter").addEventListener("click", hidePage)
function hidePage() {
    event.preventDefault();
    document.querySelector("#wall2").style.display = "none";
    document.querySelector("#intro").style.display = "flex";
    var nom = document.querySelector("#name");
    var firstname = nom.value;
    msg.innerText = `Oseras-Tu Affronter Ton Destin, ${firstname} ?`
}

// bouton non
document.querySelector("#no").addEventListener("click", returnpage)
function returnpage() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("wall2").style.display = "block";
    event.preventDefault();
}
// bouton oui
document.querySelector("#yes").addEventListener("click", nextPage)

function nextPage() {

    event.preventDefault();
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("id02").style.display = "table"
    document.getElementById("id02").style.position = "absolute"
    var nom = document.getElementById('name');
    var firstname = nom.value;
    gamer.innerText = `${firstname}`
}
// choix du joueur
const buttons = document.querySelectorAll(".box button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const player = buttons[i].className;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].className;
        let result = "";
        if ((player === "profileP profil" && robot === "profileK profil") || (player === "profileK profil" && robot === "profileD profil") || (player === "profileD profil") && (robot === "profileP profil")) {
            result = "Gagné";
        }
        else if (player === robot) {
            result = "Egalité";
        }
        else {
            result = "Perdu";
        }
        setTimeout(() => {
            document.querySelector(".restart").style.display = ("block")
        }, 2000);
        setTimeout(function () { changescore(result) }, 2000);

        score(result);
        chooseperso(player);
        choosebot(robot);
        
    });
}


// récuperation des profils et fermeture de la modale
let profils = document.querySelectorAll(".profil")
for (profil of profils) {
    profil.addEventListener("click", function () {
        document.querySelector("#id02").style.display = "none";
    })
}

// score des joueurs
let scoreNumb = 0;
let scoreNumbBot = 0;
function score(scresult) {
    if (scresult == "Gagné") {
        scoreNumb++;
    }
    else if (scresult == "Perdu") {
        scoreNumbBot++;
    }
    else {

    };
    document.getElementById("scorep").innerText = scoreNumb;
    document.getElementById("scoreb").innerText = scoreNumbBot;
    average(scoreNumb, scoreNumbBot);
};

function average(a, b) {
    if (a == 0 && b == 0) {
        document.querySelector(".moyenneP").innerText = "0%";
        document.querySelector(".moyenneB").innerText = "0%";
    }
    else if (a == 0) {
        document.querySelector(".moyenneB").innerText = "100%";
        document.querySelector(".moyenneP").innerText = "0%";

    }
    else if (b == 0) {
        document.querySelector(".moyenneP").innerText = "100%";
        document.querySelector(".moyenneB").innerText = "0%";

    }
    else {
        document.querySelector(".moyenneP").innerText = `${(a * 100 / (a + b)).toFixed(1)}%`;
        document.querySelector(".moyenneB").innerText = `${(b * 100 / (a + b)).toFixed(1)}%`;
    }
}

function chooseperso(playerpara) {
    if (playerpara === "profileP profil") {
        document.querySelector("#pl").classList.toggle("leftToRight");
    }
    else if (playerpara === "profileD profil") {
        document.querySelector("#dl").classList.toggle("leftToRight");
    }
    else {
        document.querySelector("#kl").classList.toggle("leftToRight");
    }
}

function choosebot(robotpara) {
    if (robotpara === "profileP profil") {
        document.querySelector("#pr").classList.toggle("rightToLeft");
    }
    else if (robotpara === "profileD profil") {
        document.querySelector("#dr").classList.toggle("rightToLeft");
    }
    else {
        document.querySelector("#kr").classList.toggle("rightToLeft");
    }
}

document.querySelector(".restart").addEventListener("click",
    function playagain() {
        document.querySelector(".restart").style.display = "none";
        document.querySelector(".leftToRight").classList.remove("leftToRight");
        document.querySelector(".rightToLeft").classList.remove("rightToLeft");
        document.querySelector(".win").style.display = "none";
        document.querySelector(".lost").style.display = "none";
        document.querySelector(".equality").style.display = "none";
        nextPage();
    });

function changescore(winloseequal) {
    if (winloseequal == "Gagné") {
        document.querySelector(".win").style.display = "block";
    }
    else if (winloseequal == "Perdu") {
        document.querySelector(".lost").style.display = "block";
    }
    else {
        document.querySelector(".equality").style.display = "block";
    }
}

screen.lockOrientation('landscape')

// function weapons(a,b,c){
//     if(a == "Gagné" && b == "profileP profil"){
//         document.querySelector("#hL").classList.toggle("heartL");
//     }
//     else if(a == "Gagné" && b == "profileD profil"){
//         document.querySelector("#fL").classList.toggle("fireL");
//     }
//     else if (a == "Gagné" && b == "profileK profil"){
//         document.querySelector("#bL").classList.toggle("beerL");
//     }
//     else if (a == "Perdu" && c == "profileP profil"){
//         document.querySelector("#hR").classList.toggle("heartR");
//     }
//     else if (a == "Perdu" && c == "profileD profil"){
//         document.querySelector("#fR").classList.toggle("fireR");
//     }
//     else if (a == "Perdu" && c == "profileK profil"){
//         document.querySelector("#bR").classList.toggle("beerR");
//     }
//     else{

//     }
// }

// function disableWeapons(a,b,c){
//     if(a == "Gagné" && b == "profileP profil"){
//         document.querySelector("#hL").classList.toggle("heartL");
//     }
//     else if(a == "Gagné" && b == "profileD profil"){
//         document.querySelector("#fL").classList.toggle("fireL");
//     }
//     else if (a == "Gagné" && b == "profileK profil"){
//         document.querySelector("#bL").classList.toggle("beerL");
//     }
//     else if (a == "Perdu" && c == "profileP profil"){
//         document.querySelector("#hR").classList.toggle("heartR");
//     }
//     else if (a == "Perdu" && c == "profileD profil"){
//         document.querySelector("#fR").classList.toggle("fireR");
//     }
//     else if (a == "Perdu" && c == "profileK profil"){
//         document.querySelector("#bR").classList.toggle("beerR");
//     }
//     else{

//     }
// }