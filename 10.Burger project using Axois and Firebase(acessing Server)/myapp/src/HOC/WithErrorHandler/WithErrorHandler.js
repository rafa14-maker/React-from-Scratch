import React, { Component } from "react";

import Modal from '../../Component/UI/Modal/Modal';

import Aux from "../Auxi";

const withErrorHandler = (WrappedComponent , axios) => {
    return class extends Component {


        state = {
            error : null
        }

        componentDidMount() {

            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })

            axios.interceptors.response.use(null, error => {
                this.setState({ error: error });
            })
        }
       
        errorConfirmedHandler = () => {
            this.setState({error : null})
        }


        render() {
             return (
            <Aux>
                     <Modal show={this.state.error}
                         clicked={this.errorConfirmedHandler}
                     >
                         {this.state.error.message}
                    Something didnt work!!!!
                </Modal>
                <WrappedComponent{...this.props}  ></WrappedComponent>
            </Aux>
        )   
        }
    }
}

export default withErrorHandler;