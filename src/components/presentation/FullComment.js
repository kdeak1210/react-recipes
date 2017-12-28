import React from 'react';
import { Link } from 'react-router-dom';

const FullComment = ({author, body, timestamp}) => {
  return(
    <div style={{border: '1px solid gray', borderRadius: 5, padding: 10, margin: '10px 0px'}}>
      <span>
        <strong><Link to={`/profile/${author}`}>{author}</Link></strong> - {timestamp}
      </span>
      <br />
      <pre>  {body}</pre>
    </div>
  )
}

export default FullComment;