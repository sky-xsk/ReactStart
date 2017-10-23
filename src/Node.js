import React from 'react';

class Node extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes: [
                {
                id: 1,
                content: "Hello, world!\nBoring.\nBoring.\nBoring."
                },
                {
                id: 2,
                content: "React is awesome.\nSeriously, it's the greatest."
                },
                {
                id: 3,
                content: "Robots are pretty cool.\nRobots are awesome, until they take over."
                },
                {
                id: 4,
                content: "Monkeys.\nWho doesn't love monkeys?"
                }
            ] 
        }
    }

    render(){
        return(
            <ul> 
                <h4>循环遍历</h4>
                {
                    this.state.notes.map(item => (
                        <li key={item.id}>{item.id}:{item.content} </li>
                    ))
                }
            </ul>
        )
    };
};
export default Node;