import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm = reduxForm({
  form: 'login' // a unique name for the form  
})(LoginForm)