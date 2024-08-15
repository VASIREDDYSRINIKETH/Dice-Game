document.addEventListener("DOMContentLoaded", function() {
    // Generate a random number between 1 and 6
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Select the left dice image element
    var leftDice = document.querySelector(".img1");
    var rightDice = document.querySelector(".img2");
    // Set the src attribute to the corresponding dice image
    leftDice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    rightDice.setAttribute("src","images/dice" + randomNumber2 + ".png");

    var result = document.querySelector("h1");

    if(randomNumber1 > randomNumber2){
        result.innerHTML = "Player 1 wins 🚩"
    }
    else if(randomNumber1 < randomNumber2){
        result.innerHTML = "Player 2 wins 🚩"
    }
    else{
        result.innerHTML = "Draw !"
    }
  });
  