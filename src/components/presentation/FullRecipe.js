import React from 'react';
import { Link } from 'react-router-dom';

const FullRecipe = ({author, title, image, description, steps, timestamp}) => {   
  return(
    <section>
      <header>
        <h2>{title}</h2>       
      </header>
      <a className="image featured">
        <img 
          src={ (image) ? image : '/images/NoRecipePhoto.jpg'} 
          alt={`${title} recipe image`} 
          style={{maxHeight: 300, borderRadius: 15}}
        />
      </a>
      <header>
        <p><strong>Submitted By: </strong>
          <Link to={`/profile/${author}`}>{author}</Link>
        </p>
        <p>{timestamp}</p>
      </header>

      <section className="box article-list">
        <h2>Recipe Steps</h2>
        { steps.map((step, index) => {
          return(
            <article key={step._id} className="box excerpt">
              <div>
                <header>
                  <h3><a href="#">{`Step ${index + 1}`}</a></h3>
                  <span className="date">{step.duration}</span>
                </header>
                <p>{step.directions}</p>
              </div>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default FullRecipe;