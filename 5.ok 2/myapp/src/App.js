import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person'
import { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red':'green'};
      color : white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;


      &:hover {
        background-color: ${props => props.alt ? 'salmon':'lightgreen'};
        color : white;
      }

`;

class App extends Component{

  state = {
    persons: [
      { id:'faq1',name : 'Max' , age : '28'},
      { id:'faq2',name : 'Manu' , age : '29'},
      { id:'faq3',name : 'Stephine' , age : '26'},
    ],
    otherState: 'some value',
    showPersons:false,
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name : newName , age : '28'},
  //     { name : 'Manu' , age : '29'},
  //     { name : 'Stephine' , age : '27'},
  //     ]
  //   })
  // }

   deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

     this.setState({
       persons : persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person name={person.name} age={person.age}
              key={person.id}
              changed={(event) =>this.nameChangedHandler(event,person.id)}
            click={() => this.deletePersonHandler(index)}
            >

            </Person>
          })}
          
          </div>
      );
      
      // style.backgroundColor = 'Red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'white',
      // }
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
       <div className='App'>
       <h1>Hi , I am React App</h1>
       <p className={classes.join(' ')}>This is working too </p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
        </div>
    )
  }
}

 export default (App);


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