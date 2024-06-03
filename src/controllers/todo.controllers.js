const prisma = require("../db/prisma");

//CREATE TODO
const createNewTodo = async (req, res) => {
  const newTodo = req.body;

  const todo = await prisma.todo_list.create({
    data: {
      title: newTodo.title,
      type_todo: newTodo.type_todo,
      description: newTodo.description,
    },
  });
  res.status(201).json({
    message: "CREATE new todo success!",
    data: todo,
  });
};

//READ ALL TODO
const getAllTodo = async (req, res) => {
  const todos = await prisma.todo_list.findMany();
  res.status(200).json({
    message: "Get todo Success!",
    data: todos,
  });
};

//READ TODO BY ID
const getTodoById = async (req, res) => {
  const idTodo = req.params.id;
  const todo = await prisma.todo_list.findUnique({
    where: {
      id: idTodo,
    },
  });
  if(!todo) {
    res.status(400).json({
      message: "Data not found!",
    });
  }
  res.status(200).send({
    message: "Get todo by id success!",
    data: todo,
  });
};

//UPDATE TODO
const updateTodo = async (req, res) => {
  const idTodo = req.params.id;
  const newDataTodo = req.body;

  const todo = await prisma.todo_list.update({
    where: {
      id: idTodo,
    },
    data: {
      title: newDataTodo.title,
      type_todo: newDataTodo.type_todo,
      description: newDataTodo.description,
      time_changed: new Date(),
    },
  });
  res.status(200).json({
    message: "Update todo success!",
    data: todo,
  });
};

//DELETE TODO
const deleteTodo = async (req, res) => {
  const idTodo = req.params.id;

  await prisma.todo_list.delete({
    where: {
      id: idTodo,
    },
  });
  res.status(200).json({
    message: "Delete todo success!",
  });
};

module.exports = {
  createNewTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};