import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RecipeForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="title">Image (url)</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <button type="submit">Submit Your Recipe!</button>
    </form>
  )
}

RecipeForm = reduxForm({
  // a unique name for the form
  form: 'recipe'
})(RecipeForm)

export default RecipeForm;