import './App.css';

import Fors from './Fors';
import React from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]
  
class ForsIndex extends React.Component{
    render(){
        return(
            <div>
               {users.map((user, i) => <Fors key={i} user={user} />)}
            </div>
        )
    }
};
export default ForsIndex;