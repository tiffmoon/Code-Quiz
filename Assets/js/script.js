// Questions
var quest = document.querySelector("#question-text");
var startButton = document.querySelector(".start-button");
var bio = document.querySelector("#bio");
var timeEl = document.querySelector(".time");
var options = document.querySelector(".options");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var scoreDisplay = document.querySelector("score");

var questions = [
  {
    question: "What is the name of the main instructor",
    options: {
      a: "Tom",
      b: "Scott",
      c: "Rachel",
      d: "David"
    },
    correctOption: "d"
  },

  {
    question: "How hard is JavaScript to learn?",
    options: {
      a: "Easy",
      b: "Easy Peazy",
      c: "Correct",
      d: "EZ",
    },
    correctOption: "c"
  },

  {
    question: "What letter does Javascript start with?",
    options: {
      a: "J",
      b: "A",
      c: "V",
      d: "A",
    },
    correctOption: "a"
  },

  {
    question: "What is JavaScript?",
    options: {
      a: "CSS",
      b: "JavaScript",
      c: "HTML",
      d: "No",
    },
    correctOption: "b"
  },

  {
    question: "What letter does Javascript end with?",
    options: {
      a: "S",
      b: "C",
      c: "R",
      d: "T",
    },
    correctOption: "a"
  },
];



var secondsLeft = 60;

var questionIndex = 0;

var score = 0;

var displayQuestion = function() {
  quest.textContent = questions[questionIndex].question
  buttonA.textContent = questions[questionIndex].options.a
  buttonB.textContent = questions[questionIndex].options.b
  buttonC.textContent = questions[questionIndex].options.c
  buttonD.textContent = questions[questionIndex].options.d
}

function startGame() {
  displayQuestion();

  startButton.setAttribute("hidden", true);
  bio.setAttribute("hidden", true);
  options.style="display:block"
  
  startTimer();
}

// get button ???? start function 
function next (event) {
  
  var element = event.target;

  if (element.matches(".button-choice")) {
    var choice = element.id
  }
  
  if (choice === questions[questionIndex].correctOption) {
    score++;
    questionIndex++;
    displayQuestion();

  } else {
    secondsLeft -= 10;
    questionIndex++;
    displayQuestion();
  }


  if (questionIndex === questions.length) {
    endGame();
  }

}



function endGame () {
  options.style="display:none"
}

  // Use an if statement to conditionally render the number on the card
  //if (state === "hidden") {
    // If the card is clicked while the state is "hidden", we set .textContent to the number 
  //  element.textContent = element.dataset.number;
    // Using the dataset property, we change the state to visible because the user can now see the number
   // element.dataset.state = "visible";
 
 // } else {
    // 'Hide' the number by setting .textContent to an empty string
  //  element.textContent= "";
    // Use .setAttribute() method
  //  element.setAttribute("data-state", "hidden")
  // if choice is correctOption
  //if (
  // then go to next question
  // log score = +1

  // if not then -10 from time



function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
      endGame();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "GAME OVER";

}

startButton.addEventListener("click", startGame);

options.addEventListener("click", next);