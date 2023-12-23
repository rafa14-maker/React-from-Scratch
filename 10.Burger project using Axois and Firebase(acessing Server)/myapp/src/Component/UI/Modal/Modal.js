import React, { Component } from "react";
import classes from './Modal.module.css';
import Aux from '../../../HOC/Auxi';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

   
    shouldComponentUpdate(nextProps , nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

    render() {
        return (
            <Aux>
                <BackDrop
                    show={this.props.status}
                    clicked={this.props.moduleClosed}
                ></BackDrop>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.status ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.status ? '1' : '0',
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;