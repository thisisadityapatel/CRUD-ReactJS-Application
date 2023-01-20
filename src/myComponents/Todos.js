import React from 'react'
import TodoItem from '../TodoItem'

export default function Todos(props) {
  return (
    <div className="container">
        <h3 className="mt-5">Tasks Listings</h3>
        <hr/>
        <div className="taskListings">
            {props.todos.length === 0 ? <div className="text-center h4 text-secondary">No Task's Added</div> : 
            props.todos.map((todo) => {
                return (<TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} onComplete={props.onComplete}/>)
            })}
        </div>
    </div>
  )
}
