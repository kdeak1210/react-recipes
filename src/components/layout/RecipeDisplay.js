import React from 'react';
import { CommentFeed, Recipe } from '../containers';

const RecipeDisplay = (props) => {
  return(
    <div id="page-wrapper">
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
                    
                    <CommentFeed {...props} />

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