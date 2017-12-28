import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CommentForm = ({ handleSubmit, username }) => {
  return(
    <form onSubmit = {handleSubmit} style={{background: 'rgba(235, 235, 235, 0.82)', border: '1px solid #ccc', borderRadius: 12, padding: 12}}>
      <div>
        <label htmlFor="body">
          <span>commenting as {username}</span>
        </label>
        <Field 
          name="body" 
          component="input" 
          type="text"
          placeholder="Enter your comment here.." 
        />
      </div>
      <br />
      <button type="submit">Submit Comment</button>
    </form>
  )
}

export default CommentForm = reduxForm({
  form: 'comment' // a unique name for the form
})(CommentForm);