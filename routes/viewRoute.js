const express = require("express");
const viewsController = require("../controllers/viewsController");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const overview = fs.readFileSync("../public/index.html", "utf8");

  res.send(overview);
});
// router.post("/", viewsController.getOverview);

// router.get(
//   "/exercises/sort=difficulty",
//   viewsController.sortByDifficultyAsc,
//   viewsController.getOverview
// );

// router.get(
//   "/exercises/sort=-difficulty",
//   viewsController.sortByDifficultyDesc,
//   viewsController.getOverview
// );

module.exports = router;
