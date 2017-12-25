import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
  }

  updateCredentials(field, event){
    let updatedCredentials = Object.assign({}, this.state.credentials);
    updatedCredentials[field] = event.target.value;
    this.setState({
      credentials: updatedCredentials
    });
  }

  login(){
    //console.log('Login: ' + JSON.stringify(this.state.credentials));
    this.props.onLogin(this.state.credentials);
  }

  render(){
    return(
      <div style={localStyle.formDiv}>
        <h4>Login</h4>
        <input 
          type="text" 
          className="form-control" 
          onChange={this.updateCredentials.bind(this, 'email')} 
          placeholder="email" />
        <br />
        <input 
          type="text" 
          className="form-control" 
          onChange={this.updateCredentials.bind(this, 'password')} 
          placeholder="password" />
        <br />
        <button 
          className="btn btn-success btn-block" 
          onClick={this.login.bind(this)}>
          Login
        </button>
      </div>
    )
  }
}

const localStyle = {
  formDiv: {
    background: '#f9f9f9',
    border: '1px solid black', 
    borderRadius: '18px', 
    padding: '10px', 
    marginBottom: '25px'
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login;