import React, { Component } from 'react';
import { Account, Feed } from '../containers';
import { Navbar } from '../presentation';

class Home extends Component {
  render(){
    return(
      <div id="page-wrapper">
        
        <Navbar />

        <div id="main-wrapper">
					<div className="wrapper style3">
						<div className="inner">
							<div className="container">
								<div className="row">
									<div className="7u 12u(mobile)">
                      <header className="first major">
												<h2 className="icon fa-file-text-o">Recipe Feed</h2>                        
                        <p>Recently submitted recipes</p>
                      </header>

											<section className="box article-list">

                        <Feed type="public" />

											</section>
									</div>

                  <div className="1u"></div>

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