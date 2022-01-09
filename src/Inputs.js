import React, { Component } from 'react';

export default class Inputs extends Component {
  render() {
    const { handleRemoveItem, todoItems, handleChange, handleSubmit, items } =
      this.props;

    // const handleRemoveItem = () => {
    //   console.log('hapus');
    //   alert(
    //     'delet ora bisa angel wis tak goleti nang stack overvllow ora slove ngederi dong bsia bantu chat wa wkowowko'
    //   );
    // };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required=" "
            value={todoItems}
            onChange={handleChange}
          />
          <button>Add</button>
        </div>
        <ul>
          {/* {items.map((item) => {
            <li key={item.id}> {item.todoItem} </li>;
          })}
          <button onClick={() => handleRemoveItem(item.data)}>delete</button> */}
          <li>{handleSubmit.todoItem}</li>
        </ul>
      </form>
    );
  }
}
