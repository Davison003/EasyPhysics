const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getOverview);

router.get(
  "/exercises/sort=difficulty",
  viewsController.sortByDifficultyAsc,
  viewsController.getOverview
);

router.get(
  "/exercises/sort=-difficulty",
  viewsController.sortByDifficultyDesc,
  viewsController.getOverview
);

module.exports = router;
