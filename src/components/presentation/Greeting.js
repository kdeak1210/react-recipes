import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  return(
    <div>
      <h3>Hello {props.username}!</h3>
      <Link to="/currentuser">
        <button 
          className="button icon fa-cog" 
          style={{marginRight: '10px'}}>
          Dashboard
        </button>
      </Link>
      <button 
        className="button alt icon fa-arrow-circle-right" 
        onClick={props.onLogout}>
        Logout
      </button>
    </div>
  )
}

Greeting.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default Greeting;