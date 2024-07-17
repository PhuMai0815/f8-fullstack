const serverApi = `https://2k6zlf-3000.csb.app/question`;
const questions = async () => {
  const response = await fetch(`${serverApi}`);
  const data = await response.json();
  return data;
};
document.addEventListener("DOMContentLoaded", function () {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      loadQuiz(data);
    });

  function loadQuiz(questions) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `<p>${question.question}</p>`;
      const optionsList = document.createElement("ul");
      optionsList.className = "options";
      question.options.forEach((option) => {
        const optionItem = document.createElement("li");
        optionItem.innerHTML = `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `;
        optionsList.appendChild(optionItem);
      });
      questionDiv.appendChild(optionsList);
      quizContainer.appendChild(questionDiv);
    });

    document.getElementById("submit-btn").addEventListener("click", () => {
      submitQuiz(questions);
    });
  }

  function submitQuiz(questions) {
    let score = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === question.answer) {
        score++;
      }
    });
    document.getElementById(
      "result"
    ).innerText = `Your score: ${score}/${questions.length}`;
  }
});
