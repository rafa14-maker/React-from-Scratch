import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person'
import { Component } from 'react';


class App extends Component{

  state = {
    persons: [
      { name : 'Max' , age : '28'},
      { name : 'Manu' , age : '29'},
      { name : 'Stephine' , age : '26'},
    ],
    otherState: 'some value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name : newName , age : '28'},
      { name : 'Manu' , age : '29'},
      { name : 'Stephine' , age : '27'},
      ]
    })
  }

  nameChangedHandler = (event) => {
     this.setState({
      persons: [
        { name : 'Max' , age : '28'},
         { name: event.target.value , age : '29'},
      { name : 'Stephine' , age : '26'},
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
       <div className='App'>
       <h1>Hi , I am React App</h1>
       <p>This is working too </p>
       <button style={style} onClick={this.switchNameHandler.bind(this,"maximilian")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          
       </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'maxi')} changed={this.nameChangedHandler}>
          My Hobbies : Racing 
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>

        </Person>
        </div>
    )
  }
}

 export default App;


// const app = (props) =>{

//  const [personState , setPersonsState] =  useState({
//     persons: [
//       { name: 'Max', age: '28' },
//       { name: 'Manu', age: '29' },
//       { name: 'Stephine', age: '26' },
//     ],
//     otherState: 'some value'
//   });

//  const  switchNameHandler = () => {
//    setPersonsState({
//       persons: [
//         { name : 'Maximilan' , age : '28'},
//       { name : 'Manu' , age : '29'},
//       { name : 'Stephine' , age : '27'},
//      ],
//      otherState : personState.otherState
//     })
//   }

//     return (
//       <div className='App'>
//         <h1>Hi , I am React App</h1>
//         <p>This is working too </p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
//          <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
//           </div>
//     );
//     // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi , I Am Rafayet'))
// }

// export default app;


// state = {
//     persons: [
//       { name : 'Max' , age : '28'},
//       { name : 'Manu' , age : '29'},
//       { name : 'Stephine' , age : '26'},
//     ],
//     otherState: 'some value'
//   }

  // switchNameHandler = () => {
  //   this.setState({
  //     persons: [
  //       { name : 'Maximilan' , age : '28'},
  //     { name : 'Manu' , age : '29'},
  //     { name : 'Stephine' , age : '27'},
  //     ]
  //   })
  // }