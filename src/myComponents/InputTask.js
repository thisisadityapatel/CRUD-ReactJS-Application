import React from 'react'
import { useState } from 'react';

function InputTask(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const appendTask = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description not added.");
        }
        else{
            props.addTask(title, desc);
            setTitle("");
            setDesc("");
        }  
    }

    return (
        <div className="container">
            <h3 className="">Input Task</h3>
            <hr/>
            <div className="px-5">
            <form onSubmit={appendTask} className="mx-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default InputTask