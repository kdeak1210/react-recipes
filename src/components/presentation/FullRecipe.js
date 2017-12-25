import React from 'react';

const FullRecipe = ({author, title, image, description, steps}) => {   
  return(
    <div>
      <img src={image} alt="Pic" style={{maxHeight: '300px'}}/>
      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
      <ol>
      { steps.map((step, i) => {
        return(
          <li key={step._id} style={{background:'#f9f9f9'}}>
            <p>{step.directions}</p>
            <p>Time: {step.duration}</p>
          </li>
        )
      })}
      </ol>
    </div>
  )
}

export default FullRecipe;