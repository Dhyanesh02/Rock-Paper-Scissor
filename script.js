let userScore = 0;
let systemScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const replay = document.querySelector("#replay");

const userScorePara = document.querySelector("#user-score");
const systemScorePara = document.querySelector("#comp-score");

const systemChoice = () => {
  const options = ["rock", "paper", "scissor"]
  const randIdx = Math.floor(Math.random() * 3)
  console.log(options[randIdx])
  return options[randIdx]
}

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw. Play Again!";
  msg.style.backgroundColor = "#5f9ea0";
}

const showWinner = (userWin,userChoice,systemvalue) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    console.log("you win! :) ");
    msg.innerText = `You win! Your ${userChoice} beats ${systemvalue}` ;
    msg.style.backgroundColor = "green";
  } else {
    systemScore++;
    systemScorePara.innerHTML = systemScore;
    console.log("you lose :(");
    msg.innerText = `You lost! Your ${systemvalue} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  //System choice
  const systemvalue = systemChoice();
  console.log("System Choice ", systemvalue)
  if (systemvalue === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = systemvalue === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = systemvalue ==="scissor" ? false : true;
    } else {
      userWin = systemvalue === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,systemvalue);
  }
}

//CLick any 3 options 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice clicked", userChoice)
    playGame(userChoice)
  });
});

replay.addEventListener("click", () => {
  console.log("rematch clicked");
  userScore = 0;
  systemScore = 0;
  userScorePara.innerHTML = userScore;
  systemScorePara.innerHTML = systemScore;
  msg.innerText = "Let's play again!";
  msg.style.backgroundColor = "white";
});