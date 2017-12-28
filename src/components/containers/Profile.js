import React, { Component } from 'react';
import { FullProfile } from '../presentation';
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
    const { username, email, city, website, image, bio, timestamp } = profile;
    
    return(
      <div>
        <FullProfile 
          username={username}
          email={email}
          city={city}
          website={website}
          image={image}
          bio={bio}
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