var player="X";

function startGame() {
    setMessage(player + " starts the game.");
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function switchTurn() {
    if (player =="X") {
        player = "O";
    } else {
        player = "X";
    }
    setMessage("It's " + player + " turn")
}


function ticTacToe(id) {
    var square=document.getElementById(id);
    console.log("player" + " " + player + " made this mark");
    console.log(id);
    if (square.innerText ==="") {
        square.innerText = player;
        switchTurn();
    } else {
        setMessage("That square is already used.");
    } 
}

