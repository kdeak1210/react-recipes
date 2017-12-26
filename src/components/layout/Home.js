import React, { Component } from 'react';
import { Account, Feed } from '../containers';

class Home extends Component {
  render(){
    return(
      <div className="container">
        <h1>HOME LAYOUT</h1>

        <div className="row">
          <div className="col-md-6">
            <Feed type="public"/>
          </div>
          <div className="col-md-6">
            <Account />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;