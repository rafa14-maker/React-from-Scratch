import React from "react";
import classes from './BurgerItem.module.css';

const burgerItem = (props) => { 
    return (
        <div className={classes.BurgerItem}>
            <p>{props.name}</p>
            <div>
                <button className={classes.Less} onClick={props.Removeless}disabled={props.disable}>Less</button>
                <button className={classes.More} onClick={props.Addmore} >More</button>
            </div>
        </div>
    );
}

export default burgerItem;