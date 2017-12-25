import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Preview extends Component {
  render(){
    return(
      <div style={{background: '#f9f9f9', border: '1px solid black', margin: '10px 0', paddingLeft: '10px'}}>
        <h4>Username: 
          <Link to={`/profile/${this.props.username}`}>
            {this.props.username}
          </Link>
        </h4>
        <p>Email: {this.props.email}</p>
        <p>Time joined: {this.props.timestamp}</p>
      </div>
    )
  }
}

export default Preview;