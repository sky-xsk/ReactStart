import './App.css';

import React, { Component } from 'react';

import B from './B';
import BodyIndex from './props/BodyIndex';
import CommentApp from './modulesApp/CommentApp';
import Compute from './Compute';
import ForsIndex from './ForsIndex';
import Like from './Like';
import Likes from './Likes';
import MessageList from './MessageList';
import Node from './Node';
import Photo from './Photo';
import SeitchButton from './SeitchButton';
import State from './State';
import Timer from './Timer';
import Todo from './Todo';

const Gao = (props)=><h1>{props.children}</h1>;

//小写转大写
const yell = (PassedComponent)=>({children, ...props})=>
  <PassedComponent {...props}>
      {children.toUpperCase()}!
  </PassedComponent>
const Title = (props)=><h1>{props.children}</h1>
const AngryTitle = yell(Title)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {price: 0}
  }
  //给子组件用来传price用的方法
  changePrice(price){
    this.setState({price: price})
  }
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

          <Gao>高阶组件</Gao>

          <AngryTitle>asdasdas</AngryTitle>
          
          <Likes wordings={{likeText:'no',unlikeText:'yes'}} 
          onClick={() => console.log('Click on like button!')}
          />

          <Compute />
          
          <ForsIndex />

          <CommentApp />
          <h1>props传值</h1>
          <BodyIndex userId={1239798989123}/>
  
          
       </div>  
    );
  }
}

export default App;
