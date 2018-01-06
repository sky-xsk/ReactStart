import React from 'react';

export default class BodyChild extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'xskasdas'
        }
    }

    render(){
        return (
            <div>
                <h2>props - child子组件传值父组件</h2>
                <h2>{this.props.userId}</h2>
                 <p>子组件输入：
                     <input type="text" onChange={this.props.handleChneges}/>
                 </p>
                 <h4 onClick={this.props.handleClick}>{this.state.name}</h4>
     
            </div>
        )
    }
}