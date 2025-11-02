const quizData = [
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift"],
    answer: 0,
  },
  {
    question: "Which option is used to create a conditional statement?",
    options: ["console.log", "shift", "if", "addEventListener"],
    answer: 2,
  },
  {
    question: "Which option can be used to create a loop?",
    options: ["while", "const", "return", "let"],
    answer: 0,
  },
  {
    question: "What is the 'const' tag used for in JavaScript?",
    options: [
      "To create a loop",
      "To perform a command when a condition is met",
      "To declare an unchanging variable",
      "To perform arithmetic in a function",
    ],
    answer: 2,
  },
  {
    question: "Which option would increment the integer 'i'?",
    options: ["i+", "i-", "i--", "i++"],
    answer: 3,
  },
];
let currentQ = 0; //Sets Current Question

loadQuestion();
//Displays the question and buttons
function loadQuestion() {
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  const currentQuestion = quizData[currentQ];
  const questionText = document.createElement("p");
  questionText.textContent = currentQuestion.question;
  questionContainer.appendChild(questionText);

  //Create and display buttons
  currentQuestion.options.forEach((options, index) => {
    const optionsButton = document.createElement("button");
    optionsButton.className = "optionsButton";
    optionsButton.textContent = options;
    optionsButton.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionsButton);
  });
}
let score = 0;
//Disable all option buttons when one is clicked
function selectOption(selectedIndex) {
  const disableButton = document.getElementsByClassName("optionsButton");
  const correctIndex = quizData[currentQ].answer;
  for (let i = 0; i < disableButton.length; i++) {
    disableButton[i].disabled = true;
    if (selectedIndex === correctIndex) {
      disableButton[selectedIndex].style.backgroundColor = "green";
    } else {
      disableButton[selectedIndex].style.backgroundColor = "red";
      disableButton[correctIndex].style.backgroundColor = "green";
    }
  }
  if (selectedIndex === correctIndex) {
    score++;
  }
  if (currentQ === quizData.length - 1) {
    nextQuestionButton.style.display = "flex";
    nextQuestionButton.textContent = "Submit Quiz";
    nextQuestionButton.addEventListener("click", () => restartQuiz());
  } else {
    nextQuestionButton.style.display = "flex";
    nextQuestionButton.textContent = "Next Question";
  }

  currentQ++;
}
const nextQuestionButton = document.getElementById("nextButton");
function nextButtonClick() {
  nextQuestionButton.addEventListener("click", loadQuestion);
}
nextButtonClick();
function restartQuiz() {
  questionContainer.textContent = `You scored: ${score}/5`;
  nextQuestionButton.innerHTML = "Restart Quiz?";
  nextQuestionButton.addEventListener("click", () => resetScore());
}
function resetScore() {
  score = 0;
  if (currentQ === quizData.length - 1) {
    currentQ = 0;

    questionContainer.textContent = "";
    nextQuestionButton.textContent = "";
    loadQuestion();
  } else {
    loadQuestion();
  }
}
//Need to figure out how to display questions once quiz is restarted.
