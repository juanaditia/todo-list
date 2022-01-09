import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Inputs from './Inputs';

class App extends Component {
  state = {
    todoItem: '',
    items: [],
    id: 0,
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
    console.log('coba');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   items: [...this.state.items, this.state.todoItem],
    //   todoItem: '',
    // });

    const newItems = {
      id: Date.now(),
      todoItem: this.state.todoItem,
    };
    const inputItems = [newItems, ...this.state.items];

    this.setState({
      items: inputItems,
      todoItem: '',
      id: 0,
    });

    console.log('masuk');
  };

  handleRemoveItem = (data) => {
    const filteredItems = this.state.items.filter((item) => item.data !== data);

    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <div>
        <Inputs
          items={this.state.items}
          todoItems={this.state.todoItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleRemoveItem={this.handleRemoveItem}
        />
      </div>
    );
  }
}
export default App;
