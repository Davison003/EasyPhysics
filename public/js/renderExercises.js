import { createExercise } from "./createExercise.js";
import { getExercises } from "./getExercisesFromAPI.js";

// function to render exercises
export const renderExercises = async (exConfigs, simplified) => {
  const exerciseList = document.querySelector(".problemas-container");

  // clearing the exercise list
  while (exerciseList.firstChild)
    exerciseList.removeChild(exerciseList.firstChild);

  // getting the exercises from the api
  const exercises = (await getExercises(exConfigs)).data.exercises;
  // console.log(exercises);

  // creating the elements for the exercises and appending them to the main container
  exercises.forEach((ex) => {
    const exContainer = createExercise(ex, simplified);
    exerciseList.appendChild(exContainer);
  });
};
