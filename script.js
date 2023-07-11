"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  // document.querySelector(".number").textContent = random;
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    if (score === 0) {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME😥";
    } else {
      document.querySelector(".message").textContent = "NO NUMBER⛔";
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO HIGH✨";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME😥";
      if (score === 1) {
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO LOW✨";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME😥";
      if (score === 1) {
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  } else if (guess === random) {
    if (score > 0) {
      document.querySelector(".message").textContent = "CORRECT NUMBER🎇🎉";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent =
        "Yayy You Got!! " + random;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").style.color = "#ff1b68";
      document.querySelector(".number").style.fontWeight = "700";
      document.querySelector(".check").style.filter = "blur(0px)";
      document.querySelector(".check").style.color = "#b8b894";
      document.querySelector(".check").style.backgroundColor = "#d6d6c2";
      document.querySelector(".check").disabled = true;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE THE GAME😥";
    }

    if (score >= document.querySelector(".highscore").textContent) {
      document.querySelector(".highscore").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#ff1b68";
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.filter = "blur(0px)";
  document.querySelector(".check").style.color = "black";
});
