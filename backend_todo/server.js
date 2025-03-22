const express =  require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Todo = require("./Models/todomodel")

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://rsd2898:rsd2898@reacttodo.svvtv.mongodb.net/?retryWrites=true&w=majority&appName=ReactToDo");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}

app.get("/get-todo", async(req,res)=>{
    console.log("Fetching the todos from DB")
    try {
        const todos = await Todo.find();
        console.log("fetched all the todos", todos)
        res.status(200).json(todos)
        
    } catch (error) {
        console.log("Error while fetching the todos", error)
        res.status(500).json({message: "Something went wrong, please try again"})
    }
})

app.post("/add-todo",async (req,res)=>{
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
})

connectDB()
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`)
})