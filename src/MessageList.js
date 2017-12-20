import React, { Component } from 'react';

import Message from './Message';

class MessageList extends Component{
    state={
        messages:[
            {
                status:'read1',
                content:'i will be traveling soon!'
            }, {
                status:'read2',
                content:'i will be traveling soon!'
            }, {
                status:'read3',
                content:'i will be traveling soon!'
            }, {
                status:'read4',
                content:'i will be traveling soon!'
            },
        ]
    }
    render(){
        var Messagesl = this.state.messages.map(function(messages,index){
            return (
                <Message key={index} messages={messages}/>
            )
        });
        return(
            <div>
                <h1>list of message</h1>
                {Messagesl}
            </div>
        ) 
    }
}
export default MessageList;