import React from 'react';

//简单的点赞功能
class Likes extends React.Component{
    constructor(){
        super()
        this.state = {isLike:false}
    }
    handleClick(){
        this.setState({
            isLike:!this.state.isLike
        })
    }
    render(){
        const likedText = this.props.likedText || '取消';
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLike ? likedText : unlikedText}
            </button>
        )
    }

}
export default Likes;

