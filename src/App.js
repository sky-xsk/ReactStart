import './App.css';

import React, { Component } from 'react';

import Remark from './Remark';
import State from './State';
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
           
           <Remark />
     
         
           
       </div>  
    );
  }
}

export default App;
