import React, { Component } from 'react';

import PropTypes from 'prop-types';

//输入组件
class CommentInput extends Component{
    static PropTypes={
        onSubmit:PropTypes.func
    }
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }
    componentDidMount(){
        this.textarea.focus()
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    componentWillMount(){
        this._loadUsername()
    }

    _loadUsername(){
        const username =localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }
    


    handleSubmit(){
        //是否传递了onSubmit属性
        //有的话就调用该函数，并且把用户输入的用户名和评论数据传入该函数
        //比较重要  理解
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime: +new Date()
            }) 
        }
        this.setState({content:''});
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}
                        onBlur={this.handleUsernameBlur.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
                        ref={(textarea)=>this.textarea = textarea}
                        value={this.state.content}
                        ></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput;