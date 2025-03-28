const express = require("express");
const {getTodos, addTodo} = require("../controllers/todoControllers");

const router = express.Router();

router.get("/get-todo", getTodos)

router.post("/add-todo", addTodo)

module.exports = router;