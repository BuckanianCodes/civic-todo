const Todo = require("../models/todo")

const addTodo = async(req,res) => {
    try {
        const newTodo = new Todo({
            todoTitle:req.body.todoTitle,
            todoDescription:req.body.todoDescription,
            done:req.body.done
        })
        const savedTodo = await newTodo.save()
        res.status(201).send({message:"Successfully saved",data:savedTodo}) 
    } catch (error) {
        res.status(500).json({mesage:"Error adding todo"}); 
    }

}

const getTodos = async(req,res) => {
    try {
        const todos = await Todo.find({})
        if(todos)
        {
            res.status(200).send(todos);
        }else{
            res.status(404).send({message:"Todos not found!!"})
        }  
    } catch (error) {
        res.status(500).json({mesage:"Error getting todos"}); 
    }

}

const getSingleTodo = async(req,res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findOne({_id:todoId})
        if(todo){
            res.status(200).json(todo)
        }else{
            res.status(404).json({message:"Todo not found"})
        }  
    } catch (error) {
        res.status(500).json({mesage:"Error getting a todo"});  
    }
} 

const updateTodo = async(req,res) => {
    try {
        const todoId = req.params.id;
        
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Please provide some data" });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            { $set: req.body },  
            { new: true, runValidators: true}
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo);

    } catch (error) {
        res.status(500).json({mesage:"Error updating todo values",error:error}); 
    }
}
const deleteTodo = async (req,res) => {
    const todoId = req.params.id;
    try {
        const todo = await Todo.findOne({_id:todoId})
        if(!todo){
            return res.status(404).json({message:"Todo not found"})
        }
        await Todo.findByIdAndDelete(todoId);
        res.status(200).json({message:"Todo deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message:"Error deleting todo",error:error}); 
    }
}

module.exports = {addTodo,getTodos,getSingleTodo,updateTodo,deleteTodo}