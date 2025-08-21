var score1 = 0;
var score2 = 0;

function rollDice() {
  var dice1 = document.querySelector(".img1");
  var dice2 = document.querySelector(".img2");

  // Add shake animation
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  // Remove animation after 0.5s so it can run again next click
  setTimeout(function () {
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");
  }, 500);

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    score1++;
    document.getElementById("score1").innerText = score1;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    score2++;
    document.getElementById("score2").innerText = score2;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  document.getElementById("resetBtn").addEventListener("click", function () {
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
    document.querySelector("h1").innerHTML = "Game Reset! 🎲";
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  });
}

// Run once when page loads
rollDice();

// Run again when button is clicked
document.getElementById("rollBtn").addEventListener("click", rollDice);
