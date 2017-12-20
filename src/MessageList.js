import React, { Component } from 'react';

import Message from './Message';

class MessageList extends Component{
    state={
        messages:{
            status:'read',
            content:'i will be traveling soon!'
        }
    }
    render(){
        return (
            <div>
                <h1>List of message</h1>
                <Message messages={this.state.messages}/>
            </div>
        )
    }
}

export default MessageList;