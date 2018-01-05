import BodyChild from './BodyChild';
import React from 'react';

const defaultProps = {
	username: '这是一个默认的用户名'
};
export default class BodyIndex extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            age: 20,
            name:'',
            username:'asdasd'
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
                <p>username: {this.state.username}</p>
                <BodyChild userId={this.props.userId}  username={this.props.username} //传所有 {...this.props}
                 handleChneges={this.handleChneges.bind(this)}
                 handleClick = {this.handleClick.bind(this)}
                />
                <h4>用户名：{this.state.name}</h4>
                
            </div>
        )
    }
}

// BodyIndex.propTypes = {
// 	userid: React.PropTypes.number.isRequired
// };

BodyIndex.defaultProps = defaultProps