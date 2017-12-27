import React, { Component } from 'react';
import { Greeting, LoginForm, RegisterForm } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class Account extends Component {

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser() // check user on page refresh/CDM hook
      .catch(err => console.log(err.message));
    }
  }

  handleRegister(credentials){
    this.props.register(credentials)
    .catch(err => alert(err));
  }

  handleLogin(credentials){    
    this.props.login(credentials)
    .catch(err => alert(err));
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
          ? <article>
              <header>
                <h3><a href="#">Login to Your Account</a></h3>
                <LoginForm onSubmit={this.handleLogin.bind(this)}/>                
              </header>
              <hr /><br />
              <header>
                <h3><a href="#">Or, Register Below!</a></h3>
                <RegisterForm onSubmit={this.handleRegister.bind(this)}/>                
              </header>
            </article>
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