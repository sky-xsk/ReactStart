import BodyChild from './BodyChild';
import React from 'react';

export default class BodyIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>props</h2>
                <p>{this.props.userId}</p>
                <BodyChild userId={this.props.userId}/>
            </div>
        )
    }

}