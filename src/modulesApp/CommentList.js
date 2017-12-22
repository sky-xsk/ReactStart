import React, { Component } from 'react';

import Comment from './Comment'

//列表展示组件
class CommentList extends Component{
    static defaultProps ={
        comments:[]
    }
    render(){
        return (
            <div>
                {this.props.comments.map((comment,i)=> <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}
export default CommentList;