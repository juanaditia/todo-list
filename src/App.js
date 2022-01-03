import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: '',
      items: [],
    };
  }

  handleRemoveItem = (item) => {
    const data = this.state.items.filter((i) => i.items !== item.items);
    this.setState({ data });
    console.log('delete');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: '',
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <List
          items={this.state.items}
          handleRemoveItem={this.handleRemoveItem}
        />
      </div>
    );
  }
}
export default App;
