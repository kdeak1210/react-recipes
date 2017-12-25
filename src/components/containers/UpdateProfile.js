import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import actions from '../../actions';

class UpdateProfile extends Component {

  constructor(){
    super();
    this.state = {
      updated: {}
    }
  }

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser()
    }
  }

  updateCurrentUser(field, event){
    //console.log('updateCurrentUser: ' + field + ' - ' + event.target.value);
    let updatedProfile = Object.assign({}, this.state.updated);
    updatedProfile[field] = event.target.value;
    this.setState({
      updated: updatedProfile
    });
  }

  uploadImage(files){
    const image = files[0];
    console.log(image);
  }

  updateProfile(){
    console.log('Update Profile: ' + JSON.stringify(this.state.updated))
    if (Object.keys(this.state.updated).length == 0){
      alert('No Changes Made...');
      return;
    }

    this.props.updateProfile(this.props.user, this.state.updated);
  }
  
  render(){
    const currentUser = this.props.user || {};

    return(
      <div className="col-md-offset-4 col-md-4">
        <h2>Welcome {currentUser.username}</h2>
        <p>Feel free to update your information below</p>
        <input 
          type="text" 
          onChange={this.updateCurrentUser.bind(this, 'username')}
          className="form-control"          
          defaultValue={currentUser.username}
          placeholder="Username"
        /><br />
        <input 
          type="text" 
          onChange={this.updateCurrentUser.bind(this, 'city')}
          className="form-control"          
          defaultValue={currentUser.city}
          placeholder="City"
        /><br />
        <input 
          type="text" 
          onChange={this.updateCurrentUser.bind(this, 'gender')}
          className="form-control"
          defaultValue={currentUser.gender}
          placeholder="Gender"
        /><br />      
        <Dropzone onDrop={this.uploadImage.bind(this)} style={{border:'none'}}>
          <button className="btn btn-warning btn-block">Upload Image</button>
        </Dropzone>
        <br />
        <button onClick={this.updateProfile.bind(this)} className="btn btn-success btn-block">
          Update Profile
        </button>
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