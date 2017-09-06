import React from 'react';

class State1 extends React.Component {
    
render(){
    return(
        <div className='photo'>
           <span>States:{this.props.caption}</span>
        </div>
    );
  }
}
  
export default State1;