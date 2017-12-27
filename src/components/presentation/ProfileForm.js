import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

let ProfileForm = (props) => {
  const { handleSubmit } = props;
  const { website, city, bio } = props.initialValues || {};
  return(
    <form onSubmit={ handleSubmit } style={{background: 'rgba(235, 235, 235, 0.82)', border: '1px solid #ccc', borderRadius: 12, padding: 12}}>
      <div>
        <label htmlFor="website">Website URL</label>
        <Field 
          name="website" 
          component="input" 
          type="text" 
          value={website}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <Field 
          name="city" 
          component="input" 
          type="text" 
          value={city}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <Field 
          name="bio" 
          component="input" 
          type="text"
          value={bio} 
        />
      </div>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  )
}

ProfileForm = reduxForm({
  form: 'profile' // a unique name to identify the form
})(ProfileForm);

ProfileForm = connect(
  state => ({
    initialValues: state.account.user // pull initial values from account reducer
  })
)(ProfileForm)

export default ProfileForm