import BodyChild from './BodyChild';
import React from 'react';

export default class BodyIndex extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            age: 20,
            name:''
        }; //初始化赋值
       
       
    }

    handleChneges(event){
        this.setState({
            age: event.target.value
        })
    }
    handleClick(props){
        this.setState({
            name:props.target.innerHTML
        })
    }
    render(){
        return (
            <div>
                <h2>props</h2>
                <p>{this.props.userId}</p>
                <p>age: {this.state.age}</p>
                <BodyChild userId={this.props.userId}  //传所有 {...this.props}
                 handleChneges={this.handleChneges.bind(this)}
                 handleClick = {this.handleClick.bind(this)}
                />
                <h4>用户名：{this.state.name}</h4>
                
            </div>
        )
    }
}