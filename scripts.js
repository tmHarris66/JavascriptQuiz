const quizData = [
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift"],
    answer: 0,
  },
  {
    question: "Which option is used to create a conditional statement?",
    options: ["console.log", "shift", "if", "addEventListener"],
    answer: 1,
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
let currentQ = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQ];

  currentQuestion.options.forEach((options, index) => {
    const optionsButton = document.createElement("button");
    optionsButton.textContent = options;
    optionsButton.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionsButton);
  });
}
loadQuestion();

//forEach loop doesn't see question options
