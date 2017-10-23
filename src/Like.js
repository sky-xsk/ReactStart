import React from 'react';

class Like extends React.Component {
   constructor(props) {
       super(props); 
       this.state =  {
           like:false, 
           userInput:''
        }
       this.handleClick = this.handleClick.bind(this); 
      
   }

   handleClick(e) {
      this.setState( {liked: ! this.state.liked }); 
   }

   handleChange(e) {
    this.setState( {userInput:e.target.value }); 
   }

   clearAndFocusInput() {
    this.setState( {userInput:''}, () =>  {
       this.refs.theInput.focus(); 
    }); 
  }

   render() {
      const text = this.state.liked?'like':'haven\'t liked'; 
      return (
            <div>
                <button onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </button>

                <br />

                <button onClick={this.clearAndFocusInput.bind(this)}>Click to Focus and Reset</button>
            
                <input ref="theInput" value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
                
            </div>
          
         )
   }
};
export default Like;