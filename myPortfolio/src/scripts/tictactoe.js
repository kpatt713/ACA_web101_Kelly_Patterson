function startGame() {
    document.turn = "X";

    setMessage(document.turn + "starts the game.");
}

function setMessage(msg) {
    document.getElementById("message").innertext = msg;
}

function nextMove(box) {
    if (box.innertext =="") {
        box.innertext = document.turn;
        switchTurn();
    } else {
        setMessage("That square is already used.");
    }
    

    
}

function switchTurn() {
    if (document.turn =="X") {
        document.turn = "O";
    } else {
        document.turn = "X";
    }

    setMessage("It's" + document.turn + "turn")
}