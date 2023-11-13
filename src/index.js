// getting player elements
const playerBtnWrapper = document.querySelectorAll(".player-Btn-Wrapper")[0];

// getting pc elements
const PcGameBtnWrapper = document.querySelectorAll(".Pc-game-Btn-Wrapper")[0];

// our game func
function randNum(e) {
  // player functions
  const playerScore = e.target.id;
  playerBtnWrapper.children[playerScore].classList.add("active");
  playerBtnWrapper.classList.add("active");
  console.log("Player Point : ", playerScore);

  // pc functions
  const randNum = Math.round(Math.random() * 2);
  console.log(PcGameBtnWrapper.children[randNum]);
  PcGameBtnWrapper.children[randNum].classList.add("active");

  // game logic
  console.log("PC Point : ", randNum);
  if (playerScore > randNum) {
    console.log("payer won");
  } else if (playerScore < randNum) {
    console.log("payer lost");
  } else {
    console.log("same");
  }
}

// our eventlinsters
playerBtnWrapper.addEventListener("click", randNum);
