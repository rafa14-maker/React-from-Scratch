import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import React from 'react';

class App extends Component {

  state = {
    persons: [
      { 'name': 'Rafayet' }
    ]
  }

  NameManipulateHandler = (event) => {
    this.setState({
       persons: [
      { 'name': event.target.value }
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.persons[0].name} changed={this.NameManipulateHandler}></UserInput>
        <UserOutput name={this.state.persons[0].name}></UserOutput>
      </div>
    )
  }
}

export default App;
