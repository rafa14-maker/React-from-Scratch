import React from "react";
import './Char.css'

const Char = (props) => {
    return (
        <div className="Char">
            <p onClick={props.deleted}>The Character is {props.value}</p>
        </div>
    )
}

export default Char;