// build your `Project` model here
const db = require("../../data/dbConfig");

function getAllProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where("project_id", id).first();
}

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getProjectById(project_id);
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
};
