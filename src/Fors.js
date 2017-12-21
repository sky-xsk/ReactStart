import './App.css';

import React from 'react';

class Fors extends React.Component{
    render(){
        const { user } = this.props
        //const user = this.props.user;
        return(
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
};
export default Fors;