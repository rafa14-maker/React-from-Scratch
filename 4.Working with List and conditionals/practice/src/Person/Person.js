import React from "react";
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.delete} >Hi , I am {props.name} .I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}></input>
        </div>
    )
}

export default Person;