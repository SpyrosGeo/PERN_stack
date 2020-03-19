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
        res.json(newTodo)
    } catch (err) {
        console.error(err)
    }

})

//get all todos

//get a todo

//edit a todo

//delete a todo


app.listen(PORT, () => {
    console.log(`server is up at port ${PORT}`)
})