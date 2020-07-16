import React from 'react'
import '../styles/DaysTasks.css'

export default function DaysTasks(props){
    const completedTaskStyles = {
        fontStyle : "italic",
        color : "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className = "day-content">
            <div className = "trash-icon" onClick={()=>props.handleDeleteTask(props.task.id)}>
                <i className="fa fa-trash-o"></i>
            </div>
            <input
                type = "checkbox"
                checked = {props.task.completed}
                onChange={()=>props.handleChange(props.task.id)}
            />
            <p style={props.task.completed ? completedTaskStyles:null}>{props.task.text}</p>
        </div>
    )
}