import React, { Component } from 'react';
import { Account, Feed } from '../containers';

class Home extends Component {
  render(){
    return(
      <div id="page-wrapper">
        <div id="header-wrapper">
          <div className="container">
            <header id="header">
              <div className="inner">
                <h1><a href="#" id="logo">React Recipes</a></h1>
              </div>
            </header>
          </div>
        </div>

        <div id="main-wrapper">
					<div className="wrapper style3">
						<div className="inner">
							<div className="container">
								<div className="row">
									<div className="8u 12u(mobile)">
											<section className="box article-list">
												<h2 className="icon fa-file-text-o">Recent Recipes</h2>

                        <Feed type="public" />

											</section>
									</div>
									<div className="4u 12u(mobile)">

											<section className="box spotlight">
												<h2 className="icon fa-file-text-o">Account</h2>

                          <Account />
													
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

export default Home;

{/* <div classNameName="container">
        <h1>HOME LAYOUT</h1>

        <div classNameName="row">
          <div classNameName="col-md-6">
            <Feed type="public"/>
          </div>
          <div classNameName="col-md-6">
            <Account />
          </div>
        </div>
      </div> */}