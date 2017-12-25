import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

// RENDER THE STEPS
const renderSteps = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Step
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((step, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)}
        >&times;</button>
        <h4>Step #{index + 1}</h4>
        <Field
          name={`${step}.directions`}
          type="text"
          component={renderField}
          label="Directions"
        />
        <Field
          name={`${step}.duration`}
          type="text"
          component={renderField}
          label="Duration"
        />
      </li>
    ))}
  </ul>
)

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field
        name="image"
        type="text"
        component={renderField}
        label="Image (url)"
      />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <FieldArray name="steps" component={renderSteps} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
})(FieldArraysForm)