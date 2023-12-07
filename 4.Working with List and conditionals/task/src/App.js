import './App.css';
import { Component } from 'react';
import Text from './Text/Text';
import Char from './Char/Char';

class App extends Component{

  state = {
    length: [
      {
        len: '0',
        value : ['k','k'],
      }
    ],
    visible: false,
  }

  stringLengthHandler = (event) => {
    const size = event.target.value.length;
    const value = [...event.target.value];
    this.setState({
       length: [
        {
          len: size,
          value: value,
        }
    ]
    })
  }

  charDeleteHandler = (value) => {
    const str = this.state.length[0].value.filter(p => p != value);

     this.setState({
       length: [
        {
           len: str.length,
           value: str,
        }
    ]
    })

  }

  // convertValueToString = (e) =>{
  //   console.log("ok");
  //   return e;
  // }

  render() {

    let charlist = false;

    if (this.state.length[0].value.length > 0) {
      const characterList = [...this.state.length[0].value];
      charlist = (
        <div>
          {
            characterList.map(p => {
              return (
                 <Char deleted={() =>this.charDeleteHandler(p)} value={p}></Char>
              )
            })
            }
        </div>
        )
    }

    return (
      <div className='App'>
        <h1>Let's go</h1>
        
        <Text name={this.state.length[0].value} changed={(event)=>this.stringLengthHandler(event)} len={this.state.length[0].len}></Text>
        
        {charlist}

      </div>
    )
  }
}

export default App;
