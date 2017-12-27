import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ProfileForm = (props) => {
  const { handleSubmit } = props;
  const { website, city, bio } = props.profile;
  return(
    <form onSubmit={ handleSubmit } style={{background: 'rgba(235, 235, 235, 0.82)', border: '1px solid #ccc', borderRadius: 12, padding: 12}}>
      <div>
        <label htmlFor="website">Website URL</label>
        <Field 
          name="website" 
          component="input" 
          type="text" 
          placeholder={website}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <Field 
          name="city" 
          component="input" 
          type="text" 
          placeholder={city}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <Field 
          name="bio" 
          component="input" 
          type="text"
          placeholder={bio} 
        />
      </div>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  )
}

export default ProfileForm = reduxForm({
  form: 'profile' // a unique name to identify the form
})(ProfileForm);