document.getElementById("startBtn").addEventListener("click", function () {

  const resultText = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn");

  resultText.style.display = "block";

  // Add animation class to images
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");

  dice1.classList.add("roll");
  dice2.classList.add("roll");

  // Delay before showing new dice result
  setTimeout(() => {
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");

    // Random dice numbers
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
    dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

    // Winner text
    if (randomNumber1 > randomNumber2) {
      resultText.innerHTML = "<span>👑</span> Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      resultText.innerHTML = "Player 2 Wins! <span>👑</span>";
    } else {
      resultText.innerHTML = "<span>😮</span> It's a Draw!";
    }

    resetBtn.style.display = "inline-block";
  }, 1200); // Animation duration same as CSS
});

document.getElementById("resetBtn").addEventListener("click", function () {
  location.reload();
});

<<<<<<< HEAD
=======
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "👑 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 👑";
}
else {
  document.querySelector("h1").innerHTML = "Draw!😐";
}
>>>>>>> ef3dc79 (Add Simon Game Challenge project)
