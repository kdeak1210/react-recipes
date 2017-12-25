import React, { Component } from 'react';
import { Profile, Feed } from '../containers';

class ProfileDisplay extends Component {

  render(){
    const { username } = this.props.match.params;
    return(
      <div className="row">
        <div className="col-md-5">
          <Profile username={username}/>
        </div>
        <div className="col-md-7">
          <Feed />
        </div>
      </div>
    )
  }
}

export default ProfileDisplay;