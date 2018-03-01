import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return(
    <div id="header-wrapper">
      <div className="container">
        <header id="header">
          <div className="inner">
            <h1><Link to="/" id="logo">React RecipeBook</Link></h1>
            <nav id="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  )
}