import React from 'react';

const FullComment = ({author, body, timestamp}) => {
  return(
    <div>
      {author}<br />
      {body}<br />
      {timestamp}<br />      
    </div>
  )
}

export default FullComment;