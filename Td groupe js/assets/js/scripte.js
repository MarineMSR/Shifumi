function hidepage() {

    document.getElementById("wall2").style.display = "none";

    document.getElementById("intro").style.display = "flex";
    event.preventDefault();
    var nom = document.getElementById('name');
    var firstname = nom.value;
    msg.innerText = `Oseras-Tu Affronter Ton Destin, ${firstname} ?`
}

function returnpage() {

    document.getElementById("intro").style.display = "none";

    document.getElementById("wall2").style.display = "block";
    event.preventDefault();
}

function nextpage() {

    document.getElementById("intro").style.display = "none";

    document.getElementById("game").style.display = "flex";
    event.preventDefault();
    var nom = document.getElementById('name');
    var firstname = nom.value;
    gamer.innerText = `${firstname}`
}
