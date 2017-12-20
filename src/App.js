import './App.css';

import React, { Component } from 'react';

import B from './B';
import Like from './Like';
import MessageList from './MessageList';
import Node from './Node';
import Photo from './Photo';
import SeitchButton from './SeitchButton';
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
          
          <Photo  caption='Hong Kong!'/>

          <Node />

          <Like />
          
          <B />

          <SeitchButton />
          
          <MessageList />
       </div>  
    );
  }
}

export default App;
