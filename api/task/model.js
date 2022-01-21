// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAllTasks() {
  let tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  tasks.forEach((task) => {
    task.task_completed === 0 || !task.task_completed
      ? (task.task_completed = false)
      : (task.task_completed = true);
  });
  console.log(tasks);
  return tasks;
}

async function getTaskById(id) {
  let task = await db("tasks").where("task_id", id).first();
  task.task_completed === 0 || !task.task_completed
    ? (task.task_completed = false)
    : (task.task_completed = true);
  return task;
}

async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTaskById(task_id);
}

module.exports = {
  getAllTasks,
  createTask,
};
