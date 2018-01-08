import BodyChild from './BodyChild';
import MixinLog from './mixins';
import React from 'react';
import ReactMixin from 'react-mixin';

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
            username:'sdsds'
        }; //初始化赋值  
    }

    handleChneges(event){
        this.setState({
            age: event.target.value
        })
    }
    //生命周期，刚开始挂载
    componentWillMount(){
        
    }
    //挂载完成
    componentDidMount(){
        this.refs.ages.style.color='red';
    }
    
    handleClick(props){
        this.setState({
            name:props.target.innerHTML
        });
      
    }
    render(){
        return (
            <div>
                <h2>props</h2>
                <p>{this.props.userId}</p>
                <p ref="ages">age: {this.state.age}</p>
                <p>username: {this.props.username}</p>
                <BodyChild userId={this.props.userId}  //传所有 {...this.props}
                 handleChneges={this.handleChneges.bind(this)}
                 handleClick = {this.handleClick.bind(this)}
                />
                
                <h4>用户名：{this.state.name}</h4>
                
            </div>
        )
    }
}
//设置传值的类型
BodyIndex.propTypes = {
	userId: React.PropTypes.number.isRequired
};
//设置默认值 
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype, MixinLog);