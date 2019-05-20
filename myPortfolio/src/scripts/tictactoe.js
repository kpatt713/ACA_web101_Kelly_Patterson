function startGame() {
    document.turn = "X";

    setMessage(document.turn + "starts the game.");
}

function setMessage(msg) {
    document.getElementById("message").innertext = msg;
}

function nextMove(box) {
    box.innertext = document.turn;

    
}