import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {secondsElapsed: 0};
    }
  
    tick() {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1
      }));
    }
  
    componentDidMount() {
       this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>已经过了: {this.state.secondsElapsed}s</div>
      );
    }
  }
  
export default Timer;