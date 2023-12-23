import React from "react";
import classes from './Burger.module.css'
import BurgerIngredient  from "./BurgerIngrediants/BurgerIngrediant";

const burger = (props) => {
   

    let items = Object.keys(props.Items).map(igKey => {
        return [...Array(props.Items[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + 1} type={igKey}>
                
            </BurgerIngredient>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    
    if (items.length == 0) {
        items = (
            <p>Please start adding Ingrediants</p>
        )
    }

    console.log(items);
  

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {items}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;