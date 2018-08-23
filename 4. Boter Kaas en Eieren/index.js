let board = document.querySelectorAll(".square");
let playerturn = true;
var Initclasslength = board[0].classList.length;
let winner = false;

let boardlength = board.length;
var startPlayersTurn = PlayersTurn();

function PlayersTurn() {
    for (let i = 0; i < boardlength; i++) {
        board[i].addEventListener("click", function () { player(i) });
    }
}

function player(number) {
    if (playerturn == true && winner == false) {
        if (Initclasslength == board[number].classList.length) {
            board[number].classList.add("x");
            playerturn = false;
            checkboxfull();
        }
        else {
            console.log('play again');
        }
    }
    checkWinner();
}

function computer() {
    var randomnumber = Math.floor((Math.random() * boardlength));
    checkWinner();
    if (playerturn == false && winner == false) {

        if (isEmpty(randomnumber)) {
            //check2InaRow(randomnumber);
            board[randomnumber].classList.add("o");
        }
        else {
            computer();
        }
        playerturn = true;

    }
    checkboxfull()
    checkWinner();
}

function isEmpty(number) {
    if (Initclasslength == board[number].classList.length) {
        return true;
    }
}

function checkboxfull() {
    for (let i = 0; i < boardlength; i++) {
        if (isEmpty(i)) {
            console.log('next move');
            if (playerturn == false) {
                computer();
            }
        }
    }
}


function move(boardrow) {
    var randomnumber = Math.floor((Math.random() * boardrow.length));
    if (isEmpty(randomnumber)) {
        board[randomnumber].classList.add("o");
    }
    else {
        move(boardrow);
    }
}

function checkWinner() {
    // check rows
    for (var i = 0; i < 9;) {
        if (board[i].classList.contains("x") && board[i + 1].classList.contains("x") && board[i + 2].classList.contains("x")) {
            winner = true;
            message.innerHTML = "X wint";
            return winner;
        }
        else if (board[i].classList.contains("o") && board[i + 1].classList.contains("o") && board[i + 2].classList.contains("o")) {
            winner = true;
            message.innerHTML = "O wint";
            return winner;
        }
        i = i + 3;
    }

    // check coloms
    for (var i = 0; i < 3; i++) {
        if (board[i].classList.contains("x") && board[i + 3].classList.contains("x") && board[i + 6].classList.contains("x")) {
            winner = true;
            message.innerHTML = "X wint";
            return winner;
        }
        else if (board[i].classList.contains("o") && board[i + 3].classList.contains("o") && board[i + 6].classList.contains("o")) {
            winner = true;
            message.innerHTML = "O wint";
            return winner;
        }
    }
    checkDiagonal_X();
    CheckDiagonal_O();
}

function checkDiagonal_X() {
    if (board[0].classList.contains("x") && board[4].classList.contains("x") && board[8].classList.contains("x")) {
        winner = true;
        message.innerHTML = "X wint";
        return winner;
    }
    else if (board[2].classList.contains("x") && board[4].classList.contains("x") && board[6].classList.contains("x")) {
        winner = true;
        message.innerHTML = "X wint";
        return winner;
    }
}

function CheckDiagonal_O() {
    if (board[0].classList.contains("o") && board[4].classList.contains("o") && board[8].classList.contains("o")) {
        winner = true;
        message.innerHTML = "O wint";
        return winner;
    }
    else if (board[2].classList.contains("o") && board[4].classList.contains("o") && board[6].classList.contains("o")) {
        winner = true;
        message.innerHTML = "O wint";
        return winner;
    }
}
/*
function cornermove(){
    let corners = [0,2,6,8];
    let randomcorner = corners[Math.floor(Math.random()*corners.length)];
    if (board[randomcorner].classList.contains("o") && board[randomcorner].classList.contains("x")){
        cornermove();
    }
    else{
        board[randomcorner].classList.add("o");
    }
}*/
