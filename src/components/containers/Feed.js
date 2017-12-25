import React, { Component } from 'react';
import { Preview } from '../presentation';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Feed extends Component {

  componentDidMount(){
    console.log('CDM - FEED');
    this.props.fetchProfiles();
  }

  render(){

    const profiles = this.props.profile.all || [];

    return(
      <div>
        <h4>FEED (list of profiles)</h4>
        <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
        { profiles.map((user, i) => {
          return (
            <li key={user.id}>
              <Preview username={user.username} email={user.email} timestamp={user.timestamp} />
            </li>
          )
        })}
        </ul>         
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
    fetchProfiles: () => dispatch(actions.fetchProfiles())
  }
}

export default connect(stateToProps, dispatchToProps)(Feed);