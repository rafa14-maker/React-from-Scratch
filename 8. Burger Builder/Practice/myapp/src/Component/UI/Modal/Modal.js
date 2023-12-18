import React from "react";
import classes from './Modal.module.css';
import Aux from '../../../HOC/Auxi';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => {
    return (
        <Aux>
            <BackDrop
                show={props.status}
                clicked={props.moduleClosed}
            ></BackDrop>
        <div className={classes.Modal}
            style={{
                transform: props.status ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.status?'1':'0',
           }}
        >
             {props.children}
            </div>
            </Aux>
    );
}

export default modal;