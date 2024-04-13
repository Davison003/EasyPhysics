"use strict";
const exerciseController = require("../../controllers/exerciseController");

function sortByDifficultyAsc() {
  window.location.assign("/exercises/sort=difficulty");
}

function sortByDifficultyDesc() {
  window.location.assign("/exercises/sort=-difficulty");
}
