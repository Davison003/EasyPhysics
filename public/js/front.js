"use strict";
const fs = require("fs");
const exerciseController = require("../../controllers/exerciseController");
const replaceTemplate = require("./replaceTemplate");

const tempHome = fs.readFileSync(
  `${__dirname}/../public/ProtoFront.html`,
  "utf-8"
);

const tempCard = fs.readFileSync(`${__dirname}/../public/card.html`, "utf-8");

const ascBt = document.getElementById("ascBt");
ascBt.addEventListener("click", () => {
  fetch("/api/exercises/?sort=difficulty,name", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

document.body.onload = () => {
  //   const exerciseList = document.getElementById("problemas-container");
  exerciseController.getAllExercises().then((data) => {
    console.log(data);

    const cardsHtml = data.map((el) => replaceTemplate(tempCard, el).join(""));
    const output = tempHome.replaceTemplate("{%EXERCISE_CARDS%}", cardsHtml);

    // data.forEach((exercise) => {
    //   exerciseList.innerHTML += replaceTemplate(tempCard, exercise);
    // });
  });
};
