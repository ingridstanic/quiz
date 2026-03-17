import { startQuiz } from "./quizUtil";

export const startModule = () => {
  const startContainer = document.getElementById("startContainer");

  if (!startContainer) return;

  startContainer.innerHTML = "";

  const module = document.createElement("div");
  const text = document.createElement("p");
  const startBtn = document.createElement("button");

  startContainer.className = "start-container";
  module.className = "container";
  text.className = "start-text";
  text.innerHTML = "Test your knowledge, you must. Ready, are you?";
  startBtn.className = "start-btn";
  startBtn.innerHTML = "Begin, you will";
  startBtn.addEventListener("click", () => {
    startQuiz();
    startContainer.innerHTML = "";
  });

  module.appendChild(text);
  module.appendChild(startBtn);

  startContainer.appendChild(module);
};
