// build your `Resource` model here
const db = require("../../data/dbConfig");

function getAllResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources").where("resource_id", id).first();
}

async function createResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getResourceById(resource_id);
}

module.exports = {
  getAllResources,
  createResource,
};
