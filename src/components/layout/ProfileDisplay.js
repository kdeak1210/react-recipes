import React, { Component } from 'react';
import { Profile, Feed } from '../containers';
import { Navbar } from '../presentation';


class ProfileDisplay extends Component {

  render(){
    const { username } = this.props.match.params;
    return(
      <div id="page-wrapper">

        <Navbar />    

        <div id="main-wrapper">
          <div className="wrapper style3">
            <div className="inner">
              <div className="container">
                <div className="row">
                  <div className="4u 12u(mobile)" style={{paddingTop: 0}}>

                    <Profile username={ username }/> 

                  </div>
                  <div className="1u"></div>
                  <div className="7u 12u(mobile)" style={{paddingTop: 0}}>
                    <section className="box article-list">
                      
                      <Feed type="user" username={ username }/>

                    </section>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDisplay;