import React, { Component } from 'react';

class ProfileInfo extends Component {

  componentDidMount(){
    console.log('CDM: ' + JSON.stringify(this.props));
  }

  render(){
    return(
      <div>
        {this.props.match.params.username}<br />
        ProfileInfo Here!
      </div>
    )
  }
}

export default ProfileInfo;