import './App.css';
import { Component } from 'react'; 
import Person from './Person/Person'

class App extends Component{

  state = {
    persons: [
      { id: 'faq1', name: 'Rafayet' , age : '25'},
      { id: 'faq2', name: 'Fahim' , age : '26'},
      { id: 'faq3', name: 'Hossain' , age : '27'},
    ],
    visible : false,
  }

  toggoleHandler = () => {
    this.setState({
        visible :  !this.state.visible
      })
  }

  nameChangeHandler = (event , id) => {
    
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

  nameDeleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

      const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let Persons = false;

    if (this.state.visible) {
      Persons = (
        <div>
         
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                delete={() => this.nameDeleteHandler(index)}
                >

                </Person>
              )
            })
          }
          
        </div>
      )
  
    }

    return (
      <div className='App'>
        <h1>Hi , I am React App</h1>
        <button style={style} onClick={this.toggoleHandler}>Toggle Person</button>

        {Persons}

     </div> 
    )
  }
}

export default App;
