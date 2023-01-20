import React from 'react'

export default function TodoItem({todo, onDelete, onComplete}) {
    let localStyling = {
        border: "1px solid black",
        borderRadius : "10px"
    }
    let localStylingComplete = {
      border: "1px solid black",
      borderRadius : "10px",
      backgroundColor: "#99ffbb"
    }
  return (
    <>
      {todo.complete ?  <div className="p-3 m-2" style={localStylingComplete}>
        <h5>{todo.title}</h5>
        <p>
            {todo.desc}
        </p>
        <button className="btn btn-secondary btn-sm mx-1" onClick={() => {onComplete(todo)}}> Mark Incomplete</button>
        <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}}><i className="bi bi-trash"></i> Delete</button>
        <span className='ms-5'><i className="bi bi-check2-circle"></i> Completed</span>
      </div> : 
      <div className="p-3 m-2" style={localStyling}>
        <h5>{todo.title}</h5>
        <p>
            {todo.desc}
        </p>
        <button className="btn btn-success btn-sm mx-1" onClick={() => {onComplete(todo)}}> <i className="bi bi-check-lg"></i> Mark Complete</button>
        <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}}><i className="bi bi-trash"></i> Delete</button>
      </div>}
    </>
  )
}
