import React, { Component } from 'react';
import { UpdateProfile } from '../containers';

class CurrentUser extends Component {

  render(){
    return(
      <div className="container">
        <div className="col-md-5">
          <UpdateProfile />      
        </div>
        <div className="col-md-7">
          MY RECIPES
        </div>
      </div>
    )
  }
}

export default CurrentUser;