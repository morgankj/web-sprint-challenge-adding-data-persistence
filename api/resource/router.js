// build your `/api/resources` router here
const express = require("express");
const router = express.Router();

const Resource = require("./model");

router.post("/", (req, res, next) => {
  Resource.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Resource.getAllResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;
