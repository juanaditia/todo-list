import React from 'react';

function List(props) {
  const { handleRemoveItem } = props;

  // const handleRemoveItem = () => {
  //   console.log('hapus');
  //   alert(
  //     'delet ora bisa angel wis tak goleti nang stack overvllow ora slove ngederi dong bsia bantu chat wa wkowowko'
  //   );
  // };

  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          {' '}
          {item}
          <button onClick={() => handleRemoveItem(item.data)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
export default List;
