import React from 'react';
import { Link } from 'react-router-dom';
import { FullStep } from '../presentation';

const FullRecipe = (props) => {
  const { recipe, showDelete, handleDelete } = props;
  const { title, description, image, author, steps, timestamp } = recipe;
  return(
    <section>
      <header>
        <h2 style={{float: 'left'}}>{title}</h2>
        { (showDelete) 
          ? <i 
              onClick={handleDelete}
              style={{float: 'right', color: 'maroon', cursor: 'pointer', marginBottom: 10}} 
              className="fa fa-trash-o fa-3x"></i>
          : ''
        }
      </header>
      <div style={{clear: 'both'}}></div>
      <a className="image featured" style={{marginBottom: 0}}>
        <img 
          src={ (image) ? image : '/images/NoRecipePhoto.jpg'} 
          alt={`${title} recipe image`} 
          style={{maxHeight: 300, borderRadius: 15}}
        />
      </a>
      <header>
        <p><strong>Submitted By: </strong>
          <Link to={`/profile/${author.username}`}>{author.username}</Link>
        </p>
        <p>{timestamp}</p>
      </header>

      <section className="box article-list">
        <h2 style={{marginBottom: 12}}>Recipe Steps</h2>
        { steps.map((step, i) => {
          return(
            <FullStep
              key={step._id}
              index={i}
              duration={step.duration}
              directions={step.directions}
            />
          )
        })}
      </section>
    </section>
  )
}

export default FullRecipe;