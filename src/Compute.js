import './App.css';

import React from 'react';
import Screen from './Screen'

class Compute extends React.Component {
    constructor() {
        super();
        this.state = {
        status: 'off',
        showContent: '显示器关了'
        }
    }
    handleTagger() {
        let sta;
        let content;
        if(this.state.status === 'on') {
            sta = 'off'; 
            content = '显示器关了';
        }
        else {
            sta = 'on'; 
            content = '显示器亮了';
        } 
      this.setState({
        status: sta,
        showContent: content
      })
    }
    render () {
      return (
        <div>
          <button onClick={() => this.handleTagger()}>开关</button>
          <Screen showContent={this.state.showContent} />
        </div>
      )
    }
  }
export default Compute;