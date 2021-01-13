var qwerty = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed = 0;
var startGame = document.getElementsByClassName("btn__reset")[0];
var overlay = document.getElementById("overlay");
var win = document.getElementById("win_banner");
var lose = document.getElementById("lose_banner");

//this is the list of phrases
var phrases = ["tiger", "lion", "elephant", "bear", "moose"];

function getRandomPhraseAsArray(arr) {
    var random = Math.random() * 5;
    return arr.split('');
}

//this is the display function
function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
        var listItem = document.createElement("LI");
        var displayUL = document.getElementById("phrase");
        displayUL.querySelector("ul").appendChild(listItem).append(arr[i]);
        listItem.classList.add("letter");
    }
}

function checkLetter(btn) {
    var letter = document.getElementsByClassName("letter");

    for (var i = 0; i < letter.length; i++) {
        if (btn == letter[i]) {
            letter[i].classList.add("show");
            return letter[i];
        } else {
            return null;
        }
    }
}

function checkWin() {
    if (missed == 5) {
        lose.style.display = "";
    } else if (document.getElementsByClassName("show").length === document.getElementsByClassName("letters").length) {
        win.style.display = "";
    }
}

//hide the start screen when clicked
startGame.addEventListener("click", () => {
    overlay.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
})

const word = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(word);

document.addEventListener("keypress", (event) => {
    var keyBoardChosenKey = event.key;
    for (var i = 0; i < 25; i++) {
        if (document.querySelectorAll("button")[i].innerText == keyBoardChosenKey) {
            document.querySelectorAll("button")[i].classList.add("chosen");
        }
    }
    var letterFound = checkLetter(keyBoardChosenKey);
    checkWin();
})