import React, { Component } from "react";
import Aux from '../../HOC/Auxi';
import Burger from "../../Component/Burger/Burger";
import BurgerItems from '../../Component/Burger/BurgerItems/BurgerItems'
import OrderSummary from "../../Component/OrderSummary/OrderSummary";
import Modal from '../../Component/UI/Modal/Modal';
import axios from "../../axios-orders";
import Spinner from '../../Component/UI/Spinner/Spinner';
import withErrorHandler from "../../HOC/WithErrorHandler/WithErrorHandler";

const ItemPrices = {
    salad : 0.25,
    bacon : 0.15,
    cheese : 1.22,
    meat : 0.80,
}

class BurgerBuilder extends Component{


    state = {
       ingredients: null,
        totalPrice: 4,
        perchaseable: true,
        perchasing: false,
        loading : true,
    }

    componentDidMount() {
        axios.get('https://react-my-burger-f2e21-default-rtdb.firebaseio.com/INgredients.json').then(response => {
            this.setState({ ingredients: response.data })
        }).catch(error = {});
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
        //  alert('ok we will continue');
        // this.setState({
        //      perchasing : true,
        // })

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'Rafayet',
                address: {
                    street: 'Teststreet 1',
                    zipcode: '41231',
                    country : 'Germany'
                },
                email:'kpkc@test.com'
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', order).then(
            this.setState({
                loading: false,
                  perchasing: false,
            })
        ).catch(
             this.setState({
                 loading: false,
                   perchasing: false,
            })
        );

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

        let orderSummary = (
        <OrderSummary
                purchaseOk={this.purchaseOkHandle}
                purchaseNotOk={this.purchaseNotOkHandle}
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}>
            </OrderSummary>
        )

        let Burger = (
              <Burger Items={this.state.ingredients}></Burger>
        )

        if (this.state.loading) {
            orderSummary = (
                <Spinner></Spinner>
            )
            Burger = (
                  <Spinner></Spinner>
            )
        }

        return (
            <div>
                <Aux>
                    <h1>Hello</h1>
                    <Modal status={this.state.perchasing}
                       moduleClosed={this.purchaseNotOkHandle} 
                    >
                       {orderSummary}
                    </Modal>
                    {Burger}
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

export default withErrorHandler(BurgerBuilder,axios);