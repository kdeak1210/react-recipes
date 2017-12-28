import React from 'react';
import { Link } from 'react-router-dom';

const FullComment = ({author, body, timestamp}) => {
  return(
    <div style={localStyle.commentBox}>
      <strong>
        <Link to={`/profile/${author}`}>{author}</Link>
      </strong> 
      <span style={localStyle.pipe}>|</span>
      {timestamp}
      <br />
      <pre>  {body}</pre>
    </div>
  )
}

const localStyle = {
  commentBox: {
    border: '1px solid gray', 
    borderRadius: 5, 
    padding: 10, 
    margin: '10px 0px'
  },
  pipe: {
    margin: '0px 14px'
  }
}

export default FullComment;