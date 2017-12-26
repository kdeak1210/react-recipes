import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Profile extends Component{
  
  componentDidMount(){
    this.fetchProfile();
  }

  fetchProfile(){
    const { username } = this.props;
    if (this.props.profile[username] != null){
      return;
    }
    
    
    this.props.fetchProfile({username: username})
    .catch(err => console.log(err));
  }

  render(){
    const profile = this.props.profile[this.props.username] || {};    
    const { username, email, city, gender, image, timestamp } = profile;
    
    return(
      <div>
        <ul>
          <li>{username}</li>
          <li>{email}</li>
          <li>{city}</li>
          <li>{gender}</li>
          <li>{timestamp}</li>
        </ul>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProfile: (params) => dispatch(actions.fetchProfile(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Profile)