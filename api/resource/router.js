// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const Resource = require('./model');

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(next);
});



module.exports = router;
