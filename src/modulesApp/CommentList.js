import React, { Component } from 'react';

import Comment from './Comment'
import PropTypes from 'prop-types';

//列表展示组件
class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
      }
    static defaultProps ={
        comments:[]
    }
    handleDeleteComment(index){
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return (
            <div>
                {this.props.comments.map((comment,i)=> <Comment 
                comment={comment} 
                key={i}  
                onDeleteComment={this.handleDeleteComment.bind(this)} 
                />)}
            </div>
        )
    }
}
export default CommentList;