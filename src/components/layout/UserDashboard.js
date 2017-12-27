import React, { Component } from 'react';
import { UpdateProfile, CreateRecipe } from '../containers';

class CurrentUser extends Component {

  render(){
    return(
      <div className="container">
        <div className="col-md-5">
          <UpdateProfile />      
        </div>
        <div className="col-md-7">
          <CreateRecipe />
        </div>
      </div>
    )
  }
}

export default CurrentUser;