import React, { Component } from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

//整体组件
class CommentApp extends Component{
    constructor(){
        super()
        this.state={
            comments: []
        }
    }

    componentWillMount(){
        this._loadComments();
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    _loadComments(){
        let comments = localStorage.getItem('comments');
        if(comments){
            comments=JSON.parse(comments);
            this.setState({comments})
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    
    handleSubmitComment(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComments(comments)
    }

    handleDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }

    render(){
        return (
            <div className='wrapper'>
                <h3>评论功能实例</h3>
                <CommentInput
                 onSubmit={this.handleSubmitComment.bind(this)}
                 />
                <CommentList comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)} 
                />
            </div>
        )
    }
}
export default CommentApp;

