import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Greeting extends Component {
  render(){
    return(
      <div>
        <h3>Hello {this.props.username}!</h3>
        <Link to="/currentuser">
          <button className="btn btn-warning" style={{marginRight: '10px'}}>
            Manage Profile
          </button>
        </Link>
        <button onClick={this.props.onLogout} className="btn btn-danger" >
          Logout
        </button>
      </div>
    )
  }
}

Greeting.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default Greeting;