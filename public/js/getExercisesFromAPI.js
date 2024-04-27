export const getExercises = async (configs) => {
  // sort params by difficulty
  //   const configs = { params: { sort: sortDirection } };

  // GET request to api endpoint
  const exercises = await axios.get(`/api/exercises/`, configs);

  return exercises.data;
};
