import React, { Component } from 'react';
import { UpdateProfile } from '../containers';

class CurrentUser extends Component {

  render(){
    return(
      <div className="container">
        <UpdateProfile />
      </div>
    )
  }
}

export default CurrentUser;