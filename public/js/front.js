const getExercises = async () => {
  // sort params by difficulty
  const configs = { params: { sort: sortDirection } };
  // GET request to api endpoint
  const exercises = await axios.get(`/api/exercises/`, configs);

  return exercises.data;
};

// create the elements for exercises
const createExercises = (
  title,
  description,
  alternatives,
  answer,
  difficulty
) => {
  // parent container for exercise
  const exContainer = document.createElement("div");
  exContainer.classList.add("container", "my-5");

  // body container for exercise, contains all the info
  const exBody = document.createElement("div");
  exBody.classList.add(
    "p-5",
    "bg-body-tertiary",
    "rounded-3",
    "exercise",
    "border"
  );

  // title for exercise
  const exTitle = document.createElement("h1");
  exTitle.classList.add("text-body-emphasis", "text-center");
  exTitle.textContent = title;

  // description for exercise
  const exDescription = document.createElement("p");
  exDescription.classList.add("lead", "enunciado");
  exDescription.textContent = description;

  // creating the alternatives list
  const exAlternatives = document.createElement("ul");
  exAlternatives.classList.add("list-group", "alternatives-list");

  // creating the alternatives list items
  const options = ["a)", "b)", "c)", "d)", "e)"];
  alternatives.forEach((alternative, index) => {
    const exAlternative = document.createElement("li");
    exAlternative.classList.add(
      "list-group-item",
      "alternatives",
      "lead",
      // if index == correctAnswer, 'correct' class gets added, otherwise, 'false' class added
      index == answer ? "correct" : "false"
    );
    exAlternative.textContent = `${options[index]} ${alternative}`;
    exAlternatives.appendChild(exAlternative);
  });

  // creating the difficulty element for exercise
  const lvls = ["Fácil", "Médio", "Difícil"];
  const exDifficulty = document.createElement("p");
  exDifficulty.classList.add("lead", "dific");
  // changes the diffic number for the respective string
  exDifficulty.textContent = `Dificuldade: ${lvls[difficulty - 1]}`;

  // appending all the elements to the body container
  exBody.append(exTitle, exDescription, exAlternatives, exDifficulty);
  // appending the body container to the parent container
  exContainer.append(exBody);

  return exContainer;
};

// function to render all exercises
const renderExercises = async () => {
  const exerciseList = document.querySelector(".problemas-container");

  // clearing the exercise list
  while (exerciseList.firstChild)
    exerciseList.removeChild(exerciseList.firstChild);

  // getting the exercises from the api
  const exercises = (await getExercises()).data.exercises;
  // console.log(exercises);

  // creating the elements for the exercises and appending them to the main container
  exercises.forEach((ex) => {
    const exContainer = createExercises(
      ex.name,
      ex.description,
      ex.alternatives,
      ex.correctAnswer,
      ex.difficulty
    );
    exerciseList.appendChild(exContainer);
  });
};

// getting buttons for sorting
const ascBt = document.querySelector("#ascBt");
const descBt = document.querySelector("#descBt");

// stardand sorting for 'asc'
let sortDirection = "difficulty";

// event listeners for sorting buttons
ascBt.addEventListener("click", (e) => {
  e.preventDefault();
  sortDirection = "difficulty";
  renderExercises();
});

descBt.addEventListener("click", (e) => {
  e.preventDefault();
  sortDirection = "-difficulty";
  // console.log("hello from desc");
  renderExercises();
});

const questions = document.querySelectorAll(".exercise");

questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    console.log("hello from evtlist");
    this.classList.toggle("border");
  });
});
// rendering exercise list as body loads
document.body.onload = () => {
  renderExercises();
};
