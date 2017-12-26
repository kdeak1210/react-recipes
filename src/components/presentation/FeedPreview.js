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
          <span className="date">Submitted: {timestamp}</span>
          <h3><Link to={`/recipe/${id}`}>{title}</Link></h3>
          <h5><Link to={`/profile/${author}`}>by: {author}</Link></h5>
        </header>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Preview;