import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Preview extends Component {
  render(){
    return(
      <div style={{background: '#f9f9f9', minHeight:'150px', border: '1px solid black', margin: '10px 0', paddingLeft: '10px'}}>
        <img style={{float: 'right', width: '120px', maxHeight: '130px'}} src={this.props.image} />        
        <h4>Title: {this.props.title}</h4>
        <p>Author: {this.props.author}</p>
        <p>Description: {this.props.description}</p>
      </div>
    )
  }
}

export default Preview;