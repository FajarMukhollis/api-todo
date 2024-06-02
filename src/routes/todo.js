const express = require("express");
const todoController = require("../controllers/todo");

const router = express.Router();

router.get("/", todoController.getAllTodo);
router.post("/", todoController.createNewTodo);

module.exports = router;
