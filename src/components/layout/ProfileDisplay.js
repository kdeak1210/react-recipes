import React, { Component } from 'react';
import { ProfileDetail, Feed } from '../containers';

class ProfileDisplay extends Component {

  render(){
    const { username } = this.props.match.params;
    return(
      <div className="row">
        <div className="col-md-5">
          <ProfileDetail username={username}/>
        </div>
        <div className="col-md-7">
          <Feed type="user" username={ username }/>
        </div>
      </div>
    )
  }
}

export default ProfileDisplay;