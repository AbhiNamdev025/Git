let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg-box");
let greetMsg = document.querySelector(".msg");
let newGame = document.querySelector(".new");
let container = document.querySelector(".container");
let turn = true;
let counter = 0;

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "O";
      turn = false;
    } else {
      box.innerHTML = "X";
      turn = true;
    }
    box.disabled = true;

    counter++;
    checkWinner();
  });
});

const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  counter = 0;
};

const checkWinner = () => {
  let winnerFound = false;

  for (let pattern of patterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      greetMsg.innerHTML = `Congratulations! Winner is: ${val1}`;
      msg.style.display = "block";
      container.style.display = "none";
      disable();
      winnerFound = true;
    }
  }

  if (!winnerFound && counter === 9) {
    greetMsg.innerHTML = `It's a Draw!`;
    msg.style.display = "block";
    container.style.display = "none";
  }
};

const resetGame = () => {
  turn = true;
  enable();
  msg.style.display = "none";
  container.style.display = "flex";
};

newGame.addEventListener("click", () => {
  resetGame();
});
reset.addEventListener("click", () => {
  resetGame();
});
