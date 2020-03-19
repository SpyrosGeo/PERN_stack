import React, { Fragment, useState, useEffect } from 'react'

export default function ListTodo() {

    const [todos, setTodos] = useState([])
    //get all todos
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json()
            setTodos(jsonData.rows)
        } catch (err) {
            console.error(err.message)
        }
    }

    //delete specific todo
    const deleteTodo = async(id)=>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            console.log(deleteTodo)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [todos])

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*  <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {
                        todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><button  style={{ background: "none", border: "none", outline: "none" }}><i style={{ color: "#34c3eb" }} className="fas fa-edit"></i></button></td>
                                <td><button onClick={() => deleteTodo(todo.todo_id)} style={{ background: "none", border: "none", outline: "none" }}><i style={{ color: "red" }} className="fas fa-times"></i></button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </Fragment>
    )
}
