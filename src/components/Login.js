import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
      password: '',
      userName: '',
    };
  }

  render() {
    return (
      <div
        style={{
          border: '2px solid lightGray',
          margin: '20px auto',
          padding: '10px',
          width: '300px',
        }}
      >
        <input
          autoFocus
          onChange={(e) => {
            this.setState({ userName: e.target.value });
          }}
          placeholder="username or email"
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
          value={this.state.userName}
        />
        <input
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          placeholder="password"
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
          //type="password"
          value={this.state.password}
        />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              let { userName, password } = this.state;
              this.props.onLogin(userName, password);
            }}
          >
            Login
          </button>
        </div>
        <div
          style={{
            textAlign: 'center',
            margin: '10px'
          }}
        >
          <span
            onClick={() => {
              alert('Signed up!');
              let { userName, password } = this.state;
              this.props.onSignUp(userName, password);
            }}
            style={{
              cursor: 'pointer'
            }}
          >
            Sign Up!
          </span>
        </div>

      </div>
    );
  }
}

export default Login;
