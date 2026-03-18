import { questions } from "../Data/dataQuestions";

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let score = 0;
const quizContainer = document.getElementById("quizContainer");

export const startQuiz = () => {
  if (!quizContainer) return;

  quizContainer.innerHTML = "";

  currentQuestion = questions[currentQuestionIndex];

  const quizCard = document.createElement("div");
  quizCard.className = "quiz-card";

  quizCard.innerHTML = `
  <h1>Your score: ${score}</h1>
  <p>${currentQuestion.question}</p>
  <div class="optionsContainer">${currentQuestion.answers
    .map(
      (answer, index) =>
        `<button class="answer-btn" data-index="${index}">${answer}</button>`,
    )
    .join("")}</div>`;
  quizContainer.appendChild(quizCard);
  nextQ();
};

export const nextQ = () => {
  const answerBtns = document.querySelectorAll(".answer-btn");

  answerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedAnswerIndex = Number(
        (btn as HTMLButtonElement).dataset.index,
      );

      if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        score++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        startQuiz();
      } else {
        showResult();
      }
    });
  });
};

export const showResult = () => {
  if (quizContainer) {
    quizContainer.innerHTML = "";
    const resultCard = document.createElement("div");
    resultCard.className = "result-card";
    if (score <= 2) {
      resultCard.innerHTML = `
      <h1>Your total score: ${score}</h1>
      <h2>Youngling</h2>
      <p>Much to learn, you still have.</p>`;
    } else if (score > 2 && score <= 5) {
      resultCard.innerHTML = `
      <h1>Your total score: ${score}</h1>
      <h2>Padawan</h2>
      <p>On the path of the Force, you are.</p>`;
    } else if (score > 5 && score <= 7) {
      resultCard.innerHTML = `
      <h1>Your total score: ${score}</h1>
      <h2>Jedi Knight</h2>
      <p>Strong with the Force, you have become</p>`;
    } else if (score > 7 && score <= 9) {
      resultCard.innerHTML = `
      <h1>Your total score ${score}</h1>
      <h2>Jedi Master</h2>
      <p>Great knowledge of the galaxy, you have.</p>`;
    } else if (score === 10) {
      resultCard.innerHTML = `
      <h1>Your total score: ${score}</h1>
      <h2>Grand Master of the Force</h2>
      <p>Matered the ways of Star Wars, you have.</p>`;
    }
    quizContainer.appendChild(resultCard);
  }
};
