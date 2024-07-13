let blck1 = document.querySelectorAll(".hori1");
let blck2 = document.querySelectorAll(".hori2");
let blck3 = document.querySelectorAll(".hori3");
let blocks = [...blck1, ...blck2, ...blck3];
let resetButton = document.querySelector("#reset");

let turnO = true;

blocks.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#FF0000";
        } else {
            box.innerText = "X";
            box.style.color = "#0000FF";
        }
        box.disabled = true;
        turnO = !turnO;
        checkWin();
    });
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
    blocks.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let board = blocks.map(box => box.innerText);

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} wins!`);
            blocks.forEach((box) => box.disabled = true);
            return;
        }
    }

    if (board.every(box => box !== "")) {
        alert("It's a draw!");
    }
}

