let inputBox = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGame);
let turn = true; //playerX = true, playerO = false
let count = 0;

const winComb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
    [0, 4, 8], [2, 4, 6] //diagonal
];

function resetGame() {
    inputBox.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    turn = true;
    winnerMsg.classList.add("hide");
    count = 0;
}


inputBox.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerHTML == "" && count < 9) {
            if (turn) {
                box.innerHTML = "X";
                box.style.color = "#333";
                turn = !turn;
            } else {
                box.innerHTML = "O";
                box.style.color = "#333";
                turn = !turn;
            }
            count++;
            box.disabled = true;
            checkWinner();
        } 
    });
});


function checkWinner() {
    let winner = "";
    winComb.forEach((comb) => {
        if (inputBox[comb[0]].innerHTML == inputBox[comb[1]].innerHTML && inputBox[comb[1]].innerHTML == inputBox[comb[2]].innerHTML && inputBox[comb[0]].innerHTML != "") {
            winner = inputBox[comb[0]].innerHTML;
        }
    });

    if (winner != "") {
        setTimeout(() => {
            showWinner(winner);
            alert(`Player ${winner} wins!`);
        },100);
    } else if (count == 9) {
        setTimeout(() => {
            alert(`It's a draw!`);
        },100);
    }
}



let winnerMsg = document.querySelector('.winnerMsg');   
let msg = document.querySelector('#msg');

const showWinner = (winner) => {
    msg.innerHTML = "Player " + winner + " wins!";
    winnerMsg.classList.remove("hide");
    disableAfterWin();
}

const disableAfterWin = () => {
    inputBox.forEach((box) => {
        box.disabled = true;
    });
}