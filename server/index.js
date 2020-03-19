const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const PORT = 5000


//middleware 
app.use(cors());
app.use(express.json());

//Routes

//create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
         [description])
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }

})

//get all todos
app.get("/todos", async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos)
    } catch (err) {
        console.error(err.message)
    }
})
//get a todo
app.get('/todos/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]) 
        res.json(todo.rows[0])       
    } catch (err) {
        console.error(err.message)
    }
})

//edit a todo

//delete a todo


app.listen(PORT, () => {
    console.log(`server is up at port ${PORT}`)
})