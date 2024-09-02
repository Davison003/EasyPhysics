// get the exercise data from the pug dataset
const exercise = JSON.parse(
  document.querySelector(".exercise").dataset.exercise
);

// get the item from localStorage
// it contains the user guess and the correct answer
const solvedExercise = JSON.parse(localStorage.getItem(`${exercise.slug}`)) || {
  numGuesses: 0,
};
const score = JSON.parse(localStorage.getItem("score")) || { score: 0 };

// score functionality based on difficulty
let baseScore =
  exercise.difficulty == 1 ? 100 : exercise.difficulty == 2 ? 250 : 500;

// is called when the user makes a guess
const checkAnswer = (target) => {
  // gets the last char from class string
  const guessIndex = target.className.slice(-1);

  if (guessIndex == exercise.correctAnswer) {
    target.classList.add("correct");
    let count = 0;
    while (count < solvedExercise.numGuesses) {
      baseScore /= 2;
      count++;
    }
  } else {
    target.classList.add("false");
    solvedExercise.numGuesses += 1;
    baseScore = 0;
    const correctElement = document.querySelector(
      `.alternative-${exercise.correctAnswer}`
    );
    correctElement.classList.add("correct");
  }

  // saves the user guess and the correct answer to localStorage, using the slug as the key
  localStorage.setItem(
    `${exercise.slug}`,
    JSON.stringify({
      guess: guessIndex,
      correctAnswer: exercise.correctAnswer,
      numGuesses: solvedExercise.numGuesses,
    })
  );

  // saves the score in localStorage in separate key
  localStorage.setItem(
    "score",
    JSON.stringify({ score: score.score + Math.trunc(baseScore) })
  );
};

// getting the page's elements
const listAlternatives = document.querySelector(".alternatives-list");
const solveAgainBtn = document.querySelector("#solve-again");

// if solvedExercise item has no guess key
if (!Object.keys(solvedExercise).includes("guess")) {
  solveAgainBtn.setAttribute("disabled", "disabled");
  listAlternatives.addEventListener("click", function handleClick(evt) {
    // if target is really an 'li' element
    if (evt.target && evt.target.matches("li.list-group-item")) {
      checkAnswer(evt.target);
      this.removeEventListener("click", handleClick);
    }
    location.reload();
  });
} else {
  // enters if there's an item in localStorage
  const { guess, correctAnswer, numGuesses } = solvedExercise;

  // styles the correct answer and user guess
  document
    .querySelector(`.alternative-${correctAnswer}`)
    .classList.add("correct");

  if (guess !== correctAnswer) {
    document.querySelector(`.alternative-${guess}`).classList.add("false");
  }

  // enable solve button
  solveAgainBtn.removeAttribute("disabled");

  // if clicked, clears user guess key and reloads page
  solveAgainBtn.addEventListener("click", () => {
    localStorage.setItem(
      `${exercise.slug}`,
      JSON.stringify({ numGuesses: numGuesses })
    );
    location.reload();
  });
}
