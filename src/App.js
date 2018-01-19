import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';

class App extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
      isLoggedIn: false,
      users: [
        {
          userName: 'bob',
          password: 'bob'
        },
        {
          userName: 'ana',
          password: 'hey'
        },
      ]
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogin(userName, password) {
    console.log('handleLogin');
    console.log('userName', userName);
    console.log('password', password);
    // check if user is in system
    let { users } = this.state;
    let isUser = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].userName === userName
        && users[i].password === password) {
        alert('Welcome ' + userName + '!');
        this.setState({ isLoggedIn: true });
        isUser = true;
        break;
      }
    }
    if (!isUser) alert('Incorrect credentials!');
  }

  handleSignUp(userName, password) {
    let { users } = this.state;
    users.push({
      userName,
      password
    });
    this.setState({ users });
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ? (
            <div>Welcome!</div>
          ) : (
            <Login
              onLogin={this.handleLogin}
              onSignUp={this.handleSignUp}
            />
          )
        }
      </div>
    );
  }
}

export default App;
