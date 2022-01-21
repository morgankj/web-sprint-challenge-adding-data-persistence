// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAllTasks() {
  let tasks = await db("tasks");
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
    createTask
};
