let dino = document.getElementById("dino");
let obstacle = document.getElementById("obstacle");
let gameOverText = document.getElementById("gameOver");
let jumpBtn = document.getElementById("jumpBtn");
let counter = document.getElementById("counter");
let highest = document.getElementById("highest");
let restartBtn = document.getElementById("restartBtn");

let bgMusic = document.getElementById("bgMusic");
let gameOverSound = document.getElementById("gameOverSound");

let emojis = ["💣", "🌵", "🔥", "🚧", "🪨", "⚡"];
let index = 0;

setInterval(() => {
  index = (index + 1) % emojis.length;
  obstacle.textContent = emojis[index];
}, 3000);

let num = 0;
let highScore = 0;
let scoreInterval;

bgMusic.volume = 0.5;
gameOverSound.volume = 0.4;

bgMusic.play();

jumpBtn.addEventListener("click", () => {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 700);
});

let Collision = () => {
  let dinoTop = dino.offsetTop;
  let obstacleLeft = obstacle.offsetLeft;

  if (obstacleLeft < 50 && dinoTop >= 150) {
    obstacle.style.animation = "none";
    gameOverText.style.display = "block";
    restartBtn.style.display = "block";
    clearInterval(scoreInterval);

    bgMusic.pause();
    bgMusic.currentTime = 0;
    gameOverSound.play();

    if (num > highScore) {
      highScore = num;
      highest.textContent = highScore;
      localStorage.setItem("High Score", highScore);
    }
  }
};
setInterval(Collision, 10);

restartBtn.addEventListener("click", () => {
  gameOverText.style.display = "none";
  restartBtn.style.display = "none";
  obstacle.style.animation = "move 1.5s linear infinite";
  startscore();
  bgMusic.play();
});

function startscore() {
  num = 0;
  counter.textContent = num;
  scoreInterval = setInterval(() => {
    num += 5;
    counter.textContent = num;
  }, 500);
}

function getfromlocal() {
  let high = localStorage.getItem("High Score");
  if (high) {
    highScore = parseInt(high);
    highest.textContent = highScore;
  }
}

startscore();
getfromlocal();
