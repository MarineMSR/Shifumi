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
        if (player === robot) {
            result = "Egalité";
        }
        else if ((player === "profileP profil" && robot === "profileK profil") || (player === "profileK profil" && robot === "profileD profil") || (player === "profileD profil") && (robot === "profileP profil")) {
            result = "Gagné";
        }
        else {
            result = "Perdu";
        }

        score(result)
        chooseperso(player)
        choosebot(robot)
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
    else if(scresult = "Perdu") {
        scoreNumbBot++;
    }
    else {
        scoreNumb == scoreNumb;
        scoreNumbBot == scoreNumbBot;
    };
    document.getElementById("scorep").innerText = scoreNumb;
    document.getElementById("scoreb").innerText = scoreNumbBot;
};

function chooseperso(playerpara) {
    if (playerpara === "profileP profil" ){
        document.querySelector("#pl").style.transitionDuration = "1.2s";
        document.querySelector("#pl").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#pl").style.transform = "translateX(30vw)";
    }
    else if (playerpara === "profileD profil"){
        document.querySelector("#dl").style.transitionDuration = "1.2s";
        document.querySelector("#dl").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#dl").style.transform = "translateX(30vw)";    }
    else {
        document.querySelector("#kl").style.transitionDuration = "1.2s";
        document.querySelector("#kl").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#kl").style.transform = "translateX(30vw)";    }
}

function choosebot(robotpara) {
    if (robotpara === "profileP profil" ){
        document.querySelector("#pr").style.transitionDuration = "1.2s";
        document.querySelector("#pr").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#pr").style.transform = "translateX(-30vw)";
    }
    else if (robotpara === "profileD profil"){
        document.querySelector("#dr").style.transitionDuration = "1.2s";
        document.querySelector("#dr").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#dr").style.transform = "translateX(-30vw)";    }
    else {
        document.querySelector("#kr").style.transitionDuration = "1.2s";
        document.querySelector("#kr").style.transitionTimingFunction = "ease-in-out";
        document.querySelector("#kr").style.transform = "translateX(-30vw)";    }
}


