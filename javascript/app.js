var qwerty = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed = 0;
var startGame = document.getElementsByClassName("btn__reset")[0];
var overlay = document.getElementById("overlay");
var win = document.getElementById("win_banner");
var lose = document.getElementById("lose_banner");
var arrayOfChars = Array(26).fill(0);

//this is the list of phrases
var phrases = ["tiger", "lion", "elephant", "bear", "moose"];

function getRandomPhraseAsArray(arr) {
    var random = parseInt(Math.floor(Math.random() * arr.length));
    return arr[random].split('');
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
    var count = 0;
    var letter = document.getElementsByClassName("letter");
    for (var i = 0; i < letter.length; i++) {
        if (btn.toLowerCase() === letter[i].innerText.toLowerCase()) {
            letter[i].classList.add("show");
            count++;
        }
    }

    if (count == 0 && arrayOfChars[btn.charCodeAt() - 97] === 0) {
        document.getElementsByClassName("tries")[missed].style.display = "none";
        missed += 1;
        arrayOfChars[btn.charCodeAt() - 97] = 1;
        return null;
    } else {
        return btn;
    }
}

function checkWin() {
    if (missed == 5) {
        lose.style.display = "";
    } else if (document.getElementsByClassName("show").length === document.getElementsByClassName("letter").length) {
        console.log(document.getElementsByClassName("show").length);
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
            document.querySelectorAll("button").disabled = true;
        }
    }
    checkLetter(keyBoardChosenKey);
    checkWin();
})

document.querySelectorAll("button")[0].addEventListener("click", () => {
    document.querySelectorAll("button")[0].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[0].innerText);
    checkWin();
})

document.querySelectorAll("button")[1].addEventListener("click", () => {
    document.querySelectorAll("button")[1].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[1].innerText);
    checkWin();
})

document.querySelectorAll("button")[2].addEventListener("click", () => {
    document.querySelectorAll("button")[2].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[2].innerText);
    checkWin();
})

document.querySelectorAll("button")[3].addEventListener("click", () => {
    document.querySelectorAll("button")[3].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[3].innerText);
    checkWin();
})

document.querySelectorAll("button")[4].addEventListener("click", () => {
    document.querySelectorAll("button")[4].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[4].innerText);
    checkWin();
})

document.querySelectorAll("button")[5].addEventListener("click", () => {
    document.querySelectorAll("button")[5].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[5].innerText);
    checkWin();
})

document.querySelectorAll("button")[6].addEventListener("click", () => {
    document.querySelectorAll("button")[6].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[6].innerText);
    checkWin();
})

document.querySelectorAll("button")[7].addEventListener("click", () => {
    document.querySelectorAll("button")[7].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[7].innerText);
    checkWin();
})

document.querySelectorAll("button")[8].addEventListener("click", () => {
    document.querySelectorAll("button")[8].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[8].innerText);
    checkWin();
})

document.querySelectorAll("button")[9].addEventListener("click", () => {
    document.querySelectorAll("button")[9].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[9].innerText);
    checkWin();
})

document.querySelectorAll("button")[10].addEventListener("click", () => {
    document.querySelectorAll("button")[10].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[10].innerText);
    checkWin();
})

document.querySelectorAll("button")[11].addEventListener("click", () => {
    document.querySelectorAll("button")[11].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[11].innerText);
    checkWin();
})

document.querySelectorAll("button")[12].addEventListener("click", () => {
    document.querySelectorAll("button")[12].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[12].innerText);
    checkWin();
})

document.querySelectorAll("button")[13].addEventListener("click", () => {
    document.querySelectorAll("button")[13].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[13].innerText);
    checkWin();
})

document.querySelectorAll("button")[14].addEventListener("click", () => {
    document.querySelectorAll("button")[14].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[14].innerText);
    checkWin();
})

document.querySelectorAll("button")[15].addEventListener("click", () => {
    document.querySelectorAll("button")[15].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[15].innerText);
    checkWin();
})

document.querySelectorAll("button")[16].addEventListener("click", () => {
    document.querySelectorAll("button")[16].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[16].innerText);
    checkWin();
})

document.querySelectorAll("button")[17].addEventListener("click", () => {
    document.querySelectorAll("button")[17].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[17].innerText);
    checkWin();
})

document.querySelectorAll("button")[18].addEventListener("click", () => {
    document.querySelectorAll("button")[18].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[18].innerText);
    checkWin();
})

document.querySelectorAll("button")[19].addEventListener("click", () => {
    document.querySelectorAll("button")[19].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[19].innerText);
    checkWin();
})

document.querySelectorAll("button")[20].addEventListener("click", () => {
    document.querySelectorAll("button")[20].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[20].innerText);
    checkWin();
})

document.querySelectorAll("button")[21].addEventListener("click", () => {
    document.querySelectorAll("button")[21].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[21].innerText);
    checkWin();
})

document.querySelectorAll("button")[22].addEventListener("click", () => {
    document.querySelectorAll("button")[23].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[23].innerText);
    checkWin();
})

document.querySelectorAll("button")[24].addEventListener("click", () => {
    document.querySelectorAll("button")[24].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[24].innerText);
    checkWin();
})

document.querySelectorAll("button")[25].addEventListener("click", () => {
    document.querySelectorAll("button")[25].classList.add("chosen");
    document.querySelectorAll("button").disabled = true;
    checkLetter(document.querySelectorAll("button")[25].innerText);
    checkWin();
})