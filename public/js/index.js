import { renderExercises } from "./renderExercises.js";

// getting buttons for sorting
const ascBt = document.querySelector("#ascBt");
const descBt = document.querySelector("#descBt");

// stardand sorting for 'asc'
// let sortDirection = "difficulty";
let exerciseConfigs = { params: { sort: "difficulty" } };

// event listeners for sorting buttons
ascBt.addEventListener("click", (e) => {
  e.preventDefault();
  exerciseConfigs.params.sort = "difficulty,name";
  renderExercises(exerciseConfigs);
});

descBt.addEventListener("click", (e) => {
  e.preventDefault();
  exerciseConfigs.params.sort = "-difficulty,name";
  // console.log("hello from desc");
  renderExercises(exerciseConfigs);
});

// rendering exercise list as body loads
document.body.onload = () => {
  renderExercises();
};
