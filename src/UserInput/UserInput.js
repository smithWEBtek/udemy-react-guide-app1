import React from 'react';

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
    backgroundColor: 'white',
    font: 'inherit',
    padding: '8px', 
    cursor: 'pointer'
  }

  return (
    <div>
      <input
        style={inputStyle} 
        type="text"
        onChange={props.change}
        value={props.placeholder}
      />
    </div>
  )
}

export default UserInput;