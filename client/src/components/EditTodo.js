import React, { useState } from 'react'


export default function EditTodo({ todo }) {
    const [description, setDescription] = useState(todo.description)




    const updateDescription = async(e)=>{
        e.preventDefault()
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
            
        }
    }
    return (
        <div>
            <button data-toggle="modal" data-target={`#id${todo.todo_id}`} style={{ background: "none", border: "none", outline: "none" }}><i style={{ color: "#34c3eb" }} className="fas fa-edit"></i></button>
            <div className="modal" id={`id${todo.todo_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <input 
                                onChange={e => setDescription(e.target.value)} 
                                className="form-control" 
                                value={description} type="text" />
                        </div>
                        <div className="d-flex text-center">
                            <div className="modal-footer">
                                <button
                                    onClick={ e => updateDescription(e)} 
                                    type="button" 
                                    className="btn btn-success"
                                    data-dismiss="modal">Edit</button>
                            </div>
                    
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
