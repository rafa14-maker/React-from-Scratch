import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';
import Blog from './containers/Blog/Blog';


class App extends Component{
 render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

 export default App;
