import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      credentials: {
        username: '',
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

  register(){
    //console.log('Register: ' + JSON.stringify(this.state.credentials));
    this.props.onRegister(this.state.credentials);
  }

  render(){
    return(
      <div style={localStyle.formDiv}>
        <h4>Register</h4>
        <input 
          type="text" 
          className="form-control" 
          onChange={this.updateCredentials.bind(this, 'username')} 
          placeholder="username" />
        <br />
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
          className="btn btn-info btn-block" 
          onClick={this.register.bind(this)}>
          Register
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

Register.propTypes = {
  onRegister: PropTypes.func.isRequired
}

export default Register;