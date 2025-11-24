let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "#ffcc00";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.innerHTML = `🎉 Correct! It was ${randomNumber}!`;
        message.style.color = "#90ee90";
        document.getElementById("newGameBtn").style.display = "block";
        document.querySelector("button[onclick='checkGuess()']").disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "#ffcc00";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "#ffcc00";
    }

    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attempts").textContent = "0";
    document.getElementById("message").textContent = "";
    document.getElementById("newGameBtn").style.display = "none";
    document.querySelector("button[onclick='checkGuess()']").disabled = false;
    document.getElementById("guessInput").value = "";
}
