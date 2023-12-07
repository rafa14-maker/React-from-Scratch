import React from "react";
import './Text.css'

const Text = (props) => {
    return (
        <div className="Text">
            <input type="text" onChange={props.changed}></input>
            <p>Entered Text : {props.name}</p>
            <p>The Text Lenght is {props.len}</p>
        </div>
    )
}

export default Text;