const Todo = require("../Models/todomodel")
const logger = require("../utils/logger")
exports.getTodos =  async(req,res)=>{
    console.log("Fetching the todos from DB")
    try {
        const todos = await Todo.find();
        logger.info(`fetched all the todos, ${JSON.stringify(todos)}`);
        res.status(200).json(todos)
        
    } catch (error) {
        console.log("Error while fetching the todos", error)
        res.status(500).json({message: "Something went wrong, please try again"})
    }
}

exports.addTodo = async (req,res)=>{

    try {
        
        const title = req.body;
        // console.log("Adding  a new Todo", req.body)
        console.log("Adding  a new Todo", title.todo)
        const newTodo = new Todo({
            title: title.todo
        })
    
        console.log("Adding Todo to DB", newTodo)
        const savedTodo = await newTodo.save()
        console.log("Adding Todo to DB", savedTodo)
    
        res.status(200).json(savedTodo)

    } catch (error) {
        console.log("Error while adding the todos", error)
        res.status(500).json({message: "Something went wrong, please try again"})
    }


   
}

