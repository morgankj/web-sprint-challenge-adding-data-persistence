// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  Project.createProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Project.getAllProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
