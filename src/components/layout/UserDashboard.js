import React, { Component } from 'react';
import { UpdateProfile, CreateRecipe } from '../containers';
import { Navbar } from '../presentation';

class CurrentUser extends Component {

  render(){
    return(
      <div id="page-wrapper">

        <Navbar />    

        <div id="main-wrapper">
          <div className="wrapper style3">
            <div className="inner">
              <div className="container">
                <div className="row">
                  <div className="5u 12u(mobile)" style={{paddingTop: 0}}>

                    <UpdateProfile />

                  </div>
                  <div className="1u"></div>
                  <div className="6u 12u(mobile)" style={{paddingTop: 0}}>
                    <section className="box article-list">
                      
                      <CreateRecipe />

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

export default CurrentUser;