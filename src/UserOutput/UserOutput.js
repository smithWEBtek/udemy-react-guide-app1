import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Username: {props.username}</p>
      <p>This is the default paragraph.</p>
    </div>
  )
}

export default UserOutput;