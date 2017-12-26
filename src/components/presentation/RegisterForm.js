import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let RegisterForm = (props) => {
  const { handleSubmit } = props;
  return(
    <form onSubmit={ handleSubmit } style={{border: '1px solid #ccc', padding: 10}}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div><br />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm = reduxForm({
  form: 'register'  // a unique name for the form
})(RegisterForm)