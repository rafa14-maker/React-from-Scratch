import React, { Component } from "react";
import classes from './BurgerItems.module.css';
import BurgerItem from "./BurgerItem/BurgerItem";

const BurgerItems = (props) => {

   const Items = [
        { Label: "Salad", type : "salad"},
        {  Label: "Bacon", type : "bacon"},
        { Label: "Cheese", type : "cheese"},
        { Label: "Meat", type : "meat"},
   ]

    return (
        <div className={classes.BurgerItems}>
            <h1>Total Price = { props.totalPrice.toFixed(2) }</h1>
            {
                Items.map(it => (
                    <BurgerItem
                        key={it.Label}
                        name={it.Label}
                        Addmore={() => props.addMore(it.type)}
                        Removeless={() => props.removeLess(it.type)}
                        disable={props.disable[it.type]}
                    ></BurgerItem>
                  ))
            }
             
            <button className={classes.Orderbutton} onClick={props.OrderNow}>Order Now</button>
            
            </div>
    );
}

export default BurgerItems;