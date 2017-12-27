import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Preview = ({id, author, title, image, description, timestamp}) => {
  return(
    <div>
      <Link to={`/recipe/${id}`} className="image left">
        <img src={image} alt={title} style={{maxHeight: 180, maxWidth: 220}} />
      </Link>
      <div>
        <header>
          <h3><Link to={`/recipe/${id}`} style={{textDecoration: 'underline'}}>{title}</Link></h3>
          <h5>by: <Link to={`/profile/${author}`} style={{textDecoration: 'underline'}}>{author}</Link></h5>
          <span className="date">Submitted: {timestamp}</span>          
        </header>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Preview;