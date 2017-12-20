import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Message extends Component{
    render(){
        const messages = this.props.messages
        return (
            <div className="container"> 
                <h3>无状态组件</h3>
                 <p>父子组件 渲染至app.js</p>
                <div > 
                    <span>status: </span> 
                    <span> {messages.status}</span> 
                </div> 
                <div> 
                    <span>message: </span> 
                    <span>{messages.content}</span> 
                </div> 
            </div>
        )
    }
}

Message.PropTypes={
    messages:PropTypes.object.isRequired
}

export default Message;