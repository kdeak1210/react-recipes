import React from 'react';

const FullStep = ({index, duration, directions}) => {
  return(
    <article style={localStyle.article} className="box excerpt" >
      <div style={localStyle.stepBox}>
        <header>
          <h3 style={localStyle.index}>
            <a>{`Step ${index + 1}`}</a>
          </h3>
          <span 
            style={localStyle.duration} 
            className="date"
          >{duration}</span>
        </header>
        <div style={localStyle.clearFloats}></div>
        <p>{directions}</p>
      </div>
    </article>
  )
}

const localStyle = {
  article: {
    marginBottom: 20,
    paddingBottom: 20
  },
  stepBox: {
    background: '#f0f0f0',
    borderRadius: 10,
    padding: 10
  },
  index: {
    float: 'left'
  },
  duration: {
    float: 'right'
  },
  clearFloats: {
    clear: 'both'
  }
}

export default FullStep;