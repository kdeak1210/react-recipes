import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Profile extends Component{
  
  render(){
    return(
      <div>
        Profile Container for {this.props.username}
      </div>
    )
  }
}

export default Profile