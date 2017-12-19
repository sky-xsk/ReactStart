import React from 'react';

class State extends React.Component{
    render(){
        return <div style={{color:'#f60',fontWeight:'bold' }}>Hello,{this.props.name} </div>
    }
};

export default State;