// getting game elements
const textLoseWin = document.getElementsByClassName("text-lose-win")[0];

// getting player elements
const playerBtnWrapper = document.querySelectorAll(".player-Btn-Wrapper")[0];
const playerScoreText = document.getElementsByClassName("player-score-h1")[0];

// getting pc elements
const PcGameBtnWrapper = document.querySelectorAll(".Pc-game-Btn-Wrapper")[0];
const pcScoreText = document.getElementsByClassName("Pc-score-h1")[0];

// global element
let pScore = 0;
let pcScore = 0;

// our game func
function randNum(e) {
  // player functions
  const playerScore = e.target.id;
  playerBtnWrapper.children[playerScore].classList.add("active");
  //   playerBtnWrapper.classList.add("active");

  // pc functions
  const randNum = Math.round(Math.random() * 2);
  PcGameBtnWrapper.children[randNum].classList.add("active");

  // game logic
  if (playerScore > randNum) {
    console.log("payer won");
    pScore = pScore + 1;
    console.log(pScore);
    playerScoreText.textContent = `YOU - ${pScore}`;
    textLoseWin.textContent = `YOU WON`;
    textLoseWin.style.color = "green";
  } else if (playerScore < randNum) {
    console.log("payer lost");
    pcScore = pcScore + 1;
    console.log(pcScore);
    pcScoreText.textContent = `YOU - ${pcScore}`;
    textLoseWin.textContent = `YOU LOST`;
    textLoseWin.style.color = "red";
  } else {
    console.log("same");
    textLoseWin.textContent = `DROW`;
    textLoseWin.style.color = "gray";
  }
}

// our eventlinsters
playerBtnWrapper.addEventListener("click", randNum);
