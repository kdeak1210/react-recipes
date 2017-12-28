import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CommentForm = ({ handleSubmit, username }) => {
  return(
    <form onSubmit = {handleSubmit} >
      <div>
        <label htmlFor="body">
          <span>commenting as {username}</span>
        </label>
        <Field name="body" component="input" type="text" />
      </div>
      <br />
      <button type="submit">Submit Comment</button>
    </form>
  )
}

export default CommentForm = reduxForm({
  form: 'comment' // a unique name for the form
})(CommentForm);