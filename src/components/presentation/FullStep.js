import React from 'react';

const FullStep = ({index, duration, directions}) => {
  return(
    <article className="box excerpt" style={{marginBottom: 20, paddingBottom: 20}}>
      <div style={{background: '#f0f0f0', borderRadius: 10, padding: 10}}>
        <header>
          <h3 style={{float: 'left'}}><a href="#">{`Step ${index + 1}`}</a></h3>
          <span style={{float: 'right'}} className="date">{duration}</span>
        </header>
        <div style={{clear: 'both'}}></div>
        <p>{directions}</p>
      </div>
    </article>
  )
}

export default FullStep;