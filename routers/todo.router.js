const express = require('express');

const {addTodo, getTodos, getSingleTodo, updateTodo, deleteTodo} = require('../controllers/todo.controller')

const router = express.Router();

router.post("/add",addTodo)
router.get("/alltodos",getTodos)
router.get("/todo/:id",getSingleTodo)
router.put("/updatetodo/:id",updateTodo)
router.delete("/delete/:id",deleteTodo)


module.exports = router;
