// get the exercise data from the pug dataset
const exercise = JSON.parse(
  document.querySelector(".exercise").dataset.exercise
);

// get the item from localStorage
// it contains the user guess and the correct answer
const solvedExercise =
  JSON.parse(localStorage.getItem(`${exercise.slug}`)) || {};

// is called when the user makes a guess
const checkAnswer = (target) => {
  // gets the last char from class string
  const guessIndex = target.className.slice(-1);

  if (guessIndex == exercise.correctAnswer) {
    target.classList.add("correct");
  } else {
    target.classList.add("false");
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
    })
  );
};

// getting the page's elements
const listAlternatives = document.querySelector(".alternatives-list");
const solveAgainBtn = document.querySelector("#solve-again");

// if localStorage has no key
if (!Object.keys(solvedExercise).length) {
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
  const { guess, correctAnswer } = solvedExercise;

  // styles the correct answer and user guess
  document
    .querySelector(`.alternative-${correctAnswer}`)
    .classList.add("correct");

  if (guess !== correctAnswer) {
    document.querySelector(`.alternative-${guess}`).classList.add("false");
  }

  // enable solve button
  solveAgainBtn.removeAttribute("disabled");

  // if clicked, remove the item from localStorage and reloads page
  solveAgainBtn.addEventListener("click", () => {
    localStorage.removeItem(`${exercise.slug}`);
    location.reload();
  });
}
