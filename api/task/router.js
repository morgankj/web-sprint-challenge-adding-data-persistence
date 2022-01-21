// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  Task.createTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Task.getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;
