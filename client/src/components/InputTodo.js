import React, { Fragment, useState } from 'react'

export default function InputTodo() {
    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(response)
        } catch (err) {
            console.error(err.message)

        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    className="form-control mr-1"
                    placeholder="Add todo..."
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-primary"  >add</button>
            </form>
        </Fragment>

    )
}
