const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
  const todo = await prisma.todo_list.findMany();
  res.status(200).json({
    message: "Get todo Success!",
    data: todo,
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
  res.status(200).json({
    message: "Get todo by id success!",
    data: todo,
  });
};

//UPDATE TODO
const updateTodo = async (req, res) => {
  const idTodo = req.params.id;
  const dataTodo = req.body;

  const todo = await prisma.todo_list.update({
    where: {
      id: idTodo,
    },
    data: {
      title: dataTodo.title,
      type_todo: dataTodo.type_todo,
      description: dataTodo.description,
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