import React, { Component } from 'react';
import { ProfileDetail } from '../presentation';
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
          <ProfileDetail 
            username={username}
            email={email}
            city={city}
            gender={gender}
            image={image}
            timestamp={timestamp}
          />
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