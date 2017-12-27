import React, { Component } from 'react';
import { ProfileForm } from '../presentation';
//import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import actions from '../../actions';
import swal from 'sweetalert2';

class UpdateProfile extends Component {

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser()
      .catch(err => console.log(err.message));      
    }
  }

  updateProfile(updated){
    // console.log('Update Profile: ' + JSON.stringify(updated))
    // if (Object.keys(updated).length == 0){
    //   alert('You didn\'t make any changes!');
    //   return;
    // }

    this.props.updateProfile(this.props.user.id, updated)
    .then(response => {
      swal('Congrats', 'Successfully updated your profile!', 'success')
    })
    .catch(err => swal('Oops..', err.message, 'error'));
  }
  
  render(){
    const currentUser = this.props.user || {};

    return(
      <div>
        <h2>Welcome {currentUser.username}</h2>
        <p>Feel free to update your information below</p>
        <ProfileForm onSubmit={this.updateProfile.bind(this)} profile={currentUser} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    updateProfile: (profile, updated) => dispatch(actions.updateProfile(profile, updated))    
  }
}

export default connect(stateToProps, dispatchToProps)(UpdateProfile);