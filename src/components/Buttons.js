import React from 'react'
import '../styles/Buttons.css'

function Buttons(props) {
    return (
        <div className = "buttons">
            <button className = "btn" onClick = {props.saveStorage}>
                <div className = "eff"></div>
            <span>save</span>
            </button>
            <button className = "btn" onClick = {props.clearStorage}>
                <div className = "eff"></div>
            <span>clear</span>
            </button>
        </div>
    )
}
export default Buttons