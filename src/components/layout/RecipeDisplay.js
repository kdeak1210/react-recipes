import React from 'react';
import { Recipe } from '../containers';
import { Navbar } from '../presentation';

const RecipeDisplay = (props) => {
  return(
    <div id="page-wrapper">

      <Navbar />    

      <div id="main-wrapper">
        <div className="wrapper style3">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="5u 12u(mobile)" style={{paddingTop: 0}}>

                  <Recipe {...props} />

                </div>
                <div className="1u"></div>
                <div className="6u 12u(mobile)" style={{paddingTop: 0}}>
                  <section className="box article-list">
                    
                    TODO: RECIPE COMMENTS FEED

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

export default RecipeDisplay;