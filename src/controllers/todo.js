const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllTodo = async (req, res) => {
  const todo = await prisma.todo_list.findMany();
  res.status(200).json({
    message: "Get todo Success!",
    data: todo,
  });
};

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

module.exports = {
  getAllTodo,
  createNewTodo,
};
