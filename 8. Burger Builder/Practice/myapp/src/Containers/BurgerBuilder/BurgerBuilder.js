import React, { Component } from "react";
import Aux from '../../HOC/Auxi';
import Burger from "../../Component/Burger/Burger";
import BurgerItems from '../../Component/Burger/BurgerItems/BurgerItems'
import OrderSummary from "../../Component/OrderSummary/OrderSummary";
import Modal from '../../Component/UI/Modal/Modal'

const ItemPrices = {
    salad : 0.25,
    bacon : 0.15,
    cheese : 1.22,
    meat : 0.80,
}

class BurgerBuilder extends Component{


    state = {
       ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        perchaseable: true,
        perchasing : false,
    }

      AddIngredientsHandler = (type) => {
        const prevState = this.state.ingredients[type];
          const newState = prevState + 1;

          if (newState > 2) {
              return;
          }

          const updated = {
              ...this.state.ingredients
          };
           
          let price = ItemPrices[type];
          let sum = this.state.totalPrice + price;

          updated[type] = newState;
        this.setState({ ingredients : updated , totalPrice : sum });
    }

       RemoveIngredientsHandler = (type) => {
        const prevState = this.state.ingredients[type];
           const newState = prevState - 1;
           if (newState < 0) {
               return;
           }
          const updated = {
              ...this.state.ingredients
           };
           
            let price = ItemPrices[type];
           let sum = this.state.totalPrice - price;

          updated[type] = newState;
        this.setState({ ingredients : updated  , totalPrice : sum});
    }

    purchaseOkHandle = () => {
        this.setState({
             perchasing : true,
        })
    }
   
    purchaseNotOkHandle = () => {
        this.setState({
             perchasing : false,
        })
    }

    purchaseOnGoing = () => { 
        this.setState({
              perchasing : true,
        })
    }



    render() {

        const disableInfo = {
            ...this.state.ingredients
        }
        
        for (let x in disableInfo) {
            disableInfo[x] = disableInfo[x] <= 0;
        }

        return (
            <div>
                <Aux>
                    <h1>Hello</h1>
                    <Modal status={this.state.perchasing}
                       moduleClosed={this.purchaseNotOkHandle} 
                    >
                        <OrderSummary
                            purchaseOk={this.purchaseOkHandle}
                            purchaseNotOk={this.purchaseNotOkHandle}
                            price={this.state.totalPrice}
                            ingredients={this.state.ingredients}></OrderSummary>
                    </Modal>
                    <Burger Items={this.state.ingredients}></Burger>
                    <BurgerItems
                        totalPrice = {this.state.totalPrice}
                        addMore={this.AddIngredientsHandler}
                        removeLess={this.RemoveIngredientsHandler}
                        disable={disableInfo}
                        OrderNow = {this.purchaseOnGoing}
                    ></BurgerItems>
                </Aux>
             </div>
         );
     }
}

export default BurgerBuilder;