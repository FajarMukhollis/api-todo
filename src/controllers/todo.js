const modelsTodo = require("../models/todo");

//CREATE TODO
const createNewTodo = modelsTodo.createNewTodo;

//READ ALL TODO
const getAllTodo = modelsTodo.getAllTodo;

//READ TODO BY ID
const getTodoById = modelsTodo.getTodoById;

//UPDATE TODO
const updateTodo = modelsTodo.updateTodo;

//DELETE TODO
const deleteTodo = modelsTodo.deleteTodo;

module.exports = {
  createNewTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
