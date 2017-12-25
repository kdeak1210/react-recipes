import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Preview = ({id, author, title, image, description}) => {
  // const { title, description, author, image } = props
  return(
    <div style={{background: '#f9f9f9', minHeight:'150px', border: '1px solid black', margin: '10px 0', paddingLeft: '10px'}}>
      <img style={{float: 'right', width: '120px', maxHeight: '130px'}} src={image} />        
      <h2><Link to={`/recipe/${id}`}>{title}</Link></h2>
      <p>Author: <Link to={`/profile/${author}`}>{author}</Link></p>
      <p>Description: {description}</p>
    </div>
  )
}

export default Preview;