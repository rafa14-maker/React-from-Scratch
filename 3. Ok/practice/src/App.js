import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component{

  state = {
    persons : [
      { name: "Rafayet", age: "26" },
      { name: "Karim", age: "47" },
      { name : "Rahim" ,  age : "35"}
    ]
  }

  switchHandler = () => {
    this.setState({
              persons : [
      { name: "fahim", age: "26" },
      { name: "Karim", age: "47" },
      { name : "Rahim" ,  age : "35"}
    ]
        })
  }

  nameChangeHandler = (event) => {
    this.setState({
         persons : [
      { name: "fahim", age: "26" },
      { name: event.target.value, age: "47" },
      { name : "Rahim" ,  age : "35"}
    ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I am React App</h1>
        <p>This is Working too.</p>
        <button onClick={this.switchHandler.bind(this,'Fahim')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangeHandler}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}

export default App;