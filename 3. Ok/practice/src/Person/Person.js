
import './Person.css'
import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!!</p>
            <input type="text" onChange={props.changed} value={props.name} ></input>
       </div>
    )
}

export default Person;