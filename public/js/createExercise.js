// function to create the exercise elements and append them to the main container
export function createExercise(exerciseObj, simplified) {
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
    "border",
    `data-slug=${exerciseObj.slug}`
  );

  // title for exercise
  const exTitle = document.createElement("h1");
  exTitle.classList.add("text-body-emphasis", "text-center");
  exTitle.textContent = exerciseObj.name;

  // description for exercise
  const exDescription = document.createElement("p");
  exDescription.classList.add("lead", "enunciado");
  exDescription.textContent = exerciseObj.description;

  // creating the alternatives list
  const exAlternatives = document.createElement("ul");
  exAlternatives.classList.add("list-group", "alternatives-list");

  // creating the alternatives list items
  const options = ["a)", "b)", "c)", "d)", "e)"];
  exerciseObj.alternatives.forEach((alternative, index) => {
    const exAlternative = document.createElement("li");
    exAlternative.classList.add("list-group-item", "alternatives", "lead");
    exAlternative.textContent = `${options[index]} ${alternative}`;
    exAlternatives.appendChild(exAlternative);
  });

  // creating the difficulty element for exercise
  const lvls = ["Fácil", "Médio", "Difícil"];
  const exDifficulty = document.createElement("p");
  exDifficulty.classList.add("lead", "dific");
  // changes the diffic number for the respective string
  exDifficulty.textContent = `Dificuldade: ${lvls[exerciseObj.difficulty - 1]}`;

  // creating the parent for the link
  const solveLinkParapragh = document.createElement("p");
  solveLinkParapragh.classList.add(
    "d-grid",
    "d-md-flex",
    "justify-content-end"
  );

  // creating the link for the exercise
  const solveLink = document.createElement("a");
  solveLink.classList.add(
    "link-dark",
    "link-offset-2",
    "link-underline-opacity-25",
    "link-underline-opacity-100-hover"
  );
  solveLink.textContent = "Resolver ↗";
  solveLink.href = `/exercise/${exerciseObj.slug}`; // sets route for the exercise
  solveLinkParapragh.append(solveLink);

  // appending all the elements to the body container
  exBody.append(
    exTitle,
    exDescription,
    simplified ? "" : exAlternatives,
    exDifficulty,
    solveLinkParapragh
  );

  // appending the body container to the parent container
  exContainer.append(exBody);

  return exContainer;
}
