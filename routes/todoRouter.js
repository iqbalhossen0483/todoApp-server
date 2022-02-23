const express = require("express");
const { postTodo, getTodo, deleteTodo, updateTodo, getOneTodo } = require("./todoHandler");

const todoRouter = express.Router();


//post todo
todoRouter.post("/", postTodo);

//get todo
todoRouter.get("/", getTodo);

//update todo
todoRouter.put("/:id", updateTodo);

//get one todo
todoRouter.get("/:id", getOneTodo);

//delete todo
todoRouter.delete("/:id", deleteTodo);


module.exports = todoRouter;