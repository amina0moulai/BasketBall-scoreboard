let right = document.getElementById("right");
let left = document.getElementById("left");

let compteurLeft = 0;
let compteurRight = 0;

// Partie gauche

function plusUnLeft() {
    compteurLeft += 1;
    left.textContent = compteurLeft;

    console.log("Bouton +1 à gauche");
}

function plusDeuxLeft() {
    compteurLeft += 2;
    left.textContent = compteurLeft;

    console.log("Bouton +2 à gauche");
}

function plusTroisLeft() {
    compteurLeft += 3;
    left.textContent = compteurLeft;

    console.log("Bouton +3 à gauche");
}

// Partie droite

function plusUnRight() {
    compteurRight += 1;
    right.textContent = compteurRight;

    console.log("Bouton +1 à droite");
}

function plusDeuxRight() {
    compteurRight += 2;
    right.textContent = compteurRight;

    console.log("Bouton +2 à droite");
}

function plusTroisRight() {
    compteurRight += 3;
    right.textContent = compteurRight;

    console.log("Bouton +3 à droite");
}

// Réinitialisation

function return0() {
    compteurLeft = 0;
    compteurRight = 0;

    right.textContent = compteurRight;
    left.textContent = compteurLeft;

    console.log("Tout a été réinitialisé");
}