import React, { Component } from 'react';
import { Greeting, Login, Register } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class Account extends Component {

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser() // check user on page refresh/CDM hook
      .then()
      .catch(err => console.log(err.message));
    }
  }

  register(credentials){
    this.props.register(credentials);
  }

  login(credentials){
    this.props.login(credentials)
    .catch(err => {
      alert(err);
    });
  }

  logout(){
    console.log('Logout!');
    this.props.logout();
  }

  render(){
    const { user } = this.props;

    return(
      <div>
        { (user == null)
          ? [
            <Register key='register' onRegister={this.register.bind(this)}/>,
            <Login key='login' onLogin={this.login.bind(this)}/>            
          ]
          : <Greeting username={user.username} onLogout={this.logout.bind(this)}/>
        }   
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user  // can be null
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    login: (credentials) => dispatch(actions.login(credentials)),
    logout: () => dispatch(actions.logout()),
    register: (credentials) => dispatch(actions.register(credentials))
  }
}

export default connect(stateToProps, dispatchToProps)(Account);