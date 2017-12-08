import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          change={this.usernameChangedHandler}
          placeholder={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
        <UserOutput
          username="Max"
        />
      </div>
    );
  }
}

export default App;
