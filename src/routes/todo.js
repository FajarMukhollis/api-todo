const express = require("express");
const todoController = require("../controllers/todo");

const router = express.Router();

//CREATE TOTO
router.post("/", todoController.createNewTodo);

//READ TODO
router.get("/", todoController.getAllTodo);

//READ TODO BY ID
router.get("/:id", todoController.getTodoById);


//UPDATE TODO
router.put("/:id", todoController.updateTodo);


//DELETE TODO
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
