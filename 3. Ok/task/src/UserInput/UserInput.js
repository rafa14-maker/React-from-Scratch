import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" name={props.name} onChange={props.changed}></input>
        </div>
    )
}

export default UserInput;