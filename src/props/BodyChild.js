import React from 'react';

export default class BodyChild extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>props - child</h2>
                <p>{this.props.userId}</p>
            </div>
        )
    }

}