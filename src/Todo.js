import React from 'react';

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {items: [], text: ''};
    }
  
    render() {
      return (
        <div>
          <h3>TodoList</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button>{'添加任务 #' + (this.state.items.length)}</button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({text: e.target.value});
    }
    
    handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {
            this.props.items.map(item => (
                <li key={item.id}>{item.text} </li>
            ))
          }
        </ul>
      );
    }
  }

export default Todo;