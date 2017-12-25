import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddStep = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="directions">Directions</label>
        <Field name="directions" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="duration">Duration (minutes)</label>
        <Field name="duration" component="input" type="text" />
      </div>
      <button type="submit">Add This Step!</button>
    </form>
  )
}

AddStep = reduxForm({
  // a unique name for the form
  form: 'addStep'
})(AddStep)

export default AddStep;