import './App.css';

import React, { Component } from 'react';

import Like from './Like';
import Node from './Node';
import Photo from './Photo';
import State from './State';
import State1 from './State1';
import Timer from './Timer';
import Todo from './Todo';

class App extends Component {

  render() {
    return ( 
       <div className="App">
          <p>渲染的文字</p>
            
          <Timer />

          <State name="xsk"/>

          <Todo />

          <State1 caption="china" /> 
         
          <Photo  caption='Hong Kong!'/>

          <Node />

          <Like />

          
       </div>  
    );
  }
}

export default App;
